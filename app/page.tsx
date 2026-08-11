import type { Metadata } from "next";
import Link from "next/link";
import { homeContent } from "./config";

export const metadata: Metadata = {
  title: "Usukhbayar Batbayar",
  description:
    "Usukhbayar Batbayar's website",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Usukhbayar Batbayar",
    description:
    "Usukhbayar Batbayar's website",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-5">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
          {homeContent.headline}
        </h1>
        <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300">
          {homeContent.intro}
        </p>
        <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300">
          {homeContent.about}
        </p>
      </section>

      <section className="max-w-3xl">
        <p className="text-base leading-8 text-neutral-700 dark:text-neutral-300">
          Explore my <Link href="/experience" className="underline underline-offset-4 hover:text-neutral-950 dark:hover:text-neutral-100">experience</Link>,{" "}
          <Link href="/projects" className="underline underline-offset-4 hover:text-neutral-950 dark:hover:text-neutral-100">projects</Link>, or{" "}
          <Link href="/blog" className="underline underline-offset-4 hover:text-neutral-950 dark:hover:text-neutral-100">blog</Link>.
        </p>
      </section>
    </div>
  );
}
