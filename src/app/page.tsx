'use client';

import React from 'react';
import { VideoHero } from '@/components/VideoHero';
import { ConcernsSection } from '@/components/ConcernsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { PackagesSection } from '@/components/PackagesSection';
import { VisionSection } from '@/components/VisionSection';
import { CTASection } from '@/components/CTASection';

export default function Page() {
  return (
    <main className="bg-background">
      <VideoHero />
      <ConcernsSection />
      <FeaturesSection />
      <ProcessSection />
      <PackagesSection />
      <VisionSection />
      <CTASection />
    </main>
  );
}