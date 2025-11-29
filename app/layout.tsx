import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-switch";
import { metaData, socialLinks } from "./config";
import BackgroundMusic from "./components/background-music";

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
  icons: {
    icon: "/images/profile.jpeg",
    shortcut: "/images/profile.jpeg",
    apple: "/images/profile.jpeg",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
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
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
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
                socialLinks?.chess,
              ].filter(Boolean),
              "jobTitle": "Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "knowsAbout": [
                "Web Development",
                "Mobile App Development", 
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Judo",
                "Music",
                "Martial Arts"
              ]
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
        <BackgroundMusic />
      </body>
    </html>
  );
}
