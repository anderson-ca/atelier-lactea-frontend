'use client';

import Image from 'next/image';
import { useState } from 'react';

/* ------------------------------------------------------------------ */
/*  Static content data                                                */
/* ------------------------------------------------------------------ */

const materials = [
  {
    name: 'Baby Hair',
    subtitle: 'FOR THOSE WHO DID NOT BREASTFEED',
    text: 'The first lock, set into your chosen piece. Irreplaceable and impossibly delicate, the earliest physical trace of your child.'
  },
  {
    name: 'Birthstone',
    subtitle: 'STANDALONE OR ALONGSIDE BREASTMILK',
    text: 'The stone of the month your child was born. Set alongside preserved breastmilk or on its own, marking both the day and the devotion.'
  },
  {
    name: 'Blended',
    subtitle: 'TWO OR MORE MATERIALS',
    text: 'Breastmilk and baby hair. Breastmilk and birthstone. All three. Every element a different layer of the same love, held together in one piece.'
  }
];

const tiers = [
  {
    numeral: 'I',
    name: 'Essentia',
    material: 'STAINLESS STEEL',
    description:
      'Beautiful and enduring. For the mother who deserves a heirloom. Full stop. Crafted with identical care to every piece in our archive.',
    tagline: 'For every mother',
    highlighted: false
  },
  {
    numeral: 'II',
    name: 'Aurea',
    material: 'GOLD PLATED',
    description:
      'Gold-plated, elevated in beauty. The warmth of the metal mirrors the warmth of what is preserved inside it. Our most gifted tier.',
    tagline: 'Most gifted tier',
    highlighted: true
  },
  {
    numeral: 'III',
    name: 'Maison',
    material: 'BESPOKE \u00B7 HANDCRAFTED',
    description:
      'An entirely original piece designed for you alone, in close collaboration with our partner jeweller. No two Maison pieces will ever be alike.',
    tagline: 'No two alike',
    highlighted: false
  }
];

const processSteps = [
  {
    title: 'Consultation',
    text: 'A private conversation by WhatsApp, video, or phone, in your language. We learn your story, your vision, and guide you to the right tier and form.'
  },
  {
    title: 'Design & Deposit',
    text: 'Once you are ready, a deposit confirms your order. Together we refine the design. For Essentia and Aurea you choose from our existing forms. For Maison, we create an entirely original piece together.'
  },
  {
    title: 'Your Materials',
    text: 'When the design is confirmed, we send you a sterile collection bag, complimentary, posted directly to you. Express with your own pump, transfer into our bag, and send it back. We handle everything from that point forward.',
    note: 'Collection bag provided free of charge'
  },
  {
    title: 'Handcraft',
    text: 'Your piece is made by hand, in your chosen metal. Maison clients work directly alongside our partner jeweller at every stage of creation.'
  },
  {
    title: 'Your Heirloom',
    text: 'Delivered in Atelier Lact\u00E9a packaging with a certificate of preservation. A gift to open, and to pass forward through generations.'
  }
];

const archiveStories = [
  {
    tier: 'AUREA \u00B7 GOLD PLATED',
    name: 'For Leyla',
    quote:
      'I breastfed for eleven months. I wanted something to hold onto when it was over.'
  },
  {
    tier: 'MAISON \u00B7 BESPOKE',
    name: 'For Aynur',
    quote:
      "Gifted by my husband on our daughter\u2019s first birthday. I did not expect to cry when I opened it."
  },
  {
    tier: 'ESSENTIA \u00B7 STAINLESS STEEL',
    name: 'For Nigar',
    quote:
      'I could not breastfeed. We used a lock of his hair instead. It means just as much to me.'
  }
];

const consultationBenefits = [
  'Complimentary, no charge for the consultation itself',
  'Confidential, your story stays with us',
  'Available in Azerbaijani, English, and Russian',
  'Collection bag provided free of charge after deposit'
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function HomeExperience() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orderingFor: 'Myself, I am the mother',
    tier: 'Essentia \u00B7 Stainless Steel',
    vision: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <section className="relative min-h-[92vh] overflow-hidden bg-ivory">
        <div className="mx-auto flex min-h-[92vh] w-full max-w-content items-center px-5 md:px-8 lg:px-12">
          <div className="relative z-10 w-full py-20 lg:w-[48%] lg:py-28">
            <h1 className="font-display text-[2.75rem] leading-[1.05] text-charcoal md:text-6xl lg:text-[4.25rem]">
              <em className="not-italic">
                <span className="italic">A mother&rsquo;s first</span>
                <br />
                <span className="italic">sacrifice,</span>
                <br />
                <span className="text-[1.15em] font-semibold italic">worn forever</span>
              </em>
            </h1>

            <p className="mt-7 max-w-md text-base leading-relaxed text-charcoal/70 md:text-[1.05rem]">
              Atelier Lact&eacute;a transforms breastmilk into a handcrafted heirloom, a jewel
              the weight of your earliest devotion and passes it forward to the generations
              that follow.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:max-w-xs">
              <a
                href="#contact"
                className="flex h-14 items-center justify-center bg-charcoal px-8 text-[11px] font-semibold uppercase tracking-whisper text-ivory transition-colors duration-300 hover:bg-charcoal/90"
              >
                Begin Your Consultation
              </a>
              <a
                href="#mothers-archive"
                className="flex h-14 items-center justify-center border border-charcoal/25 px-8 text-[11px] font-semibold uppercase tracking-whisper text-charcoal transition-colors duration-300 hover:border-charcoal/50"
              >
                View the Mother&rsquo;s Archive
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 hidden items-center gap-4 lg:flex">
              <span className="text-[11px] uppercase tracking-whisper text-charcoal/40">
                Scroll
              </span>
              <span className="h-px w-16 bg-charcoal/20" />
            </div>
          </div>
        </div>

        {/* Hero image — blurred / dreamy treatment.
             Container starts at 40% from left (overlaps text zone) so the
             blur never produces a hard edge. The wide ivory gradient on top
             hides the overlap and creates the smooth fade seen in the ref. */}
        <div className="pointer-events-none absolute inset-y-0 left-[40%] right-0 overflow-hidden lg:block hidden">
          <Image
            src="/images/hero.jpg"
            alt="Mother tenderly holding her newborn baby"
            fill
            priority
            sizes="60vw"
            className="scale-110 object-cover object-[center_20%] blur-[3px]"
          />
          {/* Warm tint */}
          <div className="absolute inset-0 bg-ivory/10" />
          {/* Left fade — wide enough to fully cover the blur fringe */}
          <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-ivory via-ivory/70 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ivory/30 to-transparent" />
        </div>
        {/* Mobile: full-width behind text with heavy overlay */}
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-ivory/65" />
        </div>
      </section>

      {/* ═══════════════════════ WHAT WE DO ═══════════════════════ */}
      <section id="our-work" className="bg-ivory py-28 md:py-36">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-whisper text-bronze">What We Do</p>
          <h2 className="mt-5 font-display text-[2.5rem] leading-[1.1] text-charcoal md:text-6xl">
            Breastmilk,
            <br />
            made permanent
          </h2>

          <div className="mt-10 max-w-3xl">
            <p className="text-base leading-relaxed text-charcoal/72 md:text-lg">
              Your breastmilk is the most intimate material a mother can offer. Through a
              careful preservation process, we set it permanently into a jewel, a ring, a
              pendant, a bracelet, in your chosen metal. It will never fade, never
              deteriorate, and never be replicated.
            </p>

            <blockquote className="mt-10 border-l-2 border-bronze/25 pl-6">
              <p className="font-display text-base italic leading-relaxed text-charcoal/65 md:text-lg">
                Did not breastfeed, or no longer have milk? You are still welcome here. We
                work with alternative materials, including baby hair, birthstone, or a blend,
                so every mother can preserve her child&rsquo;s earliest chapter.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ADDITIONAL MATERIALS ═══════════════════ */}
      <section className="bg-stone/25 py-28 md:py-36">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-whisper text-bronze">
            Additional Materials
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] italic leading-tight text-charcoal md:text-5xl">
            For every chapter of motherhood
          </h2>
          <p className="mt-5 max-w-2xl font-display text-base italic leading-relaxed text-charcoal/55 md:text-lg">
            Breastmilk is the heart of what we do. For mothers who did not breastfeed,
            stopped early, or want to add another layer of meaning. We offer alternatives
            that carry the same intimacy.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {materials.map((mat) => (
              <article key={mat.name} className="border-t border-charcoal/10 pt-8">
                <h3 className="font-display text-2xl text-charcoal">{mat.name}</h3>
                <p className="mt-2 text-[11px] uppercase tracking-whisper text-bronze/75">
                  {mat.subtitle}
                </p>
                <div className="mt-4 h-px w-8 bg-charcoal/12" />
                <p className="mt-6 text-sm leading-relaxed text-charcoal/65">{mat.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ THE COLLECTION ═══════════════════ */}
      <section id="the-archive" className="bg-ivory py-28 md:py-36">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <p className="text-center text-xs uppercase tracking-whisper text-bronze/70">
            The Collection
          </p>
          <h2 className="mt-5 text-center font-display text-[2.25rem] italic leading-tight text-charcoal md:text-6xl">
            A heirloom for every mother
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center font-display text-base italic leading-relaxed text-charcoal/55 md:text-lg">
            Three tiers, one purpose, every mother deserves to preserve this moment,
            regardless of budget. Each begins with a private consultation and the same
            devotion to craft.
          </p>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`hover-lift relative overflow-hidden p-8 pb-10 ${
                  tier.highlighted
                    ? 'bg-charcoal text-ivory'
                    : 'border border-charcoal/8 bg-ivory text-charcoal'
                }`}
              >
                <p
                  className={`text-[11px] tracking-whisper ${
                    tier.highlighted ? 'text-ivory/35' : 'text-charcoal/25'
                  }`}
                >
                  {tier.numeral}
                </p>
                <h3 className="mt-3 font-display text-4xl italic">{tier.name}</h3>
                <p
                  className={`mt-1 text-[11px] uppercase tracking-whisper ${
                    tier.highlighted ? 'text-champagne/75' : 'text-bronze'
                  }`}
                >
                  {tier.material}
                </p>
                <div
                  className={`mt-5 h-px w-8 ${
                    tier.highlighted ? 'bg-ivory/18' : 'bg-charcoal/12'
                  }`}
                />
                <p
                  className={`mt-6 text-sm leading-relaxed ${
                    tier.highlighted ? 'text-ivory/75' : 'text-charcoal/65'
                  }`}
                >
                  {tier.description}
                </p>
                <p
                  className={`mt-6 font-display text-sm italic ${
                    tier.highlighted ? 'text-champagne/65' : 'text-bronze/55'
                  }`}
                >
                  {tier.tagline}
                </p>
                <div
                  className={`mt-3 h-2.5 w-2.5 rounded-full ${
                    tier.highlighted ? 'bg-champagne/55' : 'bg-stone'
                  }`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESS ═══════════════════ */}
      <section id="how-it-works">
        {/* Quote banner */}
        <div className="bg-charcoal py-20 md:py-28">
          <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
            <p className="max-w-3xl font-display text-xl italic leading-relaxed text-champagne/75 md:text-2xl">
              Nothing is rushed. Every mother is guided through each step with care. You
              are never alone in this.
            </p>
            <h2 className="mt-10 font-display text-[2.25rem] italic leading-tight text-ivory md:text-6xl">
              From first conversation
              <br />
              to forever worn
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/65 md:text-lg">
              Every heirloom begins with a private consultation. What follows is a
              considered, unhurried process built entirely around you.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-ivory py-20 md:py-28">
          <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
            {/* Desktop horizontal layout */}
            <div className="hidden lg:block">
              {/* Circles row */}
              <div className="relative flex justify-between">
                {/* Connecting line */}
                <div className="process-steps-line" aria-hidden="true" />
                {processSteps.map((step, i) => (
                  <div
                    key={step.title}
                    className="relative flex w-[18%] flex-col items-center"
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/12 bg-ivory font-display text-lg text-charcoal/40">
                      {i + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* Content row */}
              <div className="mt-8 flex justify-between">
                {processSteps.map((step) => (
                  <div key={step.title} className="w-[18%] text-center">
                    <h3 className="font-display text-lg text-charcoal">{step.title}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-charcoal/60">
                      {step.text}
                    </p>
                    {step.note && (
                      <p className="mt-3 font-display text-xs italic text-bronze/55">
                        {step.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile vertical layout */}
            <div className="space-y-10 lg:hidden">
              {processSteps.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/12 font-display text-sm text-charcoal/40">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-charcoal">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                      {step.text}
                    </p>
                    {step.note && (
                      <p className="mt-2 font-display text-xs italic text-bronze/55">
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MOTHER'S ARCHIVE ═══════════════════ */}
      <section id="mothers-archive" className="bg-ivory py-28 md:py-36">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          {/* Header row */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-whisper text-bronze">
                The Mother&rsquo;s Archive
              </p>
              <h2 className="mt-5 font-display text-[2.25rem] italic leading-tight text-charcoal md:text-5xl">
                Pieces made,
                <br />
                stories carried
              </h2>
            </div>
            <a
              href="#"
              className="text-xs uppercase tracking-whisper text-charcoal/50 transition-colors hover:text-charcoal"
            >
              View the Full Archive &rarr;
            </a>
          </div>

          {/* Image placeholders */}
          <div className="mt-12 grid overflow-hidden lg:grid-cols-3">
            {archiveStories.map((story) => (
              <div
                key={story.name}
                className="relative flex aspect-[4/3] flex-col items-center justify-center bg-stone/35"
              >
                <span className="font-display text-5xl italic text-charcoal/8">AL</span>
                <span className="mt-1 text-[9px] uppercase tracking-widest text-charcoal/12">
                  Piece Photography
                </span>
              </div>
            ))}
          </div>

          {/* Story cards */}
          <div className="grid border-t border-charcoal/8 lg:grid-cols-3">
            {archiveStories.map((story, i) => (
              <article
                key={story.name}
                className={`p-6 ${
                  i < archiveStories.length - 1
                    ? 'border-b border-charcoal/8 lg:border-b-0 lg:border-r'
                    : ''
                }`}
              >
                <p className="text-[11px] uppercase tracking-whisper text-bronze/65">
                  {story.tier}
                </p>
                <h3 className="mt-2 font-display text-2xl text-charcoal">{story.name}</h3>
                <p className="mt-3 font-display text-sm italic leading-relaxed text-charcoal/60">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ MOTHER'S CIRCLE ═══════════════════ */}
      <section id="mothers-circle" className="bg-charcoal py-28 md:py-36">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-whisper text-ivory/35">
                The Mother&rsquo;s Circle
              </p>
              <h2 className="mt-5 font-display text-[2.25rem] italic leading-tight text-ivory md:text-5xl">
                Every heirloom you create helps another mother
              </h2>
              <p className="mt-7 text-base leading-relaxed text-ivory/60 md:text-lg">
                10% of every Atelier Lact&eacute;a purchase goes directly to mothers in
                need. Food, diapers, and safe refuge for women and children in vulnerable
                situations, including those in abusive households. Every month, transparently
                reported.
              </p>
            </div>

            <div className="space-y-14">
              <div>
                <p className="font-display text-6xl italic text-ivory/85 md:text-7xl">
                  10%
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-whisper text-ivory/35">
                  Of Every Purchase, Every Month
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ivory/50">
                  Goes to mothers facing food insecurity, housing instability, and domestic
                  abuse. No exceptions.
                </p>
              </div>
              <div>
                <p className="font-display text-4xl italic text-ivory/80 md:text-5xl">
                  Monthly
                  <br />
                  report
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-whisper text-ivory/35">
                  Full Transparency
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ivory/50">
                  We publish a monthly report so every client knows exactly where their
                  contribution went.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BEGIN HERE — FORM ═══════════════════ */}
      <section id="contact" className="bg-ivory py-28 md:py-36">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
            {/* Left column */}
            <div>
              <p className="text-xs uppercase tracking-whisper text-bronze">Begin Here</p>
              <h2 className="mt-5 font-display text-[2.25rem] italic leading-tight text-charcoal md:text-5xl">
                Your heirloom begins with a conversation
              </h2>
              <p className="mt-7 text-base leading-relaxed text-charcoal/65">
                Tell us about yourself and what you are imagining. We will reach out within
                48 hours to arrange your private consultation, in whichever language you
                prefer.
              </p>
              <ul className="mt-8 space-y-3">
                {consultationBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-charcoal/60"
                  >
                    <span className="mt-1 text-bronze/45">&middot;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="border border-charcoal/8 bg-ivory p-8 md:p-10">
              <h3 className="font-display text-2xl italic text-charcoal">
                Schedule a consultation
              </h3>

              <form onSubmit={handleSubmit} className="mt-8 space-y-7">
                <div className="grid gap-7 md:grid-cols-2">
                  <div>
                    <label className="text-[11px] uppercase tracking-whisper text-charcoal/45">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="mt-2 w-full border-b border-charcoal/12 bg-transparent pb-2 text-sm text-charcoal outline-none transition-colors focus:border-charcoal/35"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-whisper text-charcoal/45">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="mt-2 w-full border-b border-charcoal/12 bg-transparent pb-2 text-sm text-charcoal outline-none transition-colors focus:border-charcoal/35"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-whisper text-charcoal/45">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-charcoal/12 bg-transparent pb-2 text-sm text-charcoal outline-none transition-colors focus:border-charcoal/35"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-whisper text-charcoal/45">
                    Phone / WhatsApp
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-charcoal/12 bg-transparent pb-2 text-sm text-charcoal outline-none transition-colors focus:border-charcoal/35"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-whisper text-charcoal/45">
                    I Am Ordering For
                  </label>
                  <select
                    name="orderingFor"
                    value={form.orderingFor}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-charcoal/12 bg-transparent pb-2 text-sm text-charcoal outline-none"
                  >
                    <option>Myself, I am the mother</option>
                    <option>My partner / wife</option>
                    <option>A family member</option>
                    <option>A friend</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-whisper text-charcoal/45">
                    Which Tier Interests You?
                  </label>
                  <select
                    name="tier"
                    value={form.tier}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-charcoal/12 bg-transparent pb-2 text-sm text-charcoal outline-none"
                  >
                    <option>Essentia &middot; Stainless Steel</option>
                    <option>Aurea &middot; Gold Plated</option>
                    <option>Maison &middot; Bespoke</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-whisper text-charcoal/45">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    name="vision"
                    value={form.vision}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 w-full resize-none border-b border-charcoal/12 bg-transparent pb-2 text-sm text-charcoal outline-none transition-colors focus:border-charcoal/35"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal py-4 text-[11px] font-semibold uppercase tracking-whisper text-ivory transition-colors hover:bg-charcoal/90"
                >
                  Send My Request
                </button>

                <p className="text-center font-display text-sm italic text-charcoal/45">
                  We reply within 48 hours, in your preferred language.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ QUESTIONS & ENQUIRIES ═══════════════════ */}
      <section className="border-t border-charcoal/6 bg-ivory py-28 md:py-36">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <p className="text-center text-xs uppercase tracking-whisper text-bronze/65">
            Get In Touch
          </p>
          <h2 className="mt-5 text-center font-display text-[2.25rem] italic leading-tight text-charcoal md:text-5xl">
            Questions &amp; enquiries
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {/* Email */}
            <div className="flex flex-col items-center border border-charcoal/6 p-8 text-center">
              <div className="text-charcoal/25">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <rect x="1" y="1" width="20" height="16" rx="2" />
                  <path d="M1 1l10 8 10-8" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-xl text-charcoal">Email</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/55">
                For general questions, care instructions, and order updates.
              </p>
              <a
                href="mailto:hello@atelierlacea.com"
                className="mt-5 text-[11px] uppercase tracking-whisper text-charcoal/45 transition-colors hover:text-charcoal"
              >
                hello@atelierlacea.com
              </a>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center border border-charcoal/6 p-8 text-center">
              <div className="text-charcoal/25">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <rect x="1" y="1" width="20" height="20" rx="5" />
                  <circle cx="11" cy="11" r="5" />
                  <circle
                    cx="16.5"
                    cy="5.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-xl text-charcoal">Instagram</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/55">
                Follow the Mother&rsquo;s Archive, pieces in progress, finished heirlooms,
                and the stories behind them.
              </p>
              <a
                href="#"
                className="mt-5 text-[11px] uppercase tracking-whisper text-charcoal/45 transition-colors hover:text-charcoal"
              >
                @atelierlacea
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center border border-charcoal/6 p-8 text-center">
              <div className="text-charcoal/25">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M11 1a10 10 0 0 0-8.5 15L1 21l5.1-1.4A10 10 0 1 0 11 1z" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-xl text-charcoal">WhatsApp</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/55">
                Quick questions in Azerbaijani, English, or Russian. We respond the same
                day during working hours.
              </p>
              <a
                href="#"
                className="mt-5 text-[11px] uppercase tracking-whisper text-charcoal/45 transition-colors hover:text-charcoal"
              >
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
