import React from 'react';
import { Kanit } from 'next/font/google'
import { ScanProvider } from './context/ScanContext'
import './globals.css'

const kanit = Kanit({
    subsets: ['thai', 'latin'],  // เพิ่ม 'latin'
    weight: ['300', '400', '500', '600'],
    display: 'swap',  // เพิ่มบรรทัดนี้
    preload: true,    // เพิ่มบรรทัดนี้
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="th">
            <head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
            </head>
            <body className={kanit.className}>
                <ScanProvider>
                    {children}
                </ScanProvider>
            </body>
        </html>
    )
} 