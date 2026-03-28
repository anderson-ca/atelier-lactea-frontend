'use client';

import Link from 'next/link';

import { navigation } from '@/lib/data';
import { MobileMenu } from '@/components/layout/mobile-menu';

const locales = ['EN', 'AZ', 'RU'];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/8 bg-ivory/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-10">
        {/* Brand */}
        <Link href="/" className="shrink-0 text-charcoal">
          <div className="font-display text-[1.1rem] font-semibold uppercase leading-[1.15] tracking-[0.06em]">
            Atelier
            <br />
            Lact&eacute;a
          </div>
          <p className="mt-0.5 font-display text-[8.5px] italic text-charcoal/40">
            &middot; Maison d&rsquo;H&eacute;ritage &middot; Est. 2026
          </p>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-7 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[11px] uppercase tracking-whisper text-charcoal/60 transition-colors duration-300 hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-5">
          {/* Language switcher */}
          <div className="hidden items-center gap-3 xl:flex">
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                className="text-[11px] tracking-wider text-charcoal/45 transition-colors hover:text-charcoal"
              >
                {loc}
              </button>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/#contact"
            className="hidden bg-charcoal px-7 py-3.5 text-[10px] font-semibold uppercase tracking-whisper text-ivory transition-colors hover:bg-charcoal/90 lg:block"
          >
            Begin
            <br className="hidden xl:block" />
            Consultation
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
