import React from 'react';

export const metadata = {
  title: "Metronome Glow",
  description: "Support page",
};

export default function Metronome() {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-4">
        Thank you for using <span className="font-bold">Metronome Glow</span>.
      </h4>
      <p className="text-gray-600 mb-6">iOS Metronome App.</p>

      <h4 className="font-bold mb-4">References</h4>
      <p className="mb-6">
        This app may include third-party software and content, and its use is hereby attributed.
      </p>

      <ul className="list-disc pl-5 space-y-4 mb-8">
        <li>
          Click sound is from{' '}
          <a
            href="https://pixabay.com/sound-effects/metronome-85688/"
            className="text-blue-500 hover:underline"
          >
            Metronome
          </a>{' '}
          by{' '}
          <a
            href="https://pixabay.com/users/freesound_community-46691455/"
            className="text-blue-500 hover:underline"
          >
            freesound_community
          </a>{' '}
          on{' '}
          <a href="https://pixabay.com/" className="text-blue-500 hover:underline">
            Pixabay
          </a>
          , originally from{' '}
          <a href="https://freesound.org/" className="text-blue-500 hover:underline">
            Freesound
          </a>
          . (2026 August)
        </li>
      </ul>

      <ul className="list-none space-y-4">
        <li>
          <a href="../Metronome/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="../Metronome/terms" className="text-blue-500 hover:underline">
            Terms and Services
          </a>
        </li>
        <li>
          <a
            href="mailto:unobatbayar@protonmail.com"
            className="text-blue-500 hover:underline"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
