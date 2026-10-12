import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flashback Cam Terms",
  description:
    "Terms for Flashback Cam, including Pro subscriptions and the lifetime purchase.",
};

export default function FlashbackCamTermsPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Terms</h1>
      <p>Effective date: 12 October 2026</p>
      <p>
        These terms apply when you download or use Flashback Cam, an iPhone
        app for retro digicam and film-style photos published by Usukhbayar
        Batbayar. If you do not agree, do not use the app.
      </p>
      <p>
        The app is licensed under{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple’s Licensed Application End User License Agreement
        </a>{" "}
        (the Standard EULA). The terms below cover Pro purchases.
      </p>

      <h2>Purchases</h2>
      <p>
        Optional Pro access is sold through the App Store and processed by
        Apple. I do not receive your payment details.
      </p>
      <ul>
        <li>
          <strong>Pro Weekly.</strong> Auto-renewable subscription at $5.99
          per week, with a 3-day free trial.
        </li>
        <li>
          <strong>Pro Yearly.</strong> Auto-renewable subscription at $29.99
          per year.
        </li>
        <li>
          <strong>Pro Lifetime.</strong> One-time purchase at $49.99. It does
          not renew.
        </li>
      </ul>
      <p>
        The price you pay is the price shown on the App Store for your region.
      </p>

      <h2>Subscriptions</h2>
      <p>Pro Weekly and Pro Yearly renew automatically.</p>
      <ul>
        <li>
          Payment is charged to your Apple ID at confirmation of purchase.
        </li>
        <li>
          A subscription renews unless you cancel at least 24 hours before the
          end of the current period.
        </li>
        <li>
          Manage or cancel the subscription in your Apple ID settings. Deleting
          the app does not cancel it.
        </li>
        <li>
          If you buy a subscription before a free trial ends, any unused
          portion of the trial is forfeited.
        </li>
      </ul>

      <h2>Changes</h2>
      <p>
        I may update these terms by posting a new version on this page. The
        effective date at the top is the date the current version took effect.
      </p>

      <h2>Contact</h2>
      <p>
        Questions:{" "}
        <a href="https://x.com/unoryas" target="_blank" rel="noopener noreferrer">
          @unoryas
        </a>
        .
        Related: <Link href="/flashbackcam/privacy">Privacy Policy</Link>,{" "}
        <Link href="/flashbackcam/support">Support</Link>.
      </p>
    </article>
  );
}
