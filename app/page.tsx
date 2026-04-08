'use client';

import { Head } from 'next/head';

import { PageShell } from '@/components/layout/page-shell';
import { HomeExperience } from '@/components/sections/home/home-experience';

export default function HomePage() {
  return (
    <PageShell>
      <HomeExperience />
      <Head>
        <link rel="icon" href='/Favicon.png' />
      </Head>
    </PageShell>
  );
}
