import type { Metadata } from "next";
import Link from "next/link";
import { pageSocialMetadata } from "../../lib/social-metadata";

export const metadata: Metadata = pageSocialMetadata({
  title: "Progress Clock Privacy Policy",
  description:
    "Progress Clock privacy policy. Birthdate, goals, and settings stay on the device. No analytics.",
  path: "/ProgressClock/privacy",
  image: { url: "/ProgressClock/og.png", alt: "Progress Clock" },
});

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Privacy Policy</h1>
      <p>Effective date: 21 September 2026</p>
      <p>
        Progress Clock is an iPhone app and widget published by Usukhbayar
        Batbayar. This policy explains what the app does with information on
        your device.
      </p>

      <h2>What I do not collect</h2>
      <p>
        Progress Clock does not collect personal information. There is no
        account, no analytics, no advertising, no crash reporting, and no
        remote logging. The app does not send your birthdate, goals, or
        settings to me or to anyone else.
      </p>
      <p>
        Progress Clock does not use cookies, tracking pixels, or third-party
        analytics SDKs. The clock, goals, life calendar, and widgets work
        offline.
      </p>

      <h2>What stays on your device</h2>
      <p>
        Everything Progress Clock stores stays on the device you use, shared
        only with the Progress Clock widgets on that same device.
      </p>
      <ul>
        <li>
          <strong>Birthdate.</strong> Optional. Used only to draw the life
          calendar and related life statistics. It is stored locally. If you
          skip it, the rest of the app still works.
        </li>
        <li>
          <strong>Goals.</strong> Titles, dates, and progress for countdowns,
          timers, and time-since entries you create. Stored locally so widgets
          can show the active goal.
        </li>
        <li>
          <strong>Preferences.</strong> Theme, appearance, 24-hour time,
          seconds, and similar settings. Stored locally.
        </li>
        <li>
          <strong>Subscription status.</strong> Whether Premium is active, and
          when it expires, so the app and widgets can unlock the right
          features. Purchase records are held by Apple, not by me.
        </li>
      </ul>

      <h2>Purchases</h2>
      <p>
        Optional Progress Clock Premium is sold as an auto-renewable
        subscription through Apple. Payment, receipts, restore, and
        cancellation are handled by Apple under Apple’s privacy policy. I do
        not receive your payment details.
      </p>

      <h2>Notifications</h2>
      <p>
        If you turn on goal completion alerts, Progress Clock asks for
        notification permission and schedules a local notification on the
        device. Alerts are not sent through a server.
      </p>

      <h2>Widgets</h2>
      <p>
        Home Screen and Lock Screen widgets read theme, progress, and goal
        data from an App Group on the same device. That data does not leave
        the device.
      </p>

      <h2>Children</h2>
      <p>
        Progress Clock does not collect personal information from anyone,
        including children. You do not need an account to use the app.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, I will post the updated text on this page with
        a new effective date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy:{" "}
        <a
          href="https://x.com/unoryas"
          target="_blank"
          rel="noopener noreferrer"
        >
          @unoryas
        </a>
        . Related: <Link href="/ProgressClock/terms">Terms</Link>.
      </p>
    </article>
  );
}
