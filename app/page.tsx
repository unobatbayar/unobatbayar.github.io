import type { Metadata } from "next";
import { pageSocialMetadata } from "./lib/social-metadata";
import { HomeContent } from "./components/home-content";
import { metaData } from "./config";

export const metadata: Metadata = {
  ...pageSocialMetadata({
    title: metaData.title,
    description: metaData.description,
    path: "/",
  }),
  title: { absolute: metaData.title },
};

export default function Page() {
  return <HomeContent />;
}
