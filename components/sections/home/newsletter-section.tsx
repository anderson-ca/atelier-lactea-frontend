'use client';

import { Input } from 'antd';

import { LuxuryButton } from '@/components/ui/luxury-button';

export function NewsletterSection() {
  return (
    <section className="pb-24">
      <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
        <div className="rounded-luxe border border-charcoal/10 bg-cream/65 p-8 md:p-12">
          <p className="text-xs uppercase tracking-whisper text-charcoal/60">Private Letters</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-charcoal md:text-5xl">
            Receive soft releases, atelier notes and limited heirloom editions.
          </h2>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
            <Input
              placeholder="Email address"
              className="h-12 max-w-xl rounded-full border-charcoal/20 bg-ivory/80 px-5 text-charcoal"
              aria-label="Email address"
            />
            <LuxuryButton className="w-fit">Join the Journal</LuxuryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
