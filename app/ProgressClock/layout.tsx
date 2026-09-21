import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProgressClockNav } from "./nav";

export const metadata: Metadata = {
  title: "Progress Clock",
  description:
    "A clock that shows how much of the day, week, month, year, and life has already passed.",
};

export default function ProgressClockLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 border-b border-term-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/ProgressClock"
          className="flex items-center gap-3 hover:opacity-90"
        >
          <img
            src="/ProgressClock/icon.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-[10px]"
          />
          <span className="text-base text-term-fg">Progress Clock</span>
        </Link>
        <ProgressClockNav />
      </header>
      {children}
    </div>
  );
}
