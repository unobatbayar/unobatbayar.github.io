// components/Layout.tsx
// Temporarily disabled - Konple (uncomment below and remove notFound() to restore)

import React, { ReactNode } from 'react';
import { notFound } from 'next/navigation';

interface LayoutProps {
    children: ReactNode;
}

export const metadata = {
    title: "Konple",
    description: "Konple App",
};

const Layout = ({ children }: LayoutProps) => {
    notFound(); // Temporarily hide Konple routes
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    <a href="../konple">Konple</a>
                </p>
            </div>
            {/* Wrap the children with the shared layout */}
            <div>{children}</div>
        </div>
    );
};

export default Layout;
