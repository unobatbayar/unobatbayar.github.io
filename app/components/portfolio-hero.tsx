import Link from "next/link";
import { homeContent } from "../config";
import YearsOfExperience from "./years-of-experience";
import ProjectHoneycomb from "./project-honeycomb";

const tagToneClasses = {
  sky: "border-sky-200 text-sky-700 dark:border-sky-800/70 dark:text-sky-300",
  emerald:
    "border-emerald-200 text-emerald-700 dark:border-emerald-800/70 dark:text-emerald-300",
  violet:
    "border-violet-200 text-violet-700 dark:border-violet-800/70 dark:text-violet-300",
} as const;

export default function PortfolioHero() {
  return (
    <section className="pt-2 pb-2 sm:pt-4">
      <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center xl:gap-16">
        <div>
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base text-neutral-500 dark:text-neutral-400">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <span>{homeContent.role}</span>
            <span aria-hidden="true">·</span>
            <YearsOfExperience startDate={homeContent.experienceStartDate} />
            <span aria-hidden="true">·</span>
            <span>{homeContent.location}</span>
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {homeContent.tags.map(({ label, tone }) => (
              <span
                key={label}
                className={`rounded-full border px-3 py-1 text-sm ${tagToneClasses[tone]}`}
              >
                {label}
              </span>
            ))}
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-black dark:text-white sm:text-5xl xl:text-[3.75rem]">
            {homeContent.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 dark:text-neutral-200">
            {homeContent.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <Link
              href="/projects"
              className="text-black underline decoration-neutral-300 underline-offset-[6px] transition hover:decoration-neutral-600 dark:text-white dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
            >
              See projects
            </Link>
            <Link
              href="/resume"
              className="underline decoration-neutral-300 underline-offset-[6px] transition hover:decoration-neutral-600 dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
            >
              Read resume
            </Link>
            <span className="text-neutral-500 dark:text-neutral-500">
              {homeContent.availability.toLowerCase()}.
            </span>
          </div>
        </div>

        <div className="hidden xl:block xl:justify-self-end">
          <ProjectHoneycomb />
        </div>
      </div>
    </section>
  );
}
