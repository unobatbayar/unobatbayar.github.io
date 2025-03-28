import React from 'react';

export const metadata = {
  title: "Cyberbolt",
  description: "Support page",
};

export default function Cyberbolt() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">


      {/* Thank You Message */}
      <h4 className="text-xl font-semibold text-gray-900 mb-4">
        Thank you for playing <a href="https://apps.apple.com/us/app/cyberbolt/id1532655861" className="text-blue-600 hover:underline">Cyber Bolt</a>.
      </h4>

      {/* References Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">References</h2>
      <p className="text-lg text-gray-600 mb-6">
        This app may include third-party software and content, and its use is hereby attributed.
      </p>
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li>
          All prefabs were purchased from <a href="https://assetstore.unity.com/" className="text-blue-500 hover:underline">Unity Asset Store</a>. (2020 July)
        </li>
        <li>
          All Icons are from <a href="https://www.flaticon.com/" className="text-blue-500 hover:underline">Flaticon</a> under Premium Subscription. (2020 July)
        </li>
        <li>
          <a href="https://soundcloud.com/nrazed/cyberbolt" className="text-blue-500 hover:underline">Cyberbolt: Ultimate Edition</a> theme song is created by <a href="../" className="text-blue-500 hover:underline">unobatbayar</a>. (2020 July)
        </li>
        <li>
          General sounds are from <a href="https://freesound.org/" className="text-blue-500 hover:underline">freesound.org</a> under{' '}
          <span className="font-semibold text-gray-800">Creative Commons 0</span> license. (2020 July)
        </li>
        <li>
          <a href="https://freesound.org/people/se2001/sounds/470768/" className="text-blue-500 hover:underline">Coin Collect</a> by <a href="https://freesound.org/people/se2001/" className="text-blue-500 hover:underline">se2001</a> is used for Coin collect sound. Licensed under Creative Commons 0. (2024)
        </li>
        <li>
          <a href="https://freesound.org/people/Erokia/sounds/688502/" className="text-blue-500 hover:underline">Guitar Synth/Piano Loops (100BPM)</a> is the sound used for{' '}
          <span className="font-semibold text-gray-800">Cyberbolt: Odyssey</span> theme.
          <div className="text-gray-600 mt-2">
            It is made by <a href="https://freesound.org/people/Erokia/" className="text-blue-500 hover:underline">Erokia</a> and distributed under{' '}
            <span className="font-semibold text-gray-800">Attribution NonCommercial 4.0</span>. (2024 March) Please consider{' '}
            <a href="https://www.patreon.com/Erokia" className="text-blue-500 hover:underline">supporting</a> the artist.
          </div>
        </li>
        <li>
          App Icon is made using <a href="https://www.midjourney.com/" className="text-blue-500 hover:underline">Midjourney</a> under{' '}
          <a href="https://docs.midjourney.com/docs/plans" className="text-blue-500 hover:underline">Basic Plan</a> subscription. (2024 March)
        </li>
      </ul>

      {/* Privacy Policy, Terms, and Contact Section */}
      <div className="mt-8">
        <ul className="list-none space-y-4 text-gray-700">
          <li>
            <a href="../Cyberbolt/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>
          </li>
          <li>
            <a href="../Cyberbolt/terms" className="text-blue-500 hover:underline">Terms and Services</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
