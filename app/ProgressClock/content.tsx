"use client";

import { SectionLabel } from "../components/section-label";
import { type Language, useLanguage } from "../components/language";
import {
  AppFeatures,
  AppLegalLinks,
  AppStoreBadge,
} from "../components/app-landing";

const APP_STORE = "https://apps.apple.com/us/app/progress-clock/id6446752758";

const copy = {
  en: {
    kicker: "progress clock",
    headline: "See time as progress.",
    intro:
      "Progress Clock is a clock that shows how much of today has already passed — then the week, the month, the year, and a life. Use it as a reminder that the day is still open, not as a countdown to the end.",
    screensAlt:
      "Progress Clock on iPhone: arc clock, day dial with week, month, and year bars, life calendar of weeks lived, a Home Screen widget, and theme settings",
    features: [
      {
        name: "Clock",
        detail:
          "Arcs or a dial for today, with the week, month, and year alongside. Switch in Settings.",
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
          "Progressium is free. The other palettes are Premium. Light, dark, and Arcs or Dial are included.",
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
    screensAlt:
      "iPhone дээрх Progress Clock: нуман цаг, өдрийн дугуй, амьдралын долоо хоногийн календарь, Home Screen widget, theme тохиргоо",
    features: [
      {
        name: "Цаг",
        detail:
          "Өнөөдрийг нум эсвэл дугуйгаар, хажууд нь долоо хоног, сар, жил. Settings-ээс солино.",
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
          "Progressium үнэгүй. Бусад palette нь Premium. Light, dark, Arcs эсвэл Dial багтана.",
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
    screensAlt:
      "iPhoneのProgress Clock。アーク時計、今日のダイヤル、過ごした週のカレンダー、ホーム画面ウィジェット、テーマ設定",
    features: [
      {
        name: "時計",
        detail:
          "今日をアークかダイヤルで。週、月、年も並ぶ。Settingsで切り替え。",
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
          "Progressiumは無料。他のpaletteはPremium。ライト、ダーク、ArcsとDialは含まれる。",
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

      <section className="space-y-3">
        <SectionLabel>{t.landing.screens}</SectionLabel>
        <div className="-mx-4 overflow-x-auto overscroll-x-contain px-4 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          <img
            src="/ProgressClock/screens.png"
            alt={page.screensAlt}
            width={1600}
            height={682}
            className="h-auto w-[40rem] max-w-none rounded-xl border border-term-border md:w-full"
          />
        </div>
      </section>

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
