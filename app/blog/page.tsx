import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes and writing by Usukhbayar Batbayar on things he finds interesting, including software, ideas, and whatever catches his attention.",
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
    <section className="space-y-10">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
          Blog
        </h1>
        <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300">
          Notes on software and things I find interesting.
        </p>
      </header>

      <div className="max-w-4xl border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
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
              className="group block py-5"
              href={`/blog/${post.slug}`}
            >
              <article className="transition-colors">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <h2 className="text-lg font-medium tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-600 dark:text-neutral-100 dark:group-hover:text-neutral-300">
                      {post.metadata.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                      {post.metadata.summary}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 sm:pt-0.5">
                    <p className="text-sm tabular-nums text-neutral-500 dark:text-neutral-400">
                      {formatDate(post.metadata.publishedAt, false)}
                    </p>
                    <span className="text-sm text-neutral-400 dark:text-neutral-500">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
