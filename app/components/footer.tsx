"use client";

import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="mt-16 block border-t border-neutral-200/80 pt-6 text-base text-neutral-600 dark:border-neutral-800 dark:text-neutral-300 lg:mt-24">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline transition-colors hover:text-neutral-700 dark:hover:text-neutral-200"
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.name}
      </a>
    </small>
  );
}
