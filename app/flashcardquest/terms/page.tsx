import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JLPT Flashcard Quest Terms",
  description:
    "Terms for JLPT Flashcard Quest, including JLPT Pro subscriptions and data attributions.",
};

const issues = "https://github.com/unobatbayar/unobatbayar.github.io/issues";
const eula =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export default function FlashcardQuestTermsPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Terms</h1>
      <p>Effective date: 23 October 2026</p>
      <p>
        These terms apply when you download or use JLPT Flashcard Quest, an
        iPhone app published by Usukhbayar Batbayar. If you do not agree, do
        not use the app.
      </p>
      <p>
        The app is licensed, not sold, under{" "}
        <a href={eula} target="_blank" rel="noopener noreferrer">
          Apple&apos;s Licensed Application End User License Agreement
        </a>{" "}
        (the Standard EULA). These terms add the rules for JLPT Pro and for
        the study data.
      </p>

      <h2>The app</h2>
      <p>
        JLPT Flashcard Quest is a kanji and vocabulary quiz for JLPT N5 to N1.
        It includes exam style questions, timed mock tests with section scores,
        spaced repetition, and readiness by level. N5 and N4 are free. JLPT
        Pro unlocks the rest.
      </p>
      <p>
        The app is provided as is. Readiness, scores, and review dates are
        study estimates. They are not an official JLPT result, and they are
        not a promise that you will pass.
      </p>
      <p>
        JLPT Flashcard Quest is not affiliated with JLPT, the Japan Foundation
        or JEES.
      </p>

      <h2>JLPT Pro</h2>
      <p>
        JLPT Pro is optional and sold through the App Store. Payment is
        processed by Apple. I do not receive your payment details. The price
        you pay is the price shown on the App Store for your region.
      </p>
      <ul>
        <li>
          <strong>Monthly.</strong> $4.99 per month. Auto-renewable
          subscription.
        </li>
        <li>
          <strong>Yearly.</strong> $24.99 per year, with a 7-day free trial.
          Auto-renewable subscription.
        </li>
        <li>
          <strong>Lifetime.</strong> $59.99 once. It does not renew.
        </li>
      </ul>

      <h2>Subscriptions</h2>
      <p>
        The monthly and yearly plans are auto-renewable subscriptions billed
        through your Apple ID.
      </p>
      <ul>
        <li>Payment is charged to your Apple ID at confirmation of purchase.</li>
        <li>
          A subscription auto-renews unless you cancel at least 24 hours
          before the period ends.
        </li>
        <li>
          Your Apple ID is charged for renewal within 24 hours before the end
          of the current period.
        </li>
        <li>
          Manage or cancel the subscription in Settings on your iPhone.
          Deleting the app does not cancel it.
        </li>
        <li>
          Any unused free trial time is forfeited when you purchase a
          subscription.
        </li>
      </ul>
      <p>
        Restore a purchase in the app with the same Apple ID you used to buy
        it.
      </p>

      <h2>Your progress</h2>
      <p>
        Progress is stored on your device only. I cannot recover it if you
        delete the app, reset progress, or lose the device.
      </p>

      <h2>Data attributions</h2>
      <p>Dictionary, list, and example data in the app comes from:</p>
      <ul>
        <li>
          <a
            href="https://www.edrdg.org/jmdict/j_jmdict.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            JMdict
          </a>{" "}
          and{" "}
          <a
            href="https://www.edrdg.org/wiki/index.php/KANJIDIC_Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            KANJIDIC2
          </a>{" "}
          by the Electronic Dictionary Research and Development Group (EDRDG),{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-SA 4.0
          </a>
          .
        </li>
        <li>
          JLPT lists by{" "}
          <a
            href="https://www.tanos.co.uk/jlpt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jonathan Waller
          </a>
          ,{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY
          </a>
          .
        </li>
        <li>
          Example sentences from{" "}
          <a href="https://tatoeba.org/" target="_blank" rel="noopener noreferrer">
            Tatoeba
          </a>
          ,{" "}
          <a
            href="https://creativecommons.org/licenses/by/2.0/fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY 2.0 FR
          </a>
          .
        </li>
      </ul>

      <h2>Changes</h2>
      <p>
        I may update these terms by posting a new version on this page. The
        effective date at the top is the date the current version took effect.
      </p>

      <h2>Contact</h2>
      <p>
        Questions: open a{" "}
        <a href={issues} target="_blank" rel="noopener noreferrer">
          GitHub issue
        </a>
        . Related: <Link href="/flashcardquest/privacy">Privacy Policy</Link>,{" "}
        <Link href="/flashcardquest/support">Support</Link>.
      </p>
    </article>
  );
}
