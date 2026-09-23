"use client";

import { SectionLabel } from "../components/section-label";
import { type Language, useLanguage } from "../components/language";
import {
  AppFeatures,
  AppLegalLinks,
  AppScreens,
  AppStoreBadge,
} from "../components/app-landing";

const APP_STORE = "https://apps.apple.com/us/app/cyber-bolt/id1532655861";

const copy = {
  en: {
    kicker: "cyber bolt",
    headline: "Can you set the highest score?",
    intro:
      "Cyber Bolt is a 3D endless-runner arcade game. Steer a spacecar, collect coins, and see how far the course lets you go.",
    screens: [
      {
        src: "/Cyberbolt/screen-1.jpg",
        label: "Ultimate Edition",
        alt: "Cyber Bolt title screen with a spacecar on the track and a play button",
      },
      {
        src: "/Cyberbolt/screen-2.jpg",
        label: "Be Legendary",
        alt: "Gameplay at score 20, dodging pyramids and collecting coins on the track",
      },
      {
        src: "/Cyberbolt/screen-3.jpg",
        label: "Upgrade",
        alt: "Store screen listing spacecar skins to buy with coins",
      },
    ],
    features: [
      {
        name: "Run",
        detail:
          "An endless arcade course. Glide and fly through adversaries in a lightning-powered spacecar.",
      },
      {
        name: "Score",
        detail:
          "It takes timing to reach top speed. Game Center leaderboards keep the high score.",
      },
      {
        name: "Skins",
        detail:
          "Unlock premium looks by playing and collecting coins. Optional coin packs are available as in-app purchases.",
      },
      {
        name: "Revive",
        detail:
          "Hit an obstacle and you can continue once per run. After that, the score stands.",
      },
      {
        name: "Sound",
        detail:
          "Original theme music for Ultimate Edition, plus an Odyssey theme. Built in Unity.",
      },
      {
        name: "Platforms",
        detail: "iPhone and iPad. Free to play, with optional coin purchases.",
      },
    ],
    privacy:
      "Cyber Bolt is free and may show ads. Unity may collect usage data that is not linked to your identity. Coin purchases are processed by Apple.",
    credits: {
      prefabs: "Prefabs from the",
      prefabsAfter: ". (2020 July)",
      icons: "Icons from",
      iconsAfter: "under a Premium subscription. (2020 July)",
      themeAfter: "theme by Usukhbayar Batbayar. (2020 July)",
      sounds: "General sounds from",
      soundsAfter: "under Creative Commons 0. (2020 July)",
      coinAfter: "by se2001, Creative Commons 0. (2024)",
      odysseyAfter: "is the Cyberbolt: Odyssey theme, Attribution NonCommercial 4.0. (2024 March)",
      icon: "App icon made with",
      iconAfter: "under a Basic Plan. (2024 March)",
    },
  },
  mn: {
    kicker: "cyber bolt",
    headline: "Хамгийн өндөр оноо тогтоож чадах уу?",
    intro:
      "Cyber Bolt бол 3D endless-runner arcade game. Spacecar-аа жолоодож, зоос цуглуулаад, зам хэр хол явуулахыг үзээрэй.",
    screens: [
      {
        src: "/Cyberbolt/screen-1.jpg",
        label: "Ultimate Edition",
        alt: "Cyber Bolt-ийн нүүр дэлгэц, зам дээрх spacecar болон play товч",
      },
      {
        src: "/Cyberbolt/screen-2.jpg",
        label: "Be Legendary",
        alt: "Тоглоом, оноо 20, пирамид зайлсхийж зоос цуглуулж байна",
      },
      {
        src: "/Cyberbolt/screen-3.jpg",
        label: "Upgrade",
        alt: "Store дэлгэц, зоосоор авах spacecar skin-үүд",
      },
    ],
    features: [
      {
        name: "Гүйлт",
        detail:
          "Төгсгөлгүй arcade зам. Цахилгаантай spacecar-аар дайсан дундуур гулсаж ниснэ.",
      },
      {
        name: "Оноо",
        detail:
          "Дээд хурд хүрэхэд timing хэрэгтэй. Game Center leaderboard өндөр оноог хадгална.",
      },
      {
        name: "Skin",
        detail:
          "Тоглож зоос цуглуулаад premium харагдах байдлыг нээнэ. Optional зоосны багц in-app purchase.",
      },
      {
        name: "Амилуулах",
        detail:
          "Саад мөргөвөл нэг удаа үргэлжлүүлж болно. Дараа нь оноо үлдэнэ.",
      },
      {
        name: "Дуу",
        detail:
          "Ultimate Edition-д зориулсан original theme, мөн Odyssey theme. Unity-д хийсэн.",
      },
      {
        name: "Платформ",
        detail: "iPhone болон iPad. Үнэгүй тоглоно, optional зоосны худалдан авалттай.",
      },
    ],
    privacy:
      "Cyber Bolt үнэгүй бөгөөд зар гаргаж болно. Unity таныг танихгүй usage data цуглуулж магадгүй. Зоосны худалдан авалтыг Apple боловсруулна.",
    credits: {
      prefabs: "Prefab-ууд",
      prefabsAfter: "-оос. (2020 долдугаар сар)",
      icons: "Icon-ууд",
      iconsAfter: "Premium subscription-оор. (2020 долдугаар сар)",
      themeAfter: "theme, Usukhbayar Batbayar. (2020 долдугаар сар)",
      sounds: "Ерөнхий дуу",
      soundsAfter: "Creative Commons 0. (2020 долдугаар сар)",
      coinAfter: "se2001, Creative Commons 0. (2024)",
      odysseyAfter:
        "нь Cyberbolt: Odyssey theme, Attribution NonCommercial 4.0. (2024 гуравдугаар сар)",
      icon: "Апп icon",
      iconAfter: "Basic Plan-аар хийсэн. (2024 гуравдугаар сар)",
    },
  },
  ja: {
    kicker: "cyber bolt",
    headline: "最高スコアを出せますか？",
    intro:
      "Cyber Boltは3D endless-runnerのarcade gameです。spacecarを操り、コインを集め、コースがどこまで行かせてくれるかを試します。",
    screens: [
      {
        src: "/Cyberbolt/screen-1.jpg",
        label: "Ultimate Edition",
        alt: "Cyber Boltのタイトル画面。トラック上のspacecarと再生ボタン",
      },
      {
        src: "/Cyberbolt/screen-2.jpg",
        label: "Be Legendary",
        alt: "スコア20のプレイ画面。ピラミッドを避けてコインを集めている",
      },
      {
        src: "/Cyberbolt/screen-3.jpg",
        label: "Upgrade",
        alt: "ストア画面。コインで買うspacecarのskin一覧",
      },
    ],
    features: [
      {
        name: "走行",
        detail:
          "終わりのないarcadeコース。雷を帯びたspacecarで敵の間を滑空します。",
      },
      {
        name: "スコア",
        detail:
          "最高速度にはtimingが要ります。Game Centerのleaderboardが高スコアを残します。",
      },
      {
        name: "Skin",
        detail:
          "遊んでコインを集め、premiumの見た目を解除。任意のコインパックはin-app purchase。",
      },
      {
        name: "復活",
        detail:
          "障害に当たると、1ランにつき1回だけ続けられます。その後はスコアが確定。",
      },
      {
        name: "サウンド",
        detail:
          "Ultimate Edition用のoriginal themeと、Odyssey theme。Unity製。",
      },
      {
        name: "対応",
        detail: "iPhoneとiPad。無料で遊べ、任意のコイン購入あり。",
      },
    ],
    privacy:
      "Cyber Boltは無料で、広告が出ることがあります。Unityが身元に紐づかないusage dataを収集する場合があります。コイン購入はAppleが処理します。",
    credits: {
      prefabs: "Prefabは",
      prefabsAfter: "より。(2020年7月)",
      icons: "Iconは",
      iconsAfter: "のPremium subscription。(2020年7月)",
      themeAfter: "theme、Usukhbayar Batbayar。(2020年7月)",
      sounds: "効果音は",
      soundsAfter: "、Creative Commons 0。(2020年7月)",
      coinAfter: "se2001、Creative Commons 0。(2024)",
      odysseyAfter:
        "はCyberbolt: Odyssey theme、Attribution NonCommercial 4.0。(2024年3月)",
      icon: "アプリアイコンは",
      iconAfter: "のBasic Plan。(2024年3月)",
    },
  },
} as const satisfies Record<Language, Record<string, unknown>>;

export function CyberboltContent() {
  const { language, t } = useLanguage();
  const page = copy[language];
  const credits = page.credits;

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="cyber-text text-sm">// {page.kicker}</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">{page.headline}</h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {page.intro}
        </p>
        <AppStoreBadge href={APP_STORE} src="/Cyberbolt/app-store.svg" />
      </section>

      <AppScreens
        screens={[...page.screens]}
        width={621}
        height={1104}
        imageClassName="w-full rounded-[1.75rem] border border-term-border bg-[#0096ff]"
      />

      <AppFeatures features={[...page.features]} />

      <section className="space-y-3">
        <SectionLabel>{t.landing.privacy}</SectionLabel>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {page.privacy}
        </p>
        <AppLegalLinks base="/Cyberbolt" />
      </section>

      <section className="space-y-3">
        <SectionLabel>{t.landing.credits}</SectionLabel>
        <ul className="max-w-2xl list-disc space-y-3 pl-5 text-sm leading-6 text-term-muted">
          <li>
            {credits.prefabs}{" "}
            <a
              href="https://assetstore.unity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-accent hover:underline"
            >
              Unity Asset Store
            </a>
            {credits.prefabsAfter}
          </li>
          <li>
            {credits.icons}{" "}
            <a
              href="https://www.flaticon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-accent hover:underline"
            >
              Flaticon
            </a>{" "}
            {credits.iconsAfter}
          </li>
          <li>
            <a
              href="https://soundcloud.com/nrazed/cyberbolt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-accent hover:underline"
            >
              Cyberbolt: Ultimate Edition
            </a>{" "}
            {credits.themeAfter}
          </li>
          <li>
            {credits.sounds}{" "}
            <a
              href="https://freesound.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-accent hover:underline"
            >
              freesound.org
            </a>{" "}
            {credits.soundsAfter}
          </li>
          <li>
            <a
              href="https://freesound.org/people/se2001/sounds/470768/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-accent hover:underline"
            >
              Coin Collect
            </a>{" "}
            {credits.coinAfter}
          </li>
          <li>
            <a
              href="https://freesound.org/people/Erokia/sounds/688502/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-accent hover:underline"
            >
              Guitar Synth/Piano Loops (100BPM)
            </a>{" "}
            by{" "}
            <a
              href="https://freesound.org/people/Erokia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-accent hover:underline"
            >
              Erokia
            </a>{" "}
            {credits.odysseyAfter}
          </li>
          <li>
            {credits.icon}{" "}
            <a
              href="https://www.midjourney.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-accent hover:underline"
            >
              Midjourney
            </a>{" "}
            {credits.iconAfter}
          </li>
        </ul>
      </section>
    </div>
  );
}
