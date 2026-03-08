'use client';

import Image from 'next/image';
import { Form, Input } from 'antd';

import { PageShell } from '@/components/layout/page-shell';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { SectionHeader } from '@/components/ui/section-header';
import { contactDetails } from '@/lib/data';

export default function ContactPage() {
  return (
    <PageShell>
      <section className="py-20">
        <div className="mx-auto w-full max-w-content px-5 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Visit & Contact"
            title="Connect with the atelier concierge"
            description="For private appointments, bespoke commissions and collection guidance, contact our team below."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6 rounded-luxe border border-charcoal/10 bg-cream/60 p-7">
              <div>
                <p className="text-xs uppercase tracking-whisper text-charcoal/60">Email</p>
                <p className="mt-1 text-sm text-charcoal/80">{contactDetails.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-whisper text-charcoal/60">Phone</p>
                <p className="mt-1 text-sm text-charcoal/80">{contactDetails.phone}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-whisper text-charcoal/60">Atelier Address</p>
                <p className="mt-1 text-sm text-charcoal/80">{contactDetails.address}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-whisper text-charcoal/60">Hours</p>
                <p className="mt-1 text-sm text-charcoal/80">{contactDetails.hours}</p>
              </div>

              <div className="relative mt-6 min-h-[300px] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
                  alt="Atelier facade"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="rounded-luxe border border-charcoal/10 bg-ivory p-7 shadow-card">
              <Form layout="vertical" requiredMark={false}>
                <Form.Item label="Name">
                  <Input className="h-11 rounded-full border-charcoal/20 bg-cream/40 px-5" />
                </Form.Item>
                <Form.Item label="Email">
                  <Input className="h-11 rounded-full border-charcoal/20 bg-cream/40 px-5" />
                </Form.Item>
                <Form.Item label="Subject">
                  <Input className="h-11 rounded-full border-charcoal/20 bg-cream/40 px-5" />
                </Form.Item>
                <Form.Item label="Message">
                  <Input.TextArea className="rounded-3xl border-charcoal/20 bg-cream/40 px-5 py-3" rows={6} />
                </Form.Item>
                <LuxuryButton>Send Inquiry</LuxuryButton>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
