import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anomalor Terms",
  description:
    "Terms for Anomalor, a password generator and encrypted vault for iPhone and Mac.",
  alternates: {
    canonical: "/Anomalor/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Terms</h1>
      <p>Effective date: 7 September 2026</p>
      <p>
        These terms apply when you download or use Anomalor, a password
        generator and optional encrypted vault for iPhone and Mac published by
        Usukhbayar Batbayar. If you do not agree, do not use the app.
      </p>

      <h2>The app</h2>
      <p>
        Anomalor generates passwords on your device. A vault is optional. The
        app is sold as a paid product through the App Store and is provided as
        is. I may change the app, charge for it differently in the future, or
        stop offering it. I will not charge you extra without making it clear
        what you are paying for.
      </p>
      <p>
        Anomalor does not need an internet connection. Features such as
        generation, strength estimates, checking, and the vault all run locally.
      </p>

      <h2>License</h2>
      <p>
        You get a personal, non-exclusive license to use Anomalor on devices you
        own or control, under Apple’s App Store terms. The app, name, and
        related intellectual property remain mine. You may not redistribute,
        sublicense, or sell the app, or present it as your own product.
      </p>

      <h2>Your vault and backups</h2>
      <p>
        If you create a vault, you are responsible for the master password and
        for any backup you save. I cannot reset, recover, or decrypt a vault.
        Deleting the app or the vault on a device does not delete a backup file
        you previously saved in Files.
      </p>
      <p>
        Vaults are per device. Moving data to another iPhone or Mac requires an
        encrypted backup that you restore with the same master password.
      </p>

      <h2>No guarantee of security outcomes</h2>
      <p>
        Strength ratings and crack-time estimates are local calculations and a
        lower bound, not a promise that a password cannot be guessed or that an
        account cannot be compromised. Keep your device updated, and do not
        jailbreak or otherwise disable system security features if you want the
        app and the OS protections to work as designed.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        Anomalor is provided without warranties to the extent allowed by law,
        including warranties of merchantability, fitness for a particular
        purpose, and non-infringement. I am not liable for lost passwords, lost
        vault data, forgotten master passwords, or other damages arising from
        use of the app, except where liability cannot be excluded.
      </p>

      <h2>Updates and availability</h2>
      <p>
        The app currently supports iPhone and Mac. System requirements may
        change. I do not promise that every future OS version will be supported,
        or that the app will remain available indefinitely. If the app is
        withdrawn, your license to use copies you already have still depends on
        Apple’s App Store terms.
      </p>

      <h2>Changes</h2>
      <p>
        I may update these terms by posting a new version on this page. The
        effective date at the top is the date the current version took effect.
      </p>

      <h2>Contact</h2>
      <p>
        Questions:{" "}
        <a href="mailto:unobatbayar@protonmail.com">unobatbayar@protonmail.com</a>
        . Related:{" "}
        <Link href="/Anomalor/privacy">Privacy Policy</Link>.
      </p>
    </article>
  );
}
