import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/lib/data';
import { TierBadge } from '@/components/ui/tier-badge';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-cream/60 p-3 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            fill
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="space-y-3 px-2 pb-2 pt-4">
        <div className="flex items-center justify-between gap-3">
          <TierBadge tier={product.tier} />
          <p className="text-sm text-charcoal/80">{product.price}</p>
        </div>
        <h3 className="font-display text-2xl text-charcoal">{product.name}</h3>
        <p className="text-sm text-charcoal/65">{product.material}</p>
      </div>
    </article>
  );
}
