"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import SiteGraphField from "./site-graph-field";

export default function SiteBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const handleMove = (event: MouseEvent) => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;

        if (!containerRef.current) return;

        containerRef.current.style.setProperty("--glow-x", `${(event.clientX / window.innerWidth) * 100}%`);
        containerRef.current.style.setProperty("--glow-y", `${(event.clientY / window.innerHeight) * 100}%`);
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
      style={{ "--glow-x": "50%", "--glow-y": "18%" } as CSSProperties}
    >
      <div className="site-grid absolute inset-0 opacity-40 dark:opacity-30" />
      <div className="site-glow absolute inset-0" />
      <SiteGraphField />
      <div className="site-blob site-blob-one absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-400/18 blur-3xl dark:bg-blue-500/14" />
      <div className="site-blob site-blob-two absolute right-[-4rem] top-[24%] h-96 w-96 rounded-full bg-violet-400/14 blur-3xl dark:bg-violet-500/12" />
      <div className="site-blob site-blob-three absolute bottom-[-5rem] left-[30%] h-80 w-80 rounded-full bg-cyan-300/16 blur-3xl dark:bg-cyan-400/10" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent dark:from-[#121212]/80" />
    </div>
  );
}
