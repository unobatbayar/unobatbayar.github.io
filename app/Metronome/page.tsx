import type { Metadata } from "next";
import { landingSocialMetadata } from "../lib/social-metadata";
import { MetronomeContent } from "./content";

export const metadata: Metadata = landingSocialMetadata({
  title: "Metronome Glow",
  description:
    "An iPhone metronome with glow visuals, tap tempo, time signatures, and subtle vibration. Practice timing that stays with you.",
  path: "/Metronome",
  image: {
    url: "/Metronome/og.png",
    alt: "Metronome Glow",
  },
});

export default function Metronome() {
  return <MetronomeContent />;
}
