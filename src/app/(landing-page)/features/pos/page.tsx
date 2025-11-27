'use client'
import TrustedBySection from '@/components/common-components/TrustedBySection'
import FeaturesCallToAction from '@/components/pages/features-page/FeaturesCallToAction'
import FeaturesTestimonials from '@/components/pages/features-page/FeaturesTestimonials'
import KeyHighlights from '@/components/pages/features-page/point-of-sale/KeyHighlights'
import WhyChoosePOS from '@/components/pages/features-page/point-of-sale/WhyChoosePOS'
import SubFeaturesHero from '@/components/pages/features-page/SubFeaturesHero'
import CalltoActionBottom from '@/components/pages/landing-page/CalltoActionBottom'
import FaqSection from '@/components/pages/landing-page/FAQSection'
import HeroSection from '@/components/pages/landing-page/HeroSection'
import IndustryPOSShowcase from '@/components/pages/landing-page/IndustryPosShowcase'
import PinnedSection3 from '@/components/pages/landing-page/PinnedSection3'
import React from 'react'

const FeaturesCards = [
  {
    title: "Customer Management",
    description: "Switch to registered and walk-in customers easily to generate a seamless checkout experience. Our software point of sale allows you to monitor purchase history, loyalty points, and preferences to engage your customers better.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/quick-billing.webp",
  },
  {
    title: "Barcode & SKU Search",
    description: "Search products by barcode or SKU. Best point of sale systems make the process of scanning and lookup accurate, fast and reliable.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/intigrated-with-inventory.webp",
  },
  {
    title: "Product Selection Table",
    description: "Quickly add items to the sale with customizable quantity, discount, and price. The flexibility of this point of sales system allows you to make changes to transactions within seconds.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/multi-store.webp",
  },
  {
    title: "Category & Product Filters",
    description: "Use filters to browse products by name or category. You can save time on peak hours with our best point of sale software and maintain check out lines running smoothly.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/offline-support.webp",
  },
  {
    title: "Billing Summary",
    description: "Create automatic billing summaries with auto-calculated items, discounts, taxes, payable amounts, and customer change. Our point of sale systems minimize human error and enhance accuracy of transactions.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/flexible-payments.webp",
  },
  {
    title: "Stock Visibility",
    description: "Do not miss out on a sale because the stock is not there. The point of sale solution automatically shows the Out of Stock tags, which keeps real time inventory visible.",
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
          video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
          variant="animation2"
        />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection/>
      <KeyHighlights
        heading="Power-Packed Features at Your Fingertips"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      {/* <SellerClubSection2
        description="Our POS system helps you sell smarter..."
        highlight="complete control—integrated seamlessly with your business operations."
        buttonLabel="Book a Free Demo"
        buttonHref="/demo"
        imageSrc="/assets/features-page/point-of-sale/pos-image.webp"
      /> */}

      <WhyChoosePOS
        heading="Revolutionize Sales with Our Smarter POS"
        paragraph='Select the Owners Inventory POS because of reliability, efficiency, and innovativeness that help your business remain ahead of the curve. We do not simply assist you in selling, we assist you in being smarter, faster and more profitable.'
        cards={[
          { icon: "/assets/features-page/point-of-sale/why-chose/speed-accuracy.svg", title: "Fast & Flawless Transactions", description: "Sell processes in seconds, reduce mistakes, and ensure your checkout is fast and efficient." },
          { icon: "/assets/features-page/point-of-sale/why-chose/all-integration.svg", title: "Unified Business Control", description: "Operate POS, inventory, accounting, and reporting on one platform." },
          { icon: "/assets/features-page/point-of-sale/why-chose/scalable.svg", title: "Flexible & Scalable", description: "Our system scales with your business, no matter whether you have one store or a multi-location chain." },
          { icon: "/assets/features-page/point-of-sale/why-chose/smarter-decision.svg", title: "Insight-Driven Decisions", description: "Use real-time sales analytics and detailed reports to make smarter and data-driven business decisions." },
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />
      <div className="lg:mt-[100px] md:mt-28 mt-20">
      <IndustryPOSShowcase/>
      </div>
      <FeaturesCallToAction/>
      <FeaturesTestimonials/>
      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
      <FaqSection />
      </div >
    </div>
  )
}

export default page
