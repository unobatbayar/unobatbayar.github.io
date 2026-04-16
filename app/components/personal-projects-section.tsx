import Link from "next/link";
import ProjectCard from "./project-card";
import { personalProjects } from "../projects/project-data";

type PersonalProjectsSectionProps = {
  limit?: number;
  showMoreLink?: boolean;
};

export default function PersonalProjectsSection({
  limit,
  showMoreLink = false,
}: PersonalProjectsSectionProps) {
  const projects = typeof limit === "number" ? personalProjects.slice(0, limit) : personalProjects;

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div>
          <h2 className="mb-2 text-2xl font-medium tracking-tight text-black dark:text-white">
            Personal Projects
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            Products, experiments, and tools I build to explore ideas, improve my craft, and test new technologies.
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
      <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={`${project.title}-${project.year}`} project={project} />
        ))}
      </div>
    </>
  );
}

