import type { Metadata } from "next";
import { landingSocialMetadata } from "../lib/social-metadata";
import { AnomalorContent } from "./content";

export const metadata: Metadata = landingSocialMetadata({
  title: "Anomalor",
  description:
    "A password generator and encrypted vault for iPhone and Mac. Generated on-device. Optional vault. No analytics.",
  path: "/Anomalor",
  image: {
    url: "/Anomalor/og.png",
    alt: "Anomalor",
  },
});

export default function Anomalor() {
  return <AnomalorContent />;
}
