import type { Metadata } from "next";
import { pageSocialMetadata } from "../lib/social-metadata";
import { ProjectsContent } from "./projects-content";

export const metadata: Metadata = pageSocialMetadata({
  title: "Projects",
  description:
    "Software projects by Usukhbayar Batbayar: web, mobile, and apps.",
  path: "/projects",
});

export default function Projects() {
  return <ProjectsContent />;
}
