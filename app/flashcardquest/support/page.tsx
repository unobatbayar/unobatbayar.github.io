import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JLPT Flashcard Quest Support",
  description:
    "Support and FAQ for JLPT Flashcard Quest. Restore purchases, cancel a subscription, reset progress, and data sources.",
};

const issues = "https://github.com/unobatbayar/unobatbayar.github.io/issues";

export default function FlashcardQuestSupportPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Support</h1>
      <p>Last updated: 23 October 2026</p>
      <p>
        Need help with JLPT Flashcard Quest? Open a{" "}
        <a href={issues} target="_blank" rel="noopener noreferrer">
          GitHub issue
        </a>
        .
      </p>

      <h2>FAQ</h2>
      <h3>How do I restore purchases?</h3>
      <p>
        Open Settings in the app and tap Restore Purchases. Use the same Apple
        ID you used to buy JLPT Pro. Purchases are processed by Apple and
        follow that Apple ID.
      </p>
      <h3>How do I cancel a subscription?</h3>
      <p>
        The monthly and yearly plans renew unless you cancel at least 24 hours
        before the period ends. On your iPhone, open Settings, tap your name,
        then Subscriptions, select JLPT Flashcard Quest, and cancel. Deleting
        the app does not cancel the subscription. The lifetime purchase does
        not renew.
      </p>
      <h3>How do I reset progress?</h3>
      <p>
        Progress is stored on the device only. In the app, open Settings and
        choose Reset progress. This deletes learned words, review dates,
        streaks, XP, and mock test scores on that device. It cannot be undone,
        and I cannot restore it.
      </p>
      <h3>Where does the study data come from?</h3>
      <p>
        JMdict and KANJIDIC2 by the Electronic Dictionary Research and
        Development Group (EDRDG), CC BY-SA 4.0. JLPT lists by Jonathan Waller,
        CC BY. Example sentences from Tatoeba, CC BY 2.0 FR. Details are on
        the <Link href="/flashcardquest/terms">Terms</Link> page.
      </p>

      <p>
        See also: <Link href="/flashcardquest/privacy">Privacy Policy</Link>,{" "}
        <Link href="/flashcardquest/terms">Terms</Link>.
      </p>
    </article>
  );
}
