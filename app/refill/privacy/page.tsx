import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refill: Home Supplies Privacy Policy",
  description:
    "Refill: Home Supplies privacy policy. All data stays on the device. No analytics, no account.",
};

export default function RefillPrivacyPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Privacy Policy</h1>
      <p>Effective date: 12 October 2026</p>
      <p>
        Refill: Home Supplies is an iPhone app published by Usukhbayar
        Batbayar. This policy explains what the app does with information on
        your device.
      </p>

      <h2>What I do not collect</h2>
      <p>
        Refill does not collect any data. There is no account, no analytics,
        no advertising, no crash reporting, and no third-party SDKs. Nothing
        you enter is sent to me or to anyone else.
      </p>

      <h2>What stays on your device</h2>
      <p>
        Your supplies, quantities, reminders, and settings are stored locally
        on your device only.
      </p>
      <ul>
        <li>
          <strong>Photos.</strong> Optional. Photos you choose for items stay
          on your device and are never uploaded.
        </li>
        <li>
          <strong>CSV export.</strong> Files you export are created on device
          and go only where you choose to share them.
        </li>
      </ul>

      <h2>Notifications</h2>
      <p>
        Refill uses local notifications for refill reminders. They are
        scheduled on the device and are not sent through a server.
      </p>

      <h2>Purchases</h2>
      <p>
        Refill offers a one-time in-app purchase processed by Apple under
        Apple’s privacy policy. I do not receive your payment details.
      </p>

      <h2>Children</h2>
      <p>Refill does not collect personal information from anyone, including children.</p>

      <h2>Changes</h2>
      <p>
        If this policy changes, I will post the updated text on this page with
        a new effective date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy:{" "}
        <a href="https://x.com/unoryas" target="_blank" rel="noopener noreferrer">
          @unoryas
        </a>
        . Related: <Link href="/refill/terms">Terms</Link>,{" "}
        <Link href="/refill/support">Support</Link>.
      </p>
    </article>
  );
}
