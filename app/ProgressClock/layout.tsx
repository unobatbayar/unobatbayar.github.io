// components/Layout.tsx

import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const metadata = {
    title: "Progress Clock",
    description: "App, Widget for Time tracking",
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    <a href="../ProgressClock">Progress Clock</a>
                </p>
            </div>
            {/* Wrap the children with the shared layout */}
            <div>{children}</div>
        </div>
    );
};

export default Layout;
