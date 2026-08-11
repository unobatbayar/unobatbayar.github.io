import React from "react";
import type { Metadata } from "next";
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
    <section className="space-y-10">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
          Projects
        </h1>
        <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300">
          Selected work from professional teams and independent projects.
        </p>
      </header>

      <section className="max-w-4xl border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          Professional
        </h2>
        <div className="mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">
          {workProjects.map((project) => (
            <article key={`${project.title}-${project.year}`} className="py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <h3 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400">
                  {project.year}
                </p>
              </div>
              <p className="mt-2 text-base leading-7 text-neutral-700 dark:text-neutral-300">
                {project.description}
              </p>
              <TechIcons tools={project.tools} />
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-4xl border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          Personal
        </h2>
        <div className="mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">
          {personalProjects.map((project) => (
            <article key={`${project.title}-${project.year}`} className="py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <h3 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400">
                  {project.year}
                </p>
              </div>
              <p className="mt-2 text-base leading-7 text-neutral-700 dark:text-neutral-300">
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
