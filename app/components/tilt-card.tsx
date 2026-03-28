"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useState } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

type PointerStyle = CSSProperties & {
  "--pointer-x"?: string;
  "--pointer-y"?: string;
};

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const [style, setStyle] = useState<PointerStyle>({
    transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    "--pointer-x": "50%",
    "--pointer-y": "50%",
  });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = (0.5 - (y / rect.height)) * 10;

    setStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
      "--pointer-x": `${(x / rect.width) * 100}%`,
      "--pointer-y": `${(y / rect.height) * 100}%`,
    });
  };

  const reset = () => {
    setStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      "--pointer-x": "50%",
      "--pointer-y": "50%",
    });
  };

  return (
    <div
      className={`relative transform-gpu transition-transform duration-300 ease-out motion-reduce:transform-none ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
      style={style}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_var(--pointer-x,_50%)_var(--pointer-y,_50%),rgba(255,255,255,0.22),transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}
