import Link from 'next/link';

import { PageShell } from '@/components/layout/page-shell';

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto max-w-content px-5 py-28 text-center md:px-8 lg:px-12">
        <p className="text-xs uppercase tracking-whisper text-charcoal/60">Not Found</p>
        <h1 className="mt-4 font-display text-6xl text-charcoal">Piece unavailable</h1>
        <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
          The requested page does not exist in this static atelier preview.
        </p>
        <Link
          href="/collection"
          className="mt-8 inline-flex rounded-full border border-charcoal px-6 py-3 text-xs uppercase tracking-whisper"
        >
          Return to Collection
        </Link>
      </section>
    </PageShell>
  );
}
