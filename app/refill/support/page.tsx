import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refill: Home Supplies Support",
  description: "Support and FAQ for Refill: Home Supplies.",
};

export default function RefillSupportPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Support</h1>
      <p>Last updated: 12 October 2026</p>
      <p>
        Need help with Refill: Home Supplies? Reach me on X at{" "}
        <a href="https://x.com/unoryas" target="_blank" rel="noopener noreferrer">
          @unoryas
        </a>
        .
      </p>

      <h2>FAQ</h2>
      <h3>How do I restore my purchase?</h3>
      <p>
        Open Settings in the app and tap Restore Purchase. Use the same Apple
        ID you bought it with.
      </p>
      <h3>How do I add a widget?</h3>
      <p>
        Long-press your Home Screen, tap the + button, search for Refill, pick
        a size, and tap Add Widget.
      </p>
      <h3>How do I export my data as CSV?</h3>
      <p>
        Open Settings in the app and choose Export CSV, then save or share the
        file wherever you like.
      </p>

      <p>
        See also: <Link href="/refill/privacy">Privacy Policy</Link>,{" "}
        <Link href="/refill/terms">Terms</Link>.
      </p>
    </article>
  );
}
