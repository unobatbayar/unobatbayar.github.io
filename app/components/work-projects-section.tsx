import Link from "next/link";
import ProjectCard from "./project-card";
import { workProjects } from "../projects/project-data";

type WorkProjectsSectionProps = {
  className?: string;
  limit?: number;
  showMoreLink?: boolean;
};

export default function WorkProjectsSection({
  className = "",
  limit,
  showMoreLink = false,
}: WorkProjectsSectionProps) {
  const projects = typeof limit === "number" ? workProjects.slice(0, limit) : workProjects;

  return (
    <>
      <div className={`mb-6 flex items-end justify-between gap-4 ${className}`}>
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
            className="hidden text-sm font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 sm:inline"
          >
            See all projects
          </Link>
        ) : null}
      </div>
      {projects.length > 0 ? (
        <div className="mb-12 grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={`${project.title}-${project.year}`} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400 mb-12">
          Work projects will be displayed here.
        </p>
      )}
    </>
  );
}

