import { products } from '@/lib/data';
import { ProductCard } from '@/components/ui/product-card';
import { SectionHeader } from '@/components/ui/section-header';

export function BestSellers() {
  return (
    <section className="bg-cream/55 py-24">
      <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Most Loved"
          title="Signature pieces chosen again and again"
          description="Quiet statements designed for daily intimacy and milestone moments."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
