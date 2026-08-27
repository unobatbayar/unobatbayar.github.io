import React from "react";
import type { Metadata } from "next";
import { SectionLabel } from "../components/section-label";
import { TechIcons } from "../components/tech-icons";
import {
  personalProjects,
  workProjects,
  type Project,
} from "./project-data";

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

function ProjectArticle({ project }: { project: Project }) {
  return (
    <article className="py-4">
      <div className="flex gap-3.5">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-0.5 block h-11 w-11 shrink-0 overflow-hidden rounded-full border border-term-border bg-term-soft"
          aria-label={`${project.title} preview`}
        >
          <img
            src={project.thumbnail}
            alt=""
            width={88}
            height={88}
            loading="lazy"
            className="h-full w-full object-cover transition duration-200 group-hover:opacity-90"
          />
        </a>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
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
              {project.freelance ? (
                <span className="text-xs text-term-accent">freelance</span>
              ) : null}
            </div>
            <p className="shrink-0 text-sm text-term-faint">{project.year}</p>
          </div>
          <p className="mt-1.5 text-sm leading-6 text-term-muted">
            {project.description}
          </p>
          <TechIcons tools={project.tools} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="cyber-text text-sm">// projects</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">Projects</h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          Projects I've built and shipped.
        </p>
      </header>

      <section className="space-y-3">
        <SectionLabel>professional</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {workProjects.map((project) => (
            <ProjectArticle
              key={`${project.title}-${project.year}`}
              project={project}
            />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>personal</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {personalProjects.map((project) => (
            <ProjectArticle
              key={`${project.title}-${project.year}`}
              project={project}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
