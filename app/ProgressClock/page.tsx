import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "../components/section-label";

export const metadata: Metadata = {
  title: "Progress Clock",
  description:
    "See the day, week, month, year, and life as progress. A clock, goals, and a life calendar for iPhone.",
  alternates: {
    canonical: "/ProgressClock",
  },
  openGraph: {
    title: "Progress Clock",
    description:
      "See the day, week, month, year, and life as progress. A clock, goals, and a life calendar for iPhone.",
    url: "/ProgressClock",
    type: "website",
    images: [
      {
        url: "/ProgressClock/clock.png",
        width: 1179,
        height: 2556,
        alt: "Progress Clock",
      },
    ],
  },
};

const APP_STORE = "https://apps.apple.com/us/app/progress-clock/id6446752758";

const screens = [
  {
    src: "/ProgressClock/clock.png",
    label: "Clock",
    alt: "Clock tab showing a day dial at 42 percent, analog hands, and week, month, and year bars",
  },
  {
    src: "/ProgressClock/goal.png",
    label: "Goal",
    alt: "Goal tab with a countdown named Clean room at 8 percent, 28 days remaining",
  },
  {
    src: "/ProgressClock/life.png",
    label: "Life",
    alt: "Life calendar of weeks lived, grouped by decade, with 1490 weeks filled in",
  },
];

const features = [
  {
    name: "Clock",
    detail:
      "A dial for today, analog hands, and bars for the week, month, and year. Remaining time under each one.",
  },
  {
    name: "Goal",
    detail:
      "Countdowns, timers, and time since a day that mattered. One goal is included. Premium unlocks more.",
  },
  {
    name: "Life",
    detail:
      "Every week as a dot. Set a birthdate and see childhood through later decades on one calendar.",
  },
  {
    name: "Widgets",
    detail:
      "Small and medium Home Screen widgets are free. Large, Lock Screen, and Goal widgets are Premium.",
  },
  {
    name: "Themes",
    detail:
      "Progressium and Mono are free. The rest of the palettes, including dark and light, sit behind Premium.",
  },
  {
    name: "Local",
    detail:
      "Birthdate, goals, and settings stay on the device. No account. Purchases go through Apple.",
  },
];

export default function ProgressClock() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="cyber-text text-sm">// progress clock</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">
          See time as progress.
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          Progress Clock is a clock that shows how much of today has already
          passed — then the week, the month, the year, and a life. Use it as a
          reminder that the day is still open, not as a countdown to the end.
        </p>
        <a
          href={APP_STORE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          aria-label="Download on the App Store"
        >
          <img
            src="/ProgressClock/app-store.svg"
            alt="Download on the App Store"
            width={180}
            height={60}
            className="h-[60px] w-auto"
          />
        </a>
      </section>

      <section className="space-y-3">
        <SectionLabel>screens</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {screens.map((screen) => (
            <figure key={screen.src} className="mx-auto max-w-[240px] sm:max-w-none">
              <img
                src={screen.src}
                alt={screen.alt}
                width={1179}
                height={2556}
                className="w-full rounded-[1.75rem] border border-term-border bg-white"
              />
              <figcaption className="mt-3 text-sm text-term-muted">
                {screen.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>features</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <p className="shrink-0 text-sm text-term-fg">{feature.name}</p>
              <p className="text-sm leading-6 text-term-muted sm:max-w-md sm:text-right">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>premium</SectionLabel>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          Progress Clock Premium is an optional monthly subscription. It unlocks
          extra goals, Lock Screen and Large widgets, and every theme. The clock
          and the life calendar work without it. Payment is handled by Apple.
          Cancel anytime in Settings.
        </p>
      </section>

      <section className="space-y-3">
        <SectionLabel>privacy</SectionLabel>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          Birthdate, goals, and preferences stay on the device. There is no
          account, no analytics, and no advertising. Optional goal alerts use
          local notifications. Purchases are processed by Apple.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link
            href="/ProgressClock/privacy"
            className="text-term-accent hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/ProgressClock/terms"
            className="text-term-accent hover:underline"
          >
            Terms
          </Link>
        </div>
      </section>
    </div>
  );
}
