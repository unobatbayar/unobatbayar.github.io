import type { Metadata } from "next";
import { ProjectsContent } from "./projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software projects by Usukhbayar Batbayar: web, mobile, and apps.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Usukhbayar Batbayar",
    description:
      "Software projects by Usukhbayar Batbayar: web, mobile, and apps.",
    url: "/projects",
    type: "website",
  },
};

export default function Projects() {
  return <ProjectsContent />;
}
