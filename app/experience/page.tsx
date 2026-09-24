import type { Metadata } from "next";
import { pageSocialMetadata } from "../lib/social-metadata";
import { ExperienceContent } from "./experience-content";

export const metadata: Metadata = pageSocialMetadata({
  title: "Experience",
  description:
    "Work experience, skills, and education of software engineer Usukhbayar Batbayar.",
  path: "/experience",
});

export default function Experience() {
  return <ExperienceContent />;
}
