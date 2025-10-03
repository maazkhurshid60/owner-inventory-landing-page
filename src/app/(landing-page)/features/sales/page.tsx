'use client'
import KeyHighlights from '@/components/pages/features-page/point-of-sale/KeyHighlights'
import SellerClubSection2 from '@/components/pages/features-page/point-of-sale/SellerClubSection2'
import WhyChoosePOS from '@/components/pages/features-page/point-of-sale/WhyChoosePOS'
import CalltoActionBottom from '@/components/pages/landing-page/CalltoActionBottom'
import FaqSection from '@/components/pages/landing-page/FAQSection'
import HeroSection from '@/components/pages/landing-page/HeroSection'
import PinnedSection3 from '@/components/pages/landing-page/PinnedSection3'
import React from 'react'

const FeaturesCards = [
  {
    title: "Quotations",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc: "/assets/features-page/sales-order/key-highlights/quotations.webp",
  },
  {
    title: "Sales Orders",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc: "/assets/features-page/sales-order/key-highlights/sales-order.webp",
  },
  {
    title: "Invoices",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc: "/assets/features-page/sales-order/key-highlights/invoices.webp",
  },
  
];

const layoutPatterns = [
  { className: "xl:col-span-4", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "xl:col-span-4 xl:row-span-2 xl:col-start-5", mediaClassName: "w-full h-[220px] xl:h-[320px] object-cover", paddingClass: "px-0" },
  { className: "xl:col-span-4 xl:col-start-9", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "xl:col-span-4 xl:row-span-2 xl:col-start-1 xl:row-start-2", mediaClassName: "w-full h-[220px] xl:h-[320px] object-cover", paddingClass: "px-0" },
  { className: "xl:col-span-4 xl:col-start-5 xl:row-start-3", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "xl:col-span-4 xl:row-span-2 xl:col-start-9 xl:row-start-2", mediaClassName: "w-full h-[220px] xl:h-[320px] object-cover", paddingClass: "px-0" },
];

const page = () => {
  return (
    <div>
      <HeroSection
        title="Sales & Orders – Simplify Your Selling Process"
        description="Take full control of your sales cycle with smart tools that handle everything from quotations to invoices. Our Sales & Orders module ensures faster deals, accurate billing, and real-time integration with inventory and accounts—so your business runs seamlessly from inquiry to payment."
        video='https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/main-feature.webm'
        showButtons={false}
      />

      <KeyHighlights
        heading="Key Highlights"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <SellerClubSection2
        description="Manage quotations, orders, and invoices in one place—speeding up "
        highlight="your sales cycle while keeping accuracy at its peak."
        buttonLabel="Request a Demo"
        buttonHref="/demo"
        imageSrc="/assets/features-page/sales-order/sales-order-banner.webp"
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
