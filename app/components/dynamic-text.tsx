"use client";

import { useEffect, useState } from "react";

type DynamicTextProps = {
  items?: string[];
  className?: string;
  intervalMs?: number;
};

const defaultItems = [
  "product-minded interfaces",
  "real-time apps",
  "mobile experiences",
  "privacy-aware software",
];

export default function DynamicText({
  items = defaultItems,
  className = "",
  intervalMs = 2600,
}: DynamicTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [items, intervalMs]);

  return (
    <span
      key={items[index]}
      className={`inline-block min-w-[14ch] font-medium text-blue-600 dark:text-blue-400 motion-safe:animate-soft-fade ${className}`}
    >
      {items[index]}
    </span>
  );
}
