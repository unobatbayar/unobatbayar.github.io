import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { RefillNav } from "./nav";

export const metadata: Metadata = {
  title: "Refill",
  description:
    "Refill: Home Supplies tracks filters, batteries, and bulbs. Exact specs, reminders, and a one-time unlock.",
};

export default function RefillLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 border-b border-term-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/refill" className="flex items-center gap-3 hover:opacity-90">
          <img
            src="/refill/icon.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-[10px]"
          />
          <span className="text-base text-term-fg">Refill</span>
        </Link>
        <RefillNav />
      </header>
      {children}
    </div>
  );
}
