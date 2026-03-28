"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import SiteGraphField from "./site-graph-field";

type GlowStyle = CSSProperties & {
  "--glow-x"?: string;
  "--glow-y"?: string;
};

export default function SiteBackground() {
  const [glowStyle, setGlowStyle] = useState<GlowStyle>({
    "--glow-x": "50%",
    "--glow-y": "18%",
  });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setGlowStyle({
        "--glow-x": `${(event.clientX / window.innerWidth) * 100}%`,
        "--glow-y": `${(event.clientY / window.innerHeight) * 100}%`,
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
      style={glowStyle}
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
