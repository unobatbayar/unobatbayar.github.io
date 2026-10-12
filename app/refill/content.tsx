"use client";

import { SectionLabel } from "../components/section-label";
import { type Language, useLanguage } from "../components/language";
import {
  AppFeatures,
  AppLegalLinks,
  AppStoreBadge,
} from "../components/app-landing";

const APP_STORE = "https://apps.apple.com/app/id6821990143";

const copy = {
  en: {
    kicker: "refill",
    headline: "Never forget a refill.",
    intro:
      "Refill: Home Supplies keeps filters, batteries, and bulbs in one place. Exact specs, a reminder when something is due, and one tap when you replace it. It works offline.",
    screens: [
      {
        src: "/refill/list.png",
        alt: "Refill list of overdue HVAC filters, smoke detector batteries, and later items",
      },
      {
        src: "/refill/detail.png",
        alt: "HVAC filter detail with size, location, 90-day interval, and replacement history",
      },
      {
        src: "/refill/shopping.png",
        alt: "Shopping Mode with large spec text and items to check off",
      },
      {
        src: "/refill/paywall.png",
        alt: "One-time $4.99 unlock for unlimited items, widgets, CSV export, and custom reminders",
      },
    ],
    features: [
      {
        name: "Specs",
        detail:
          "Size, model, and where it goes. The exact part, not a vague reminder.",
      },
      {
        name: "Replaced",
        detail: "One tap marks it replaced and keeps the history.",
      },
      {
        name: "Reminders",
        detail:
          "Local notifications for what is overdue, due this month, or later.",
      },
      {
        name: "Shopping Mode",
        detail:
          "Big text for the store aisle. Check items off for the next 7, 30, or 90 days.",
      },
      {
        name: "Widgets",
        detail: "Home Screen widgets so the next refill is visible without opening the app.",
      },
      {
        name: "Export",
        detail: "CSV export stays on the device until you choose where to share it.",
      },
    ],
    premium:
      "The free version tracks 5 items. Unlock the rest once for $4.99: unlimited items, widgets, CSV export, and custom reminders. No subscription. Payment is handled by Apple. Restore the purchase with the same Apple ID.",
    privacy:
      "Supplies, quantities, reminders, and settings stay on the device. There is no account, no analytics, and no third-party SDKs. Optional item photos stay on the device. Purchases go through Apple.",
  },
  mn: {
    kicker: "refill",
    headline: "Нөөцөө бүү мартаарай.",
    intro:
      "Refill: Home Supplies шүүлтүүр, батарей, чийдэнг нэг дор хадгална. Яг spec, хугацаа дөхөхөд сануулга, солиход нэг товшилт. Offline ажиллана.",
    screens: [
      {
        src: "/refill/list.png",
        alt: "Refill жагсаалт: хугацаа хэтэрсэн HVAC filter, утаа мэдрэгчийн батарей",
      },
      {
        src: "/refill/detail.png",
        alt: "HVAC filter-ийн хэмжээ, байршил, 90 өдрийн интервал, солисон түүх",
      },
      {
        src: "/refill/shopping.png",
        alt: "Shopping Mode: том текст, дэлгүүрт тэмдэглэж авах зүйлс",
      },
      {
        src: "/refill/paywall.png",
        alt: "Нэг удаагийн $4.99 unlock: хязгааргүй item, widget, CSV, custom reminder",
      },
    ],
    features: [
      {
        name: "Spec",
        detail: "Хэмжээ, загвар, хаана байгаа. Бүдэг сануулга биш, яг сэлбэг.",
      },
      {
        name: "Солив",
        detail: "Нэг товшилтоор солигдсонд тэмдэглэж, түүхийг үлдээнэ.",
      },
      {
        name: "Сануулга",
        detail:
          "Хэтэрсэн, энэ сард, дараа нь гэсэн local notification.",
      },
      {
        name: "Shopping Mode",
        detail:
          "Дэлгүүрийн коридорт зориулсан том текст. 7, 30, 90 хоногоор тэмдэглэнэ.",
      },
      {
        name: "Widget",
        detail: "Дараагийн refill-ээ апп нээхгүйгээр харах Home Screen widget.",
      },
      {
        name: "Export",
        detail: "CSV төхөөрөмж дээр үүсээд, таны сонгосон газар л очно.",
      },
    ],
    premium:
      "Үнэгүй хувилбар 5 item хянана. Үлдсэнийг нэг удаа $4.99-өөр нээнэ: хязгааргүй item, widget, CSV export, custom reminder. Subscription байхгүй. Төлбөрийг Apple хийнэ. Худалдаж авсан Apple ID-ээр restore хийнэ.",
    privacy:
      "Нөөц, тоо, сануулга, тохиргоо төхөөрөмж дээр үлдэнэ. Account байхгүй, analytics байхгүй, third-party SDK байхгүй. Item-ийн зураг төхөөрөмж дээр. Худалдан авалтыг Apple боловсруулна.",
  },
  ja: {
    kicker: "refill",
    headline: "交換を忘れない。",
    intro:
      "Refill: Home Suppliesはフィルター、電池、電球をひとつにまとめます。正確な仕様、期限のリマインダー、交換したときのワンタップ。オフラインで動きます。",
    screens: [
      {
        src: "/refill/list.png",
        alt: "期限切れのHVACフィルターと煙感知器の電池を並べたRefillの一覧",
      },
      {
        src: "/refill/detail.png",
        alt: "HVACフィルターのサイズ、場所、90日間隔、交換履歴",
      },
      {
        src: "/refill/shopping.png",
        alt: "大きな文字で買い物リストを消していくShopping Mode",
      },
      {
        src: "/refill/paywall.png",
        alt: "買い切り$4.99。無制限の項目、ウィジェット、CSV、カスタムリマインダー",
      },
    ],
    features: [
      {
        name: "仕様",
        detail: "サイズ、型番、設置場所。曖昧なリマインダーではなく、その部品。",
      },
      {
        name: "交換",
        detail: "ワンタップで交換済みにし、履歴を残します。",
      },
      {
        name: "リマインダー",
        detail: "期限切れ、今月、あとでのlocal notification。",
      },
      {
        name: "Shopping Mode",
        detail: "店の通路向けの大きい文字。7日、30日、90日でチェック。",
      },
      {
        name: "Widget",
        detail: "アプリを開かなくても次の交換が見えるHome Screen widget。",
      },
      {
        name: "書き出し",
        detail: "CSVは端末で作られ、共有先は自分で選びます。",
      },
    ],
    premium:
      "無料版は5件まで。残りは$4.99の買い切り: 無制限の項目、widget、CSV書き出し、カスタムリマインダー。サブスクリプションはありません。支払いはApple。購入したApple IDで復元できます。",
    privacy:
      "在庫、数量、リマインダー、設定は端末に残ります。アカウント、analytics、サードパーティSDKはありません。項目の写真も端末内。購入はApple経由です。",
  },
} as const satisfies Record<Language, Record<string, unknown>>;

export function RefillContent() {
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
        <AppStoreBadge href={APP_STORE} src="/refill/app-store.svg" />
      </section>

      <section className="space-y-3">
        <SectionLabel>{t.landing.screens}</SectionLabel>
        <div className="grid grid-cols-2 gap-3">
          {page.screens.map((screen) => (
            <img
              key={screen.src}
              src={screen.src}
              alt={screen.alt}
              width={1320}
              height={2868}
              className="h-auto w-full rounded-xl border border-term-border"
            />
          ))}
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
        <AppLegalLinks base="/refill" support />
      </section>
    </div>
  );
}
