"use client";

import { SectionLabel } from "../components/section-label";
import { type Language, useLanguage } from "../components/language";
import {
  AppFeatures,
  AppLegalLinks,
  AppScreens,
  AppStoreBadge,
} from "../components/app-landing";

const APP_STORE = "https://apps.apple.com/us/app/anomalor/id1534079451";

const copy = {
  en: {
    kicker: "anomalor",
    headline: ["Password generator.", "Encrypted vault. Offline."],
    intro:
      "Anomalor creates strong, random passwords on your iPhone or Mac. A vault is optional: use it only if you want to save them. There is no account, no analytics, and no network.",
    screens: [
      {
        src: "/Anomalor/generate.jpg",
        label: "Generate",
        alt: "Anomalor generating a seven-word passphrase with strength and copy actions",
      },
      {
        src: "/Anomalor/vault.jpg",
        label: "Vault",
        alt: "Anomalor vault with favorites and social logins, unlocked on the device",
      },
      {
        src: "/Anomalor/options.jpg",
        label: "Options",
        alt: "Anomalor generate options for word count, separator, capitalization, and extras",
      },
    ],
    features: [
      {
        name: "Generate",
        detail:
          "Random passwords, EFF passphrases, and PINs. Presets for strong, Wi-Fi, memorable, and more.",
      },
      {
        name: "Strength",
        detail:
          "Entropy and estimated crack time, calculated on the device. Nothing is sent anywhere.",
      },
      {
        name: "Check",
        detail:
          "Paste or type a password to see how strong it is. The Check tab never leaves this device.",
      },
      {
        name: "Vault",
        detail:
          "Optional encrypted store (AES-GCM). Unlock with Face ID, Touch ID, or your master password.",
      },
      {
        name: "Backup",
        detail:
          "Export an encrypted file in Files — On My iPhone, iCloud Drive, or another folder you choose.",
      },
      {
        name: "Clipboard",
        detail:
          "Copied passwords can expire automatically. On iPhone they are removed even if the app is closed.",
      },
    ],
    privacy:
      "Passwords stay on the device. The vault is encrypted and excluded from iCloud device backup. Face ID unlocks a Keychain copy of the vault key on that device only. Session history is optional, kept in memory, and gone when the app closes. A forgotten master password cannot be recovered.",
  },
  mn: {
    kicker: "anomalor",
    headline: ["Нууц үг үүсгэгч.", "Шифрлэгдсэн vault. Офлайн."],
    intro:
      "Anomalor iPhone болон Mac дээр хүчтэй, санамсаргүй нууц үг үүсгэдэг. Vault нь optional: хадгалахыг хүсвэл л ашиглана. Account байхгүй, analytics байхгүй, сүлжээ хэрэглэхгүй.",
    screens: [
      {
        src: "/Anomalor/generate.jpg",
        label: "Үүсгэх",
        alt: "Anomalor долоон үгтэй passphrase үүсгэж, хүчийг нь харуулж байна",
      },
      {
        src: "/Anomalor/vault.jpg",
        label: "Vault",
        alt: "Anomalor vault, favorites болон social login-уудтай, төхөөрөмж дээр нээлттэй",
      },
      {
        src: "/Anomalor/options.jpg",
        label: "Тохиргоо",
        alt: "Anomalor үүсгэх тохиргоо: үгийн тоо, тусгаарлагч, том жижиг үсэг",
      },
    ],
    features: [
      {
        name: "Үүсгэх",
        detail:
          "Санамсаргүй нууц үг, EFF passphrase, PIN. Strong, Wi-Fi, memorable зэрэг preset-тэй.",
      },
      {
        name: "Хүч",
        detail:
          "Entropy болон таамагласан crack time-ийг төхөөрөмж дээр тооцоолно. Хаашаа ч илгээгдэхгүй.",
      },
      {
        name: "Шалгах",
        detail:
          "Нууц үгээ paste хийж эсвэл бичиж хүчийг харна. Check tab энэ төхөөрөмжөөс гардаггүй.",
      },
      {
        name: "Vault",
        detail:
          "Optional шифрлэгдсэн хадгалалт (AES-GCM). Face ID, Touch ID, эсвэл master password-оор нээнэ.",
      },
      {
        name: "Нөөц",
        detail:
          "Files дотор шифрлэгдсэн файл экспортлоно — On My iPhone, iCloud Drive, эсвэл өөр folder.",
      },
      {
        name: "Clipboard",
        detail:
          "Хуулсан нууц үг автоматаар устгагдана. iPhone дээр апп хаагдсан ч арилгана.",
      },
    ],
    privacy:
      "Нууц үг төхөөрөмж дээр үлдэнэ. Vault нь шифрлэгдсэн бөгөөд iCloud device backup-д орохгүй. Face ID зөвхөн тухайн төхөөрөмжийн Keychain дахь vault key-г нээнэ. Session history optional, memory-д байж, апп хаахад алга болно. Мартсан master password сэргээгдэхгүй.",
  },
  ja: {
    kicker: "anomalor",
    headline: ["パスワードジェネレーター。", "暗号化vault。オフライン。"],
    intro:
      "AnomalorはiPhoneとMacで強力なランダムパスワードを作ります。vaultは任意です。アカウント、analytics、通信はありません。",
    screens: [
      {
        src: "/Anomalor/generate.jpg",
        label: "生成",
        alt: "Anomalorが7語のpassphraseを生成し、強度を表示している画面",
      },
      {
        src: "/Anomalor/vault.jpg",
        label: "Vault",
        alt: "Anomalorのvault。favoritesとsocial loginが一覧表示されている",
      },
      {
        src: "/Anomalor/options.jpg",
        label: "オプション",
        alt: "Anomalorの生成オプション。語数、区切り、大文字小文字の設定",
      },
    ],
    features: [
      {
        name: "生成",
        detail:
          "ランダムパスワード、EFF passphrase、PIN。strong、Wi-Fi、覚えやすいなどのpresetあり。",
      },
      {
        name: "強度",
        detail:
          "entropyと推定crack timeを端末上で計算。どこにも送信しません。",
      },
      {
        name: "チェック",
        detail:
          "パスワードを貼るか入力して強さを確認。Check tabは端末から出ません。",
      },
      {
        name: "Vault",
        detail:
          "任意の暗号化ストア（AES-GCM）。Face ID、Touch ID、またはmaster passwordで解除。",
      },
      {
        name: "バックアップ",
        detail:
          "Filesに暗号化ファイルを書き出します。On My iPhone、iCloud Drive、好きなfolderへ。",
      },
      {
        name: "Clipboard",
        detail:
          "コピーしたパスワードは自動で消えます。iPhoneではアプリを閉じても削除されます。",
      },
    ],
    privacy:
      "パスワードは端末に残ります。vaultは暗号化され、iCloudのdevice backupから除外されます。Face IDはその端末のKeychainにあるvault keyだけを解除します。session historyは任意で、メモリ上にあり、アプリを閉じると消えます。忘れたmaster passwordは復元できません。",
  },
} as const satisfies Record<Language, Record<string, unknown>>;

export function AnomalorContent() {
  const { language, t } = useLanguage();
  const page = copy[language];

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="cyber-text text-sm">// {page.kicker}</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">
          {page.headline[0]}
          <br />
          {page.headline[1]}
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {page.intro}
        </p>
        <AppStoreBadge href={APP_STORE} src="/Anomalor/app-store.svg" />
      </section>

      <AppScreens
        screens={[...page.screens]}
        width={621}
        height={1344}
        imageClassName="w-full rounded-[1.75rem] border border-term-border bg-[#11181c]"
      />

      <AppFeatures features={[...page.features]} />

      <section className="space-y-3">
        <SectionLabel>{t.landing.privacy}</SectionLabel>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          {page.privacy}
        </p>
        <AppLegalLinks base="/Anomalor" />
      </section>
    </div>
  );
}
