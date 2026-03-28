'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Drawer } from 'antd';

import { navigation } from '@/lib/data';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center text-charcoal xl:hidden"
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
          body: { background: '#F7F3EC', padding: '2rem' },
          header: { background: '#F7F3EC', borderBottom: '1px solid rgba(47,42,36,0.1)' }
        }}
        title={
          <span className="font-display text-lg font-semibold uppercase tracking-[0.06em] text-charcoal">
            Atelier Lact&eacute;a
          </span>
        }
      >
        <nav className="space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm uppercase tracking-whisper text-charcoal/75"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10 flex gap-4">
          {['EN', 'AZ', 'RU'].map((loc) => (
            <button key={loc} type="button" className="text-xs tracking-wider text-charcoal/45">
              {loc}
            </button>
          ))}
        </div>
        <Link
          href="/#contact"
          onClick={() => setOpen(false)}
          className="mt-8 block bg-charcoal px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-whisper text-ivory"
        >
          Begin Consultation
        </Link>
      </Drawer>
    </>
  );
}
