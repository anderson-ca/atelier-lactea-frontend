import { craftsmanshipPillars, testimonials } from '@/lib/data';
import { SectionHeader } from '@/components/ui/section-header';

export function CraftsmanshipSection() {
  return (
    <section className="bg-charcoal py-24 text-ivory">
      <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Craft and Trust"
          title="Precision held in a gentle hand"
          description="Our trust is built through transparent material sourcing, patient hand-finishing and care that extends beyond delivery."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {craftsmanshipPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-luxe border border-ivory/20 bg-ivory/5 p-6">
              <h3 className="font-display text-3xl text-ivory">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/75">{pillar.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="rounded-luxe border border-ivory/20 bg-ivory/5 p-6">
              <p className="text-sm leading-relaxed text-ivory/85">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-5 text-xs uppercase tracking-whisper text-ivory/70">
                {item.author}, {item.location}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
