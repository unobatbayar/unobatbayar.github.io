import React from 'react';

export const metadata = {
  title: "Konple",
  description: "Support page",
};

export default function Konple() {
    return (
        <div>
            <div>
                <h4 style={{ fontWeight: 'bold' }}>References</h4>
                <p style={{ fontStyle: 'italic' }}>
                    This app may include third-party software and content, and its use is hereby attributed.
                </p>
                <ul >
                    <li>
                        <a href="https://qiita.com/From_F/items/85ae490283c11c6f795f">
                            Make a simple chat app with SwiftUI and Firebase
                        </a>
                        藤治仁, @From_F(Jihito), (2023 Oct)
                    </li>
                </ul>
            </div>

            <ul className="text-blue-500">
                <li><a href="../konple/guidelines">Guidelines</a></li>
                <li><a href="../konple/privacy">Privacy Policy</a></li>
                <li><a href="../konple/terms">Terms and Services</a></li>
            </ul>
        </div>
    );
};

