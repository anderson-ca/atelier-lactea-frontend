'use client';

import { Carousel } from 'antd';

import { products } from '@/lib/data';
import { ProductCard } from '@/components/ui/product-card';
import { SectionHeader } from '@/components/ui/section-header';

export function ProductHighlights() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Highlights"
          title="A rotating selection from the atelier"
          description="Presentation-only carousel for visual merchandising and editorial pacing."
        />

        <div className="mt-10 hidden md:block">
          <Carousel autoplay dots={{ className: 'atelier-dots' }}>
            <div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.slice(0, 3).map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
            <div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.slice(3, 6).map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </Carousel>
        </div>

        <div className="mt-10 grid gap-6 md:hidden">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
