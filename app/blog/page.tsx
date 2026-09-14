import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "app/components/section-label";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes and writing by Usukhbayar Batbayar on things he finds interesting, including software, ideas, and whatever catches his attention.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${metaData.name}`,
    description:
      "Notes and writing by Usukhbayar Batbayar on things he finds interesting, including software, ideas, and whatever catches his attention.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="cyber-text text-sm">// blog</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">Blog</h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          Notes on software and things I find interesting.
        </p>
      </header>

      <section className="space-y-3">
        <SectionLabel>posts</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {allBlogs
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                key={post.slug}
                className="group block py-4"
                href={`/blog/${post.slug}`}
              >
                <article>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                      <h2 className="text-base text-term-fg transition-colors group-hover:text-term-accent">
                        {post.metadata.title}
                      </h2>
                      <p className="mt-1 max-w-2xl text-sm leading-6 text-term-muted">
                        {post.metadata.summary}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm tabular-nums text-term-faint">
                      {formatDate(post.metadata.publishedAt, false)}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </section>
    </section>
  );
}
