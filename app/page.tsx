import type { Metadata } from "next";
import { homeContent } from "./config";
import PortfolioHero from "./components/portfolio-hero";
import WorkProjectsSection from "./components/work-projects-section";
import PersonalProjectsSection from "./components/personal-projects-section";

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description:
    "Portfolio of Usukhbayar Batbayar, a software engineer building web, mobile, and backend products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Usukhbayar Batbayar | Software Engineer",
    description:
      "Portfolio of Usukhbayar Batbayar, a software engineer building web, mobile, and backend products.",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="space-y-20 sm:space-y-24">
      <PortfolioHero />

      <section className="grid gap-6 md:grid-cols-[minmax(0,160px)_minmax(0,1fr)] md:gap-12">
        <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          About
        </h2>
        <p className="max-w-2xl text-base leading-8 text-neutral-800 dark:text-neutral-200">
          {homeContent.about}
        </p>
      </section>

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

      <section className="space-y-16">
        <WorkProjectsSection showMoreLink variant="marquee" />
        <PersonalProjectsSection showMoreLink variant="marquee" />
      </section>
    </div>
  );
}
