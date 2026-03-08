import Image from 'next/image';

import { PageShell } from '@/components/layout/page-shell';
import { SectionHeader } from '@/components/ui/section-header';
import { craftsmanshipPillars, serviceTiers } from '@/lib/data';

export default function MaisonPage() {
  return (
    <PageShell>
      <section className="py-20">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="About the Maison"
            title="A modern jewelry atelier shaped by memory and motherhood"
            description="Atelier Lactea emerged from a desire to preserve emotional stories in tangible form, pairing quiet design with careful craft."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-luxe">
              <Image
                src="https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1800&q=80"
                alt="Atelier detail and design process"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="space-y-6 rounded-luxe border border-charcoal/10 bg-cream/60 p-7">
              <h2 className="font-display text-4xl text-charcoal">Philosophy</h2>
              <p className="text-sm leading-relaxed text-charcoal/75">
                We design for emotional longevity. Each collection is intended to be worn through seasons of life,
                then passed forward with meaning intact.
              </p>
              <p className="text-sm leading-relaxed text-charcoal/75">
                Every piece begins with hand sketches and material studies, then moves through patient casting,
                setting and finishing inside our atelier workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream/50 py-24">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <h2 className="font-display text-5xl text-charcoal">Craftsmanship Pillars</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {craftsmanshipPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-luxe bg-ivory p-6 shadow-card">
                <h3 className="font-display text-3xl text-charcoal">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <h2 className="font-display text-5xl text-charcoal">Atelier Service Levels</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {serviceTiers.map((tier) => (
              <article key={tier.name} className="rounded-luxe border border-charcoal/10 bg-cream/55 p-6">
                <h3 className="font-display text-3xl text-charcoal">{tier.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{tier.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
