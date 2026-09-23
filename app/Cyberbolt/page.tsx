import type { Metadata } from "next";
import { CyberboltContent } from "./content";

export const metadata: Metadata = {
  title: "Cyber Bolt",
  description:
    "A 3D endless-runner arcade game. Glide a lightning-powered spacecar, collect coins, unlock skins, and chase a high score.",
  alternates: {
    canonical: "/Cyberbolt",
  },
  openGraph: {
    title: "Cyber Bolt",
    description:
      "A 3D endless-runner arcade game. Glide a lightning-powered spacecar and chase a high score.",
    url: "/Cyberbolt",
    type: "website",
    images: [
      {
        url: "/Cyberbolt/screen-1.jpg",
        width: 621,
        height: 1104,
        alt: "Cyber Bolt",
      },
    ],
  },
};

export default function Cyberbolt() {
  return <CyberboltContent />;
}
