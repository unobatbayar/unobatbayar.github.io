import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "../components/section-label";

export const metadata: Metadata = {
  title: "Anomalor",
  description:
    "A password generator and encrypted vault for iPhone and Mac. Generated on-device. Optional vault. No analytics.",
  alternates: {
    canonical: "/Anomalor",
  },
  openGraph: {
    title: "Anomalor",
    description:
      "A password generator and encrypted vault for iPhone and Mac. Generated on-device. Optional vault. No analytics.",
    url: "/Anomalor",
    type: "website",
    images: [
      {
        url: "/Anomalor/icon.png",
        width: 1024,
        height: 1024,
        alt: "Anomalor",
      },
    ],
  },
};

const APP_STORE =
  "https://apps.apple.com/us/app/anomalor/id1534079451";

const features = [
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
];

function SamplePassword() {
  const sample = [
    { ch: "v", kind: "letter" },
    { ch: "K", kind: "letter" },
    { ch: "7", kind: "digit" },
    { ch: "#", kind: "symbol" },
    { ch: "m", kind: "letter" },
    { ch: "Q", kind: "letter" },
    { ch: "2", kind: "digit" },
    { ch: "p", kind: "letter" },
    { ch: "-", kind: "symbol" },
    { ch: "x", kind: "letter" },
    { ch: "R", kind: "letter" },
    { ch: "9", kind: "digit" },
    { ch: "!", kind: "symbol" },
    { ch: "w", kind: "letter" },
    { ch: "L", kind: "letter" },
    { ch: "4", kind: "digit" },
  ] as const;

  return (
    <p
      className="overflow-x-auto text-center font-mono text-2xl font-semibold tracking-wide sm:text-3xl"
      aria-label="Example generated password"
    >
      {sample.map((part, index) => (
        <span
          key={`${part.ch}-${index}`}
          className={
            part.kind === "digit"
              ? "text-[#1AAFD4] dark:text-[#5BE4FF]"
              : part.kind === "symbol"
                ? "text-[#1A9E7A] dark:text-[#6EEDC4]"
                : "text-term-fg"
          }
        >
          {part.ch}
        </span>
      ))}
    </p>
  );
}

export default function Anomalor() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="cyber-text text-sm">// anomalor</p>
        <h1 className="text-2xl text-term-fg sm:text-3xl">
          Password generator.
          <br />
          Encrypted vault. Offline.
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          Anomalor creates strong, random passwords on your iPhone or Mac. A
          vault is optional: use it only if you want to save them. There is no
          account, no analytics, and no network.
        </p>
        <a
          href={APP_STORE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          aria-label="Download on the App Store"
        >
          <img
            src="/Anomalor/app-store.svg"
            alt="Download on the App Store"
            width={180}
            height={60}
            className="h-[60px] w-auto"
          />
        </a>
      </section>

      <section className="border border-term-border bg-term-soft px-4 py-8 sm:px-6">
        <SamplePassword />
        <p className="mt-4 text-center text-sm text-term-faint">
          Generated on-device · never uploaded
        </p>
      </section>

      <section className="space-y-3">
        <SectionLabel>features</SectionLabel>
        <div className="divide-y divide-term-border border-t border-term-border">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <p className="shrink-0 text-sm text-term-fg">{feature.name}</p>
              <p className="text-sm leading-6 text-term-muted sm:max-w-md sm:text-right">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>privacy</SectionLabel>
        <p className="max-w-2xl text-sm leading-7 text-term-muted sm:text-base">
          Passwords stay on the device. The vault is encrypted and excluded from
          iCloud device backup. Face ID unlocks a Keychain copy of the vault key
          on that device only. Session history is optional, kept in memory, and
          gone when the app closes. A forgotten master password cannot be
          recovered.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link href="/Anomalor/privacy" className="text-term-accent hover:underline">
            Privacy Policy
          </Link>
          <Link href="/Anomalor/terms" className="text-term-accent hover:underline">
            Terms
          </Link>
        </div>
      </section>
    </div>
  );
}
