'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

import { LuxuryButton } from '@/components/ui/luxury-button';
import { homeCopy, type HomeLocale } from '@/lib/homepage-copy';

const locales: Array<{ key: HomeLocale; label: string }> = [
  { key: 'en', label: 'EN' },
  { key: 'az', label: 'AZ' },
  { key: 'ru', label: 'RU' }
];

const collectionImages = [
  'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=80'
];

export function HomeExperience() {
  const [locale, setLocale] = useState<HomeLocale>('en');
  const heroRef = useRef<HTMLElement | null>(null);
  const copy = useMemo(() => homeCopy[locale], [locale]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 1024) return;

    const hero = heroRef.current;
    if (!hero) return;

    let rafId = 0;
    const updateHeroParallax = () => {
      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const centerDelta = rect.top + rect.height / 2 - viewportHeight / 2;
      const offset = Math.max(-18, Math.min(18, centerDelta * -0.08));
      hero.style.setProperty('--hero-parallax-y', `${offset.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateHeroParallax();
        rafId = 0;
      });
    };

    updateHeroParallax();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <section ref={heroRef} className="home-hero relative min-h-[92vh] overflow-hidden bg-[#f7f3ec]">
        <Image
          src="https://images.unsplash.com/photo-1763013258906-8c941be346ce?auto=format&fit=crop&w=2400&q=80"
          alt="Mother holding a baby in soft natural light"
          fill
          priority
          sizes="100vw"
          className="home-hero-media object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/62 via-charcoal/34 to-charcoal/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/38 via-transparent to-charcoal/18" />
        <div className="home-hero-lines" aria-hidden="true">
          <span className="home-hero-plane" />
          <span className="home-hero-line home-hero-line-one" />
          <span className="home-hero-line home-hero-line-two" />
          <span className="home-hero-line home-hero-line-three" />
          <span className="home-hero-line home-hero-line-four" />
        </div>
        <span className="home-hero-diagonal-cut" aria-hidden="true" />

        <div className="relative z-[2] mx-auto flex min-h-[92vh] w-full max-w-content flex-col justify-between px-5 pb-12 pt-28 md:px-8 md:pb-16 lg:px-12 lg:pt-32">
          <div className="flex justify-end">
            <div className="rounded-full border border-ivory/40 bg-charcoal/20 p-1 backdrop-blur-sm" role="group" aria-label={copy.languageLabel}>
              {locales.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setLocale(item.key)}
                  className={`rounded-full px-3 py-1 text-[11px] tracking-whisper transition-colors duration-300 ${
                    locale === item.key
                      ? 'bg-ivory text-charcoal'
                      : 'text-ivory/80 hover:bg-ivory/15 hover:text-ivory'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-2xl text-ivory">
            <h1 className="font-display text-5xl leading-[0.94] tracking-[0.015em] md:text-7xl">{copy.hero.headline}</h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/86 md:text-lg">{copy.hero.subtext}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <LuxuryButton
                href="#collections"
                variant="ghost"
                className="!border-ivory/80 !bg-ivory/12 !text-ivory hover:!border-ivory hover:!bg-ivory/20"
              >
                {copy.hero.primaryCta}
              </LuxuryButton>
              <LuxuryButton
                href="#process"
                variant="ghost"
                className="!border-ivory/62 !bg-ivory/10 !text-ivory hover:!border-ivory hover:!bg-ivory/20"
              >
                {copy.hero.secondaryCta}
              </LuxuryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fcf8f2] py-32 md:py-40">
        <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-champagne/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-8 h-52 w-52 rounded-full bg-taupe/15 blur-3xl" />
        <div className="mx-auto w-full max-w-[860px] px-5 text-center md:px-8 lg:px-12">
          <h2 className="font-display text-4xl leading-tight text-charcoal md:text-6xl">{copy.concept.title}</h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-charcoal/78 md:text-lg">
            {copy.concept.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative overflow-hidden bg-[#efe6da] py-28 md:py-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-charcoal/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-charcoal/8" />
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight text-charcoal md:text-6xl">{copy.process.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/74 md:text-lg">{copy.process.intro}</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {copy.process.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-luxe border border-charcoal/12 bg-ivory/75 p-8 shadow-card transition-transform duration-500 hover:-translate-y-0.5"
              >
                <p className="text-xs uppercase tracking-whisper text-charcoal/55">Step {index + 1}</p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-charcoal">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/72 md:text-base">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4ece1] py-32 md:py-40">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#dfcfbb]/45 to-transparent" />
        <div className="mx-auto grid w-full max-w-content items-center gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-luxe shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1768657891206-6d8e296ae833?auto=format&fit=crop&w=1800&q=80"
              alt="Close-up of a mother's hand holding her baby's hand"
              fill
              className="home-parallax-media object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-charcoal/5 to-transparent" />
          </div>

          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-tight text-charcoal md:text-6xl">{copy.archive.title}</h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-charcoal/77 md:text-lg">
              {copy.archive.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="relative overflow-hidden bg-[#e6d7c4] py-28 md:py-36">
        <div className="angled-separator-line" />
        <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 rounded-full bg-ivory/45 blur-3xl" />
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <h2 className="font-display text-4xl leading-tight text-charcoal md:text-6xl">{copy.collections.title}</h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {copy.collections.items.map((item, index) => (
              <article key={item.name} className="overflow-hidden rounded-luxe border border-charcoal/10 bg-ivory/85 shadow-card">
                <div className="relative aspect-[5/4]">
                  <Image
                    src={collectionImages[index]}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-7">
                  <h3 className="font-display text-3xl text-charcoal">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-charcoal/75 md:text-base">{item.description}</p>
                  <p className="text-xs uppercase tracking-whisper text-charcoal/60">{item.materials}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <LuxuryButton href="/contact" variant="ghost" className="!border-charcoal/45 !px-8 !py-4 !text-charcoal">
              {copy.collections.cta}
            </LuxuryButton>
          </div>
        </div>
      </section>
    </>
  );
}
