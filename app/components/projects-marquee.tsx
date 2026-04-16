"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ProjectsMarqueeProps = {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  pxPerSecond?: number;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);

    onChange();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    // Safari < 14 fallback
    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return reduced;
}

export default function ProjectsMarquee({
  children,
  className = "",
  itemClassName = "",
  pxPerSecond = 18,
}: ProjectsMarqueeProps) {
  const reducedMotion = usePrefersReducedMotion();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  const items = useMemo(() => {
    const arr = Array.isArray(children) ? children : [children];
    return arr.filter(Boolean);
  }, [children]);

  useEffect(() => {
    if (reducedMotion) return;
    if (paused) return;

    const el = scrollerRef.current;
    if (!el) return;

    const tick = (ts: number) => {
      if (!scrollerRef.current) return;

      const last = lastTsRef.current ?? ts;
      const dt = Math.min(64, ts - last);
      lastTsRef.current = ts;

      const dx = (pxPerSecond * dt) / 1000;
      const max = el.scrollWidth - el.clientWidth;

      if (max > 0) {
        const next = el.scrollLeft + dx;
        el.scrollLeft = next >= max - 1 ? 0 : next;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [paused, pxPerSecond, reducedMotion]);

  return (
    <div className={`projects-marquee-mask ${className}`}>
      <div
        ref={scrollerRef}
        className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="flex gap-6 pr-6" role="list">
          {items.map((child, idx) => (
            <div
              key={idx}
              className={`w-[320px] shrink-0 sm:w-[360px] ${itemClassName}`}
              role="listitem"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

