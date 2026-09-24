"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const languages = ["en", "mn", "ja"] as const;
export type Language = (typeof languages)[number];

export const languageOptions = {
  en: { label: "en", locale: "en-US" },
  mn: { label: "mn", locale: "mn-MN" },
  ja: { label: "ja", locale: "ja-JP" },
} as const satisfies Record<
  Language,
  { label: string; locale: string }
>;

const storageKey = "language-preference";

export const translations = {
  en: {
    nav: {
      experience: "exp",
      projects: "projects",
      blog: "blog",
    },
    home: {
      aboutLabel: "about",
      headline: "Hi, I'm Usukhbayar.",
      intro: "I currently work at ODIN Tech Lab, building web products.",
      about:
        "Before this, I worked on electronic music instrument apps at Yamaha.",
      contactLabel: "contact",
      contactAction: "say hi on x",
      galaxyTitle: "Try out my Apps!",
      galaxyHint: "Each app icon opens one of my apps.",
    },
    landing: {
      overview: "overview",
      screens: "screens",
      features: "features",
      privacy: "privacy",
      terms: "terms",
      credits: "credits",
      premium: "premium",
      privacyPolicy: "Privacy Policy",
      termsLabel: "Terms",
      downloadAppStore: "Download on the App Store",
    },
    services: {
      label: "services",
      intro: "I take on freelance work: websites, apps, and systems.",
      getServices: "Get services",
      seePastWork: "See past work",
      dialogTitle: "Get in touch",
      dialogCopy: "Call or message this number and we can scope the project.",
      call: "Call",
      copy: "Copy number",
      copied: "Copied",
      close: "close",
      items: {
        websites: {
          name: "Websites",
          detail: "Business sites and landing pages",
          price: "from $1,400",
        },
        apps: {
          name: "Apps",
          detail: "iOS, Android, or both",
          price: "from $2,000",
        },
        systems: {
          name: "Systems",
          detail: "Internal tools and dashboards",
          price: "from $1,700",
        },
      },
    },
  },
  mn: {
    nav: {
      experience: "туршлага",
      projects: "төслүүд",
      blog: "блог",
    },
    home: {
      aboutLabel: "тухай",
      headline: "Сайн байна уу, намайг Өсөхбаяр гэдэг.",
      intro: "Одоо ODIN Tech Lab-д веб бүтээгдэхүүн хөгжүүлж байна.",
      about:
        "Үүнээс өмнө Yamaha-д электрон хөгжмийн хэрэгслийн аппууд дээр ажиллаж байсан.",
      contactLabel: "холбоо барих",
      contactAction: "x дээр мэнд мэдээрэй",
      galaxyTitle: "Миний аппликейшнуудыг туршаад үзээрэй!",
      galaxyHint: "Апп дүрс бүр миний нэг аппыг нээнэ.",
    },
    landing: {
      overview: "тойм",
      screens: "дэлгэц",
      features: "онцлог",
      privacy: "нууцлал",
      terms: "нөхцөл",
      credits: "кредит",
      premium: "premium",
      privacyPolicy: "Нууцлалын бодлого",
      termsLabel: "Нөхцөл",
      downloadAppStore: "App Store-с татах",
    },
    services: {
      label: "үйлчилгээ",
      intro: "Фриланс ажлаар вебсайт, апп, систем хөгжүүлдэг.",
      getServices: "Үйлчилгээ авах",
      seePastWork: "Хийсэн ажлууд",
      dialogTitle: "Холбоо барих",
      dialogCopy: "Энэ дугаар руу залгаж эсвэл мессеж бичвэл төслөө ярилцъя.",
      call: "Залгах",
      copy: "Дугаар хуулах",
      copied: "Хууллаа",
      close: "хаах",
      items: {
        websites: {
          name: "Вебсайт",
          detail: "Бизнес сайт болон landing page",
          price: "₮5M-с",
        },
        apps: {
          name: "Апп",
          detail: "iOS, Android эсвэл хоёулаа",
          price: "₮7M-с",
        },
        systems: {
          name: "Систем",
          detail: "Дотоод хэрэгсэл болон dashboard",
          price: "₮6M-с",
        },
      },
    },
  },
  ja: {
    nav: {
      experience: "経歴",
      projects: "作品",
      blog: "ブログ",
    },
    home: {
      aboutLabel: "自己紹介",
      headline: "こんにちは、ウスフバヤです。",
      intro: "現在はODIN Tech LabでWebプロダクトを開発しています。",
      about:
        "以前はYamahaで電子楽器向けアプリに携わっていました。",
      contactLabel: "連絡先",
      contactAction: "xで声をかけてください",
      galaxyTitle: "アプリを試してみて！",
      galaxyHint: "アプリアイコンを押すとアプリが開きます。",
    },
    landing: {
      overview: "概要",
      screens: "画面",
      features: "機能",
      privacy: "プライバシー",
      terms: "利用規約",
      credits: "クレジット",
      premium: "プレミアム",
      privacyPolicy: "プライバシーポリシー",
      termsLabel: "利用規約",
      downloadAppStore: "App Storeで入手",
    },
    services: {
      label: "サービス",
      intro: "Webサイト、アプリ、業務システムなどのフリーランス案件を受けています。",
      getServices: "相談する",
      seePastWork: "実績を見る",
      dialogTitle: "お問い合わせ",
      dialogCopy: "この番号に電話またはメッセージで、プロジェクトについて相談できます。",
      call: "電話",
      copy: "番号をコピー",
      copied: "コピー済み",
      close: "閉じる",
      items: {
        websites: {
          name: "Webサイト",
          detail: "ビジネスサイトとランディングページ",
          price: "22万円から",
        },
        apps: {
          name: "アプリ",
          detail: "iOS、Android、または両方",
          price: "31万円から",
        },
        systems: {
          name: "システム",
          detail: "社内ツールとダッシュボード",
          price: "27万円から",
        },
      },
    },
  },
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null | undefined): value is Language {
  return languages.includes(value as Language);
}

function detectLanguage(): Language {
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  const match = browserLanguages.find((language) => {
    const normalized = language.toLowerCase();
    return normalized.startsWith("mn") || normalized.startsWith("ja");
  });

  if (match?.toLowerCase().startsWith("mn")) return "mn";
  if (match?.toLowerCase().startsWith("ja")) return "ja";

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(storageKey);
    const nextLanguage = isLanguage(storedLanguage)
      ? storedLanguage
      : detectLanguage();

    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(storageKey, nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const activeLanguage = languageOptions[language];

  const cycleLanguage = () => {
    const index = languages.indexOf(language);
    const nextLanguage = languages[(index + 1) % languages.length];
    setLanguage(nextLanguage);
  };

  return (
    <button
      type="button"
      onClick={cycleLanguage}
      aria-label={`Language: ${language}. Click to cycle.`}
      title="Cycle language"
      className="text-term-muted transition hover:text-term-accent"
    >
      [{activeLanguage.label}]
    </button>
  );
}
