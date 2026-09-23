import type { Metadata } from "next";
import { ProgressClockContent } from "./content";

export const metadata: Metadata = {
  title: "Progress Clock",
  description:
    "See the day, week, month, year, and life as progress. A clock, goals, and a life calendar for iPhone.",
  alternates: {
    canonical: "/ProgressClock",
  },
  openGraph: {
    title: "Progress Clock",
    description:
      "See the day, week, month, year, and life as progress. A clock, goals, and a life calendar for iPhone.",
    url: "/ProgressClock",
    type: "website",
    images: [
      {
        url: "/ProgressClock/clock.png",
        width: 1179,
        height: 2556,
        alt: "Progress Clock",
      },
    ],
  },
};

export default function ProgressClock() {
  return <ProgressClockContent />;
}
