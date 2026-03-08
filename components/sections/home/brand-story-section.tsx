import { serviceTiers } from '@/lib/data';
import { SectionHeader } from '@/components/ui/section-header';

export function BrandStorySection() {
  return (
    <section className="py-24">
      <div className="mx-auto grid w-full max-w-content gap-10 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:px-12">
        <SectionHeader
          eyebrow="The Maison"
          title="Born from tenderness, refined through atelier discipline"
          description="Atelier Lactea was founded to celebrate the emotional weight of jewelry. Every piece is composed as an heirloom object: intentional lines, warm tone, and handcrafted finish."
        />

        <div className="space-y-5 rounded-luxe border border-charcoal/10 bg-cream/60 p-6 shadow-card">
          <p className="text-xs uppercase tracking-whisper text-charcoal/60">Service Architecture</p>
          {serviceTiers.map((tier) => (
            <article key={tier.name} className="border-t border-charcoal/10 pt-5 first:border-none first:pt-0">
              <h3 className="font-display text-2xl text-charcoal">{tier.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{tier.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
