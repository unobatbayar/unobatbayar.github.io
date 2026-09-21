"use client";

import Link from "next/link";
import { SectionLabel } from "app/components/section-label";
import {
  languageOptions,
  type Language,
  useLanguage,
} from "app/components/language";

type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
  };
};

export const blogCopy = {
  en: {
    label: "blog",
    title: "Blog",
    intro: "Notes on software and things I find interesting.",
    posts: "posts",
    postCopy: {
      "life-education": {
        title: "A Life Education Worth Having",
        summary:
          "Relationships, family, career, money, and wealth aren't separate subjects. They're one system, and most of what matters is what you trade your time and attention for.",
      },
      "starting-judo": {
        title: "Starting Judo: A Beginner's Guide",
        summary:
          "How to start Judo: finding a dojo, first class basics, and what you need.",
      },
      "web-dev": {
        title: "The Evolution of Web Development",
        summary:
          "A simple overview of how web development has evolved over time, from static pages to dynamic, interactive applications.",
      },
    },
  },
  mn: {
    label: "блог",
    title: "Блог",
    intro: "Software болон сонирхол татсан зүйлсийн тухай тэмдэглэл.",
    posts: "нийтлэлүүд",
    postCopy: {
      "life-education": {
        title: "Үнэ цэнтэй амьдралын боловсрол",
        summary:
          "Харилцаа, гэр бүл, карьер, мөнгө, баялаг нь тусдаа сэдэв биш. Нэг систем бөгөөд хамгийн чухал нь цаг, анхаарлаа юунд зарцуулж байгаад оршино.",
      },
      "starting-judo": {
        title: "Жүдо эхлэх нь: анхан шатны гарын авлага",
        summary:
          "Жүдо хэрхэн эхлэх тухай: dojo олох, эхний хичээлийн үндэс, хэрэгтэй зүйлс.",
      },
      "web-dev": {
        title: "Веб хөгжүүлэлтийн хувьсал",
        summary:
          "Static page-аас dynamic, interactive application хүртэл веб хөгжүүлэлт хэрхэн өөрчлөгдсөнийг товч тайлбарласан нийтлэл.",
      },
    },
  },
  ja: {
    label: "ブログ",
    title: "ブログ",
    intro: "ソフトウェアや興味のあることについてのメモ。",
    posts: "記事",
    postCopy: {
      "life-education": {
        title: "受ける価値のある人生教育",
        summary:
          "人間関係、家族、キャリア、お金、富は別々のテーマではありません。一つのシステムであり、大事なのは時間と注意を何と交換するかです。",
      },
      "starting-judo": {
        title: "柔道を始める: 初心者ガイド",
        summary:
          "柔道の始め方: 道場探し、初回クラスの基本、必要なもの。",
      },
      "web-dev": {
        title: "Web開発の進化",
        summary:
          "静的ページからdynamicでinteractiveなapplicationまで、Web開発がどのように変化してきたかを簡単に紹介します。",
      },
    },
  },
} as const satisfies Record<Language, Record<string, unknown>>;

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

export function BlogPostsContent({ posts }: { posts: BlogPost[] }) {
  const { language } = useLanguage();
  const copy = blogCopy[language];

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="cyber-text text-sm">// {copy.label}</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">{copy.title}</h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {copy.intro}
        </p>
      </header>

      <section className="space-y-3">
        <SectionLabel>{copy.posts}</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {posts.map((post) => {
            const translatedPost =
              copy.postCopy[post.slug as keyof typeof copy.postCopy];

            return (
              <Link
                key={post.slug}
                className="group block py-4"
                href={`/blog/${post.slug}`}
              >
                <article>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                      <h2 className="text-base text-term-fg transition-colors group-hover:text-term-accent">
                        {translatedPost?.title ?? post.metadata.title}
                      </h2>
                      <p className="mt-1 max-w-2xl text-sm leading-6 text-term-muted">
                        {translatedPost?.summary ?? post.metadata.summary}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm tabular-nums text-term-faint">
                      {formatBlogDate(post.metadata.publishedAt, language)}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
}
