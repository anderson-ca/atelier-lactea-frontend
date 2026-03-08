import { PageShell } from '@/components/layout/page-shell';
import { HeroSection } from '@/components/sections/home/hero-section';
import { FeaturedCollections } from '@/components/sections/home/featured-collections';
import { BestSellers } from '@/components/sections/home/best-sellers';
import { EditorialBanner } from '@/components/sections/home/editorial-banner';
import { BrandStorySection } from '@/components/sections/home/brand-story-section';
import { CraftsmanshipSection } from '@/components/sections/home/craftsmanship-section';
import { ProductHighlights } from '@/components/sections/home/product-highlights';
import { NewsletterSection } from '@/components/sections/home/newsletter-section';

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <FeaturedCollections />
      <BestSellers />
      <EditorialBanner />
      <BrandStorySection />
      <CraftsmanshipSection />
      <ProductHighlights />
      <NewsletterSection />
    </PageShell>
  );
}
