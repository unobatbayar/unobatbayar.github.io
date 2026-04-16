import Link from "next/link";
import ProjectCard from "./project-card";
import { workProjects } from "../projects/project-data";

type WorkProjectsSectionProps = {
  className?: string;
  limit?: number;
  showMoreLink?: boolean;
  variant?: "grid" | "marquee";
};

export default function WorkProjectsSection({
  className = "",
  limit,
  showMoreLink = false,
  variant = "grid",
}: WorkProjectsSectionProps) {
  const projects = typeof limit === "number" ? workProjects.slice(0, limit) : workProjects;

  return (
    <>
      <div
        className={`mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4 ${className}`}
      >
        <div>
          <h2 className="mb-2 text-2xl font-medium tracking-tight text-black dark:text-white">
            Professional Work
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            Selected products and software I helped build in professional teams across consumer and internal platforms.
          </p>
        </div>
        {showMoreLink ? (
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            See all projects
          </Link>
        ) : null}
      </div>
      {projects.length > 0 ? (
        variant === "marquee" ? (
          <div className="projects-marquee mb-12">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-neutral-50 to-transparent dark:from-[#121212]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-neutral-50 to-transparent dark:from-[#121212]"
              aria-hidden="true"
            />

            <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="projects-marquee-track gap-6 pr-6 [--projects-marquee-duration:80s]" role="list">
                {projects.concat(projects).map((project, idx) => (
                  <div
                    key={`${project.title}-${project.year}-${idx}`}
                    className="w-[320px] shrink-0 sm:w-[360px]"
                    role="listitem"
                    aria-hidden={idx >= projects.length}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-12 grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={`${project.title}-${project.year}`} project={project} />
            ))}
          </div>
        )
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400 mb-12">
          Work projects will be displayed here.
        </p>
      )}
    </>
  );
}

