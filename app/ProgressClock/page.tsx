import React from 'react';

export const metadata = {
  title: "Progress Clock",
  description: "Support page",
};

export default function ProgressClock() {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-4">
        Thank you for using <span className="font-bold">Progress Clock</span>.
      </h4>
      <p className="text-gray-600 mb-6">iOS App, Widget for Time tracking.</p>
      
      <ul className="list-none space-y-4">
        <li>
          <a href="../ProgressClock/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>
        </li>
        <li>
          <a href="../ProgressClock/terms" className="text-blue-500 hover:underline">Terms and Services</a>
        </li>
        <li>
          <a href="mailto:unobatbayar@protonmail.com" className="text-blue-500 hover:underline">Contact</a>
        </li>
      </ul>
    </div>
  );
}
