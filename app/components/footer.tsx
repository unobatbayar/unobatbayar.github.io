"use client";

import { metaData, socialLinks } from "app/config";
import ContactEmail from "./contact-email";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-neutral-200/80 pt-6 text-base text-neutral-600 dark:border-neutral-800 dark:text-neutral-300 lg:mt-24">
      <span>
        <time>© {YEAR}</time>{" "}
        <a
          className="no-underline transition-colors hover:text-neutral-700 dark:hover:text-neutral-200"
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.name}
        </a>
      </span>
      <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">
        ·
      </span>
      <ContactEmail
        encoded={socialLinks.emailEncoded}
        className="inline-flex items-center text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
        iconClassName="h-4 w-4"
      />
    </small>
  );
}
