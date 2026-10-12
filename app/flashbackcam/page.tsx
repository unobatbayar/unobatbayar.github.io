import type { Metadata } from "next";
import { landingSocialMetadata } from "../lib/social-metadata";
import { FlashbackCamContent } from "./content";

export const metadata: Metadata = landingSocialMetadata({
  title: "Flashback Cam: Retro Digicam",
  description:
    "Flashback Cam: Retro Digicam is a film camera for iPhone. Live looks on the device, a date stamp, and no cloud.",
  path: "/flashbackcam",
  image: {
    url: "/flashbackcam/hero.png",
    width: 2400,
    height: 1260,
    alt: "Flashback Cam: Retro Digicam",
  },
});

export default function FlashbackCam() {
  return <FlashbackCamContent />;
}
