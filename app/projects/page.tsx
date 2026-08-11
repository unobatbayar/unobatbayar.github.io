import React from "react";
import type { Metadata } from "next";
import { SectionLabel } from "../components/section-label";
import { TechIcons } from "../components/tech-icons";
import { personalProjects, workProjects } from "./project-data";

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
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="cyber-text text-sm">// projects</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">Projects</h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          Things I&apos;ve built, shipped, and sometimes abandoned.
        </p>
      </header>

      <section className="space-y-3">
        <SectionLabel>professional</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {workProjects.map((project) => (
            <article key={`${project.title}-${project.year}`} className="py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-base text-term-fg">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-term-accent"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="shrink-0 text-sm text-term-faint">{project.year}</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-term-muted">
                {project.description}
              </p>
              <TechIcons tools={project.tools} />
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>personal</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {personalProjects.map((project) => (
            <article key={`${project.title}-${project.year}`} className="py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-base text-term-fg">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-term-accent"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="shrink-0 text-sm text-term-faint">{project.year}</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-term-muted">
                {project.description}
              </p>
              <TechIcons tools={project.tools} />
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
