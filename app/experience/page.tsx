import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  education,
  experienceBasics,
  formatDateRange,
  skillGroups,
  volunteer,
  workExperience,
} from "./experience-data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience, skills, and education of software engineer Usukhbayar Batbayar.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Experience | Usukhbayar Batbayar",
    description:
      "Work experience, skills, and education of software engineer Usukhbayar Batbayar.",
    url: "/experience",
    type: "website",
  },
};

function BulletText({
  text,
  links,
}: {
  text: string;
  links?: { label: string; href: string }[];
}) {
  if (!links?.length) {
    return <>{text}</>;
  }

  const parts: ReactNode[] = [];
  let remaining = text;

  links.forEach((link, index) => {
    const matchIndex = remaining.indexOf(link.label);
    if (matchIndex === -1) {
      return;
    }

    if (matchIndex > 0) {
      parts.push(remaining.slice(0, matchIndex));
    }

    parts.push(
      <a
        key={`${link.href}-${index}`}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:text-neutral-950 dark:hover:text-neutral-100"
      >
        {link.label}
      </a>
    );

    remaining = remaining.slice(matchIndex + link.label.length);
  });

  if (remaining) {
    parts.push(remaining);
  }

  return <>{parts}</>;
}

export default function Experience() {
  return (
    <section className="space-y-10">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
          Experience
        </h1>
        <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300">
          {experienceBasics.summary}
        </p>
        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">
          {experienceBasics.location} · {experienceBasics.totalExp} total ·{" "}
          {experienceBasics.relExp} relevant
        </p>
      </header>

      <section className="max-w-4xl border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          Work
        </h2>
        <div className="mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">
          {workExperience.map((job) => (
            <article key={job.id} className="py-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                    {job.position}
                  </h3>
                  <p className="mt-1 text-base text-neutral-700 dark:text-neutral-300">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {job.name}
                      </a>
                    ) : (
                      job.name
                    )}
                  </p>
                </div>
                <div className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400 sm:text-right">
                  <p>
                    {formatDateRange(
                      job.startDate,
                      job.endDate,
                      job.isWorkingHere
                    )}
                  </p>
                  {job.years ? <p className="mt-0.5">{job.years}</p> : null}
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-neutral-700 dark:text-neutral-300">
                {job.bullets.map((bullet) => (
                  <li key={bullet.text}>
                    <BulletText text={bullet.text} links={bullet.links} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-4xl border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          Skills
        </h2>
        <div className="mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col gap-2 py-4 sm:flex-row sm:gap-8"
            >
              <h3 className="w-28 shrink-0 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {group.label}
              </h3>
              <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          Education
        </h2>
        <div className="mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">
          {education.map((item) => (
            <article key={item.id} className="py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {item.institution}
                      </a>
                    ) : (
                      item.institution
                    )}
                  </h3>
                  <p className="mt-1 text-base text-neutral-700 dark:text-neutral-300">
                    {item.studyType}, {item.area}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400">
                  {formatDateRange(item.startDate, item.endDate, false)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-4xl border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          Volunteer
        </h2>
        <div className="mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">
          {volunteer.map((item) => (
            <article key={item.id} className="py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                    {item.position}
                  </h3>
                  <p className="mt-1 text-base text-neutral-700 dark:text-neutral-300">
                    {item.organization}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400">
                  {formatDateRange(item.startDate, item.endDate, false)}
                </p>
              </div>
              <p className="mt-3 text-base leading-7 text-neutral-700 dark:text-neutral-300">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-4xl border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          Profiles
        </h2>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-base text-neutral-700 dark:text-neutral-300">
          {experienceBasics.profiles.map((profile) =>
            profile.url ? (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-neutral-950 dark:hover:text-neutral-100"
              >
                {profile.network}
              </a>
            ) : (
              <span key={profile.network}>
                {profile.network}
                {profile.username ? ` · ${profile.username}` : ""}
              </span>
            )
          )}
        </div>
        <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
          {experienceBasics.objective}
        </p>
      </section>
    </section>
  );
}
