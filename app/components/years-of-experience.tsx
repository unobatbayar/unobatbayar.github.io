"use client";

import { useEffect, useState } from "react";

function computeYears(startDate: string) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  const reachedAnniversary =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());

  if (!reachedAnniversary) {
    years -= 1;
  }

  return Math.max(years, 0);
}

type Props = {
  startDate: string;
  suffix?: string;
};

export default function YearsOfExperience({ startDate, suffix = "+ years of experience" }: Props) {
  const [years, setYears] = useState(() => computeYears(startDate));

  useEffect(() => {
    setYears(computeYears(startDate));
  }, [startDate]);

  return (
    <span>
      {years}
      {suffix}
    </span>
  );
}
