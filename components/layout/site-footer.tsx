import Link from 'next/link';

import { navigation } from '@/lib/data';

export function SiteFooter() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream/60">
      <div className="mx-auto grid w-full max-w-content gap-12 px-5 py-16 md:grid-cols-3 md:px-8 lg:px-12">
        <div>
          <h3 className="font-display text-3xl text-charcoal">Atelier Lactea</h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal/70">
            Modern heirloom jewelry crafted with tenderness, precision and enduring meaning.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-whisper text-charcoal/60">Navigation</p>
          <ul className="mt-4 space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-charcoal/75 transition-colors hover:text-charcoal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-whisper text-charcoal/60">Concierge</p>
          <ul className="mt-4 space-y-3 text-sm text-charcoal/75">
            <li>concierge@atelierlactea.com</li>
            <li>+33 1 84 12 72 64</li>
            <li>28 Rue des Archives, Paris</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-charcoal/10 py-4 text-center text-xs uppercase tracking-whisper text-charcoal/55">
        Atelier Lactea 2026. Crafted with restraint.
      </div>
    </footer>
  );
}
