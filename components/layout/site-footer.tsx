import Link from 'next/link';

import { footerLinks } from '@/lib/data';

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 px-5 py-14 md:flex-row md:items-start md:justify-between md:px-8 lg:px-12">
        {/* Brand */}
        <div className="shrink-0">
          <p className="font-display text-2xl italic">Atelier Lact&eacute;a</p>
          <p className="mt-1 text-[9px] uppercase tracking-whisper text-ivory/30">
            &middot; Maison d&rsquo;H&eacute;ritage &middot; Est. 2026
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-whisper text-ivory/45 transition-colors hover:text-ivory/75"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <div className="text-sm text-ivory/45 md:text-right">
          <p>hello@atelierlacea.com</p>
          <p className="mt-1">@atelierlacea</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/8">
        <div className="mx-auto flex w-full max-w-content flex-col items-center justify-between gap-3 px-5 py-5 md:flex-row md:px-8 lg:px-12">
          <p className="text-[11px] text-ivory/25">&copy; 2026 Atelier Lact&eacute;a</p>
          <p className="font-display text-sm italic text-ivory/20">
            Every heirloom created protects another mother
          </p>
        </div>
      </div>
    </footer>
  );
}
