import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import SiteBackground from "./components/site-background";
import { ThemeProvider } from "./components/theme-switch";
import { metaData, socialLinks } from "./config";

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.name}`,
  },
  description: metaData.description,
  keywords: metaData.keywords,
  authors: [{ name: metaData.author }],
  creator: metaData.author,
  publisher: metaData.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: metaData.baseUrl,
    siteName: metaData.name,
    title: metaData.title,
    description: metaData.description,
    images: [
      {
        url: metaData.ogImage,
        width: 1200,
        height: 630,
        alt: metaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaData.title,
    description: metaData.description,
    creator: metaData.twitterHandle,
    images: [metaData.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: metaData.baseUrl,
    types: {
      "application/rss+xml": `${metaData.baseUrl}feed/rss.xml`,
      "application/atom+xml": `${metaData.baseUrl}feed/atom.xml`,
      "application/feed+json": `${metaData.baseUrl}feed/feed.json`,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)} suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="RSS Feed"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/atom.xml"
          title="Atom Feed"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href="/feed.json"
          title="JSON Feed"
        />
      </head>
      <body className="mx-auto flex min-h-screen flex-col items-center justify-center antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": metaData.name,
              "url": metaData.baseUrl,
              "description": metaData.description,
              "image": `${metaData.baseUrl}${metaData.ogImage}`,
              "sameAs": [
                socialLinks?.github,
                socialLinks?.linkedin,
                socialLinks?.stackoverflow,
                socialLinks?.appstore,
              ].filter(Boolean),
              "jobTitle": "Software Engineer",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ulaanbaatar",
                "addressCountry": "MN"
              },
              "knowsAbout": [
                "Web Development",
                "Mobile App Development", 
                "Backend Development",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "FastAPI",
                "Python",
                "Unity",
                "iOS",
                "Android",
                "SwiftUI",
                "Machine Learning Systems",
                "Cybersecurity"
              ]
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteBackground />
          <main className="relative z-10 mt-2 flex min-w-0 w-full max-w-[1440px] flex-auto flex-col px-5 pb-20 pt-2 sm:px-6 md:mt-6 md:px-8 lg:px-10 lg:pb-32 xl:px-12">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
