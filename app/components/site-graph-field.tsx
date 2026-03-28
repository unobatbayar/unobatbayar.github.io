"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

type Edge = {
  a: number;
  b: number;
  dist: number;
};

const LINK_DISTANCE = 255;
const TARGET_FRAME_MS = 1000 / 30;
const GRAPH_REBUILD_MS = 160;

function getColorSet(isDark: boolean) {
  return isDark
    ? {
        lineBase: "96, 165, 250",
        lineGlow: "56, 189, 248",
        starA: "248, 250, 252",
        starB: "191, 219, 254",
        starC: "103, 232, 249",
        starD: "196, 181, 253",
      }
    : {
        lineBase: "59, 130, 246",
        lineGlow: "14, 165, 233",
        starA: "51, 65, 85",
        starB: "37, 99, 235",
        starC: "8, 145, 178",
        starD: "109, 40, 217",
      };
}

function getNodeColor(index: number, isDark: boolean, colors: ReturnType<typeof getColorSet>) {
  const palette = [colors.starA, colors.starB, colors.starC, colors.starB, colors.starA, colors.starD];
  const rgb = palette[index % palette.length];
  const alpha = isDark ? 0.88 : 0.72;

  return `rgba(${rgb}, ${alpha})`;
}

function getNodeCount(width: number) {
  if (width < 640) return 20;
  if (width < 1024) return 32;
  return 47;
}

function createNodes(count: number) {
  return Array.from({ length: count }, () => ({
    x: 0,
    y: 0,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    r: 1.5 + Math.random() * 1.8,
  }));
}

function buildEdges(nodes: Node[]) {
  const edges: Edge[] = [];

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.hypot(dx, dy);

      if (dist < LINK_DISTANCE) {
        edges.push({ a: i, b: j, dist });
      }
    }
  }

  return edges;
}

export default function SiteGraphField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let lastGraphRebuild = 0;
    let lastFrameTime = 0;

    const resetNodes = () => {
      nodes = createNodes(getNodeCount(width));
      nodes.forEach((node) => {
        node.x = Math.random() * width;
        node.y = Math.random() * height;
      });
      edges = buildEdges(nodes);
      lastGraphRebuild = performance.now();
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      resetNodes();
    };

    const draw = (timestamp: number) => {
      if (timestamp - lastFrameTime < TARGET_FRAME_MS) {
        animationFrame = window.requestAnimationFrame(draw);
        return;
      }

      const delta = lastFrameTime ? Math.min((timestamp - lastFrameTime) / 16.67, 1.6) : 1;
      lastFrameTime = timestamp;
      const isDark = document.documentElement.classList.contains("dark");
      const colors = getColorSet(isDark);

      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx * delta;
        node.y += node.vy * delta;

        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;
      }

      if (timestamp - lastGraphRebuild >= GRAPH_REBUILD_MS) {
        edges = buildEdges(nodes);
        lastGraphRebuild = timestamp;
      }

      for (const edge of edges) {
        const a = nodes[edge.a];
        const b = nodes[edge.b];
        const baseOpacity = (1 - edge.dist / LINK_DISTANCE) * (isDark ? 0.3 : 0.2);

        ctx.strokeStyle = `rgba(${colors.lineBase}, ${baseOpacity})`;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];
        ctx.shadowBlur = isDark ? 12 : 7;
        ctx.shadowColor = `rgba(${colors.lineGlow}, ${isDark ? 0.18 : 0.1})`;
        ctx.fillStyle = getNodeColor(index, isDark, colors);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw(performance.now());

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="site-graph-field absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
