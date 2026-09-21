"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/ProgressClock", label: "overview" },
  { href: "/ProgressClock/privacy", label: "privacy" },
  { href: "/ProgressClock/terms", label: "terms" },
];

function stripSlash(path: string) {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function ProgressClockNav() {
  const pathname = stripSlash(usePathname() ?? "");

  return (
    <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
      {nav.map((item) => {
        const href = stripSlash(item.href);
        const active =
          href === "/ProgressClock"
            ? pathname === "/ProgressClock"
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
