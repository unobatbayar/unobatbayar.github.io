"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { contact, freelanceServices } from "../config";
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
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const copyReset = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])"
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (copyReset.current) window.clearTimeout(copyReset.current);
    };
  }, []);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(contact.phoneDisplay);
      setCopied(true);
      if (copyReset.current) window.clearTimeout(copyReset.current);
      copyReset.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

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
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          className="border border-term-accent px-4 py-2 text-sm text-term-accent transition hover:bg-term-accent hover:text-term-bg"
        >
          Get services
        </button>
        <Link
          href="/projects"
          className="border border-term-border px-4 py-2 text-sm text-term-muted transition hover:border-term-accent hover:text-term-accent"
        >
          See past work
        </Link>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-4 sm:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="w-full max-w-sm border border-term-border bg-term-bg p-5 shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 id={titleId} className="text-base text-term-fg">
                Get in touch
              </h3>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-term-faint transition hover:text-term-accent"
                aria-label="Close"
              >
                close
              </button>
            </div>
            <p className="mt-2 text-sm leading-6 text-term-muted">
              Call or message this number and we can scope the project.
            </p>
            <p className="mt-4 font-mono text-xl tracking-wide text-term-fg">
              {contact.phoneDisplay}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`tel:${contact.phoneE164}`}
                className="border border-term-accent bg-term-accent px-4 py-2 text-sm text-term-bg transition hover:opacity-90"
              >
                Call
              </a>
              <button
                type="button"
                onClick={copyNumber}
                className="border border-term-border px-4 py-2 text-sm text-term-muted transition hover:border-term-accent hover:text-term-accent"
              >
                {copied ? "Copied" : "Copy number"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
