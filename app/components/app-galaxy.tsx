"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";
import { personalProjects } from "../projects/project-data";
import { useLanguage } from "./language";
import "./app-galaxy.css";

type Body = {
  app: number;
  angle: number;
  radius: number;
  size: number;
};

const appIcons: Record<string, string> = {
  "/ProgressClock": "/ProgressClock/icon.png",
  "/Metronome": "/Metronome/icon.jpg",
  "/Cyberbolt": "/Cyberbolt/icon.jpg",
  "/Anomalor": "/Anomalor/icon.png",
};

const apps = personalProjects.map((project) => ({
  ...project,
  name: project.title.split(" - ")[0] ?? project.title,
  icon: appIcons[project.url] ?? project.thumbnail,
}));

type AppItem = (typeof apps)[number];

const bodies: Body[] = [
  { app: 1, angle: 18, radius: 1.0, size: 84 },
  { app: 2, angle: 90, radius: 0.96, size: 72 },
  { app: 0, angle: 162, radius: 1.02, size: 80 },
  { app: 3, angle: 234, radius: 0.98, size: 78 },
  { app: 4, angle: 306, radius: 1.0, size: 76 },
];

const DRAG_THRESHOLD = 7;
const MAX_SPEED = 68;

function hypot(x: number, y: number) {
  return Math.sqrt(x * x + y * y);
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function GalaxyApp({
  app,
  body,
  index,
}: {
  app: AppItem;
  body: Body;
  index: number;
}) {
  const slotRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const grab = useRef({
    active: false,
    moved: false,
    suppressClick: false,
    pointerId: -1,
    startX: 0,
    startY: 0,
    offX: 0,
    offY: 0,
    lastX: 0,
    lastY: 0,
    lastT: 0,
    vx: 0,
    vy: 0,
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    rot: 0,
    token: 0,
  });
  const [airborne, setAirborne] = useState(false);
  const external = !app.url.startsWith("/");

  const paint = useCallback(() => {
    const node = floatRef.current;
    const g = grab.current;
    if (!node) return;
    node.style.left = `${g.x}px`;
    node.style.top = `${g.y}px`;
    node.style.width = `${g.w}px`;
    node.style.height = `${g.h}px`;
    node.style.transform = `rotate(${g.rot}deg)`;
  }, []);

  useLayoutEffect(() => {
    if (airborne) paint();
  }, [airborne, paint]);

  const finish = useCallback(() => {
    grab.current.token += 1;
    grab.current.active = false;
    grab.current.moved = false;
    grab.current.rot = 0;
    setAirborne(false);
  }, []);

  const launch = useCallback(() => {
    const g = grab.current;
    g.token += 1;
    const token = g.token;
    const quiet = reducedMotion();
    let mode: "fly" | "return" =
      quiet || hypot(g.vx, g.vy) < 2.8 ? "return" : "fly";
    const flyUntil =
      performance.now() + Math.min(720, Math.max(280, hypot(g.vx, g.vy) * 16));

    const tick = (now: number) => {
      if (token !== grab.current.token) return;
      const slot = slotRef.current;
      if (!slot) {
        finish();
        return;
      }

      if (mode === "fly") {
        g.x += g.vx;
        g.y += g.vy;
        g.vx *= 0.975;
        g.vy = g.vy * 0.975 + 0.48;
        g.rot += g.vx * 0.12;
        paint();
        if (now >= flyUntil) mode = "return";
        requestAnimationFrame(tick);
        return;
      }

      const target = slot.getBoundingClientRect();
      g.vx += (target.left - g.x) * 0.16;
      g.vy += (target.top - g.y) * 0.16;
      g.vx *= 0.78;
      g.vy *= 0.78;
      g.x += g.vx;
      g.y += g.vy;
      g.rot *= 0.8;
      paint();

      if (
        hypot(target.left - g.x, target.top - g.y) < 1.4 &&
        hypot(g.vx, g.vy) < 0.4
      ) {
        finish();
        return;
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [finish, paint]);

  const onWinMove = useCallback(
    (event: PointerEvent) => {
      const g = grab.current;
      if (!g.active || event.pointerId !== g.pointerId) return;
      const now = performance.now();
      const dt = Math.max(8, now - g.lastT);
      g.vx = ((event.clientX - g.lastX) * 16) / dt;
      g.vy = ((event.clientY - g.lastY) * 16) / dt;
      const speed = hypot(g.vx, g.vy);
      if (speed > MAX_SPEED) {
        const scale = MAX_SPEED / speed;
        g.vx *= scale;
        g.vy *= scale;
      }
      g.lastX = event.clientX;
      g.lastY = event.clientY;
      g.lastT = now;
      g.x = event.clientX - g.offX;
      g.y = event.clientY - g.offY;
      paint();
    },
    [paint]
  );

  const onWinUp = useCallback(
    (event: PointerEvent) => {
      const g = grab.current;
      if (!g.active || event.pointerId !== g.pointerId) return;
      g.active = false;
      window.removeEventListener("pointermove", onWinMove);
      window.removeEventListener("pointerup", onWinUp);
      window.removeEventListener("pointercancel", onWinUp);
      if (g.moved) {
        launch();
      }
    },
    [launch, onWinMove]
  );

  useEffect(() => {
    return () => {
      grab.current.token += 1;
      window.removeEventListener("pointermove", onWinMove);
      window.removeEventListener("pointerup", onWinUp);
      window.removeEventListener("pointercancel", onWinUp);
    };
  }, [onWinMove, onWinUp]);

  const onPointerDown = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.button !== 0) return;
    const g = grab.current;
    g.active = true;
    g.moved = false;
    g.suppressClick = false;
    g.pointerId = event.pointerId;
    g.startX = event.clientX;
    g.startY = event.clientY;
    g.lastX = event.clientX;
    g.lastY = event.clientY;
    g.lastT = performance.now();
    g.vx = 0;
    g.vy = 0;
    g.rot = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const g = grab.current;
    if (!g.active || g.moved || event.pointerId !== g.pointerId) return;
    if (hypot(event.clientX - g.startX, event.clientY - g.startY) < DRAG_THRESHOLD) {
      return;
    }

    const slot = slotRef.current;
    if (!slot) return;
    event.preventDefault();
    const rect = slot.getBoundingClientRect();
    g.moved = true;
    g.suppressClick = true;
    g.offX = event.clientX - rect.left;
    g.offY = event.clientY - rect.top;
    g.x = rect.left;
    g.y = rect.top;
    g.w = rect.width;
    g.h = rect.height;
    g.lastX = event.clientX;
    g.lastY = event.clientY;
    g.lastT = performance.now();
    window.addEventListener("pointermove", onWinMove);
    window.addEventListener("pointerup", onWinUp);
    window.addEventListener("pointercancel", onWinUp);
    setAirborne(true);
  };

  const onClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (!grab.current.suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    window.setTimeout(() => {
      grab.current.suppressClick = false;
    }, 0);
  };

  return (
    <>
      <div
        ref={slotRef}
        className="galaxy-slot"
        style={{
          ["--s" as string]: `${body.size}px`,
          ["--r" as string]: String(body.radius),
          ["--turn" as string]: String(body.angle / 360),
          zIndex: airborne ? 8 : undefined,
        }}
      >
        <Link
          href={app.url}
          className="galaxy-bot"
          aria-label={app.name}
          draggable={false}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={(event) => onWinUp(event.nativeEvent)}
          onPointerCancel={(event) => onWinUp(event.nativeEvent)}
          onClick={onClick}
          style={{
            animationDelay: `${(index % 5) * -0.5}s`,
            animationDuration: `${4.8 + (index % 3) * 0.4}s`,
            visibility: airborne ? "hidden" : undefined,
          }}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <span className="galaxy-icon">
            <img
              src={app.icon}
              alt=""
              width={body.size}
              height={body.size}
              draggable={false}
            />
          </span>
          <span className="galaxy-name">{app.name}</span>
        </Link>
      </div>
      {airborne
        ? createPortal(
            <div
              ref={floatRef}
              className="galaxy-float"
              aria-hidden="true"
              style={{
                left: grab.current.x,
                top: grab.current.y,
                width: grab.current.w,
                height: grab.current.h,
              }}
            >
              <span className="galaxy-icon">
                <img
                  src={app.icon}
                  alt=""
                  width={body.size}
                  height={body.size}
                  draggable={false}
                />
              </span>
            </div>,
            document.body
          )
        : null}
    </>
  );
}

export function AppGalaxy() {
  const { t } = useLanguage();

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--px", `${x * 10}px`);
    event.currentTarget.style.setProperty("--py", `${y * 6}px`);
  };

  const onPointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--px", "0px");
    event.currentTarget.style.setProperty("--py", "0px");
  };

  return (
    <section className="galaxy-section">
      <p className="sr-only">{t.home.galaxyHint}</p>
      <div
        className="galaxy-stage"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <div className="galaxy-parallax">
          <div className="galaxy-orbit">
            {bodies.map((body, index) => {
              const app = apps[body.app];
              return (
                <GalaxyApp
                  key={`${app.name}-${index}`}
                  app={app}
                  body={body}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <div className="galaxy-title">
          <h2>{t.home.galaxyTitle}</h2>
        </div>
      </div>
    </section>
  );
}
