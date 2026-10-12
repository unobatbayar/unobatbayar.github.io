import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flashback Cam Support",
  description: "Support and FAQ for Flashback Cam.",
};

export default function FlashbackCamSupportPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Support</h1>
      <p>Last updated: 12 October 2026</p>
      <p>
        Need help with Flashback Cam? Reach me on X at{" "}
        <a href="https://x.com/unoryas" target="_blank" rel="noopener noreferrer">
          @unoryas
        </a>
        .
      </p>

      <h2>FAQ</h2>
      <h3>How do I restore purchases?</h3>
      <p>
        In the app, tap Restore Purchases while signed in to the App Store with
        the same Apple ID you used to buy Pro. Purchases are processed by
        Apple and follow that Apple ID.
      </p>
      <h3>How do I cancel a subscription?</h3>
      <p>
        Pro Weekly and Pro Yearly renew unless you cancel at least 24 hours
        before the period ends. Open your Apple ID subscription settings,
        select Flashback Cam, and cancel. Deleting the app does not cancel the
        subscription. Pro Lifetime is a one-time purchase and does not renew.
      </p>
      <h3>How do I save a photo to Photos?</h3>
      <p>
        Save a photo you have taken or imported when you want it in the Photos
        app. The first time you save, iOS asks for permission to add photos to
        your library. The camera and photo library are used only to take, save,
        and import photos you choose. Processing stays on your device.
      </p>

      <p>
        See also: <Link href="/flashbackcam/privacy">Privacy Policy</Link>,{" "}
        <Link href="/flashbackcam/terms">Terms</Link>.
      </p>
    </article>
  );
}
