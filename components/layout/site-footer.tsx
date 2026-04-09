'use client';

import { useLanguage } from '@/lib/language-context';
import { siteContent } from '@/lib/site-content';

const footerHrefs = ['#focus', '#tiers', '#mothers-archive', '#circle', '#'];

export function SiteFooter() {
  const { locale } = useLanguage();
  const c = siteContent[locale];

  return (
    <footer className="bg-maroon px-6 pb-7 pt-12 md:px-16">
      {/* Top row */}
      <div className="flex flex-col items-start justify-between gap-8 border-b border-gold/[0.08] pb-7 md:flex-row md:items-center">
        <div>
          <div className="text-[15px] italic tracking-[0.28em] text-gold">
            Atelier Lact&eacute;a
          </div>
          <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-gold/[0.35]">
            &middot; Maison d&rsquo;H&eacute;ritage &middot; Est. 2026
          </div>
        </div>

        <nav>
          <ul className="flex list-none flex-wrap gap-7">
            {c.footer.links.map((label, i) => (
              <li key={i}>
                <a
                  href={footerHrefs[i]}
                  className="text-[11px] uppercase tracking-[0.16em] text-gold/[0.55] transition-colors hover:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      {/* Bottom row */}
      <div className="mt-5 flex flex-col items-center justify-between gap-3 md:flex-row">
        <span className="text-[10px] tracking-[0.12em] text-gold/20">
          &copy; 2026 Atelier Lact&eacute;a
        </span>
        <span className="text-[10px] italic text-gold/25">
          {c.footer.tagline}
        </span>
      </div>
    </footer>
  );
}
