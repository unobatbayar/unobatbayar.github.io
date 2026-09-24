import type { Metadata } from "next";

type SocialImage = {
  url: string;
  width?: number;
  height?: number;
  alt: string;
};

type LandingSocialOptions = {
  title: string;
  description: string;
  path: string;
  image: SocialImage;
  /** When true, page title is the app name only (no site suffix). */
  absoluteTitle?: boolean;
};

export function landingSocialMetadata({
  title,
  description,
  path,
  image,
  absoluteTitle = true,
}: LandingSocialOptions): Metadata {
  const ogImage = {
    url: image.url,
    width: image.width ?? 1200,
    height: image.height ?? 630,
    alt: image.alt,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: "Usukhbayar Batbayar",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export function pageSocialMetadata({
  title,
  description,
  path,
  image = {
    url: "/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: title,
  },
}: {
  title: string;
  description: string;
  path: string;
  image?: SocialImage;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: "Usukhbayar Batbayar",
      images: [
        {
          url: image.url,
          width: image.width ?? 1200,
          height: image.height ?? 630,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
