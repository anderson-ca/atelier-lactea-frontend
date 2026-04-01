'use client';

import Link from 'next/link';

import { useLanguage, type SiteLocale } from '@/lib/language-context';
import { siteContent } from '@/lib/site-content';
import { MobileMenu } from '@/components/layout/mobile-menu';

const locales: SiteLocale[] = ['az', 'en', 'ru'];

const navHrefs = [
  '#focus', '#tiers', '#process', '#mothers-archive', '#circle', '#contact'
];

export function SiteHeader() {
  const { locale, setLocale } = useLanguage();
  const c = siteContent[locale];
  const navItems = [c.nav.work, c.nav.archive, c.nav.process, c.nav.mothers, c.nav.circle, c.nav.contact];

  return (
    <header className="fixed inset-x-0 top-0 z-[200] flex items-center justify-between border-b border-gold/25 bg-ivory/[0.96] px-6 py-5 backdrop-blur-md md:px-16">
      {/* Brand */}
      <Link href="/">
        <div className="text-[15px] font-normal uppercase tracking-[0.3em] text-maroon">
          Atelier Lact&eacute;a
        </div>
        <div className="mt-[3px] text-[8.5px] italic tracking-[0.22em] text-gold">
          &middot; Maison d&rsquo;H&eacute;ritage &middot; Est. 2026
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden xl:block">
        <ul className="flex list-none gap-8">
          {navItems.map((label, i) => (
            <li key={navHrefs[i]}>
              <a
                href={navHrefs[i]}
                className="text-[11px] uppercase tracking-whisper text-text-mid transition-colors duration-300 hover:text-maroon"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Language switcher */}
        <div className="hidden items-center gap-2 xl:flex">
          {locales.map((loc, i) => (
            <span key={loc} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLocale(loc)}
                className={`text-[10px] tracking-whisper transition-colors ${
                  locale === loc ? 'font-normal text-maroon' : 'text-text-soft hover:text-maroon'
                }`}
              >
                {loc.toUpperCase()}
              </button>
              {i < locales.length - 1 && (
                <span className="text-[10px] text-gold/40">&middot;</span>
              )}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden cursor-pointer border-none bg-maroon px-[30px] py-[11px] text-[10px] uppercase tracking-[0.28em] text-gold-light transition-all duration-300 hover:bg-gold hover:text-maroon lg:block"
        >
          {c.nav.cta}
        </button>

        <MobileMenu />
      </div>
    </header>
  );
}
