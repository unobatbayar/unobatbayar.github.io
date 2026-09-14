import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SectionLabel } from "../components/section-label";
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
        className="text-term-accent underline underline-offset-2 hover:opacity-80"
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
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="cyber-text text-sm">// experience</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">Experience</h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {experienceBasics.summary}
        </p>
        <p className="text-sm text-term-faint">
          {experienceBasics.location} · {experienceBasics.totalExp} total
        </p>
      </header>

      <section className="space-y-3">
        <SectionLabel>work</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {workExperience.map((job) => (
            <article key={job.id} className="py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-base text-term-fg">{job.position}</h3>
                  <p className="mt-1 text-sm text-term-muted">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-term-accent"
                      >
                        {job.name}
                      </a>
                    ) : (
                      job.name
                    )}
                  </p>
                </div>
                <div className="shrink-0 text-sm text-term-faint sm:text-right">
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
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-term-muted">
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

      <section className="space-y-3">
        <SectionLabel>skills</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-8"
            >
              <h3 className="w-28 shrink-0 text-sm text-term-faint">
                {group.label.toLowerCase()}
              </h3>
              <p className="text-sm leading-6 text-term-muted">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>education</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {education.map((item) => (
            <article key={item.id} className="py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-base text-term-fg">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-term-accent"
                      >
                        {item.institution}
                      </a>
                    ) : (
                      item.institution
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-term-muted">
                    {item.studyType}, {item.area}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-term-faint">
                  {formatDateRange(item.startDate, item.endDate, false)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>volunteer</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {volunteer.map((item) => (
            <article key={item.id} className="py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-base text-term-fg">{item.position}</h3>
                  <p className="mt-1 text-sm text-term-muted">
                    {item.organization}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-term-faint">
                  {formatDateRange(item.startDate, item.endDate, false)}
                </p>
              </div>
              <p className="mt-2 text-sm leading-6 text-term-muted">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>profiles</SectionLabel>
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-term-border pt-4 text-sm text-term-muted">
          {experienceBasics.profiles.map((profile) =>
            profile.url ? (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-term-accent hover:underline"
              >
                {profile.network.toLowerCase()}
              </a>
            ) : (
              <span key={profile.network}>
                {profile.network.toLowerCase()}
                {profile.username ? ` · ${profile.username}` : ""}
              </span>
            )
          )}
        </div>
        <p className="max-w-2xl text-sm leading-6 text-term-faint">
          {experienceBasics.objective}
        </p>
      </section>
    </section>
  );
}
