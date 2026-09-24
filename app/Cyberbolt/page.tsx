import type { Metadata } from "next";
import { landingSocialMetadata } from "../lib/social-metadata";
import { CyberboltContent } from "./content";

export const metadata: Metadata = landingSocialMetadata({
  title: "Cyber Bolt",
  description:
    "A 3D endless-runner arcade game. Glide a lightning-powered spacecar, collect coins, unlock skins, and chase a high score.",
  path: "/Cyberbolt",
  image: {
    url: "/Cyberbolt/og.png",
    alt: "Cyber Bolt",
  },
});

export default function Cyberbolt() {
  return <CyberboltContent />;
}
