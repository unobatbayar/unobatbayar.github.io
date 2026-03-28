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

type Signal = {
  sourceIndex: number;
  startedAt: number;
  distances: number[];
};

const NODE_COUNT = 47;
const LINK_DISTANCE = 255;
const MOUSE_RADIUS = 180;
const SIGNAL_SPEED = 0.18;
const SIGNAL_WINDOW = 140;

function getColorSet(isDark: boolean) {
  return isDark
    ? {
        nodeBase: "226, 232, 240",
        lineBase: "96, 165, 250",
        glowBase: "236, 72, 153",
        signalA: "34, 211, 238",
        signalB: "217, 70, 239",
      }
    : {
        nodeBase: "71, 85, 105",
        lineBase: "59, 130, 246",
        glowBase: "219, 39, 119",
        signalA: "6, 182, 212",
        signalB: "192, 38, 211",
      };
}

function buildGraph(nodes: Node[]) {
  const edges: Edge[] = [];
  const neighbors: Array<Array<{ index: number; dist: number }>> = nodes.map(() => []);

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.hypot(dx, dy);

      if (dist < LINK_DISTANCE) {
        edges.push({ a: i, b: j, dist });
        neighbors[i].push({ index: j, dist });
        neighbors[j].push({ index: i, dist });
      }
    }
  }

  return { edges, neighbors };
}

function computeSignalDistances(
  sourceIndex: number,
  neighbors: Array<Array<{ index: number; dist: number }>>
) {
  const distances = Array.from({ length: neighbors.length }, () => Number.POSITIVE_INFINITY);
  const visited = new Set<number>();
  distances[sourceIndex] = 0;

  while (visited.size < neighbors.length) {
    let current = -1;
    let best = Number.POSITIVE_INFINITY;

    for (let i = 0; i < distances.length; i += 1) {
      if (!visited.has(i) && distances[i] < best) {
        best = distances[i];
        current = i;
      }
    }

    if (current === -1) break;
    visited.add(current);

    for (const neighbor of neighbors[current]) {
      const candidate = distances[current] + neighbor.dist;
      if (candidate < distances[neighbor.index]) {
        distances[neighbor.index] = candidate;
      }
    }
  }

  return distances;
}

export default function SiteGraphField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    const signals: Signal[] = [];

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: 1.5 + Math.random() * 1.8,
    }));

    const resetNodes = () => {
      nodes.forEach((node) => {
        node.x = Math.random() * width;
        node.y = Math.random() * height;
      });
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      resetNodes();
    };

    const handlePointerMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handlePointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handlePointerDown = (event: PointerEvent) => {
      const { neighbors } = buildGraph(nodes);
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (let i = 0; i < nodes.length; i += 1) {
        const dx = nodes[i].x - event.clientX;
        const dy = nodes[i].y - event.clientY;
        const dist = Math.hypot(dx, dy);

        if (dist < closestDistance) {
          closestDistance = dist;
          closestIndex = i;
        }
      }

      signals.push({
        sourceIndex: closestIndex,
        startedAt: performance.now(),
        distances: computeSignalDistances(closestIndex, neighbors),
      });
    };

    const draw = () => {
      const now = performance.now();
      const isDark = document.documentElement.classList.contains("dark");
      const colors = getColorSet(isDark);

      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;

        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          node.x += (dx / Math.max(dist, 1)) * force * 0.9;
          node.y += (dy / Math.max(dist, 1)) * force * 0.9;
        }
      }

      const { edges } = buildGraph(nodes);

      for (let i = signals.length - 1; i >= 0; i -= 1) {
        const age = now - signals[i].startedAt;
        if (age > 2600) {
          signals.splice(i, 1);
        }
      }

      for (const edge of edges) {
        const a = nodes[edge.a];
        const b = nodes[edge.b];
        const baseOpacity = (1 - edge.dist / LINK_DISTANCE) * (isDark ? 0.24 : 0.18);
        let stroke = `rgba(${colors.lineBase}, ${baseOpacity})`;
        let lineWidth = 1;

        for (const signal of signals) {
          const travelA = signal.distances[edge.a] / SIGNAL_SPEED;
          const travelB = signal.distances[edge.b] / SIGNAL_SPEED;
          const edgeTravel = Math.min(travelA, travelB);
          const delta = Math.abs(now - signal.startedAt - edgeTravel);

          if (delta < SIGNAL_WINDOW) {
            const strength = 1 - delta / SIGNAL_WINDOW;
            const signalColor = edge.a % 2 === 0 ? colors.signalA : colors.signalB;
            stroke = `rgba(${signalColor}, ${0.18 + strength * 0.62})`;
            lineWidth = 1 + strength * 1.8;
            break;
          }
        }

        ctx.strokeStyle = stroke;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];
        let fill = `rgba(${colors.nodeBase}, ${isDark ? 0.78 : 0.68})`;
        let glow = 0;

        for (const signal of signals) {
          const arrival = signal.distances[index] / SIGNAL_SPEED;
          const delta = Math.abs(now - signal.startedAt - arrival);

          if (delta < SIGNAL_WINDOW) {
            const strength = 1 - delta / SIGNAL_WINDOW;
            fill = `rgba(${index % 2 === 0 ? colors.signalA : colors.signalB}, ${0.5 + strength * 0.5})`;
            glow = 18 * strength;
            break;
          }
        }

        if (glow > 0) {
          ctx.shadowBlur = glow;
          ctx.shadowColor = fill;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("mouseleave", handlePointerLeave);
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
