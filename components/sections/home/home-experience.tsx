'use client';

import { useEffect, useRef, useState } from 'react';

import { useLanguage } from '@/lib/language-context';
import { siteContent } from '@/lib/site-content';

const TIER_NAMES = ['Essentia', 'Aurea', 'Maison'] as const;

export function HomeExperience() {
  const { locale } = useLanguage();
  const c = siteContent[locale];
  const heroParallaxRef = useRef<HTMLDivElement>(null);

  /* ── Parallax ── */
  useEffect(() => {
    const el = heroParallaxRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.5) {
        el.style.transform = `translateY(${y * 0.28}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Reveal on scroll ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.07 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Form state ── */
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', orderFor: '', tier: '', vision: '', pref: '' });
  const set = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ivory">
        {/* Parallax image container */}
        <div
          ref={heroParallaxRef}
          className="absolute right-[-5%] top-[-15%] h-[130%] w-[62%] will-change-transform max-lg:right-[-10%] max-lg:w-[80%] max-md:inset-0 max-md:right-0 max-md:top-0 max-md:h-full max-md:w-full"
        >
          <div className="hero-photo max-md:blur-[8px] max-md:opacity-40" />
          <div className="hero-tint" />
          <div className="hero-face-wash" />
        </div>
        <div className="hero-fade max-md:hidden" />

        {/* Content */}
        <div className="relative z-[3] px-6 pb-[100px] pt-[140px] md:px-16" style={{ maxWidth: 560 }}>
          <div className="mb-7 flex items-center gap-[14px] text-[10px] uppercase tracking-[0.38em] text-gold">
            <span className="block h-px w-7 bg-gold" />
            Maison d&rsquo;H&eacute;ritage &middot; Est. 2026
          </div>

          <h1 className="mb-7 text-[58px] font-light italic leading-[1.1] tracking-[-0.01em] text-maroon max-md:text-[38px]">
            {c.hero.h1}
            <br />
            <strong className="not-italic font-medium">{c.hero.h1Strong}</strong>
          </h1>

          <p className="mb-12 text-[17px] font-light leading-[1.82] text-text-mid">
            {c.hero.lead}
          </p>

          <div className="flex flex-wrap items-center gap-[14px]">
            <button
              type="button"
              onClick={() => goTo('consult')}
              className="inline-block cursor-pointer border-none bg-maroon px-[42px] py-4 text-[11px] uppercase tracking-[0.28em] text-gold-light transition-all duration-300 hover:bg-gold hover:text-maroon"
            >
              {c.hero.btn1}
            </button>
            <button
              type="button"
              onClick={() => goTo('mothers-archive')}
              className="inline-block cursor-pointer border border-maroon/25 bg-transparent px-[42px] py-[15px] text-[11px] uppercase tracking-[0.28em] text-maroon transition-all duration-300 hover:border-maroon hover:bg-maroon hover:text-gold-light"
            >
              {c.hero.btn2}
            </button>
          </div>
        </div>

      </section>

      {/* ═══════════════════ FOCUS (What We Do) ═══════════════════ */}
      <section className="reveal bg-ivory px-6 py-[100px] md:px-16" id="focus">
        <div className="mx-auto max-w-[780px]">
          <div className="mb-4 text-[10px] uppercase tracking-[0.36em] text-gold">{c.focus.eyebrow}</div>
          <h2 className="mb-[18px] text-[46px] font-light italic leading-[1.12] text-maroon max-md:text-[32px]">
            {c.focus.title1}<br />{c.focus.title2}
          </h2>
          <div className="mb-7 h-px w-8 bg-gold/50" />
          <p className="mb-6 text-[18px] font-light leading-[1.85] text-text-mid">{c.focus.lead}</p>
          <p className="border-l-[1.5px] border-gold/40 py-5 pl-6 text-base italic leading-[1.75] text-text-soft">
            {c.focus.note}
          </p>
        </div>
      </section>

      {/* ═══════════════════ EXTENSIONS (Additional Materials) ═══════════════════ */}
      <section className="reveal bg-ivory-2 px-6 py-20 md:px-16" id="extensions">
        <div className="mb-12">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">{c.ext.eyebrow}</div>
          <h2 className="mt-3 text-[38px] font-light italic leading-[1.12] text-maroon max-md:text-[28px]">{c.ext.title}</h2>
          <p className="mt-[14px] max-w-[620px] text-base italic leading-[1.75] text-text-soft">{c.ext.intro}</p>
        </div>
        <div className="grid grid-cols-1 gap-px bg-gold/15 md:grid-cols-3">
          {c.ext.items.map((item) => (
            <div key={item.name} className="bg-ivory-2 p-9 transition-colors hover:bg-ivory md:p-11">
              <div className="mb-[6px] text-xl font-normal text-maroon">{item.name}</div>
              <div className="mb-4 text-[13px] italic text-text-soft">{item.subtitle}</div>
              <div className="mb-4 h-px w-6 bg-gold/35" />
              <p className="text-sm font-light leading-[1.8] text-text-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ TIERS (Collection) ═══════════════════ */}
      <section className="reveal bg-ivory px-6 py-[100px] md:px-16" id="tiers">
        <div className="mb-14 text-center">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">{c.tiers.eyebrow}</div>
          <h2 className="mt-[14px] text-[46px] font-light italic leading-[1.12] text-maroon max-md:text-[32px]">{c.tiers.title}</h2>
          <p className="mx-auto mt-[14px] max-w-[540px] text-base italic leading-[1.75] text-text-soft">{c.tiers.note}</p>
        </div>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-0 bg-gold/15 md:grid-cols-3">
          {c.tiers.items.map((tier, i) => {
            const featured = i === 1;
            return (
              <div
                key={TIER_NAMES[i]}
                onClick={() => goTo('consult')}
                className={`cursor-pointer border-r border-gold/15 p-11 transition-transform duration-300 last:border-r-0 hover:-translate-y-1 md:p-[54px_46px] ${
                  featured ? 'bg-maroon' : 'bg-ivory'
                }`}
              >
                <div className={`mb-[18px] text-[10px] tracking-[0.3em] uppercase ${featured ? 'text-gold/70' : 'text-gold/50'}`}>
                  {['I', 'II', 'III'][i]}
                </div>
                <div className={`mb-[5px] text-[32px] font-light italic ${featured ? 'text-gold-light' : 'text-maroon'}`}>
                  {TIER_NAMES[i]}
                </div>
                <div className={`mb-6 text-[11px] uppercase tracking-whisper ${featured ? 'text-gold' : 'text-gold'} opacity-85`}>
                  {tier.mat}
                </div>
                <div className="mb-6 h-px w-6 bg-gold/40" />
                <p className={`mb-[26px] text-[15px] font-light leading-[1.8] ${featured ? 'text-gold/[0.55]' : 'text-text-soft'}`}>
                  {tier.desc}
                </p>
                <p className={`text-xs italic ${featured ? 'text-gold/85' : 'text-gold/65'}`}>{tier.tag}</p>
                <div className={`mt-[22px] h-[11px] w-[7px] rounded-[50%_50%_50%_50%/30%_30%_70%_70%] bg-gold ${featured ? 'opacity-65' : 'opacity-25'}`} />
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════ PROCESS ═══════════════════ */}
      <section className="reveal bg-ivory-2 px-6 py-[100px] md:px-16" id="process">
        <div className="mb-[72px]">
          <p className="mb-3 text-xl italic tracking-[0.02em] text-gold">{c.process.intro}</p>
          <h2 className="mb-4 text-[42px] font-light italic leading-[1.12] text-maroon max-md:text-[30px]">
            {c.process.title1}<br />{c.process.title2}
          </h2>
          <p className="max-w-[680px] text-[17px] font-light leading-[1.85] text-text-mid">{c.process.tagline}</p>
        </div>

        {/* Desktop steps */}
        <div className="relative hidden grid-cols-5 gap-5 md:grid">
          <div className="steps-line" />
          {c.process.steps.map((step, i) => (
            <div key={step.name} className="text-center">
              <div className="relative z-[1] mx-auto mb-[22px] flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold/45 bg-ivory-2 text-base italic text-gold">
                {i + 1}
              </div>
              <div className="mb-2 text-sm font-normal text-maroon">{step.name}</div>
              <p className="text-[13px] font-light leading-[1.75] text-text-soft">{step.detail}</p>
              {step.note && <p className="mt-[10px] text-[13px] italic text-gold">{step.note}</p>}
            </div>
          ))}
        </div>

        {/* Mobile steps */}
        <div className="space-y-8 md:hidden">
          {c.process.steps.map((step, i) => (
            <div key={step.name} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/45 text-sm italic text-gold">
                {i + 1}
              </div>
              <div>
                <div className="text-sm font-normal text-maroon">{step.name}</div>
                <p className="mt-1 text-[13px] font-light leading-[1.75] text-text-soft">{step.detail}</p>
                {step.note && <p className="mt-2 text-[13px] italic text-gold">{step.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ ARCHIVE QUOTE STRIP ═══════════════════ */}
      <div className="reveal bg-maroon px-6 py-12 text-center md:px-16">
        <p className="mx-auto max-w-[700px] text-[26px] font-light italic leading-[1.6] tracking-[0.02em] text-gold-light max-md:text-xl">
          {c.archiveQuote}
        </p>
      </div>

      {/* ═══════════════════ MOTHER'S ARCHIVE ═══════════════════ */}
      <section className="reveal bg-ivory px-6 py-[100px] md:px-16" id="mothers-archive">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.36em] text-gold">{c.archive.eyebrow}</div>
            <h2 className="text-[38px] font-light italic leading-[1.12] text-maroon max-md:text-[28px]">
              {c.archive.title1}<br />{c.archive.title2}
            </h2>
          </div>
          <a href="#mothers-archive" className="border-b border-gold/40 pb-[3px] text-[11px] uppercase tracking-[0.22em] text-gold transition-opacity hover:opacity-60">
            {c.archive.link}
          </a>
        </div>

        {/* Archive cards */}
        <div className="grid grid-cols-1 gap-px bg-gold/15 md:grid-cols-3">
          {c.archive.items.map((item, i) => (
            <div key={item.name} className={`min-h-[380px] ${i === 1 ? 'bg-[#4d0d15]' : 'bg-maroon'}`}>
              <div className="flex h-full w-full flex-col justify-between p-10 md:p-12">
                <div className="mb-8 text-[52px] font-light italic leading-none tracking-[-2px] text-gold/15">
                  AL
                </div>
                <div>
                  <div className="mb-3 text-[9px] uppercase tracking-[0.24em] text-gold/50">{item.tier}</div>
                  <div className="mb-4 text-[22px] italic font-normal text-gold-light">{item.name}</div>
                  <p className="text-base italic leading-[1.75] text-gold/65">
                    &ldquo;{item.story}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ MOTHER'S CIRCLE ═══════════════════ */}
      <section className="reveal bg-maroon px-6 py-24 md:px-16" id="circle">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-20">
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.36em] text-gold/60">{c.circle.eyebrow}</div>
              <h2 className="mt-[14px] text-[40px] font-light italic leading-[1.15] text-gold-light max-md:text-[30px]">
                {c.circle.title1}<br />{c.circle.title2}
              </h2>
              <p className="mt-[22px] text-base font-light leading-[1.88] text-gold/[0.58]">{c.circle.body}</p>
            </div>

            <div className="flex flex-col gap-9 border-l border-gold/[0.12] pl-10 md:pl-16">
              <div>
                <div className="mb-[7px] text-[52px] font-light italic leading-none text-gold">5%</div>
                <div className="mb-2 text-[11px] uppercase tracking-whisper text-gold/60">{c.circle.stat1Label}</div>
                <p className="text-sm font-light leading-[1.78] text-gold/[0.32]">{c.circle.stat1Body}</p>
              </div>
              <div>
                <div className="mb-[7px] text-[36px] font-light italic leading-[1.2] text-gold">
                  {c.circle.stat2Num1}<br />{c.circle.stat2Num2}
                </div>
                <div className="mb-2 text-[11px] uppercase tracking-whisper text-gold/60">{c.circle.stat2Label}</div>
                <p className="text-sm font-light leading-[1.78] text-gold/[0.32]">{c.circle.stat2Body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONSULTATION FORM ═══════════════════ */}
      <section className="reveal bg-ivory px-6 py-[100px] md:px-16" id="consult">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-20">
          {/* Left column */}
          <div>
            <div className="mb-[14px] text-[10px] uppercase tracking-[0.36em] text-gold">{c.consult.eyebrow}</div>
            <h2 className="mb-[18px] text-[44px] font-light italic leading-[1.12] text-maroon max-md:text-[30px]">
              {c.consult.title1}<br />{c.consult.title2}
            </h2>
            <p className="mb-7 text-[17px] font-light leading-[1.85] text-text-mid">{c.consult.body}</p>
            <div className="flex flex-col gap-[14px]">
              {c.consult.points.map((point) => (
                <div key={point} className="flex items-start gap-[14px] text-base leading-[1.65] text-text-mid">
                  <span className="-mt-px shrink-0 text-[22px] leading-none text-gold">&middot;</span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="border border-gold/[0.18] bg-ivory-2 p-10 md:p-12">
            <div className="mb-[30px] text-xl font-light italic text-maroon">{c.consult.formTitle}</div>

            <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-[9px] block text-[10px] uppercase tracking-[0.24em] text-text-soft">{c.consult.labels.fn}</label>
                <input type="text" value={form.firstName} onChange={(e) => set('firstName', e.target.value)}
                  className="w-full border-b border-gold/35 bg-transparent pb-[9px] pt-[9px] text-[15px] font-light text-text-dark outline-none transition-colors focus:border-maroon" />
              </div>
              <div>
                <label className="mb-[9px] block text-[10px] uppercase tracking-[0.24em] text-text-soft">{c.consult.labels.ln}</label>
                <input type="text" value={form.lastName} onChange={(e) => set('lastName', e.target.value)}
                  className="w-full border-b border-gold/35 bg-transparent pb-[9px] pt-[9px] text-[15px] font-light text-text-dark outline-none transition-colors focus:border-maroon" />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-[9px] block text-[10px] uppercase tracking-[0.24em] text-text-soft">{c.consult.labels.email}</label>
              <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)}
                className="w-full border-b border-gold/35 bg-transparent pb-[9px] pt-[9px] text-[15px] font-light text-text-dark outline-none transition-colors focus:border-maroon" />
            </div>

            <div className="mb-6">
              <label className="mb-[9px] block text-[10px] uppercase tracking-[0.24em] text-text-soft">{c.consult.labels.phone}</label>
              <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)}
                className="w-full border-b border-gold/35 bg-transparent pb-[9px] pt-[9px] text-[15px] font-light text-text-dark outline-none transition-colors focus:border-maroon" />
            </div>

            <div className="mb-6">
              <label className="mb-[9px] block text-[10px] uppercase tracking-[0.24em] text-text-soft">{c.consult.labels.orderFor}</label>
              <select value={form.orderFor} onChange={(e) => set('orderFor', e.target.value)}
                className="w-full cursor-pointer border-b border-gold/35 bg-transparent pb-[9px] pt-[9px] text-[15px] font-light text-text-dark outline-none">
                {c.consult.forOptions.map((opt) => <option key={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="mb-6">
              <label className="mb-[9px] block text-[10px] uppercase tracking-[0.24em] text-text-soft">{c.consult.labels.tier}</label>
              <select value={form.tier} onChange={(e) => set('tier', e.target.value)}
                className="w-full cursor-pointer border-b border-gold/35 bg-transparent pb-[9px] pt-[9px] text-[15px] font-light text-text-dark outline-none">
                {c.consult.tierOptions.map((opt) => <option key={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="mb-6">
              <label className="mb-[9px] block text-[10px] uppercase tracking-[0.24em] text-text-soft">{c.consult.labels.vision}</label>
              <textarea value={form.vision} onChange={(e) => set('vision', e.target.value)} rows={3}
  placeholder={c.consult.labels.visionPlaceholder}
  className="w-full resize-none border-b border-gold/35 bg-transparent pb-[9px] pt-[9px] text-[15px] font-light text-text-dark outline-none transition-colors focus:border-maroon" />
            </div>

            {/* Contact preference */}
            <label className="mb-3 block text-[10px] uppercase tracking-[0.24em] text-text-soft">{c.consult.labels.pref}</label>
            <div className="mb-7 flex flex-wrap gap-4">
              {(['wa', 'video', 'phone', 'email'] as const).map((val) => {
                const labels: Record<string, string> = { wa: 'WhatsApp', video: c.consult.prefLabels.video, phone: c.consult.prefLabels.phone, email: c.consult.prefLabels.email };
                return (
                  <label key={val} className="flex cursor-pointer items-center gap-2 text-[15px] text-text-mid">
                    <input type="radio" name="pref" value={val} checked={form.pref === val} onChange={(e) => set('pref', e.target.value)}
                      className="accent-maroon" />
                    {labels[val]}
                  </label>
                );
              })}
            </div>

            <button
              type="button"
              className="w-full cursor-pointer border-none bg-maroon px-4 py-[18px] text-[11px] uppercase tracking-[0.28em] text-gold-light transition-all duration-300 hover:bg-gold hover:text-maroon"
            >
              {c.consult.submit}
            </button>
            <p className="mt-[14px] text-center text-[13px] italic text-text-soft">{c.consult.note}</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════ */}
      <section className="reveal border-t border-gold/[0.12] bg-ivory-2 px-6 py-20 md:px-16" id="contact">
        <div className="mb-12 text-center">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">{c.contact.eyebrow}</div>
          <h2 className="mt-[10px] text-[36px] font-light italic leading-[1.12] text-maroon max-md:text-[28px]">{c.contact.title}</h2>
        </div>
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-px bg-gold/[0.12] md:grid-cols-3">
          {/* Email */}
          <div className="bg-ivory-2 p-9 text-center md:p-11">
            <div className="mb-4 text-[22px] text-gold/[0.55]">&#9993;</div>
            <div className="mb-[10px] text-base font-normal text-maroon">{c.contact.email.name}</div>
            <p className="mb-[18px] text-sm font-light leading-[1.78] text-text-soft">{c.contact.email.body}</p>
            <a href="mailto:hello@atelierlactea.com"
              className="border-b border-gold/35 pb-[3px] text-[10px] uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-60">
              hello@atelierlactea.com
            </a>
          </div>
          {/* Instagram */}
          <div className="bg-ivory-2 p-9 text-center md:p-11">
            <div className="mb-4 text-[22px] text-gold/[0.55]">&#9900;</div>
            <div className="mb-[10px] text-base font-normal text-maroon">Instagram</div>
            <p className="mb-[18px] text-sm font-light leading-[1.78] text-text-soft">{c.contact.instagram.body}</p>
            <a href="https://instagram.com/atelierlactea" target="_blank" rel="noopener noreferrer"
              className="border-b border-gold/35 pb-[3px] text-[10px] uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-60">
              @atelierlactea
            </a>
          </div>
          {/* WhatsApp */}
          <div className="bg-ivory-2 p-9 text-center md:p-11">
            <div className="mb-4 text-[22px] text-gold/[0.55]">&#9830;</div>
            <div className="mb-[10px] text-base font-normal text-maroon">WhatsApp</div>
            <p className="mb-[18px] text-sm font-light leading-[1.78] text-text-soft">{c.contact.whatsapp.body}</p>
            <a href="https://wa.me/9942162835437" target="_blank" rel="noopener noreferrer"
              className="border-b border-gold/35 pb-[3px] text-[10px] uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-60">
              {c.contact.whatsapp.link}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
