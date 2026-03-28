"use client";

import { homeContent } from "../config";

function getYearsOfExperience(startDate: string) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  const hasReachedAnniversary =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());

  if (!hasReachedAnniversary) {
    years -= 1;
  }

  return `${Math.max(years, 0)}+`;
}

export default function HeroStats() {
  const experienceValue = getYearsOfExperience(homeContent.experienceStartDate);

  return (
    <>
      {homeContent.highlightStats.map((item, index) => (
        <div
          key={item.label}
          className="glass-card rounded-[1.5rem] p-4"
        >
          <p className="text-2xl font-semibold tracking-tight text-black dark:text-white">
            {index === 0 ? experienceValue : item.value}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-600 dark:text-neutral-300">
            {item.label}
          </p>
        </div>
      ))}
    </>
  );
}
