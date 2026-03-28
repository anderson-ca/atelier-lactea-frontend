export type ServiceTier = 'Signature' | 'Eleve' | 'Bespoke';

export type Product = {
  slug: string;
  name: string;
  collection: string;
  tier: ServiceTier;
  price: string;
  image: string;
  hoverImage: string;
  material: string;
  description: string;
};

export const navigation = [
  { label: 'Our Work', href: '/#our-work' },
  { label: 'The Archive', href: '/#the-archive' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: "Mother's Archive", href: '/#mothers-archive' },
  { label: "The Mother's Circle", href: '/#mothers-circle' },
  { label: 'Contact', href: '/#contact' }
];

export const footerLinks = [
  { label: 'Our Work', href: '/#our-work' },
  { label: 'Collection', href: '/#the-archive' },
  { label: "Mother's Archive", href: '/#mothers-archive' },
  { label: "The Mother's Circle", href: '/#mothers-circle' },
  { label: 'Privacy', href: '/privacy' }
];

export const collections = [
  {
    title: 'Lune Originelle',
    subtitle: 'Soft curves inspired by first lullabies and moonlit silence.',
    image:
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Memoire Doree',
    subtitle: 'Delicate keepsakes crafted for heirloom moments.',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Atelier de Coeur',
    subtitle: 'Sculpted lines that honor tenderness and strength.',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=80'
  }
];

export const products: Product[] = [
  {
    slug: 'luna-heirloom-necklace',
    name: 'Luna Heirloom Necklace',
    collection: 'Lune Originelle',
    tier: 'Signature',
    price: '$320',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=80',
    material: '18k Gold Vermeil, Freshwater Pearl',
    description:
      'A luminous pendant shaped as a quiet remembrance, balanced for daily elegance.'
  },
  {
    slug: 'aurore-signet-ring',
    name: 'Aurore Signet Ring',
    collection: 'Memoire Doree',
    tier: 'Eleve',
    price: '$540',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80',
    material: 'Recycled 18k Gold, Lab Diamond',
    description:
      'Softly faceted edges and bespoke engraving make this an intimate modern heirloom.'
  },
  {
    slug: 'soleil-drop-earrings',
    name: 'Soleil Drop Earrings',
    collection: 'Atelier de Coeur',
    tier: 'Signature',
    price: '$410',
    image:
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&w=1200&q=80',
    material: '14k Gold, Hand-set Zirconia',
    description:
      'Lightweight drops with fluid movement, designed for graceful evening wear.'
  },
  {
    slug: 'celeste-memory-bracelet',
    name: 'Celeste Memory Bracelet',
    collection: 'Memoire Doree',
    tier: 'Bespoke',
    price: '$920',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80',
    material: '18k Solid Gold, Custom Stone Inlay',
    description:
      'Commissioned around your story with hand-etched detailing and tailored fit.'
  },
  {
    slug: 'serenite-chain',
    name: 'Serenite Chain',
    collection: 'Lune Originelle',
    tier: 'Eleve',
    price: '$490',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    material: '18k Gold Vermeil',
    description:
      'A sculptural everyday chain with warm reflections and balanced proportions.'
  },
  {
    slug: 'noor-pendant',
    name: 'Noor Pendant',
    collection: 'Atelier de Coeur',
    tier: 'Signature',
    price: '$360',
    image:
      'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?auto=format&fit=crop&w=1200&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1599459183200-59c7687d4d5a?auto=format&fit=crop&w=1200&q=80',
    material: '14k Gold Fill, Mother of Pearl',
    description:
      'A luminous oval pendant that catches light with understated softness.'
  }
];

export const craftsmanshipPillars = [
  {
    title: 'Ethical Materials',
    text: 'Responsibly sourced metals and stones selected for beauty and traceability.'
  },
  {
    title: 'Hand-Finished',
    text: 'Each piece is polished, set and inspected by atelier artisans in small batches.'
  },
  {
    title: 'Heirloom Durability',
    text: 'Designed to be worn now and gifted later, with repair and care guidance included.'
  }
];

export const testimonials = [
  {
    quote:
      'The craftsmanship feels deeply personal. My necklace became part of my daily ritual.',
    author: 'Nadia S.',
    location: 'Paris'
  },
  {
    quote:
      'Quiet elegance, exceptional finish, and packaging that felt like opening a keepsake.',
    author: 'Mariam K.',
    location: 'London'
  },
  {
    quote:
      'The Bespoke process was gentle and intentional. Every detail reflected my story.',
    author: 'Elena R.',
    location: 'Milan'
  }
];

export const serviceTiers = [
  {
    name: 'Signature',
    description: 'Elegant accessible pieces created with the same care and noble materials as the atelier.'
  },
  {
    name: 'Eleve',
    description: 'Elevated designs with expanded customization, refined finishes and curated stone options.'
  },
  {
    name: 'Bespoke',
    description: 'Fully personalized heirloom creations developed through a one-to-one atelier dialogue.'
  }
] as const;

export const contactDetails = {
  email: 'hello@atelierlacea.com',
  instagram: '@atelierlacea',
  phone: '+33 1 84 12 72 64',
  address: '28 Rue des Archives, Le Marais, Paris',
  hours: 'Mon-Sat, 10:00 - 19:00'
};
