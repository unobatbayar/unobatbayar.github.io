"use client";

import { socialLinks } from "../config";
import { AppGalaxy } from "./app-galaxy";
import { SectionLabel } from "./section-label";
import { Services } from "./services";
import { useLanguage } from "./language";

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <SectionLabel>{t.home.aboutLabel}</SectionLabel>
        <h1 className="text-2xl text-term-fg sm:text-3xl">
          {t.home.headline}
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {t.home.intro}
        </p>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {t.home.about}
        </p>
      </section>

      <AppGalaxy />

      <Services />

      <section className="space-y-3">
        <SectionLabel>{t.home.contactLabel}</SectionLabel>
        <a
          href={socialLinks.x}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex max-w-md items-center gap-4 border border-term-border px-4 py-3 transition hover:border-term-accent"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-term-border text-term-fg transition group-hover:border-term-accent group-hover:text-term-accent">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.828L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm text-term-fg">
              {socialLinks.xHandle}
            </span>
            <span className="block text-sm text-term-faint">
              {t.home.contactAction}
            </span>
          </span>
          <span
            className="text-sm text-term-accent opacity-60 transition group-hover:opacity-100"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </section>
    </div>
  );
}
