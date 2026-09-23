import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { MetronomeNav } from "./nav";

export const metadata: Metadata = {
  title: "Metronome Glow",
  description:
    "An iPhone metronome with glow visuals, tap tempo, and subtle vibration for practice timing.",
};

export default function MetronomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 border-b border-term-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/Metronome"
          className="flex items-center gap-3 hover:opacity-90"
        >
          <img
            src="/Metronome/icon.jpg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-[10px]"
          />
          <span className="text-base text-term-fg">Metronome Glow</span>
        </Link>
        <MetronomeNav />
      </header>
      {children}
    </div>
  );
}
