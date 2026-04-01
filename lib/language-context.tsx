'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export type SiteLocale = 'az' | 'en' | 'ru';

type LanguageContextType = {
  locale: SiteLocale;
  setLocale: (l: SiteLocale) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: 'az',
  setLocale: () => {}
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<SiteLocale>('az');
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
