import type { Metadata } from 'next';
import { Cormorant_Garamond, Syne, DM_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap'
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-syne',
  display: 'swap'
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'TERRAVA — Ethical Exotics',
  description:
    'Where ecosystem restoration meets luxury craft. Ethical exotics that restore balance to nature.'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      className={`${cormorant.variable} ${syne.variable} ${dmMono.variable}`}>
      <head>
        <link
          rel='preload'
          href='/videos/desert-bg.mp4'
          as='video'
          type='video/mp4'
        />
      </head>
      <body className='bg-ink text-cream antialiased overflow-x-hidden'>
        {children}
      </body>
    </html>
  );
}
