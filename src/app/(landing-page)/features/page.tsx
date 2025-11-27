"use client";

import EmpoweredSection from '@/components/pages/features-page/EmpoweredSection';
import FeaturesCoreOperations from '@/components/pages/features-page/FeaturesCoreOperations';
import FeaturesssSection from '@/components/pages/features-page/FeaturesssSection';
import SmartIntegration from '@/components/pages/features-page/SmartIntegration';
import CalltoActionBottom from '@/components/pages/landing-page/CalltoActionBottom';
import FaqSection from '@/components/pages/landing-page/FAQSection';
import HeroSection from '@/components/pages/landing-page/HeroSection';
import SellerClubSection from '@/components/pages/landing-page/SellerClubSection';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';
import React from 'react';

// Define your feature arrays here
const teamFeatures = [
  {
    title: "People",
    description: "Centralized customer and supplier management with loyalty programs and CRM tools.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/peoples-bg.webm",
  },
  {
    title: "Human Resource (HR)",
    description: "Simplify attendance, shifts, payroll, and employee records in one system.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/humanresources.webm",
  },
  {
    title: "Facilities",
    description: "Track and manage workspaces, business assets, and internal resources effectively.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/facilities.webm",
  },
];

const financeFeatures = [
  {
    title: "Accounting & Financials",
    description: "Integrated invoicing, expense tracking, and tax compliance made simple.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/acounting%26financial.webm",
   
  },
  {
    title: "Advanced Reports",
    description: "Unlock in-depth analytics, trends, and forecasting for smarter decision-making.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/advance-report.webm",
   
  },
  {
    title: "Standard Reports",
    description: "Get instant insights into sales, purchases, and stock performance.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/standards-reports.webm",
  },
];

const page = () => {

 
  return (
    <>
      <HeroSection
        title="Explore the Tools Behind Your Success"
        description="Owners Inventory brings together everything you need to manage, track, and grow your business in one unified platform. Explore our powerful features, categorized to help you run operations smoothly, manage people efficiently, and scale with confidence."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/main-feature.webm"
        showButtons={false}
      />

      <FeaturesCoreOperations />

      <EmpoweredSection
        title="Your Team, Organized & Empowered"
        description="Empower your team, build customer loyalty, and manage resources with ease."
        features={teamFeatures}
        wrapperClass="bg-[#F3F4F6] rounded-[40px] py-10 lg:py-[100px] px-5 lg:px-[60px] mx-0"
      />
    <div className="overflow-hidden h-full">
      <FeaturesssSection />
</div>
      <SellerClubSection
        mediaType="video"
        mediaSrc="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/general-tools.webm"
        heading="Utilities & General Tools"
        description="Behind every smooth operation are the right tools. With Owners Inventory, you get smart utilities like workflow automation, customizable settings, and user management ensuring your business runs efficiently at every level."
        buttonText="Book a Free Demo"
        buttonUrl="#"
      />

      <SmartIntegration />

      <EmpoweredSection
        title="Finance & Reporting Made Simple"
        description="Empower your team, build customer loyalty, and manage resources with ease."
        features={financeFeatures}
        wrapperClass="finance-reporting-shadow mx-10"
      />
     <div className="lg:mt-[100px] md:mt-28 mt-20">
      <FaqSection />
      </div>
      <CalltoActionBottom />
    </>
  );
};

export default page;
