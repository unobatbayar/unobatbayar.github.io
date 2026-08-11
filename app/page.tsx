import type { Metadata } from "next";
import { SectionLabel } from "./components/section-label";
import { homeContent } from "./config";

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
    </div>
  );
}
