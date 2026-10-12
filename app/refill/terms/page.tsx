import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refill: Home Supplies Terms",
  description:
    "Terms for Refill: Home Supplies, including the one-time unlock.",
};

export default function RefillTermsPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Terms</h1>
      <p>Effective date: 12 October 2026</p>
      <p>
        These terms apply when you download or use Refill: Home Supplies, an
        iPhone app published by Usukhbayar Batbayar. If you do not agree, do
        not use the app.
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
        (the Standard EULA). The terms below cover the unlock.
      </p>

      <h2>The app</h2>
      <p>
        Refill tracks household supplies on your device: exact specs, refill
        reminders, replacement history, Shopping Mode, widgets, and CSV export.
        It works offline. The free version includes 5 items.
      </p>

      <h2>Unlock</h2>
      <p>
        Unlimited items, widgets, CSV export, and custom reminders are a
        one-time in-app purchase of $4.99, processed by Apple. There is no
        subscription. I do not receive your payment details. The price you pay
        is the price shown on the App Store for your region.
      </p>
      <p>
        Restore the purchase in the app with the same Apple ID you used to buy
        it.
      </p>

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
        . Related: <Link href="/refill/privacy">Privacy Policy</Link>,{" "}
        <Link href="/refill/support">Support</Link>.
      </p>
    </article>
  );
}
