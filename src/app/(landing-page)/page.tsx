"use client";
import '../globals.css'
import React, { useEffect, Suspense,  } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';


// Lazy load all components
const HeroSection2 = dynamic(() => import('@/components/common-components/HeroSection2'));
const TrustedBySection = dynamic(() => import('@/components/common-components/TrustedBySection'));
const TurningChaos = dynamic(() => import('@/components/pages/landing-page/TurningChaos'));
const CaseStudies = dynamic(() => import('@/components/pages/landing-page/CaseStudy'));
const SmartWaytoSyncndSellSection = dynamic(() => import('@/components/pages/landing-page/SmartWaytoSyncndSellSection'));
const UnifiedPlatform = dynamic(() => import('@/components/pages/landing-page/UnifiedPlatform'));
const VoicesRealBusiness = dynamic(() => import('@/components/pages/landing-page/VoicesRealBusiness'));
const IndustryPOSShowcase = dynamic(() => import('@/components/pages/landing-page/IndustryPosShowcase'));
const PosIconsSection = dynamic(() => import('@/components/pages/landing-page/Smartway'));
const ToolsSection = dynamic(() => import('@/components/pages/landing-page/ToolsSection'));
const SmartTools = dynamic(() => import('@/components/pages/landing-page/SmartTools'));
const InsightsSection = dynamic(() => import('@/components/pages/landing-page/InsightsSection'));
const FaqSection = dynamic(() => import('@/components/pages/landing-page/FAQSection'));
const CalltoActionBottom = dynamic(() => import('@/components/pages/landing-page/CalltoActionBottom'));
const FeaturesTabSection = dynamic(() => import('@/components/pages/landing-page/FeaturesSection'));

const caseStudiesData = [
  {
    id: "1",
    title: "Al-Asif",
    overview:
      "We helped Al-Asif optimize operations by integrating sales, inventory, and finance into a unified POS system. The solution automated billing, enabled real-time stock tracking, and enhanced profit visibility—empowering the team to make faster, data-driven decisions and operate more efficiently.",
    quote:
      "Owners Inventory completely transformed our retail operations. Real-time sync keeps all locations updated and minimizes stock errors. The dashboards give clear sales insights, and automation saves us hours every week — it's like having a full operations team in one system.",
    author: "Faique Asif",
    position: "AL-Asif CEO",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",
  },
  {
    id: "2",
    title: "Retail Pro",
    overview:
      "Streamlined inventory management and improved customer experience with integrated POS solutions across multiple locations.",
    quote:
      "The real-time synchronization feature has been a game-changer for our multi-store operations. Stock errors reduced by 85% and decision-making became instantaneous.",
    author: "Sarah Johnson",
    position: "Retail Pro COO",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",
  },
  {
    id: "3",
    title: "Tech Gear",
    overview:
      "Implemented automated billing and real-time analytics for better decision making and operational efficiency.",
    quote:
      "Our operational efficiency improved by 40% after implementing this solution. The automated reporting saves us countless hours every month.",
    author: "Mike Chen",
    position: "Tech Gear Founder",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",
  },
  {
    id: "4",
    title: "Fashion Hub",
    overview:
      "Enhanced profit visibility and operational efficiency across all retail locations with comprehensive dashboards.",
    quote:
      "The dashboards provide incredible insights that help us make data-driven decisions instantly. Our team can now focus on strategy instead of manual data entry.",
    author: "Emma Davis",
    position: "Fashion Hub Director",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",
  },
  {
    id: "5",
    title: "Global Mart",
    overview:
      "Scaled operations across international borders with unified inventory management and financial tracking.",
    quote:
      "Managing multiple currencies and locations became seamless. The system handles complexity so we can focus on growth.",
    author: "Robert Wilson",
    position: "Global Mart CEO",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",
  },
];

// Full page loading component
const FullPageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading Owners Inventory...</p>
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      try {
        history.scrollRestoration = "manual";
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <div className="font-onset">
          <HeroSection2
            title="Take Control. Gain Clarity. Grow with Owners Inventory."
            description="Turn all assets to advantage. Our Owners Inventory services assist you in managing, examining and displaying your inventory in a single, smart, interconnected environment - created to respond to real expansion."
            video="/assets/Manual.mp4"
            variant="animation2"
          />

          <TrustedBySection />

          <TurningChaos
            title="Turning Chaos Into Clarity One Inventory at a Time."
            description="With Owners Inventory, everything you need—inventory, POS, e-commerce, customer management, and reporting—works together seamlessly in one place. Simplify your operations, reduce manual errors, and scale your business faster with a platform built to unify, automate, and grow alongside you."
          />

          <CaseStudies caseStudies={caseStudiesData} />


          <FeaturesTabSection/>

          <SmartWaytoSyncndSellSection />

          <UnifiedPlatform />

          <VoicesRealBusiness />
          
          <IndustryPOSShowcase />

          <PosIconsSection />

          <ToolsSection />

          <SmartTools />

          <InsightsSection />

          <FaqSection />

          <CalltoActionBottom />
      </div>
    </>
  );
}