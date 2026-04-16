"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

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

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return reduced;
}

function useIsSmallScreen() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const onChange = () => setSmall(media.matches);

    onChange();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return small;
}

export default function ProjectsMarquee({
  children,
  className = "",
  itemClassName = "",
  pxPerSecond = 16,
}: ProjectsMarqueeProps) {
  const reducedMotion = usePrefersReducedMotion();
  const isSmallScreen = useIsSmallScreen();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const contentWidthRef = useRef<number>(0);

  const [paused, setPaused] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const items = useMemo(() => {
    const arr = Array.isArray(children) ? children : [children];
    return arr.filter(Boolean);
  }, [children]);

  useEffect(() => {
    if (reducedMotion) {
      setEnabled(false);
      return;
    }

    const scroller = scrollerRef.current;
    const content = contentRef.current;
    if (!scroller || !content) return;

    const recompute = () => {
      const w = content.scrollWidth;
      contentWidthRef.current = w;
      setEnabled(w > scroller.clientWidth + 1);
    };

    recompute();

    const ro = new ResizeObserver(recompute);
    ro.observe(scroller);
    ro.observe(content);
    return () => ro.disconnect();
  }, [items, reducedMotion]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(max <= 0 ? true : el.scrollLeft >= max - 2);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    return () => el.removeEventListener("scroll", update);
  }, [enabled, items]);

  useEffect(() => {
    if (reducedMotion) return;
    if (paused) return;
    if (!enabled) return;

    const el = scrollerRef.current;
    if (!el) return;

    const tick = (ts: number) => {
      const last = lastTsRef.current ?? ts;
      const dt = Math.min(64, ts - last);
      lastTsRef.current = ts;

      const speed = isSmallScreen ? pxPerSecond * 1.45 : pxPerSecond;
      const dx = (speed * dt) / 1000;
      const w = contentWidthRef.current;

      if (w > 0) {
        const next = el.scrollLeft + dx;
        el.scrollLeft = next >= w ? next - w : next;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [enabled, paused, pxPerSecond, reducedMotion, isSmallScreen]);

  const autoPlaying = enabled && !paused && !reducedMotion;
  const showLeft = autoPlaying || !atStart;
  const showRight = autoPlaying || !atEnd;
  const fadePx = isSmallScreen ? "44px" : "28px";

  const maskStyle: CSSProperties = {
    ["--fade-left" as string]: showLeft ? fadePx : "0px",
    ["--fade-right" as string]: showRight ? fadePx : "0px",
  };

  return (
    <div className={`projects-marquee-mask ${className}`} style={maskStyle}>
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
        <div className="flex gap-6" role="list">
          <div ref={contentRef} className="flex gap-6">
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

          {enabled ? (
            <div className="flex gap-6" aria-hidden="true">
              {items.map((child, idx) => (
                <div key={`dup-${idx}`} className={`w-[320px] shrink-0 sm:w-[360px] ${itemClassName}`}>
                  {child}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
