import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData, socialLinks } from "../config";

const navItems = {
  "/experience": { name: "Experience" },
  "/projects": { name: "Projects" },
  "/blog": { name: "Blog" },
};

export function Navbar() {
  return (
    <nav className="mb-12 border-b border-neutral-200 pb-6 pt-2 dark:border-neutral-800">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Link href="/" className="block text-3xl font-semibold tracking-tight text-black dark:text-white">
            {metaData.name}
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-600 dark:text-neutral-300">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.stackoverflow}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              Stack Overflow
            </a>
            <a
              href={socialLinks.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              App Store
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {Object.entries(navItems).map(([path, item]) => (
            <Link
              key={path}
              href={path}
              className="text-base text-neutral-700 transition hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-1">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
