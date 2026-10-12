import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { FlashbackCamNav } from "./nav";

export const metadata: Metadata = {
  title: "Flashback Cam: Retro Digicam",
  description:
    "Flashback Cam: Retro Digicam is a film camera for iPhone. Live looks on the device, a date stamp, and no cloud.",
};

export default function FlashbackCamLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 border-b border-term-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/flashbackcam"
          className="flex items-center gap-3 hover:opacity-90"
        >
          <img
            src="/flashbackcam/icon.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-[10px]"
          />
          <span className="text-base text-term-fg">Flashback Cam</span>
        </Link>
        <FlashbackCamNav />
      </header>
      {children}
    </div>
  );
}
