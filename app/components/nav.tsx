import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { socialLinks } from "../config";

const navItems = [
  { path: "/experience", label: "exp" },
  { path: "/projects", label: "projects" },
  { path: "/blog", label: "blog" },
];

export function Navbar() {
  return (
    <nav className="mb-10 border-b border-term-border pb-5 pt-1">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <Link
            href="/"
            className="block text-base text-term-fg transition hover:text-term-accent"
          >
            unobatbayar.github.io
          </Link>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-term-muted">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-term-accent"
            >
              github
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-term-accent"
            >
              linkedin
            </a>
            <a
              href={socialLinks.stackoverflow}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-term-accent"
            >
              stackoverflow
            </a>
            <a
              href={socialLinks.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-term-accent"
            >
              appstore
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-term-accent transition hover:underline"
            >
              /{item.label}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
