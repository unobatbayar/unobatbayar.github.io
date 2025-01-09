import { metaData } from "./config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
  };
}
