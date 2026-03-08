'use client';

import { Button } from 'antd';
import type { ReactNode } from 'react';

type LuxuryButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
  href?: string;
};

export function LuxuryButton({ children, className = '', variant = 'primary', href }: LuxuryButtonProps) {
  const base =
    'h-auto rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze/40';
  const styles =
    variant === 'primary'
      ? 'border-charcoal bg-charcoal text-ivory hover:-translate-y-0.5 hover:bg-charcoal/90'
      : 'border-charcoal/30 bg-transparent text-charcoal hover:-translate-y-0.5 hover:border-charcoal';

  return (
    <Button type="default" href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Button>
  );
}
