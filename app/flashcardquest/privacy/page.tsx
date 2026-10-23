import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JLPT Flashcard Quest Privacy Policy",
  description:
    "JLPT Flashcard Quest does not collect data. Progress stays on the device. No analytics, no ads, and no tracking.",
};

const issues = "https://github.com/unobatbayar/unobatbayar.github.io/issues";

export default function FlashcardQuestPrivacyPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Privacy Policy</h1>
      <p>Effective date: 23 October 2026</p>
      <p>
        JLPT Flashcard Quest is an iPhone app published by Usukhbayar Batbayar.
        This policy explains what the app does with information on your device.
      </p>

      <h2>Data Not Collected</h2>
      <p>
        JLPT Flashcard Quest does not collect data. Progress is stored on your
        device only. There is no analytics, no ads, and no tracking. Nothing
        you study is sent to me or to anyone else.
      </p>
      <p>
        Learned words, review dates, mock test scores, streaks, XP, and
        settings stay on the device. If you delete the app, that progress is
        removed from the device. I cannot restore it, because it never leaves
        the phone.
      </p>

      <h2>Purchases</h2>
      <p>
        JLPT Pro purchases are processed by Apple under Apple&apos;s privacy
        policy. I do not receive your payment details.
      </p>

      <h2>Notifications</h2>
      <p>
        Optional reminders use local notifications scheduled on the device.
        They are not sent through a server. You can turn them off in iOS
        Settings.
      </p>

      <h2>Children</h2>
      <p>
        The app does not collect personal information from anyone, including
        children.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, I will post the updated text on this page with
        a new effective date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: open a{" "}
        <a href={issues} target="_blank" rel="noopener noreferrer">
          GitHub issue
        </a>
        . Related: <Link href="/flashcardquest/terms">Terms</Link>,{" "}
        <Link href="/flashcardquest/support">Support</Link>.
      </p>
    </article>
  );
}
