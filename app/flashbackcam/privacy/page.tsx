import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flashback Cam Privacy Policy",
  description:
    "Flashback Cam privacy policy. Photo processing stays on the device. No analytics, no account.",
};

export default function FlashbackCamPrivacyPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Privacy Policy</h1>
      <p>Effective date: 12 October 2026</p>
      <p>
        Flashback Cam is an iPhone app for retro digicam and film-style photos,
        published by Usukhbayar Batbayar. This policy explains what the app
        does with information on your device.
      </p>

      <h2>What I do not collect</h2>
      <p>
        Flashback Cam does not collect any data. There is no account, no
        analytics, no advertising, no crash reporting, and no third-party SDKs.
        Nothing you shoot or import is sent to me or to anyone else.
      </p>

      <h2>Photos stay on your device</h2>
      <p>
        All photo processing happens on your device. Photos are not uploaded.
      </p>
      <ul>
        <li>
          <strong>Camera.</strong> Used only to take photos you choose to take.
        </li>
        <li>
          <strong>Photo library.</strong> Used only to save photos you choose
          to keep and to import photos you choose. The app does not scan or
          upload your library.
        </li>
      </ul>

      <h2>Purchases</h2>
      <p>
        Flashback Cam offers optional Pro purchases processed by Apple under
        Apple’s privacy policy: Pro Weekly ($5.99 per week, with a 3-day free
        trial), Pro Yearly ($29.99 per year), and Pro Lifetime ($49.99,
        one-time). I do not receive your payment details.
      </p>

      <h2>Children</h2>
      <p>
        Flashback Cam does not collect personal information from anyone,
        including children.
      </p>

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
        </a>{" "}
        or <a href="mailto:unobatbayar@icloud.com">unobatbayar@icloud.com</a>.
        Related: <Link href="/flashbackcam/support">Support</Link>,{" "}
        <Link href="/flashbackcam/terms">Terms</Link>.
      </p>
    </article>
  );
}
