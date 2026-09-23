import type { Metadata } from "next";
import { MetronomeContent } from "./content";

export const metadata: Metadata = {
  title: "Metronome Glow",
  description:
    "An iPhone metronome with glow visuals, tap tempo, time signatures, and subtle vibration. Practice timing that stays with you.",
  alternates: {
    canonical: "/Metronome",
  },
  openGraph: {
    title: "Metronome Glow",
    description:
      "An iPhone metronome with glow visuals, tap tempo, time signatures, and subtle vibration.",
    url: "/Metronome",
    type: "website",
    images: [
      {
        url: "/Metronome/screen-1.jpg",
        width: 621,
        height: 1104,
        alt: "Metronome Glow",
      },
    ],
  },
};

export default function Metronome() {
  return <MetronomeContent />;
}
