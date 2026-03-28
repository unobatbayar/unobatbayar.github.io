import { homeContent } from "./config";
import PortfolioHero from "./components/portfolio-hero";
import WorkProjectsSection from "./components/work-projects-section";
import PersonalProjectsSection from "./components/personal-projects-section";

export default function Page() {
  return (
    <div className="space-y-16">
      <PortfolioHero />

      <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 md:grid-cols-3">
          {homeContent.strengths.map((strength) => (
            <div
              key={strength.title}
              className="glass-panel rounded-[1.75rem] p-5"
            >
              <p className="text-base font-semibold tracking-tight text-black dark:text-white">
                {strength.title}
              </p>
              <p className="mt-3 text-[0.98rem] leading-7 text-neutral-700 dark:text-neutral-300">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-panel rounded-[1.75rem] p-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-300">
            Interests
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {homeContent.interests.map((interest) => (
              <span
                key={interest}
                className="glass-pill rounded-full px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-panel rounded-[1.75rem] p-6">
        <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-300">
              About
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-black dark:text-white">
              Solving problems with clear, practical software.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-neutral-700 dark:text-neutral-200">
            I build web and mobile products with a focus on clarity, performance, and maintainability. My experience includes consumer apps, internal tools, and independent projects, with work spanning interface design, frontend implementation, and backend systems.
          </p>
        </div>
      </section>

      <section className="space-y-12">
        <PersonalProjectsSection limit={3} showMoreLink />
        <WorkProjectsSection limit={3} showMoreLink />
      </section>
    </div>
  );
}
