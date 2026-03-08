import Image from 'next/image';

import { collections } from '@/lib/data';
import { SectionHeader } from '@/components/ui/section-header';

export function FeaturedCollections() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Curated Collections"
          title="An editorial curation of luminous forms"
          description="Each collection carries a poetic chapter, balancing sculptural softness with enduring materiality."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group overflow-hidden rounded-luxe bg-cream/70 shadow-card transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-display text-3xl text-charcoal">{collection.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/70">{collection.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
