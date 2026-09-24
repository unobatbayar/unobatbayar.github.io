import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getBlogPosts } from "app/lib/posts";
import { metaData, socialLinks } from "app/config";
import { BlogArticleHeader } from "../blog-article-header";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : metaData.ogImage;

  const tags = post.metadata.tags ? post.metadata.tags.split(',').map(tag => tag.trim()) : [];
  
  return {
    title,
    description,
    keywords: tags.join(', '),
    authors: [{ name: metaData.name }],
    creator: metaData.name,
    publisher: metaData.name,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: new URL(`blog/${post.slug}`, metaData.baseUrl).href,
      siteName: metaData.name,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: metaData.twitterHandle,
      images: [ogImage],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function Blog({ params }) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="max-w-3xl px-1">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: new URL(
              post.metadata.image || metaData.ogImage,
              metaData.baseUrl
            ).href,
            url: new URL(`blog/${post.slug}`, metaData.baseUrl).href,
            author: {
              "@type": "Person",
              name: metaData.name,
              url: metaData.baseUrl,
              sameAs: [
                socialLinks?.x,
                socialLinks?.github,
                socialLinks?.linkedin,
                socialLinks?.stackoverflow,
              ].filter(Boolean),
            },
            publisher: {
              "@type": "Person",
              name: metaData.name,
              url: metaData.baseUrl,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${metaData.baseUrl}/blog/${post.slug}`,
            },
            keywords: post.metadata.tags ? post.metadata.tags.split(',').map(tag => tag.trim()) : [],
            articleSection: "Blog",
            wordCount: post.content.split(' ').length,
          }),
        }}
      />
      <BlogArticleHeader
        slug={post.slug}
        title={post.metadata.title}
        publishedAt={post.metadata.publishedAt}
      />
      <article className="prose prose-quoteless max-w-none">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
