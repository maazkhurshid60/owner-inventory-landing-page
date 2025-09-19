// src/components/Hero.tsx
import React from 'react';
import Image from 'next/image';


import CalltoActionBottom from './landing-page/CalltoActionBottom';
import FeaturesSection from './landing-page/FeaturesSection';
import UnifiedPlatform from './landing-page/UnifiedPlatform';
import PosIconsSection from './landing-page/Smartway';
import ReviewSection from './landing-page/Testimonials';
import SellerClubSection from './landing-page/SellerClubSection';
import FlexiblePricingSection from './landing-page/FlexiblePricingSection';
import InsightsSection from './landing-page/InsightsSection';
import FaqSection from './landing-page/FAQSection';
import HeroSection from './landing-page/HeroSection';
import SmartWaytoSyncndSellSection from './landing-page/SmartWaytoSyncndSellSection';
import PinnedSection3 from './landing-page/PinnedSection3';


export default function Hero() {
  return (
    <>
      {/* Rounded Background Header Shape */}
    <div className='font-onset '>
   <HeroSection/>
    <SmartWaytoSyncndSellSection/>
    <FeaturesSection />
    <UnifiedPlatform/>
    <PinnedSection3/>
    <PosIconsSection/>
    <ReviewSection/>
   
    <SellerClubSection/>
    <FlexiblePricingSection/>
    <InsightsSection />
    <FaqSection/>
    <CalltoActionBottom/>
    </div>
    </>
  );
}
