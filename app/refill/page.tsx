import type { Metadata } from "next";
import { landingSocialMetadata } from "../lib/social-metadata";
import { RefillContent } from "./content";

export const metadata: Metadata = landingSocialMetadata({
  title: "Refill",
  description:
    "Refill: Home Supplies tracks filters, batteries, and bulbs. Exact specs, reminders, and a one-time unlock.",
  path: "/refill",
  image: {
    url: "/refill/icon.png",
    width: 1024,
    height: 1024,
    alt: "Refill",
  },
});

export default function Refill() {
  return <RefillContent />;
}
