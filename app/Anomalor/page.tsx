// pages/page.tsx

import React from 'react';

export const metadata = {
  title: "Anomalor",
  description: "Support page",
};

export default function Anomalor() {
    return (
        <div>
            <h4>
                Thank you for using <span className="uk-text-bold">Anomalor</span>.
            </h4>
            <ul className="text-blue-500">
                <li>
                    <a href="../Anomalor/privacy">Privacy Policy</a>
                </li>
                <li>
                    <a href="../Anomalor/terms">Terms and Services</a>
                </li>
            </ul>
        </div>
    );
};