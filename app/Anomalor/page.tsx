import type { Metadata } from "next";
import { AnomalorContent } from "./content";

export const metadata: Metadata = {
  title: "Anomalor",
  description:
    "A password generator and encrypted vault for iPhone and Mac. Generated on-device. Optional vault. No analytics.",
  alternates: {
    canonical: "/Anomalor",
  },
  openGraph: {
    title: "Anomalor",
    description:
      "A password generator and encrypted vault for iPhone and Mac. Generated on-device. Optional vault. No analytics.",
    url: "/Anomalor",
    type: "website",
    images: [
      {
        url: "/Anomalor/generate.jpg",
        width: 621,
        height: 1344,
        alt: "Anomalor",
      },
    ],
  },
};

export default function Anomalor() {
  return <AnomalorContent />;
}
