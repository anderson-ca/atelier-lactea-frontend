'use client';

import { useState } from 'react';
import { Drawer } from 'antd';

import { useLanguage, type SiteLocale } from '@/lib/language-context';
import { siteContent } from '@/lib/site-content';

const navHrefs = ['#focus', '#mothers-archive', '#tiers', '#process', '#circle', '#contact'];
const locales: SiteLocale[] = ['az', 'en', 'ru'];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const c = siteContent[locale];
  const navItems = [c.nav.work, c.nav.mothers, c.nav.archive, c.nav.process, c.nav.circle, c.nav.contact];
  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center text-maroon xl:hidden"
        aria-label="Open navigation"
      >
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="1.4">
          <line x1="0" y1="1" x2="22" y2="1" />
          <line x1="0" y1="7" x2="22" y2="7" />
          <line x1="0" y1="13" x2="22" y2="13" />
        </svg>
      </button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        width={320}
        rootClassName="atelier-drawer"
        styles={{
          body: { background: '#faf6f0', padding: '2rem' },
          header: { background: '#faf6f0', borderBottom: '1px solid rgba(200,168,130,0.2)' }
        }}
        title={
          <span className="text-[15px] font-normal uppercase tracking-[0.3em] text-maroon">
            Atelier Lact&eacute;a
          </span>
        }
      >
        <nav className="space-y-6">
          {navItems.map((label, i) => (
            <button
              key={navHrefs[i]}
              type="button"
              className="block text-[11px] uppercase tracking-whisper text-text-mid"
              onClick={() => go(navHrefs[i])}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-10 flex gap-4">
          {locales.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => setLocale(loc)}
              className={`text-[10px] tracking-whisper ${locale === loc ? 'font-normal text-maroon' : 'text-text-soft'}`}
            >
              {loc.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go('#consult')}
          className="mt-8 block w-full bg-maroon px-6 py-4 text-center text-[11px] uppercase tracking-[0.28em] text-gold-light"
        >
          {c.nav.cta}
        </button>
      </Drawer>
    </>
  );
}
