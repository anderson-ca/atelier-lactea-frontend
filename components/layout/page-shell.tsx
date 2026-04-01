'use client';

import type { ReactNode } from 'react';

import { LanguageProvider } from '@/lib/language-context';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ivory text-text-dark">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
