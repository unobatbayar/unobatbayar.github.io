import type { Metadata } from "next";
import { getBlogPosts } from "app/lib/posts";
import { pageSocialMetadata } from "app/lib/social-metadata";
import { BlogPostsContent } from "./blog-posts-content";

export const metadata: Metadata = pageSocialMetadata({
  title: "Blog",
  description:
    "Notes and writing by Usukhbayar Batbayar on things he finds interesting, including software, ideas, and whatever catches his attention.",
  path: "/blog",
});

export default function BlogPosts() {
  const allBlogs = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }

    return 1;
  });

  return <BlogPostsContent posts={allBlogs} />;
}
