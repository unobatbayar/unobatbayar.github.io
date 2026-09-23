"use client";

import { SectionLabel } from "../components/section-label";
import { type Language, useLanguage } from "../components/language";
import {
  AppFeatures,
  AppLegalLinks,
  AppScreens,
  AppStoreBadge,
} from "../components/app-landing";

const APP_STORE = "https://apps.apple.com/us/app/progress-clock/id6446752758";

const copy = {
  en: {
    kicker: "progress clock",
    headline: "See time as progress.",
    intro:
      "Progress Clock is a clock that shows how much of today has already passed — then the week, the month, the year, and a life. Use it as a reminder that the day is still open, not as a countdown to the end.",
    screens: [
      {
        src: "/ProgressClock/clock.png",
        label: "Clock",
        alt: "Clock tab showing a day dial at 42 percent, analog hands, and week, month, and year bars",
      },
      {
        src: "/ProgressClock/goal.png",
        label: "Goal",
        alt: "Goal tab with a countdown named Clean room at 8 percent, 28 days remaining",
      },
      {
        src: "/ProgressClock/life.png",
        label: "Life",
        alt: "Life calendar of weeks lived, grouped by decade, with 1490 weeks filled in",
      },
    ],
    features: [
      {
        name: "Clock",
        detail:
          "A dial for today, analog hands, and bars for the week, month, and year. Remaining time under each one.",
      },
      {
        name: "Goal",
        detail:
          "Countdowns, timers, and time since a day that mattered. One goal is included. Premium unlocks more.",
      },
      {
        name: "Life",
        detail:
          "Every week as a dot. Set a birthdate and see childhood through later decades on one calendar.",
      },
      {
        name: "Widgets",
        detail:
          "Small and medium Home Screen widgets are free. Large, Lock Screen, and Goal widgets are Premium.",
      },
      {
        name: "Themes",
        detail:
          "Progressium and Mono are free. The rest of the palettes, including dark and light, sit behind Premium.",
      },
      {
        name: "Local",
        detail:
          "Birthdate, goals, and settings stay on the device. No account. Purchases go through Apple.",
      },
    ],
    premium:
      "Progress Clock Premium is an optional monthly subscription. It unlocks extra goals, Lock Screen and Large widgets, and every theme. The clock and the life calendar work without it. Payment is handled by Apple. Cancel anytime in Settings.",
    privacy:
      "Birthdate, goals, and preferences stay on the device. There is no account, no analytics, and no advertising. Optional goal alerts use local notifications. Purchases are processed by Apple.",
  },
  mn: {
    kicker: "progress clock",
    headline: "Цагийг явц гэж хар.",
    intro:
      "Progress Clock өнөөдөр хэрхэн өнгөрснийг харуулдаг цаг — дараа нь долоо хоног, сар, жил, амьдрал. Өдөр дуусаагүй, одоо ч нээлттэй гэдгийг сануулна. Төгсгөлийн countdown биш.",
    screens: [
      {
        src: "/ProgressClock/clock.png",
        label: "Цаг",
        alt: "Clock tab, өдрийн дугуй 42 хувь, analog зүү, долоо хоног сар жилийн мөрүүд",
      },
      {
        src: "/ProgressClock/goal.png",
        label: "Зорилго",
        alt: "Goal tab, Clean room countdown 8 хувь, 28 хоног үлдсэн",
      },
      {
        src: "/ProgressClock/life.png",
        label: "Амьдрал",
        alt: "Амьдарсан долоо хоногийн календарь, арван жилээр бүлэглэсэн, 1490 цэг",
      },
    ],
    features: [
      {
        name: "Цаг",
        detail:
          "Өнөөдрийн дугуй, analog зүү, долоо хоног сар жилийн мөр. Доор үлдсэн хугацаа.",
      },
      {
        name: "Зорилго",
        detail:
          "Countdown, timer, чухал өдрөөс хойших цаг. Нэг goal орсон. Premium илүүг нээнэ.",
      },
      {
        name: "Амьдрал",
        detail:
          "Долоо хоног бүрийг цэгээр. Төрсөн өдрөө оруулаад бага наснаас хойших арван жилийг нэг календарь дээр харна.",
      },
      {
        name: "Widget",
        detail:
          "Жижиг, дунд Home Screen widget үнэгүй. Large, Lock Screen, Goal widget нь Premium.",
      },
      {
        name: "Theme",
        detail:
          "Progressium болон Mono үнэгүй. Бусад palette, dark light бүгд Premium-д.",
      },
      {
        name: "Орон нутгийн",
        detail:
          "Төрсөн өдөр, goal, тохиргоо төхөөрөмж дээр үлдэнэ. Account байхгүй. Худалдан авалт Apple-аар.",
      },
    ],
    premium:
      "Progress Clock Premium сарын optional subscription. Нэмэлт goal, Lock Screen болон Large widget, бүх theme-г нээнэ. Цаг болон амьдралын календарь үүнгүйгээр ажиллана. Төлбөрийг Apple хийнэ. Settings-ээс хүссэн үедээ цуцална.",
    privacy:
      "Төрсөн өдөр, goal, тохиргоо төхөөрөмж дээр үлдэнэ. Account байхгүй, analytics байхгүй, зар байхгүй. Goal сануулга local notification ашиглана. Худалдан авалтыг Apple боловсруулна.",
  },
  ja: {
    kicker: "progress clock",
    headline: "時間を進捗として見る。",
    intro:
      "Progress Clockは、今日がどれだけ過ぎたかを示す時計です。週、月、年、そして人生も。終わりのカウントダウンではなく、まだ今日が残っていることのリマインダーとして使えます。",
    screens: [
      {
        src: "/ProgressClock/clock.png",
        label: "時計",
        alt: "Clockタブ。今日のダイヤルが42パーセント、analog針、週・月・年のバー",
      },
      {
        src: "/ProgressClock/goal.png",
        label: "目標",
        alt: "Goalタブ。Clean roomのcountdownが8パーセント、残り28日",
      },
      {
        src: "/ProgressClock/life.png",
        label: "人生",
        alt: "過ごした週のカレンダー。10年ごと、1490週が埋まっている",
      },
    ],
    features: [
      {
        name: "時計",
        detail:
          "今日のダイヤル、analog針、週・月・年のバー。それぞれの下に残り時間。",
      },
      {
        name: "目標",
        detail:
          "countdown、timer、大切な日から経った時間。goalは1つ付属。Premiumで追加。",
      },
      {
        name: "人生",
        detail:
          "1週間を1つの点に。生年月日を入れて、幼少期から後の10年までを1枚のカレンダーで。",
      },
      {
        name: "Widget",
        detail:
          "小さい・中くらいのHome Screen widgetは無料。Large、Lock Screen、Goal widgetはPremium。",
      },
      {
        name: "テーマ",
        detail:
          "ProgressiumとMonoは無料。暗い・明るいを含む他のpaletteはPremium。",
      },
      {
        name: "端末内",
        detail:
          "生年月日、goal、設定は端末に残ります。アカウントなし。購入はApple経由。",
      },
    ],
    premium:
      "Progress Clock Premiumは任意の月額subscriptionです。追加goal、Lock ScreenとLarge widget、すべてのthemeが開きます。時計と人生カレンダーはなしでも使えます。支払いはApple。Settingsからいつでも解約できます。",
    privacy:
      "生年月日、goal、設定は端末に残ります。アカウント、analytics、広告はありません。goalの通知はlocal notificationです。購入はAppleが処理します。",
  },
} as const satisfies Record<Language, Record<string, unknown>>;

export function ProgressClockContent() {
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
        <AppStoreBadge href={APP_STORE} src="/ProgressClock/app-store.svg" />
      </section>

      <AppScreens
        screens={[...page.screens]}
        width={1179}
        height={2556}
        imageClassName="w-full rounded-[1.75rem] border border-term-border bg-white"
      />

      <AppFeatures features={[...page.features]} />

      <section className="space-y-3">
        <SectionLabel>{t.landing.premium}</SectionLabel>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {page.premium}
        </p>
      </section>

      <section className="space-y-3">
        <SectionLabel>{t.landing.privacy}</SectionLabel>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {page.privacy}
        </p>
        <AppLegalLinks base="/ProgressClock" />
      </section>
    </div>
  );
}
