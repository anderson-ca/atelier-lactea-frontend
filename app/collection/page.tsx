'use client';

import { Checkbox, Divider, Select } from 'antd';

import { PageShell } from '@/components/layout/page-shell';
import { ProductCard } from '@/components/ui/product-card';
import { SectionHeader } from '@/components/ui/section-header';
import { products, serviceTiers } from '@/lib/data';

export default function CollectionPage() {
  return (
    <PageShell>
      <section className="py-20">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Collection"
            title="Refined jewelry for daily ritual and inherited memory"
            description="A calm product discovery experience with static presentation-only filtering controls."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="rounded-luxe border border-charcoal/10 bg-cream/60 p-6">
              <h3 className="font-display text-3xl text-charcoal">Refine</h3>
              <Divider className="!border-charcoal/10" />

              <div>
                <p className="mb-3 text-xs uppercase tracking-whisper text-charcoal/60">Craft Level</p>
                <Checkbox.Group className="grid gap-3" defaultValue={['Signature', 'Eleve', 'Bespoke']}>
                  {serviceTiers.map((tier) => (
                    <Checkbox key={tier.name} value={tier.name}>
                      <span className="text-sm text-charcoal/80">{tier.name}</span>
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </div>

              <Divider className="!border-charcoal/10" />

              <div>
                <p className="mb-3 text-xs uppercase tracking-whisper text-charcoal/60">Category</p>
                <Checkbox.Group className="grid gap-3" defaultValue={['Necklaces', 'Rings', 'Bracelets']}>
                  {['Necklaces', 'Rings', 'Earrings', 'Bracelets'].map((item) => (
                    <Checkbox key={item} value={item}>
                      <span className="text-sm text-charcoal/80">{item}</span>
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </div>
            </aside>

            <div>
              <div className="mb-6 flex items-center justify-between gap-4 rounded-full border border-charcoal/10 bg-cream/45 px-5 py-3">
                <p className="text-xs uppercase tracking-whisper text-charcoal/60">36 pieces curated</p>
                <Select
                  defaultValue="Featured"
                  options={[
                    { value: 'Featured', label: 'Featured' },
                    { value: 'Newest', label: 'Newest' },
                    { value: 'PriceAscending', label: 'Price: Low to High' }
                  ]}
                  className="w-44"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
