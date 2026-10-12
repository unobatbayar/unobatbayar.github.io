"use client";

import { SectionLabel } from "../components/section-label";
import { type Language, useLanguage } from "../components/language";
import { AppFeatures, AppLegalLinks } from "../components/app-landing";

const APP_STORE = "https://apps.apple.com/app/id6822007874";

const copy = {
  en: {
    kicker: "flashback cam",
    headline: "Flashback Cam: Retro Digicam",
    intro:
      "A retro digicam and film camera for iPhone. Live looks, a date stamp, and a print-develop animation, all on the device. Nothing is uploaded.",
    comingSoon: "Coming soon on the App Store",
    heroAlt:
      "Flashback Cam on a desk with a silver digicam, film, and prints. Shoot like it's 2005.",
    screens: [
      {
        src: "/flashbackcam/camera.png",
        alt: "Flashback Cam viewfinder in the CCD '05 look. Shoot like it's 2005.",
      },
      {
        src: "/flashbackcam/looks.png",
        alt: "One tap switches five on-device looks: CCD '05, Gold 200, Disposable, Night Flash, and Strip.",
      },
      {
        src: "/flashbackcam/strip.png",
        alt: "A photobooth strip of four frames from one shutter press.",
      },
      {
        src: "/flashbackcam/date-stamp.png",
        alt: "A photo with an orange date stamp in the corner, like a 2005 digicam.",
      },
    ],
    features: [
      {
        name: "Looks",
        detail:
          "Live, on-device looks: CCD '05, Gold 200, Disposable, Night Flash, and a Photobooth strip.",
      },
      {
        name: "Date stamp",
        detail: "A stamp on the photo, the way a digicam used to print the date.",
      },
      {
        name: "Develop",
        detail: "A print-develop animation when the shot is ready.",
      },
      {
        name: "Private",
        detail:
          "No cloud, no account, no analytics. Processing stays on the phone.",
      },
      {
        name: "Camera roll",
        detail:
          "The camera and photo library are used only to take, save, and import photos you choose.",
      },
    ],
    premium:
      "Pro is optional. Pro Weekly is $5.99 per week and includes a 3-day free trial. Pro Yearly is $29.99 per year. Pro Lifetime is $49.99 once and does not renew. Weekly and Yearly renew unless you cancel at least 24 hours before the period ends, in your Apple ID settings. Any unused trial is forfeited when you purchase. Payment is handled by Apple.",
    privacy:
      "All photo processing happens on the device. There is no account, no analytics, and no third-party SDKs. Purchases go through Apple.",
  },
  mn: {
    kicker: "flashback cam",
    headline: "Flashback Cam: Retro Digicam",
    intro:
      "iPhone-д зориулсан retro digicam, film camera. Live look, date stamp, print-develop animation бүгд төхөөрөмж дээр. Юу ч upload хийгдэхгүй.",
    comingSoon: "App Store дээр удахгүй",
    heroAlt:
      "Flashback Cam, мөнгөн digicam, film, хэвлэмэл зурагтай. Shoot like it's 2005.",
    screens: [
      {
        src: "/flashbackcam/camera.png",
        alt: "CCD '05 look-той Flashback Cam viewfinder. Shoot like it's 2005.",
      },
      {
        src: "/flashbackcam/looks.png",
        alt: "Нэг товшоор таван look: CCD '05, Gold 200, Disposable, Night Flash, Strip.",
      },
      {
        src: "/flashbackcam/strip.png",
        alt: "Нэг удаагийн хаалтаар дөрвөн кадрын photobooth strip.",
      },
      {
        src: "/flashbackcam/date-stamp.png",
        alt: "2005 оны digicam шиг, булан дээрээ улбар шар date stamp-тай зураг.",
      },
    ],
    features: [
      {
        name: "Look",
        detail:
          "Төхөөрөмж дээр live: CCD '05, Gold 200, Disposable, Night Flash, Photobooth strip.",
      },
      {
        name: "Date stamp",
        detail: "Digicam огноогоо дардаг шиг зураг дээр stamp.",
      },
      {
        name: "Develop",
        detail: "Зураг бэлэн болоход print-develop animation.",
      },
      {
        name: "Нууц",
        detail:
          "Cloud байхгүй, account байхгүй, analytics байхгүй. Боловсруулалт утсан дээр.",
      },
      {
        name: "Camera roll",
        detail:
          "Camera болон photo library зөвхөн таны авсан, хадгалсан, оруулсан зурагт.",
      },
    ],
    premium:
      "Pro нь optional. Pro Weekly долоо хоногт $5.99, 3 өдрийн free trial-тай. Pro Yearly жилд $29.99. Pro Lifetime нэг удаа $49.99, сунгахгүй. Weekly болон Yearly-г хугацаа дуусахаас дор хаяж 24 цагийн өмнө Apple ID settings-ээс цуцлаагүй бол сунгагдана. Trial дуусаагүй байхад худалдаж авбал үлдсэн trial хүчингүй. Төлбөрийг Apple хийнэ.",
    privacy:
      "Зургийн боловсруулалт бүгд төхөөрөмж дээр. Account байхгүй, analytics байхгүй, third-party SDK байхгүй. Худалдан авалтыг Apple боловсруулна.",
  },
  ja: {
    kicker: "flashback cam",
    headline: "Flashback Cam: Retro Digicam",
    intro:
      "iPhone向けのレトロなデジカメ／フィルムカメラ。ルック、日付スタンプ、プリント現像のアニメーションはすべて端末内。アップロードしません。",
    comingSoon: "App Storeで近日公開",
    heroAlt:
      "銀色のデジカメ、フィルム、プリントと並んだFlashback Cam。Shoot like it's 2005.",
    screens: [
      {
        src: "/flashbackcam/camera.png",
        alt: "CCD '05ルックのFlashback Camファインダー。Shoot like it's 2005.",
      },
      {
        src: "/flashbackcam/looks.png",
        alt: "ワンタップで5つのルック: CCD '05、Gold 200、Disposable、Night Flash、Strip。",
      },
      {
        src: "/flashbackcam/strip.png",
        alt: "シャッター1回で4コマのフォトブースストリップ。",
      },
      {
        src: "/flashbackcam/date-stamp.png",
        alt: "2005年のデジカメのように、隅にオレンジの日付スタンプがある写真。",
      },
    ],
    features: [
      {
        name: "ルック",
        detail:
          "端末内でライブに: CCD '05、Gold 200、Disposable、Night Flash、Photobooth strip。",
      },
      {
        name: "日付スタンプ",
        detail: "昔のデジカメのように、写真へ日付を押します。",
      },
      {
        name: "現像",
        detail: "撮影ができたとき、プリント現像のアニメーション。",
      },
      {
        name: "非公開",
        detail:
          "クラウドなし、アカウントなし、analyticsなし。処理は端末の中。",
      },
      {
        name: "カメラロール",
        detail:
          "カメラと写真ライブラリは、自分で撮る・保存する・読み込む写真だけに使います。",
      },
    ],
    premium:
      "Proは任意です。Pro Weeklyは週$5.99で、3日間の無料トライアルが付きます。Pro Yearlyは年$29.99。Pro Lifetimeは$49.99の買い切りで、更新しません。WeeklyとYearlyは、期間終了の24時間前までにApple IDの設定で解約しない限り更新されます。購入すると、残りのトライアルは失効します。支払いはAppleが処理します。",
    privacy:
      "写真の処理はすべて端末内です。アカウント、analytics、サードパーティSDKはありません。購入はApple経由です。",
  },
} as const satisfies Record<Language, Record<string, unknown>>;

export function FlashbackCamContent() {
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
        <a
          href={APP_STORE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center border border-term-border bg-term-soft px-4 py-3 text-sm text-term-fg transition hover:border-term-accent"
        >
          {page.comingSoon}
        </a>
        <img
          src="/flashbackcam/hero.png"
          alt={page.heroAlt}
          width={2400}
          height={1260}
          className="h-auto w-full rounded-xl border border-term-border"
        />
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
        <AppLegalLinks base="/flashbackcam" support />
      </section>
    </div>
  );
}
