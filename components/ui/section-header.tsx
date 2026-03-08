type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <header className={`max-w-2xl ${alignment}`}>
      {eyebrow ? <p className="mb-4 text-xs uppercase tracking-whisper text-charcoal/60">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl leading-tight text-charcoal md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-charcoal/70">{description}</p> : null}
    </header>
  );
}
