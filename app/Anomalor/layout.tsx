import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { AnomalorNav } from "./nav";

export const metadata: Metadata = {
  title: "Anomalor",
  description:
    "A password generator and encrypted vault for iPhone and Mac. Generated on-device. Optional vault. No analytics.",
};

export default function AnomalorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 border-b border-term-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/Anomalor" className="flex items-center gap-3 hover:opacity-90">
          <img
            src="/Anomalor/icon.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-[10px]"
          />
          <span className="text-base text-term-fg">Anomalor</span>
        </Link>
        <AnomalorNav />
      </header>
      {children}
    </div>
  );
}
