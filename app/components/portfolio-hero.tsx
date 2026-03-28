import Link from "next/link";
import { homeContent } from "../config";
import HeroStats from "./hero-stats";

export default function PortfolioHero() {
  return (
    <section className="glass-panel relative overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-8 sm:py-12 xl:px-10 xl:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_28%)]" />
      <div className="relative">
        <div className="max-w-4xl">
          <div className="mb-4 flex flex-wrap gap-2">
            {homeContent.roleTags.map((tag, index) => {
              const classes = [
                "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/80 dark:bg-blue-950/50 dark:text-blue-300",
                "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/80 dark:bg-emerald-950/50 dark:text-emerald-300",
                "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-900/80 dark:bg-violet-950/50 dark:text-violet-300",
              ];

              return (
                <p
                  key={tag}
                  className={`inline-flex rounded-full border px-3 py-1.5 text-[0.78rem] font-medium uppercase tracking-[0.22em] ${classes[index]}`}
                >
                  {tag}
                </p>
              );
            })}
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl xl:text-6xl">
            {homeContent.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700 dark:text-neutral-200">
            {homeContent.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-neutral-950 px-4 py-2.5 text-base font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              View projects
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2.5 text-base font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
            >
              Open resume
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {homeContent.quickFacts.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
              >
                {fact}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
}
