import React from "react";
import type { Metadata } from "next";
import WorkProjectsSection from "../components/work-projects-section";
import PersonalProjectsSection from "../components/personal-projects-section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software projects by Usukhbayar Batbayar across web, mobile, and interactive product development.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Usukhbayar Batbayar",
    description:
      "Selected software projects by Usukhbayar Batbayar across web, mobile, and interactive product development.",
    url: "/projects",
    type: "website",
  },
};

export default function Projects() {
  return (
    <section className="space-y-12">
      <div className="glass-panel glass-panel-strong rounded-[2.25rem] px-6 py-9 sm:px-8 sm:py-10">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
          Projects
        </p>
        <h1 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-3xl">
          Software I&apos;ve shipped professionally and independently.
        </h1>
        <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-neutral-200">
          A mix of product work, experiments, and apps across web, mobile, and interactive software.
        </p>
      </div>

      <WorkProjectsSection />
      <PersonalProjectsSection />
    </section>
  );
}
