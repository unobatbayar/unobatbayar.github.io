import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { CyberboltNav } from "./nav";

export const metadata: Metadata = {
  title: "Cyber Bolt",
  description:
    "A 3D endless-runner arcade game. Glide a lightning-powered spacecar, collect coins, and chase a high score.",
};

export default function CyberboltLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 border-b border-term-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/Cyberbolt"
          className="flex items-center gap-3 hover:opacity-90"
        >
          <img
            src="/Cyberbolt/icon.jpg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-[10px]"
          />
          <span className="text-base text-term-fg">Cyber Bolt</span>
        </Link>
        <CyberboltNav />
      </header>
      {children}
    </div>
  );
}
