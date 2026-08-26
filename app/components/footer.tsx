"use client";

import { metaData, socialLinks } from "app/config";
import ContactEmail from "./contact-email";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="mt-14 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-term-border pt-5 text-sm text-term-muted lg:mt-20">
      <span>
        <time>© {YEAR}</time> {metaData.name.toLowerCase()}
      </span>
      <span aria-hidden="true" className="text-term-faint">
        ·
      </span>
      <ContactEmail
        encoded={socialLinks.emailEncoded}
        className="inline-flex items-center text-term-muted transition-colors hover:text-term-accent"
      />
    </small>
  );
}
