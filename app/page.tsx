import type { Metadata } from "next";
import { SectionLabel } from "./components/section-label";
import { Services } from "./components/services";
import { homeContent, socialLinks } from "./config";

export const metadata: Metadata = {
  title: "Usukhbayar Batbayar",
  description: "Usukhbayar Batbayar's website",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Usukhbayar Batbayar",
    description: "Usukhbayar Batbayar's website",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <SectionLabel>about</SectionLabel>
        <h1 className="text-2xl text-term-fg sm:text-3xl">{homeContent.headline}</h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {homeContent.intro}
        </p>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {homeContent.about}
        </p>
      </section>

      <section className="space-y-3">
        <SectionLabel>contact</SectionLabel>
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
            <span className="block text-sm text-term-faint">say hi on x</span>
          </span>
          <span
            className="text-sm text-term-accent opacity-60 transition group-hover:opacity-100"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </section>

      <Services />
    </div>
  );
}
