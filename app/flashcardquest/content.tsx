"use client";

import Link from "next/link";
import { type Language, useLanguage } from "../components/language";
import styles from "./flashcardquest.module.css";

const copy = {
  en: {
    kicker: "jlpt quiz game",
    title: "JLPT Flashcard Quest",
    tagline: "Kanji & Vocab Quiz, N5 to N1",
    web: "Try the web version",
    featuresTitle: "Features",
    features: [
      {
        name: "Words and kanji",
        detail: "8,000+ JLPT words and 2,200+ kanji from N5 to N1.",
      },
      {
        name: "Exam style questions",
        detail: "JLPT exam style questions.",
      },
      {
        name: "Mock tests",
        detail: "Timed mock tests with section scores.",
      },
      {
        name: "Spaced repetition",
        detail: "Reviews return when a word or kanji is due again.",
      },
      {
        name: "Readiness",
        detail: "Readiness by level, from N5 to N1.",
      },
      {
        name: "Private",
        detail: "No ads and no account. Progress stays on the device.",
      },
    ],
    pricingTitle: "Pricing",
    freeLabel: "Free",
    freePrice: "N5 and N4",
    freeDetail: "The starting levels are free.",
    monthLabel: "JLPT Pro",
    monthPrice: "$4.99",
    monthDetail: "per month",
    yearLabel: "JLPT Pro",
    yearPrice: "$24.99",
    yearDetail: "per year, with a 7-day free trial",
    lifeLabel: "JLPT Pro",
    lifePrice: "$59.99",
    lifeDetail: "lifetime, one payment",
    priceNote:
      "N5 and N4 are free. JLPT Pro is $4.99 per month, $24.99 per year with a 7-day free trial, or $59.99 lifetime. Payment is handled by Apple.",
    screensTitle: "Screenshots",
    screens: [
      {
        src: "/flashcardquest/01-home.png",
        alt: "Home screen with today's quest, level readiness, and an N5 mock test",
        caption: "Today's quest",
      },
      {
        src: "/flashcardquest/02-context.png",
        alt: "Fill the blank question with the correct answer marked",
        caption: "Exam style question",
      },
      {
        src: "/flashcardquest/05-mock.png",
        alt: "Timed N5 language knowledge question asking for a kanji spelling",
        caption: "Timed mock test",
      },
      {
        src: "/flashcardquest/07-progress.png",
        alt: "Progress with streaks, level, a seven day chart, and mock test scores",
        caption: "Readiness and scores",
      },
      {
        src: "/flashcardquest/08-kanji.png",
        alt: "Study sheet for the kanji 語 with readings and an example word",
        caption: "Study sheet",
      },
    ],
    privacy: "Privacy",
    terms: "Terms",
    support: "Support",
    note: "Not affiliated with JLPT, the Japan Foundation or JEES.",
  },
  mn: {
    kicker: "jlpt quiz game",
    title: "JLPT Flashcard Quest",
    tagline: "Ханз ба үгийн асуулт, N5-аас N1",
    web: "Вэб хувилбарыг турших",
    featuresTitle: "Онцлог",
    features: [
      {
        name: "Үг ба ханз",
        detail: "N5-аас N1 хүртэл 8,000+ JLPT үг, 2,200+ ханз.",
      },
      {
        name: "Шалгалтын хэлбэр",
        detail: "JLPT шалгалт хэрхэн асуудгийг тавьдаг тэр хэлбэрээр.",
      },
      {
        name: "Загвар шалгалт",
        detail: "Хугацаатай загвар шалгалт, хэсэг бүрийн оноо.",
      },
      {
        name: "Зайтай давталт",
        detail: "Үг, ханз дахин гарах үедээ буцаж ирнэ.",
      },
      {
        name: "Бэлэн байдал",
        detail: "N5-аас N1 хүртэл түвшин бүрийн бэлэн байдал.",
      },
      {
        name: "Нууц",
        detail: "Зар байхгүй, account байхгүй. Явц төхөөрөмж дээр үлдэнэ.",
      },
    ],
    pricingTitle: "Үнэ",
    freeLabel: "Үнэгүй",
    freePrice: "N5 ба N4",
    freeDetail: "Эхний түвшнүүд үнэгүй.",
    monthLabel: "JLPT Pro",
    monthPrice: "$4.99",
    monthDetail: "сард",
    yearLabel: "JLPT Pro",
    yearPrice: "$24.99",
    yearDetail: "жилд, 7 хоногийн үнэгүй туршилттай",
    lifeLabel: "JLPT Pro",
    lifePrice: "$59.99",
    lifeDetail: "нэг удаагийн төлбөр",
    priceNote:
      "N5 ба N4 үнэгүй. JLPT Pro сард $4.99, жилд $24.99 (7 хоногийн үнэгүй туршилттай), эсвэл нэг удаа $59.99. Төлбөрийг Apple хийнэ.",
    screensTitle: "Дэлгэц",
    screens: [
      {
        src: "/flashcardquest/01-home.png",
        alt: "Өнөөдрийн даалгавар, түвшний бэлэн байдал, N5 загвар шалгалт",
        caption: "Өнөөдрийн даалгавар",
      },
      {
        src: "/flashcardquest/02-context.png",
        alt: "Хоосон зайг нөхөх асуулт, зөв хариу тэмдэглэгдсэн",
        caption: "Шалгалтын хэлбэр",
      },
      {
        src: "/flashcardquest/05-mock.png",
        alt: "Хугацаатай N5 хэлний мэдлэгийн ханз бичлэгийн асуулт",
        caption: "Хугацаатай загвар шалгалт",
      },
      {
        src: "/flashcardquest/07-progress.png",
        alt: "Streak, түвшин, 7 хоногийн график, загвар шалгалтын оноо",
        caption: "Бэлэн байдал ба оноо",
      },
      {
        src: "/flashcardquest/08-kanji.png",
        alt: "語 ханзны уншлага, жишээ үг бүхий сурах хуудас",
        caption: "Сурах хуудас",
      },
    ],
    privacy: "Нууцлал",
    terms: "Нөхцөл",
    support: "Тусламж",
    note: "JLPT, Japan Foundation, JEES-тэй хамааралгүй.",
  },
  ja: {
    kicker: "jlpt quiz game",
    title: "JLPT Flashcard Quest",
    tagline: "漢字と語彙のクイズ、N5からN1",
    web: "ウェブ版を試す",
    featuresTitle: "機能",
    features: [
      {
        name: "単語と漢字",
        detail: "N5からN1まで、JLPTの単語8,000以上、漢字2,200以上。",
      },
      {
        name: "試験形式",
        detail: "JLPTの試験形式の問題。",
      },
      {
        name: "模試",
        detail: "制限時間つきの模試。セクションごとの得点。",
      },
      {
        name: "間隔反復",
        detail: "単語や漢字が次に必要なときに戻ってきます。",
      },
      {
        name: "準備度",
        detail: "N5からN1まで、級ごとの準備度。",
      },
      {
        name: "非公開",
        detail: "広告なし。アカウントなし。進捗は端末に残ります。",
      },
    ],
    pricingTitle: "料金",
    freeLabel: "無料",
    freePrice: "N5とN4",
    freeDetail: "最初の級は無料です。",
    monthLabel: "JLPT Pro",
    monthPrice: "$4.99",
    monthDetail: "月額",
    yearLabel: "JLPT Pro",
    yearPrice: "$24.99",
    yearDetail: "年額。7日間の無料トライアル付き",
    lifeLabel: "JLPT Pro",
    lifePrice: "$59.99",
    lifeDetail: "買い切り",
    priceNote:
      "N5とN4は無料です。JLPT Proは月額$4.99、年額$24.99（7日間の無料トライアル付き）、または買い切り$59.99です。支払いはAppleが処理します。",
    screensTitle: "スクリーンショット",
    screens: [
      {
        src: "/flashcardquest/01-home.png",
        alt: "今日のクエスト、級の準備度、N5模試があるホーム画面",
        caption: "今日のクエスト",
      },
      {
        src: "/flashcardquest/02-context.png",
        alt: "正解が示された穴埋め問題",
        caption: "試験形式の問題",
      },
      {
        src: "/flashcardquest/05-mock.png",
        alt: "制限時間つきのN5言語知識、漢字の表記問題",
        caption: "制限時間つきの模試",
      },
      {
        src: "/flashcardquest/07-progress.png",
        alt: "連続日数、レベル、7日間のグラフ、模試の得点",
        caption: "準備度と得点",
      },
      {
        src: "/flashcardquest/08-kanji.png",
        alt: "漢字「語」の読みと例語がある学習シート",
        caption: "学習シート",
      },
    ],
    privacy: "プライバシー",
    terms: "利用規約",
    support: "サポート",
    note: "JLPT、国際交流基金、JEESとは関係ありません。",
  },
} as const satisfies Record<Language, Record<string, unknown>>;

function AppleMark() {
  return (
    <svg viewBox="0 0 16 20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.2 10.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c.7-1 1.2-2.1 1.5-3.2-3.9-1.5-3.8-5.4-3.8-5.1zM11.1 3.8c.6-.8 1.1-1.9.9-3-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.6-1.3z"
      />
    </svg>
  );
}

export function FlashcardQuestContent() {
  const { language } = useLanguage();
  const page = copy[language];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>{page.kicker}</p>
        <h1>{page.title}</h1>
        <p className={styles.tagline}>{page.tagline}</p>
        <div className={styles.actions}>
          <span className={styles.badge}>
            <AppleMark />
            <strong>App Store (coming soon)</strong>
          </span>
          <Link href="/learn-japanese" className={styles.webLink}>
            {page.web}
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2>{page.featuresTitle}</h2>
        <div className={styles.featureGrid}>
          {page.features.map((feature) => (
            <article key={feature.name} className={styles.feature}>
              <h3>{feature.name}</h3>
              <p>{feature.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>{page.pricingTitle}</h2>
        <div className={styles.priceGrid}>
          <article className={`${styles.price} ${styles.free}`}>
            <span>{page.freeLabel}</span>
            <strong>{page.freePrice}</strong>
            <p>{page.freeDetail}</p>
          </article>
          <article className={styles.price}>
            <span>{page.monthLabel}</span>
            <strong>{page.monthPrice}</strong>
            <p>{page.monthDetail}</p>
          </article>
          <article className={`${styles.price} ${styles.year}`}>
            <span>{page.yearLabel}</span>
            <strong>{page.yearPrice}</strong>
            <p>{page.yearDetail}</p>
          </article>
          <article className={`${styles.price} ${styles.life}`}>
            <span>{page.lifeLabel}</span>
            <strong>{page.lifePrice}</strong>
            <p>{page.lifeDetail}</p>
          </article>
        </div>
        <p className={styles.priceNote}>{page.priceNote}</p>
      </section>

      <section className={styles.section}>
        <h2>{page.screensTitle}</h2>
        <div className={styles.shots}>
          {page.screens.map((screen) => (
            <figure key={screen.src} className={styles.shot}>
              <img
                src={screen.src}
                alt={screen.alt}
                width={786}
                height={1704}
              />
              <figcaption className={styles.shotCaption}>{screen.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.links}>
          <Link href="/flashcardquest/privacy">{page.privacy}</Link>
          <Link href="/flashcardquest/terms">{page.terms}</Link>
          <Link href="/flashcardquest/support">{page.support}</Link>
        </div>
        <p className={styles.note}>{page.note}</p>
      </footer>
    </div>
  );
}
