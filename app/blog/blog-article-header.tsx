"use client";

import {
  languageOptions,
  type Language,
  useLanguage,
} from "app/components/language";
import { blogCopy } from "./blog-posts-content";

function formatBlogDate(date: string, language: Language) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(
    languageOptions[language].locale,
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
}

export function BlogArticleHeader({
  slug,
  title,
  publishedAt,
}: {
  slug: string;
  title: string;
  publishedAt: string;
}) {
  const { language } = useLanguage();
  const copy = blogCopy[language];
  const translatedPost =
    copy.postCopy[slug as keyof typeof copy.postCopy];

  return (
    <div className="mb-8 border-b border-term-border pb-5">
      <p className="cyber-text text-sm">// {copy.label}</p>
      <h1 className="title mt-2 text-2xl text-term-fg sm:text-3xl">
        {translatedPost?.title ?? title}
      </h1>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm text-term-faint">
          {formatBlogDate(publishedAt, language)}
        </p>
      </div>
    </div>
  );
}
