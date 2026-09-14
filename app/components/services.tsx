import Link from "next/link";
import type { ReactNode } from "react";
import { freelanceServices, socialLinks } from "../config";
import { SectionLabel } from "./section-label";

type ServiceId = (typeof freelanceServices)[number]["id"];

function ServiceIcon({ id }: { id: ServiceId }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5 shrink-0 text-term-accent",
    "aria-hidden": true as const,
  };

  const icons: Record<ServiceId, ReactNode> = {
    websites: (
      <svg {...common}>
        <rect x="3.5" y="4.5" width="17" height="13" rx="1.5" />
        <path d="M3.5 8.5h17" />
        <circle cx="6.2" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="8.4" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
        <path d="M8 17.5h8" />
      </svg>
    ),
    apps: (
      <svg {...common}>
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M10 5h4" />
        <circle cx="12" cy="18.2" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
    systems: (
      <svg {...common}>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
        <path d="M10.5 7h3M7 10.5v3M17 10.5v3M10.5 17h3" />
      </svg>
    ),
  };

  return icons[id];
}

export function Services() {
  return (
    <section className="space-y-3">
      <SectionLabel>services</SectionLabel>
      <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
        I take on freelance work: websites, apps, and systems.
      </p>

      <div className="divide-y divide-term-border border-t border-term-border">
        {freelanceServices.map((service) => (
          <div
            key={service.id}
            className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div className="flex min-w-0 items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-term-border text-term-accent">
                <ServiceIcon id={service.id} />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-term-fg">{service.name}</p>
                <p className="text-sm text-term-faint">{service.detail}</p>
              </div>
            </div>
            <p className="shrink-0 pl-11 text-sm text-term-muted sm:pl-0">
              {service.price}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-2">
        <a
          href={socialLinks.x}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-term-accent px-4 py-2 text-sm text-term-accent transition hover:bg-term-accent hover:text-term-bg"
        >
          Get services
        </a>
        <Link
          href="/projects"
          className="border border-term-border px-4 py-2 text-sm text-term-muted transition hover:border-term-accent hover:text-term-accent"
        >
          See past work
        </Link>
      </div>
    </section>
  );
}
