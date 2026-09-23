"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SectionLabel } from "./section-label";
import { useLanguage } from "./language";

function stripSlash(path: string) {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function AppLandingNav({ base }: { base: string }) {
  const { t } = useLanguage();
  const pathname = stripSlash(usePathname() ?? "");
  const items = [
    { href: base, label: t.landing.overview },
    { href: `${base}/privacy`, label: t.landing.privacy },
    { href: `${base}/terms`, label: t.landing.terms },
  ];

  return (
    <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
      {items.map((item) => {
        const href = stripSlash(item.href);
        const active =
          href === base
            ? pathname === base
            : pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              active
                ? "text-term-fg"
                : "text-term-accent transition hover:underline"
            }
            aria-current={active ? "page" : undefined}
          >
            /{item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppStoreBadge({
  href,
  src,
}: {
  href: string;
  src: string;
}) {
  const { t } = useLanguage();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      aria-label={t.landing.downloadAppStore}
    >
      <img
        src={src}
        alt={t.landing.downloadAppStore}
        width={180}
        height={60}
        className="h-[60px] w-auto"
      />
    </a>
  );
}

export function AppScreens({
  screens,
  width,
  height,
  imageClassName,
}: {
  screens: { src: string; label: string; alt: string }[];
  width: number;
  height: number;
  imageClassName: string;
}) {
  const { t } = useLanguage();

  return (
    <section className="space-y-3">
      <SectionLabel>{t.landing.screens}</SectionLabel>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {screens.map((screen) => (
          <figure key={screen.src} className="mx-auto max-w-[240px] sm:max-w-none">
            <img
              src={screen.src}
              alt={screen.alt}
              width={width}
              height={height}
              className={imageClassName}
            />
            <figcaption className="mt-3 text-sm text-term-muted">
              {screen.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function AppFeatures({
  features,
}: {
  features: { name: string; detail: string }[];
}) {
  const { t } = useLanguage();

  return (
    <section className="space-y-3">
      <SectionLabel>{t.landing.features}</SectionLabel>
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
  );
}

export function AppLegalLinks({ base }: { base: string }) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
      <Link
        href={`${base}/privacy`}
        className="text-term-accent hover:underline"
      >
        {t.landing.privacyPolicy}
      </Link>
      <Link href={`${base}/terms`} className="text-term-accent hover:underline">
        {t.landing.termsLabel}
      </Link>
    </div>
  );
}
