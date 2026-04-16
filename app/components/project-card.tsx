import Image from "next/image";
import type { Project } from "../projects/project-data";
import TiltCard from "./tilt-card";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <TiltCard className="h-full rounded-2xl">
        <div className="glass-panel relative flex h-[320px] overflow-hidden rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-blue-500/10 dark:group-hover:border-blue-900">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.08),transparent_32%,transparent_68%,rgba(99,102,241,0.08))]" />
          <div className="relative flex h-full flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="glass-card flex h-16 w-16 items-center justify-center rounded-2xl">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-xl object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-black transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] overflow-hidden">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-base text-neutral-600 dark:text-neutral-300">
                      {project.year}
                    </p>
                  </div>
                  <span className="hidden text-sm text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 sm:inline dark:text-neutral-500">
                    ↗
                  </span>
                </div>
              </div>
            </div>

            <p
              className="text-base leading-7 text-neutral-700 dark:text-neutral-200 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden"
              title={project.description}
            >
              {project.description}
            </p>

            <p
              className="mt-auto border-t border-neutral-200/80 pt-4 text-sm font-medium leading-6 text-blue-600 dark:border-neutral-800 dark:text-blue-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden"
              title={project.tools}
            >
              {project.tools}
            </p>
          </div>
        </div>
      </TiltCard>
    </a>
  );
}
