import Link from 'next/link';

import { navigation } from '@/lib/data';
import { MobileMenu } from '@/components/layout/mobile-menu';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-content items-center justify-between px-5 md:px-8 lg:px-12">
        <Link href="/" className="font-display text-3xl leading-none text-charcoal">
          Atelier Lactea
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-whisper text-charcoal/75 transition-colors duration-300 hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs uppercase tracking-whisper text-charcoal/60 md:block">Paris Atelier</span>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
