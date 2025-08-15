// src/components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import FeaturesSection from './sections/FeaturesSection';
import UnifiedPlatform from './sections/UnifiedPlatform';
import SmartSellSection from './sections/SmartSell';
import IndustryPOSShowcase from './sections/IndustryPosShowcase';
import PosIconsSection from './sections/Smartway';
import ReviewSection from './sections/Testimonials';
import SellerClubSection from './sections/SellerClubSection';
import FlexiblePricingSection from './sections/FlexiblePricingSection';
import InsightsSection from './sections/InsightsSection';
import FaqSection from './sections/FAQSection';
import CallToActionBottomSection from './sections/CalltoActionBottom';
import HeroSection from './sections/HeroSection';
import SmartWaytoSyncndSellSection from './sections/SmartWaytoSyncndSellSection';

export default function Hero() {
  return (
    <>
      {/* Rounded Background Header Shape */}
    <div className='font-onset relative z-50'>
    <HeroSection />
    <SmartWaytoSyncndSellSection/>
    <FeaturesSection />
    <UnifiedPlatform/>
    <SmartSellSection/>
    <IndustryPOSShowcase/>
    <PosIconsSection/>
    <ReviewSection/>
    <SellerClubSection/>
    <FlexiblePricingSection/>
    <InsightsSection />
    <FaqSection/>
    <CallToActionBottomSection/>
    </div>
    </>
  );
}
