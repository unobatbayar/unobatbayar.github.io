import type { Metadata } from "next";
import { HomeContent } from "./components/home-content";

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
  return <HomeContent />;
}
