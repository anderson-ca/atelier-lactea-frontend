import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

import 'antd/dist/reset.css';
import '@/app/globals.css';

import { Providers } from '@/app/providers';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700']
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Atelier Lactéa \u00B7 Maison d\u2019Héritage',
  description: 'Breastmilk preserved into handcrafted heirloom jewelry. A mother\u2019s first sacrifice, worn forever.',
  icons: {
    icon: '/images/Favicon.png'
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
