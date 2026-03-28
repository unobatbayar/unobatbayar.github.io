import React from "react";
import type { Metadata } from "next";
import WorkProjectsSection from "../components/work-projects-section";
import PersonalProjectsSection from "../components/personal-projects-section";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Personal and Work Projects",
};

export default function Projects() {
  return (
    <section className="space-y-12">
      <div className="rounded-[2rem] border border-neutral-200/70 bg-white/70 px-6 py-8 shadow-sm shadow-neutral-200/60 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70 dark:shadow-black/20 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
          Projects
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black dark:text-white">
          Software I&apos;ve shipped professionally and independently.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
          A mix of product work, experiments, and apps across web, mobile, and interactive software.
        </p>
      </div>

      <PersonalProjectsSection />
      <WorkProjectsSection />
    </section>
  );
}
