import Image from 'next/image';

import { LuxuryButton } from '@/components/ui/luxury-button';

export function EditorialBanner() {
  return (
    <section className="parallax-wrap py-28">
      <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-luxe">
          <div className="parallax-image absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=2200&q=80"
              alt="Editorial atelier lifestyle"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/35" />
          </div>

          <div className="relative grid min-h-[420px] content-end p-8 md:p-12">
            <p className="text-xs uppercase tracking-whisper text-ivory/80">Atelier Journal</p>
            <h3 className="mt-4 max-w-2xl font-display text-4xl text-ivory md:text-5xl">
              The language of heirlooms begins with the stories we choose to keep.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/85 md:text-base">
              From sketchbooks to final polish, every detail reflects a calm devotion to memory,
              intimacy and enduring craftsmanship.
            </p>
            <div className="mt-8">
              <LuxuryButton className="!border-ivory !bg-ivory !text-charcoal">Read the Story</LuxuryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
