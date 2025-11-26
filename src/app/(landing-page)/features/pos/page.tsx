'use client'
import TrustedBySection from '@/components/common-components/TrustedBySection'
import KeyHighlights from '@/components/pages/features-page/point-of-sale/KeyHighlights'
import SellerClubSection2 from '@/components/pages/features-page/point-of-sale/SellerClubSection2'
import WhyChoosePOS from '@/components/pages/features-page/point-of-sale/WhyChoosePOS'
import SubFeaturesHero from '@/components/pages/features-page/SubFeaturesHero'
import CalltoActionBottom from '@/components/pages/landing-page/CalltoActionBottom'
import FaqSection from '@/components/pages/landing-page/FAQSection'
import HeroSection from '@/components/pages/landing-page/HeroSection'
import PinnedSection3 from '@/components/pages/landing-page/PinnedSection3'
import React from 'react'

const FeaturesCards = [
  {
    title: "Quick Billing & Checkout",
    description: "Process sales in seconds with barcode scanning, quick search, and easy product selection.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/quick-billing.webp",
  },
  {
    title: "Integrated with Inventory",
    description: "Automatic stock updates with every transaction—no more manual adjustments.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/intigrated-with-inventory.webp",
  },
  {
    title: "Multi-Store & Multi-Device Ready",
    description: "Manage product catalogs, variants, pricing, and stock in one place.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/multi-store.webp",
  },
  {
    title: "Offline Mode Support",
    description: "Continue selling even without internet; data syncs automatically when you’re back online.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/offline-support.webp",
  },
  {
    title: "Flexible Payments",
    description: "Accept cash, cards, mobile wallets, and split payments—all in one system.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/flexible-payments.webp",
  },
  {
    title: "Customer Engagement",
    description: "Build loyalty with discounts, promotions, and customer profiles directly from the POS.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/customer-engagement.webp",
  },
  {
    title: "Quick Billing & Checkout",
    description: "Process sales in seconds with barcode scanning, quick search, and easy product selection.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/quick-billing.webp",
  },
  {
    title: "Integrated with Inventory",
    description: "Automatic stock updates with every transaction—no more manual adjustments.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/intigrated-with-inventory.webp",
  },
  {
    title: "Multi-Store & Multi-Device Ready",
    description: "Manage product catalogs, variants, pricing, and stock in one place.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/multi-store.webp",
  },
  {
    title: "Offline Mode Support",
    description: "Continue selling even without internet; data syncs automatically when you’re back online.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/offline-support.webp",
  },
  {
    title: "Flexible Payments",
    description: "Accept cash, cards, mobile wallets, and split payments—all in one system.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/flexible-payments.webp",
  },
  {
    title: "Customer Engagement",
    description: "Build loyalty with discounts, promotions, and customer profiles directly from the POS.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/customer-engagement.webp",
  },
];

const layoutPatterns = [
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
];
const page = () => {
  return (
    <div>
       <SubFeaturesHero
          title="Empower Your Business with POS"
          description="Sell smarter with our POS system. Intended to be fast, accurate, and the best point of sale, it simplifies all transactions, operates inventory in real-time, and provides you with complete control over your business, all through a simple, easy-to-use interface."
          video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos_system-hero.webm"
          variant="animation2"
        />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection/>
      <KeyHighlights
        heading="Power-Packed Features at Your Fingertips"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <PinnedSection3 />

      <SellerClubSection2
        description="Our POS system helps you sell smarter..."
        highlight="complete control—integrated seamlessly with your business operations."
        buttonLabel="Book a Free Demo"
        buttonHref="/demo"
        imageSrc="/assets/features-page/point-of-sale/pos-image.webp"
      />

      <WhyChoosePOS
        heading="Why Choose Our POS?"
        cards={[
          { icon: "/assets/features-page/point-of-sale/why-chose/speed-accuracy.svg", title: "Speed + Accuracy", description: "Reduce checkout time, avoid errors." },
          { icon: "/assets/features-page/point-of-sale/why-chose/all-integration.svg", title: "All-in-One Integration", description: "POS, inventory, accounting, and reporting in one place." },
          { icon: "/assets/features-page/point-of-sale/why-chose/scalable.svg", title: "Scalable", description: "Works for a single shop or a chain of stores." },
          { icon: "/assets/features-page/point-of-sale/why-chose/smarter-decision.svg", title: "Smarter Decisions", description: "Built-in sales analytics and reporting to track performance." },
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <FaqSection />
      <CalltoActionBottom />
    </div>
  )
}

export default page
