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
    <section className="space-y-12">
      <div className="glass-panel glass-panel-strong rounded-[2.25rem] px-6 py-9 sm:px-8 sm:py-10">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
          Blog
        </p>
        <h1 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-3xl">
          Notes and things I find interesting.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-700 dark:text-neutral-200">
          A small collection of thoughts, ideas, and things worth sharing.
        </p>
      </div>

      <div className="space-y-4">
        <div className="px-1">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            Entries
          </p>
        </div>

        <div className="grid gap-4">
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
              className="group block"
              href={`/blog/${post.slug}`}
            >
              <article className="glass-panel rounded-[1.75rem] p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-blue-500/5 dark:group-hover:border-blue-900">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold tracking-tight text-black transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
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
                    <span className="text-sm text-neutral-400 transition-transform duration-300 group-hover:translate-x-0.5 dark:text-neutral-500">
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
