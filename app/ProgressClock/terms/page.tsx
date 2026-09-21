import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Progress Clock Terms",
  description:
    "Terms for Progress Clock, including the optional Premium monthly subscription.",
  alternates: {
    canonical: "/ProgressClock/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Terms</h1>
      <p>Effective date: 21 September 2026</p>
      <p>
        These terms apply when you download or use Progress Clock, an iPhone
        app and widget published by Usukhbayar Batbayar. If you do not agree,
        do not use the app.
      </p>

      <h2>The app</h2>
      <p>
        Progress Clock shows the day, week, month, year, and (if you set a
        birthdate) life as progress. You can keep goals such as countdowns,
        timers, and time since a date. The clock and life calendar work
        without a subscription. Some widgets, extra goals, and extra themes
        require Progress Clock Premium.
      </p>
      <p>
        The app is provided as is. I may change it, charge for it differently
        in the future, or stop offering it. I will not charge you extra
        without making it clear what you are paying for.
      </p>

      <h2>License</h2>
      <p>
        You get a personal, non-exclusive license to use Progress Clock on
        devices you own or control, under Apple’s App Store terms. The app,
        name, and related intellectual property remain mine. You may not
        redistribute, sublicense, or sell the app, or present it as your own
        product.
      </p>

      <h2>Progress Clock Premium</h2>
      <p>
        Progress Clock Premium is an optional auto-renewable monthly
        subscription sold through the App Store. It unlocks additional goals,
        Lock Screen and Large widgets, and additional themes.
      </p>
      <ul>
        <li>
          Payment is charged to your Apple ID account at confirmation of
          purchase.
        </li>
        <li>
          The subscription renews automatically unless you cancel at least 24
          hours before the end of the current period.
        </li>
        <li>
          Your account is charged for renewal within 24 hours prior to the end
          of the current period.
        </li>
        <li>
          You can manage or cancel in iPhone Settings → Apple ID →
          Subscriptions. Deleting the app does not cancel the subscription.
        </li>
      </ul>
      <p>
        Prices are shown in the app and on the App Store and may vary by
        region. Restore Purchases recovers an existing subscription on a
        device signed in with the same Apple ID.
      </p>

      <h2>Your data</h2>
      <p>
        Birthdate, goals, and settings are stored on your device. I cannot
        recover them if you delete the app or lose the device. Progress
        figures, remaining-time copy, and the life calendar are local
        calculations, not medical or financial advice.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        Progress Clock is provided without warranties to the extent allowed by
        law, including warranties of merchantability, fitness for a particular
        purpose, and non-infringement. I am not liable for lost goals, lost
        settings, missed notifications, or other damages arising from use of
        the app, except where liability cannot be excluded.
      </p>
      <p>
        Keep your device updated. Jailbreaking or otherwise disabling system
        security features can stop the app, widgets, or purchases from working
        as designed.
      </p>

      <h2>Updates and availability</h2>
      <p>
        The app currently supports iPhone and iPad. System requirements may
        change. I do not promise that every future iOS version will be
        supported, or that the app will remain available indefinitely. If the
        app is withdrawn, your license to use copies you already have still
        depends on Apple’s App Store terms.
      </p>

      <h2>Changes</h2>
      <p>
        I may update these terms by posting a new version on this page. The
        effective date at the top is the date the current version took effect.
      </p>

      <h2>Contact</h2>
      <p>
        Questions:{" "}
        <a
          href="https://x.com/unoryas"
          target="_blank"
          rel="noopener noreferrer"
        >
          @unoryas
        </a>
        . Related: <Link href="/ProgressClock/privacy">Privacy Policy</Link>.
      </p>
    </article>
  );
}
