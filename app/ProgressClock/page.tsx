import type { Metadata } from "next";
import { landingSocialMetadata } from "../lib/social-metadata";
import { ProgressClockContent } from "./content";

export const metadata: Metadata = landingSocialMetadata({
  title: "Progress Clock",
  description:
    "See the day, week, month, year, and life as progress. A clock, goals, and a life calendar for iPhone.",
  path: "/ProgressClock",
  image: {
    url: "/ProgressClock/og.png",
    alt: "Progress Clock",
  },
});

export default function ProgressClock() {
  return <ProgressClockContent />;
}
