"use client";

import type { ReactNode } from "react";
import { SectionLabel } from "../components/section-label";
import {
  education,
  experienceBasics,
  skillGroups,
  volunteer,
  workExperience,
} from "./experience-data";
import {
  languageOptions,
  type Language,
  useLanguage,
} from "../components/language";

const experienceCopy = {
  en: {
    label: "experience",
    title: "Experience",
    total: "total",
    current: "Present",
    sections: {
      work: "work",
      skills: "skills",
      education: "education",
      volunteer: "volunteer",
      profiles: "profiles",
    },
    basics: {
      location: "Ulaanbaatar, Mongolia",
      totalExp: "7 years",
      summary: "Software engineer working on mobile, frontend, and backend.",
      objective:
        "Build solid software and help teammates learn in a collaborative team.",
    },
    skillGroups: [
      {
        label: "languages",
        items: ["C#", "Java", "C++", "Python", "TypeScript", "SQL", "Swift"],
      },
      {
        label: "frameworks",
        items: ["Next.js", "FastAPI", "SwiftUI"],
      },
      {
        label: "technologies",
        items: [
          "Algorithms",
          "Data Structures",
          "Mobile",
          "Web",
          "Backend",
          "ORM",
        ],
      },
      {
        label: "databases",
        items: ["Firebase", "PostgreSQL"],
      },
      {
        label: "practices",
        items: [
          "Component-based architecture",
          "Agile methodology",
          "Design patterns",
          "Test-driven development",
          "MVC",
        ],
      },
      {
        label: "tools",
        items: ["Xcode", "Unity 3D", "Docker", "Android Studio"],
      },
    ],
    work: {
      "0": {
        position: "Software Engineer",
        years: "",
        bullets: [
          "Building frontend products: data visualization and LLM integrations.",
        ],
      },
      "1": {
        position: "Software Engineer",
        years: "5 years",
        bullets: [
          "Worked on SEQTRAK in Unity (iOS, macOS, Android, Windows), integrating with musical hardware. Built GUI, effect graphs, plugins, and server/API connections over two years.",
          "Maintained Rec'n'Share for iOS and Android. Improved song loading performance by 47%, fixed crashes, and added features from user feedback. Integrated a sound division library.",
          "Built GUI components for the Expanded SoftSynth VST plugin in C++ for the MONTAGE M (v1.0, v2.0).",
          "Built and maintained Next.js apps for Yamaha product portfolio management and internal employee metrics.",
        ],
      },
      "2": {
        position: "Software Engineer",
        years: "2 years",
        bullets: [
          "Android development and launch of the Simple fintech app.",
          "Refactored and debugged code.",
          "Developed backend APIs using Spring Boot.",
        ],
      },
      "3": {
        position: "Software Engineer Intern",
        years: "3 months",
        bullets: [
          "Added a Transpose function for Soundmondo app using C# and Xamarin.",
          "Built an automated testing tool with iOS, SwitchBot, and IFTTT for MONTAGE M.",
        ],
      },
    },
    education: {
      study: "BSc with Hons, Computer Science with Business Management",
    },
    volunteer: {
      position: "Volunteer",
      summary:
        "Volunteered at Tokyo Pride 2025, assisting at the Yamaha Corporation booth.",
    },
  },
  mn: {
    label: "туршлага",
    title: "Туршлага",
    total: "нийт",
    current: "Одоо",
    sections: {
      work: "ажлын туршлага",
      skills: "чадвар",
      education: "боловсрол",
      volunteer: "сайн дурын ажил",
      profiles: "профайл",
    },
    basics: {
      location: "Улаанбаатар, Монгол",
      totalExp: "7 жил",
      summary: "Мобайл, фронтенд, backend чиглэлээр ажилладаг software engineer.",
      objective:
        "Чанартай software бүтээж, хамт олонтойгоо мэдлэгээ хуваалцан ажиллах.",
    },
    skillGroups: [
      {
        label: "хэл",
        items: ["C#", "Java", "C++", "Python", "TypeScript", "SQL", "Swift"],
      },
      {
        label: "framework",
        items: ["Next.js", "FastAPI", "SwiftUI"],
      },
      {
        label: "технологи",
        items: [
          "Алгоритм",
          "Өгөгдлийн бүтэц",
          "Мобайл",
          "Веб",
          "Backend",
          "ORM",
        ],
      },
      {
        label: "өгөгдлийн сан",
        items: ["Firebase", "PostgreSQL"],
      },
      {
        label: "арга барил",
        items: [
          "Component-based architecture",
          "Agile аргачлал",
          "Design pattern",
          "Test-driven development",
          "MVC",
        ],
      },
      {
        label: "хэрэгсэл",
        items: ["Xcode", "Unity 3D", "Docker", "Android Studio"],
      },
    ],
    work: {
      "0": {
        position: "Software Engineer",
        years: "",
        bullets: [
          "Фронтенд бүтээгдэхүүн хөгжүүлж байна: data visualization болон LLM integration.",
        ],
      },
      "1": {
        position: "Software Engineer",
        years: "5 жил",
        bullets: [
          "SEQTRAK дээр Unity ашиглан iOS, macOS, Android, Windows хувилбаруудыг хөгжүүлсэн. Хөгжмийн төхөөрөмжтэй холболт, GUI, effect graph, plugin, server/API холболт дээр хоёр жил ажилласан.",
          "Rec'n'Share-ийн iOS болон Android хувилбарыг хөгжүүлж, засварласан. Дуу ачаалах хурдыг 47% сайжруулж, crash засаж, хэрэглэгчдийн санал дээр үндэслэн шинэ боломжууд нэмсэн.",
          "MONTAGE M-д зориулсан Expanded SoftSynth VST plugin-ийн GUI component-уудыг C++ дээр хөгжүүлсэн.",
          "Yamaha-ийн бүтээгдэхүүний portfolio management болон ажилтны metric-д зориулсан Next.js дотоод аппууд хөгжүүлж, арчилсан.",
        ],
      },
      "2": {
        position: "Software Engineer",
        years: "2 жил",
        bullets: [
          "Simple fintech app-ийн Android хөгжүүлэлт болон launch-д ажилласан.",
          "Код refactor хийж, bug зассан.",
          "Spring Boot ашиглан backend API хөгжүүлсэн.",
        ],
      },
      "3": {
        position: "Software Engineer Intern",
        years: "3 сар",
        bullets: [
          "Soundmondo app-д C# болон Xamarin ашиглан Transpose function нэмсэн.",
          "MONTAGE M-д зориулсан iOS, SwitchBot, IFTTT ашигласан автомат тестийн хэрэгсэл бүтээсэн.",
        ],
      },
    },
    education: {
      study: "BSc with Hons, Computer Science with Business Management",
    },
    volunteer: {
      position: "Сайн дурын ажилтан",
      summary:
        "Tokyo Pride 2025 дээр Yamaha Corporation-ийн booth-д тусалж сайн дурын ажил хийсэн.",
    },
  },
  ja: {
    label: "経歴",
    title: "経歴",
    total: "合計",
    current: "現在",
    sections: {
      work: "職務経歴",
      skills: "スキル",
      education: "学歴",
      volunteer: "ボランティア",
      profiles: "プロフィール",
    },
    basics: {
      location: "ウランバートル、モンゴル",
      totalExp: "7年",
      summary:
        "モバイル、フロントエンド、バックエンドに取り組むソフトウェアエンジニア。",
      objective:
        "堅実なソフトウェアを作り、チームで学び合いながら働くこと。",
    },
    skillGroups: [
      {
        label: "言語",
        items: ["C#", "Java", "C++", "Python", "TypeScript", "SQL", "Swift"],
      },
      {
        label: "フレームワーク",
        items: ["Next.js", "FastAPI", "SwiftUI"],
      },
      {
        label: "技術",
        items: [
          "アルゴリズム",
          "データ構造",
          "モバイル",
          "Web",
          "バックエンド",
          "ORM",
        ],
      },
      {
        label: "データベース",
        items: ["Firebase", "PostgreSQL"],
      },
      {
        label: "開発手法",
        items: [
          "コンポーネント設計",
          "Agile",
          "デザインパターン",
          "Test-driven development",
          "MVC",
        ],
      },
      {
        label: "ツール",
        items: ["Xcode", "Unity 3D", "Docker", "Android Studio"],
      },
    ],
    work: {
      "0": {
        position: "ソフトウェアエンジニア",
        years: "",
        bullets: [
          "データ可視化とLLM連携を含むフロントエンドプロダクトを開発中。",
        ],
      },
      "1": {
        position: "ソフトウェアエンジニア",
        years: "5年",
        bullets: [
          "UnityでSEQTRAKのiOS、macOS、Android、Windows版に携わり、音楽ハードウェア連携、GUI、effect graph、plugin、server/API連携を約2年間担当。",
          "Rec'n'ShareのiOS/Android版を保守。楽曲読み込み性能を47%改善し、クラッシュ修正とユーザー要望に基づく機能追加を実施。",
          "MONTAGE M向けExpanded SoftSynth VST pluginのGUI componentをC++で開発。",
          "Yamahaの製品portfolio管理と社内employee metrics向けNext.jsアプリを開発・保守。",
        ],
      },
      "2": {
        position: "ソフトウェアエンジニア",
        years: "2年",
        bullets: [
          "Simple fintech appのAndroid開発とリリースに携わった。",
          "コードのリファクタリングとデバッグを担当。",
          "Spring Bootでbackend APIを開発。",
        ],
      },
      "3": {
        position: "ソフトウェアエンジニア インターン",
        years: "3か月",
        bullets: [
          "C#とXamarinでSoundmondo appにTranspose機能を追加。",
          "MONTAGE M向けにiOS、SwitchBot、IFTTTを使った自動テストツールを構築。",
        ],
      },
    },
    education: {
      study: "BSc with Hons, Computer Science with Business Management",
    },
    volunteer: {
      position: "ボランティア",
      summary:
        "Tokyo Pride 2025でYamaha Corporationのブース運営をサポート。",
    },
  },
} as const satisfies Record<Language, Record<string, unknown>>;

function BulletText({
  text,
  links,
}: {
  text: string;
  links?: { label: string; href: string }[];
}) {
  if (!links?.length) {
    return <>{text}</>;
  }

  const parts: ReactNode[] = [];
  let remaining = text;

  links.forEach((link, index) => {
    const matchIndex = remaining.indexOf(link.label);
    if (matchIndex === -1) {
      return;
    }

    if (matchIndex > 0) {
      parts.push(remaining.slice(0, matchIndex));
    }

    parts.push(
      <a
        key={`${link.href}-${index}`}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-term-accent underline underline-offset-2 hover:opacity-80"
      >
        {link.label}
      </a>
    );

    remaining = remaining.slice(matchIndex + link.label.length);
  });

  if (remaining) {
    parts.push(remaining);
  }

  return <>{parts}</>;
}

function formatExperienceDate(dateString: string, language: Language): string {
  return new Date(dateString).toLocaleDateString(
    languageOptions[language].locale,
    {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }
  );
}

function formatDateRange(
  startDate: string,
  endDate: string | null,
  isCurrent: boolean,
  language: Language,
  current: string
): string {
  const start = formatExperienceDate(startDate, language);

  if (isCurrent || !endDate) {
    return `${start} - ${current}`;
  }

  return `${start} - ${formatExperienceDate(endDate, language)}`;
}

export function ExperienceContent() {
  const { language } = useLanguage();
  const copy = experienceCopy[language];

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="cyber-text text-sm">// {copy.label}</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">{copy.title}</h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {copy.basics.summary}
        </p>
        <p className="text-sm text-term-faint">
          {copy.basics.location} · {copy.basics.totalExp} {copy.total}
        </p>
      </header>

      <section className="space-y-3">
        <SectionLabel>{copy.sections.work}</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {workExperience.map((job) => {
            const jobCopy = copy.work[job.id as keyof typeof copy.work];

            return (
              <article key={job.id} className="py-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <h3 className="text-base text-term-fg">
                      {jobCopy.position}
                    </h3>
                    <p className="mt-1 text-sm text-term-muted">
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-term-accent"
                        >
                          {job.name}
                        </a>
                      ) : (
                        job.name
                      )}
                    </p>
                  </div>
                  <div className="shrink-0 text-sm text-term-faint sm:text-right">
                    <p>
                      {formatDateRange(
                        job.startDate,
                        job.endDate,
                        job.isWorkingHere,
                        language,
                        copy.current
                      )}
                    </p>
                    {jobCopy.years ? (
                      <p className="mt-0.5">{jobCopy.years}</p>
                    ) : null}
                  </div>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-term-muted">
                  {jobCopy.bullets.map((text, index) => (
                    <li key={`${job.id}-${index}`}>
                      <BulletText text={text} links={job.bullets[index]?.links} />
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>{copy.sections.skills}</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {skillGroups.map((group, index) => {
            const skillCopy = copy.skillGroups[index];

            return (
              <div
                key={group.label}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-8"
              >
                <h3 className="w-28 shrink-0 text-sm text-term-faint">
                  {skillCopy.label}
                </h3>
                <p className="text-sm leading-6 text-term-muted">
                  {skillCopy.items.join(" · ")}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>{copy.sections.education}</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {education.map((item) => (
            <article key={item.id} className="py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-base text-term-fg">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-term-accent"
                      >
                        {item.institution}
                      </a>
                    ) : (
                      item.institution
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-term-muted">
                    {copy.education.study}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-term-faint">
                  {formatDateRange(
                    item.startDate,
                    item.endDate,
                    false,
                    language,
                    copy.current
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>{copy.sections.volunteer}</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {volunteer.map((item) => (
            <article key={item.id} className="py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-base text-term-fg">
                    {copy.volunteer.position}
                  </h3>
                  <p className="mt-1 text-sm text-term-muted">
                    {item.organization}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-term-faint">
                  {formatDateRange(
                    item.startDate,
                    item.endDate,
                    false,
                    language,
                    copy.current
                  )}
                </p>
              </div>
              <p className="mt-2 text-sm leading-6 text-term-muted">
                {copy.volunteer.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>{copy.sections.profiles}</SectionLabel>
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-term-border pt-4 text-sm text-term-muted">
          {experienceBasics.profiles.map((profile) =>
            profile.url ? (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-term-accent hover:underline"
              >
                {profile.network.toLowerCase()}
              </a>
            ) : (
              <span key={profile.network}>
                {profile.network.toLowerCase()}
                {profile.username ? ` · ${profile.username}` : ""}
              </span>
            )
          )}
        </div>
        <p className="max-w-2xl text-sm leading-6 text-term-faint">
          {copy.basics.objective}
        </p>
      </section>
    </section>
  );
}
