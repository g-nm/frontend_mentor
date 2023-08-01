import React from 'react';
import localFont from 'next/font/local';
import './globals.css';

const myFont = localFont({
  src: [
    { path: './fonts/Roboto-Regular.ttf', weight: '400', style: 'normal' },
    {
      path: './fonts/Roboto-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
