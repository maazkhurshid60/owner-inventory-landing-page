"use client";
// src/components/Hero.tsx
import React, { useEffect } from "react";
import Image from "next/image";

import CalltoActionBottom from "./CalltoActionBottom";
import FeaturesSection from "./FeaturesSection";
import UnifiedPlatform from "./UnifiedPlatform";
import PosIconsSection from "./Smartway";
import ReviewSection from "./Testimonials";
import SellerClubSection from "./SellerClubSection";
import FlexiblePricingSection from "./FlexiblePricingSection";
import InsightsSection from "./InsightsSection";
import FaqSection from "./FAQSection";
import SmartWaytoSyncndSellSection from "./SmartWaytoSyncndSellSection";
import PinnedSection3 from "./PinnedSection3";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import HeroSection2 from "@/components/common-components/HeroSection2";
import TrustedBySection from "@/components/common-components/TrustedBySection";
import TurningChaos from "./TurningChaos";
import CaseStudies from "./CaseStudy";
import VoicesRealBusiness from "./VoicesRealBusiness";
import ToolsSection from "./ToolsSection";
import SmartTools from "./SmartTools";
import SmartSellSection from "./SmartSell";
import IndustryPOSShowcase from "./IndustryPosShowcase";

const caseStudiesData = [
  {
    id: "1",
    title: "Al-Asif",
    overview:
      "We helped Al-Asif optimize operations by integrating sales, inventory, and finance into a unified POS system. The solution automated billing, enabled real-time stock tracking, and enhanced profit visibility—empowering the team to make faster, data-driven decisions and operate more efficiently.",
    quote:
      "Owners Inventory completely transformed our retail operations. Real-time sync keeps all locations updated and minimizes stock errors. The dashboards give clear sales insights, and automation saves us hours every week — it’s like having a full operations team in one system.",
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

export default function Hero() {
  useEffect(() => {
    // keep user at top on mount; restore manual behavior
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
        <FeaturesSection />

        <SmartWaytoSyncndSellSection />
        <UnifiedPlatform />
        <VoicesRealBusiness />
        {/* <SmartSellSection/> */}
        < IndustryPOSShowcase/>
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
