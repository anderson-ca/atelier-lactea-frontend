import Image from 'next/image';
import { notFound } from 'next/navigation';

import { PageShell } from '@/components/layout/page-shell';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { ProductCard } from '@/components/ui/product-card';
import { TierBadge } from '@/components/ui/tier-badge';
import { products } from '@/lib/data';

type ProductPageProps = {
  params: { slug: string };
};

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  const related = products.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((src, index) => (
                <div key={`${src}-${index}`} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
                  <Image
                    src={src}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <TierBadge tier={product.tier} />
              <h1 className="font-display text-5xl text-charcoal md:text-6xl">{product.name}</h1>
              <p className="text-sm uppercase tracking-whisper text-charcoal/60">{product.collection}</p>
              <p className="text-2xl text-charcoal">{product.price}</p>
              <p className="max-w-xl text-base leading-relaxed text-charcoal/75">{product.description}</p>

              <div className="flex flex-wrap gap-3">
                <LuxuryButton>Add to Bag</LuxuryButton>
                <LuxuryButton variant="ghost">Add to Wishlist</LuxuryButton>
              </div>

              <div className="rounded-luxe border border-charcoal/10 bg-cream/50 p-5">
                <p className="text-xs uppercase tracking-whisper text-charcoal/60">Material</p>
                <p className="mt-2 text-sm text-charcoal/80">{product.material}</p>
              </div>

              <div className="space-y-3">
                <details open className="rounded-2xl border border-charcoal/10 bg-cream/40 px-4 py-3">
                  <summary className="cursor-pointer text-sm font-medium text-charcoal">Craftsmanship</summary>
                  <p className="mt-2 text-sm text-charcoal/75">
                    Hand assembled and hand polished in our atelier, with meticulous quality review before release.
                  </p>
                </details>
                <details className="rounded-2xl border border-charcoal/10 bg-cream/40 px-4 py-3">
                  <summary className="cursor-pointer text-sm font-medium text-charcoal">Sizing &amp; Care</summary>
                  <p className="mt-2 text-sm text-charcoal/75">
                    Store in the soft pouch provided. Avoid direct contact with fragrance and lotion for long-lasting
                    brilliance.
                  </p>
                </details>
                <details className="rounded-2xl border border-charcoal/10 bg-cream/40 px-4 py-3">
                  <summary className="cursor-pointer text-sm font-medium text-charcoal">Delivery</summary>
                  <p className="mt-2 text-sm text-charcoal/75">
                    Each piece is wrapped in archival keepsake packaging and prepared in 3-5 business days.
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-4xl text-charcoal">Related Pieces</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
