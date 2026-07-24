// components/Layout.tsx

import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const metadata = {
    title: "Cyberbolt",
    description: "Mobile Game",
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    <a href="../Cyberbolt">Cyberbolt</a>
                </p>
            </div>
            {/* Wrap the children with the shared layout */}
            <div>{children}</div>
        </div>
    );
};

export default Layout;
