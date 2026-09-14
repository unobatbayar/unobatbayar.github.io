"use client";

import { useEffect } from "react";

const CANONICAL_SEGMENTS = [
  "Anomalor",
  "Cyberbolt",
  "Metronome",
  "ProgressClock",
] as const;

export function CaseRedirect() {
  useEffect(() => {
    const { pathname, search, hash } = window.location;
    const parts = pathname.split("/");
    const segment = parts[1];
    if (!segment) return;

    const canonical = CANONICAL_SEGMENTS.find(
      (name) => name.toLowerCase() === segment.toLowerCase(),
    );
    if (!canonical || segment === canonical) return;

    parts[1] = canonical;
    window.location.replace(`${parts.join("/")}${search}${hash}`);
  }, []);

  return null;
}
