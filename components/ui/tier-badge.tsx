import type { ServiceTier } from '@/lib/data';

const toneMap: Record<ServiceTier, string> = {
  Signature: 'bg-cream text-charcoal',
  Eleve: 'bg-champagne text-charcoal',
  Bespoke: 'bg-charcoal text-ivory'
};

type TierBadgeProps = {
  tier: ServiceTier;
};

export function TierBadge({ tier }: TierBadgeProps) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-whisper ${toneMap[tier]}`}>
      {tier}
    </span>
  );
}
