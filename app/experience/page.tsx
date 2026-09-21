import type { Metadata } from "next";
import { ExperienceContent } from "./experience-content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience, skills, and education of software engineer Usukhbayar Batbayar.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Experience | Usukhbayar Batbayar",
    description:
      "Work experience, skills, and education of software engineer Usukhbayar Batbayar.",
    url: "/experience",
    type: "website",
  },
};

export default function Experience() {
  return <ExperienceContent />;
}
