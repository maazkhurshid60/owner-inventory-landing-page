'use client'
// src/components/Hero.tsx
import React from 'react';
import Image from 'next/image';


import CalltoActionBottom from './CalltoActionBottom';
import FeaturesSection from './FeaturesSection';
import UnifiedPlatform from './UnifiedPlatform';
import PosIconsSection from './Smartway';
import ReviewSection from './Testimonials';
import SellerClubSection from './SellerClubSection';
import FlexiblePricingSection from './FlexiblePricingSection';
import InsightsSection from './InsightsSection';
import FaqSection from './FAQSection';
import HeroSection from './HeroSection';
import SmartWaytoSyncndSellSection from './SmartWaytoSyncndSellSection';
import PinnedSection3 from './PinnedSection3';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';


export default function Hero() {

  
  return (
    <>
      {/* Rounded Background Header Shape */}
      <div className='font-onset '>
        <HeroSection
          title="Grow Faster with Smarter Inventory Tools"
          description="Get full access to powerful inventory tools without upfront costs. Start managing smarter today..."
          video="/assets/Manual.mp4"
          showButtons={true}
        />
        <SmartWaytoSyncndSellSection />
        <FeaturesSection />
        <UnifiedPlatform />
        <PinnedSection3 />
        <PosIconsSection />
        <ReviewSection />

        <SellerClubSection
          mediaType="image"
          mediaSrc="/assets/features-section/testing.webp"
          heading="Join the Smart Sellers Club"
          description="Discover how easy it is to manage inventory, run POS, and launch an online store — all from a single, unified dashboard."
          buttonText="Book a Free Demo"
          buttonUrl="#"
        />
        <FlexiblePricingSection />
        <InsightsSection />
        <FaqSection />
        <CalltoActionBottom />
      </div>
    </>
  );
}
