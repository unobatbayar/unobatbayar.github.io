"use client";

import { SectionLabel } from "../components/section-label";
import { TechIcons } from "../components/tech-icons";
import {
  personalProjects,
  workProjects,
  type Project,
} from "./project-data";
import { type Language, useLanguage } from "../components/language";

const projectCopy = {
  en: {
    label: "projects",
    title: "Projects",
    intro: "Projects I've built and shipped.",
    professional: "professional",
    personal: "personal",
    freelance: "freelance",
    descriptions: {
      "Munkhada Careers":
        "Careers site for Munkhada LLC (Toyota dealer in Mongolia). Job listings and applications.",
      "Nora Store Mongolia":
        "Ecommerce shop for Korean and Japanese daily goods in Mongolia. Cart and Ulaanbaatar delivery.",
      "Expanded Softsynth Plugin for MONTAGE M":
        "VST plugin that brings the MONTAGE M synthesizer into a DAW.",
      "Rec'n'Share":
        "Record audio and video with songs from your library, then share performances.",
      SEQTRAK:
        "Companion app for the SEQTRAK music production studio. Visual control of the hardware.",
      "Simple.mn": "Fintech app for payments and everyday banking in Mongolia.",
      "Scanly - Scan food & beauty barcodes":
        "Barcode scanner for food and beauty products. Health score (0-100), ingredients, additives, and price estimates. Built for Mongolia.",
      "Progress Clock - A New Way to Experience Time":
        "iOS app and widget for time tracking.",
      "Metronome Glow":
        "iOS metronome with glow visuals, sound, and subtle vibration for practice timing.",
      "Cyber Bolt - Arcade Game": "3D arcade game for iOS and Android.",
      "Anomalor - Password generator and vault":
        "On-device password generator and optional encrypted vault for iPhone and Mac.",
    },
  },
  mn: {
    label: "төслүүд",
    title: "Төслүүд",
    intro: "Миний хөгжүүлж, хэрэглээнд гаргасан төслүүд.",
    professional: "мэргэжлийн",
    personal: "хувийн",
    freelance: "фриланс",
    descriptions: {
      "Munkhada Careers":
        "Монгол дахь Toyota dealer Мөнххада ХХК-ийн careers сайт. Ажлын зар болон анкет илгээх хэсэгтэй.",
      "Nora Store Mongolia":
        "Монголд зориулсан Солонгос, Япон өдөр тутмын барааны ecommerce дэлгүүр. Сагс болон Улаанбаатар хүргэлттэй.",
      "Expanded Softsynth Plugin for MONTAGE M":
        "MONTAGE M synthesizer-ийг DAW дотор ашиглах боломжтой болгодог VST plugin.",
      "Rec'n'Share":
        "Library дахь дуутайгаа хамт аудио, видео бичиж performance-оо хуваалцах апп.",
      SEQTRAK:
        "SEQTRAK music production studio-д зориулсан companion app. Hardware-ийг visual байдлаар удирдана.",
      "Simple.mn": "Монгол дахь төлбөр, өдөр тутмын banking-д зориулсан fintech app.",
      "Scanly - Scan food & beauty barcodes":
        "Хүнс болон beauty бүтээгдэхүүний barcode scanner. Health score, орц, additive, үнийн мэдээлэлтэй. Монголд зориулж хийсэн.",
      "Progress Clock - A New Way to Experience Time":
        "Цагийн явцыг хянах iOS app болон widget.",
      "Metronome Glow":
        "Дасгал хийхэд зориулсан glow visual, sound, subtle vibration-тэй iOS metronome.",
      "Cyber Bolt - Arcade Game": "iOS болон Android-д зориулсан 3D arcade game.",
      "Anomalor - Password generator and vault":
        "iPhone болон Mac дээр ажиллах on-device password generator, optional encrypted vault.",
    },
  },
  ja: {
    label: "作品",
    title: "作品",
    intro: "開発し、リリースしてきたプロジェクト。",
    professional: "仕事",
    personal: "個人",
    freelance: "フリーランス",
    descriptions: {
      "Munkhada Careers":
        "モンゴルのToyota dealerであるMunkhada LLC向け採用サイト。求人一覧と応募機能を実装。",
      "Nora Store Mongolia":
        "モンゴル向けの韓国・日本の日用品 ecommerce shop。カートとウランバートル配送に対応。",
      "Expanded Softsynth Plugin for MONTAGE M":
        "MONTAGE M synthesizerをDAW内で使えるようにするVST plugin。",
      "Rec'n'Share":
        "ライブラリ内の曲に合わせて音声・動画を録音し、performanceを共有できるアプリ。",
      SEQTRAK:
        "SEQTRAK music production studioのcompanion app。ハードウェアをvisualに操作。",
      "Simple.mn": "モンゴル向けの決済・日常 banking fintech app。",
      "Scanly - Scan food & beauty barcodes":
        "食品・beauty商品のbarcode scanner。Health score、成分、添加物、価格推定に対応。モンゴル向けに開発。",
      "Progress Clock - A New Way to Experience Time":
        "時間管理のためのiOS appとwidget。",
      "Metronome Glow":
        "練習タイミング用のglow visual、sound、subtle vibration付きiOS metronome。",
      "Cyber Bolt - Arcade Game": "iOSとAndroid向けの3D arcade game。",
      "Anomalor - Password generator and vault":
        "iPhoneとMac向けのon-device password generatorとoptional encrypted vault。",
    },
  },
} as const satisfies Record<Language, Record<string, unknown>>;

function ProjectArticle({
  project,
  copy,
}: {
  project: Project;
  copy: (typeof projectCopy)[Language];
}) {
  const internal = project.url.startsWith("/");
  const linkProps = internal
    ? { href: project.url }
    : {
        href: project.url,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      };
  const description =
    copy.descriptions[project.title as keyof typeof copy.descriptions] ??
    project.description;

  return (
    <article className="py-4">
      <div className="flex gap-3.5">
        <a
          {...linkProps}
          className="group relative mt-0.5 block h-11 w-11 shrink-0 overflow-hidden rounded-full border border-term-border bg-term-soft"
          aria-label={`${project.title} preview`}
        >
          <img
            src={project.thumbnail}
            alt=""
            width={88}
            height={88}
            loading="lazy"
            className="h-full w-full object-cover transition duration-200 group-hover:opacity-90"
          />
        </a>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
              <h3 className="text-base text-term-fg">
                <a {...linkProps} className="hover:text-term-accent">
                  {project.title}
                </a>
              </h3>
              {project.freelance ? (
                <span className="text-xs text-term-accent">
                  {copy.freelance}
                </span>
              ) : null}
            </div>
            <p className="shrink-0 text-sm text-term-faint">{project.year}</p>
          </div>
          <p className="mt-1.5 text-sm leading-6 text-term-muted">
            {description}
          </p>
          <TechIcons tools={project.tools} />
        </div>
      </div>
    </article>
  );
}

export function ProjectsContent() {
  const { language } = useLanguage();
  const copy = projectCopy[language];

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
        <SectionLabel>{copy.personal}</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {personalProjects.map((project) => (
            <ProjectArticle
              key={`${project.title}-${project.year}`}
              project={project}
              copy={copy}
            />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>{copy.professional}</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {workProjects.map((project) => (
            <ProjectArticle
              key={`${project.title}-${project.year}`}
              project={project}
              copy={copy}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
