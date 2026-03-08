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
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal lg:hidden"
        aria-label="Open navigation"
      >
        <span className="text-lg">+</span>
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
        title={<span className="font-display text-3xl text-charcoal">Atelier Lactea</span>}
      >
        <nav className="space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm uppercase tracking-whisper text-charcoal/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Drawer>
    </>
  );
}
