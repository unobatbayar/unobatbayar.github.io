"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import { Navbar } from "./nav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFullScreenRoute = pathname?.startsWith("/learn-japanese");

  if (isFullScreenRoute) {
    return (
      <>
        {children}
        <Analytics />
        <SpeedInsights />
      </>
    );
  }

  return (
    <main className="mt-2 flex min-w-0 w-full max-w-3xl flex-auto flex-col px-4 pb-16 pt-4 sm:px-6 md:mt-8 md:px-8 lg:pb-24">
      <Navbar />
      {children}
      <Footer />
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
