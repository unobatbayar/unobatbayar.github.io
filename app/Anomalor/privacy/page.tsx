import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anomalor Privacy Policy",
  description:
    "Anomalor privacy policy. Passwords are generated on-device. Nothing is collected or uploaded.",
  alternates: {
    canonical: "/Anomalor/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Privacy Policy</h1>
      <p>Effective date: 7 September 2026</p>
      <p>
        Anomalor is a password generator and optional encrypted vault for iPhone
        and Mac, published by Usukhbayar Batbayar. This policy explains what the
        app does with information on your device. It applies to Anomalor version
        2 and later.
      </p>

      <h2>What I do not collect</h2>
      <p>
        Anomalor does not collect personal information. There is no account, no
        analytics, no advertising, no crash reporting, and no remote logging. The
        app does not send passwords, vault contents, or usage data to me or to
        anyone else.
      </p>
      <p>
        Anomalor does not use cookies, tracking pixels, or third-party SDKs. It
        does not require an internet connection.
      </p>

      <h2>What stays on your device</h2>
      <p>
        Everything Anomalor stores stays on the device you use, unless you
        export a backup yourself.
      </p>
      <ul>
        <li>
          <strong>Generated passwords</strong> are created on-device using the
          system cryptographic random number generator. They are not uploaded.
        </li>
        <li>
          <strong>Optional vault.</strong> If you create a vault, titles,
          usernames, passwords, URLs, and notes are stored in an encrypted file
          on that device (AES-GCM, with a key derived from your master password
          using PBKDF2). The vault file is excluded from iCloud device backup.
          The generator works without a vault.
        </li>
        <li>
          <strong>Master password.</strong> Used to derive the vault key. It is
          not stored. If you forget it, neither you nor I can recover the vault.
        </li>
        <li>
          <strong>Face ID, Touch ID, or device passcode.</strong> After you
          unlock with the master password, a copy of the vault key can be saved
          in the device Keychain (this device only) so you can unlock with
          biometrics. The key never leaves that device.
        </li>
        <li>
          <strong>Generator settings</strong> (length, character rules, theme,
          clipboard timer, and similar preferences) are stored in app settings
          on the device. They do not include passwords.
        </li>
        <li>
          <strong>Session history</strong> is off by default. If you turn it on,
          recent passwords stay in memory only and are discarded when the app
          closes. They are not written to disk.
        </li>
        <li>
          <strong>Password checker.</strong> Text you paste or type in Check is
          evaluated locally and cleared when you leave the tab.
        </li>
        <li>
          <strong>Clipboard.</strong> If you copy a password, it is placed on
          the system clipboard. You can set it to expire after 30 seconds, 1
          minute, or 2 minutes. On iPhone, expiry still applies if the app is
          closed.
        </li>
      </ul>

      <h2>Backups you choose</h2>
      <p>
        You can export an encrypted <code>.anomalor</code> backup using the
        system Files picker. The file stays encrypted. You choose where it goes:
        this device, iCloud Drive, or another location. Anomalor does not sync
        or upload backups on its own.
      </p>
      <p>
        If you save a backup to iCloud Drive or another cloud folder, that
        service’s privacy policy applies to the stored file. Restoring a backup
        requires the master password that encrypted it.
      </p>

      <h2>Permissions</h2>
      <ul>
        <li>
          <strong>Face ID</strong> is used only to unlock the vault on devices
          that support it.
        </li>
        <li>
          <strong>Files</strong> access is used only when you export or restore
          a backup you select.
        </li>
      </ul>

      <h2>Older versions</h2>
      <p>
        Version 2 does not keep copied passwords in settings. On first launch,
        it removes plaintext password copies that version 0.1 stored in app
        settings, if any remain from an older install.
      </p>

      <h2>Children</h2>
      <p>
        Anomalor does not collect personal information from anyone, including
        children. You do not need an account to use the app.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, I will post the updated text on this page with a
        new effective date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy:{" "}
        <a href="mailto:unobatbayar@protonmail.com">unobatbayar@protonmail.com</a>
        . Related:{" "}
        <Link href="/Anomalor/terms">Terms</Link>.
      </p>
    </article>
  );
}
