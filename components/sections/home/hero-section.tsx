import Image from 'next/image';

import { LuxuryButton } from '@/components/ui/luxury-button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[78vh]">
        <Image
          src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=2200&q=80"
          alt="Soft editorial jewelry portrait"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/45 via-charcoal/20 to-transparent" />

        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-content items-end px-5 pb-14 pt-32 md:px-8 md:pb-20 lg:px-12">
          <div className="max-w-2xl text-ivory">
            <p className="text-xs uppercase tracking-whisper text-ivory/85">Maison de Joaillerie</p>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">
              Pieces of memory, crafted for generations.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 md:text-lg">
              Atelier Lactea shapes modern heirlooms where maternal tenderness meets precision
              craftsmanship. Quiet forms, warm metals, lasting stories.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <LuxuryButton href="/collection" className="!border-ivory !bg-ivory !text-charcoal">
                Discover Collection
              </LuxuryButton>
              <LuxuryButton href="/maison" variant="ghost" className="!border-ivory/60 !text-ivory">
                Explore Maison
              </LuxuryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
