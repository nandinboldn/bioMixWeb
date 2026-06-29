import type { Metadata } from 'next';
import { Cormorant_Garamond, Syne, DM_Mono } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/lib/lang';
import BackgroundTransition from '@/components/BackgroundTransition';

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
  title: 'BIOMIX — Хөрс нөхөн сэргээх шийдэл',
  description: 'Органик хог хаягдлаас амьдрал эргэн ирнэ. Монголын хөрсийг нөхөн сэргээх органик хөрсний шийдэл.'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='mn' className={`${cormorant.variable} ${syne.variable} ${dmMono.variable}`}>
      <head>
        <link rel='preload' href='/videos/desert-bg.mp4' as='video' type='video/mp4' />
      </head>
      <body className='bg-ink text-cream antialiased overflow-x-hidden'>
        <LangProvider>
          {/* Global desert→forest background */}
          <BackgroundTransition />
          {/* All content above background */}
          <div className="relative" style={{ zIndex: 1 }}>
            {children}
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
