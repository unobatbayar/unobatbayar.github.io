"use client";

import { SectionLabel } from "../components/section-label";
import { type Language, useLanguage } from "../components/language";
import {
  AppFeatures,
  AppLegalLinks,
  AppScreens,
  AppStoreBadge,
} from "../components/app-landing";

const APP_STORE = "https://apps.apple.com/us/app/metronome-glow/id1556841242";

const copy = {
  en: {
    kicker: "metronome glow",
    headline: "Feel the beat.",
    intro:
      "Metronome Glow is an iPhone metronome with click, neon visuals, and light haptics. Tap a tempo, pick a time signature, and keep time without fighting the click.",
    screens: [
      {
        src: "/Metronome/screen-1.jpg",
        label: "Feel the beat",
        alt: "Metronome Glow at 42 BPM with a green beat bar you can feel",
      },
      {
        src: "/Metronome/screen-2.jpg",
        label: "Glow",
        alt: "Metronome Glow idle screen with a play button and neon bars",
      },
      {
        src: "/Metronome/screen-3.jpg",
        label: "Practice",
        alt: "Metronome Glow at 120 BPM with a glowing beat across the screen",
      },
    ],
    features: [
      {
        name: "Glow",
        detail:
          "A neon beat that flashes with the click. The visual is the timing, not a decoration around it.",
      },
      {
        name: "Tap tempo",
        detail: "Set BPM by tapping the beat. Time signatures: 2/4, 3/4, 4/4, and 6/8.",
      },
      {
        name: "Subdivisions",
        detail: "Quarter and eighth notes, plus mute when you only want the glow.",
      },
      {
        name: "Haptics",
        detail:
          "Subtle vibration on the beat so you can feel time without staring at the screen.",
      },
      {
        name: "Steady",
        detail:
          "Timing holds through frame drops and when the app is in the background. Tempo and settings save automatically.",
      },
      {
        name: "Local",
        detail:
          "No account. Apple reports that the app does not collect data. Purchases go through the App Store.",
      },
    ],
    privacy:
      "Tempo and settings stay on the device. There is no account and no advertising. Apple lists Metronome Glow as an app that does not collect data.",
    creditsBefore: "Click sound is from",
    creditsMid: "by",
    creditsAfter: "on Pixabay, originally from Freesound. (2026 August)",
  },
  mn: {
    kicker: "metronome glow",
    headline: "Хэмнэлийг мэдэр.",
    intro:
      "Metronome Glow бол click, neon visual, хөнгөн haptic-тай iPhone metronome. Tempo-гоо товшиж, time signature сонгоод, click-тэй тэмцэлгүйгээр хэмнэлээ барина.",
    screens: [
      {
        src: "/Metronome/screen-1.jpg",
        label: "Хэмнэл",
        alt: "Metronome Glow 42 BPM дээр, мэдрэгдэх ногоон beat мөртэй",
      },
      {
        src: "/Metronome/screen-2.jpg",
        label: "Glow",
        alt: "Metronome Glow-ийн idle дэлгэц, play товч болон neon мөрүүдтэй",
      },
      {
        src: "/Metronome/screen-3.jpg",
        label: "Дасгал",
        alt: "Metronome Glow 120 BPM дээр, дэлгэц даяар гэрэлтэх beat-тэй",
      },
    ],
    features: [
      {
        name: "Glow",
        detail:
          "Click-тэй хамт анивчдаг neon beat. Visual нь чимэглэл биш, хэмнэл өөрөө.",
      },
      {
        name: "Tap tempo",
        detail: "Beat дээр товшсоноор BPM тогтооно. Time signature: 2/4, 3/4, 4/4, 6/8.",
      },
      {
        name: "Хуваалт",
        detail: "Quarter болон eighth note, зөвхөн glow хүсвэл mute.",
      },
      {
        name: "Haptics",
        detail:
          "Beat дээр бага зэрэг чичиргээ. Дэлгэц рүү ширтэлгүйгээр цагийг мэдэрнэ.",
      },
      {
        name: "Тогтвортой",
        detail:
          "Frame drop болон background үед ч timing барина. Tempo, тохиргоо автоматаар хадгалагдана.",
      },
      {
        name: "Орон нутгийн",
        detail:
          "Account байхгүй. Apple энэ аппыг өгөгдөл цуглуулдаггүй гэж тэмдэглэсэн. Худалдан авалт App Store-оор.",
      },
    ],
    privacy:
      "Tempo болон тохиргоо төхөөрөмж дээр үлдэнэ. Account байхгүй, зар байхгүй. Apple Metronome Glow-г өгөгдөл цуглуулдаггүй апп гэж тэмдэглэсэн.",
    creditsBefore: "Click дуу нь",
    creditsMid: "зохиогч",
    creditsAfter: "Pixabay дээр, эх нь Freesound. (2026 наймдугаар сар)",
  },
  ja: {
    kicker: "metronome glow",
    headline: "ビートを感じる。",
    intro:
      "Metronome Glowは、click、neon visual、軽いhaptic付きのiPhoneメトロノームです。tempoをタップし、拍子を選んで、clickと戦わずに拍をキープできます。",
    screens: [
      {
        src: "/Metronome/screen-1.jpg",
        label: "ビート",
        alt: "Metronome Glow、42 BPM、感じられる緑のビートバー",
      },
      {
        src: "/Metronome/screen-2.jpg",
        label: "Glow",
        alt: "Metronome Glowの待機画面。再生ボタンとneonバー",
      },
      {
        src: "/Metronome/screen-3.jpg",
        label: "練習",
        alt: "Metronome Glow、120 BPM、画面いっぱいに光るビート",
      },
    ],
    features: [
      {
        name: "Glow",
        detail:
          "clickに合わせて点滅するneon beat。見た目は飾りではなく、タイミングそのもの。",
      },
      {
        name: "Tap tempo",
        detail: "拍をタップしてBPMを設定。拍子は2/4、3/4、4/4、6/8。",
      },
      {
        name: "分割",
        detail: "四分音符と八分音符。glowだけ欲しいときはmute。",
      },
      {
        name: "Haptics",
        detail:
          "拍で小さく振動。画面を見続けなくても時間を感じられます。",
      },
      {
        name: "安定",
        detail:
          "frame dropやバックグラウンドでもtimingを維持。tempoと設定は自動保存。",
      },
      {
        name: "端末内",
        detail:
          "アカウントなし。Appleはデータ収集なしと記載。購入はApp Store経由。",
      },
    ],
    privacy:
      "tempoと設定は端末に残ります。アカウントも広告もありません。AppleはMetronome Glowをデータ収集なしのアプリとして掲載しています。",
    creditsBefore: "クリック音は",
    creditsMid: "（",
    creditsAfter: "、Pixabay、元はFreesound）。(2026年8月)",
  },
} as const satisfies Record<Language, Record<string, unknown>>;

export function MetronomeContent() {
  const { language, t } = useLanguage();
  const page = copy[language];

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="cyber-text text-sm">// {page.kicker}</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">{page.headline}</h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {page.intro}
        </p>
        <AppStoreBadge href={APP_STORE} src="/Metronome/app-store.svg" />
      </section>

      <AppScreens
        screens={[...page.screens]}
        width={621}
        height={1104}
        imageClassName="w-full rounded-[1.75rem] border border-term-border bg-black"
      />

      <AppFeatures features={[...page.features]} />

      <section className="space-y-3">
        <SectionLabel>{t.landing.privacy}</SectionLabel>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {page.privacy}
        </p>
        <AppLegalLinks base="/Metronome" />
      </section>

      <section className="space-y-3">
        <SectionLabel>{t.landing.credits}</SectionLabel>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {page.creditsBefore}{" "}
          <a
            href="https://pixabay.com/sound-effects/metronome-85688/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-term-accent hover:underline"
          >
            Metronome
          </a>{" "}
          {page.creditsMid}{" "}
          <a
            href="https://pixabay.com/users/freesound_community-46691455/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-term-accent hover:underline"
          >
            freesound_community
          </a>{" "}
          {page.creditsAfter}
        </p>
      </section>
    </div>
  );
}
