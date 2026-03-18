'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navigation } from '@/lib/data';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { BrandMark } from '@/components/ui/brand-mark';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-content items-center justify-between px-5 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3 text-charcoal">
          <BrandMark className="h-8 w-8 text-charcoal/75" />
          <span className="font-display text-3xl leading-none">Atelier Lactea</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={`relative pb-1 text-xs uppercase tracking-whisper transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-charcoal/55 after:transition-transform after:duration-300 ${
                pathname === item.href
                  ? 'text-charcoal after:w-full after:scale-x-100'
                  : 'text-charcoal/68 after:w-full after:scale-x-0 hover:text-charcoal/92 hover:after:scale-x-100'
              }`}
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
