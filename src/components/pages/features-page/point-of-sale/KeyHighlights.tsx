"use client";
import React from "react";
import FeatureCard from "../FeatureCard";


const features = [
  {
    title: "Quick Billing & Checkout",
    description: "Process sales in seconds with barcode scanning, quick search, and easy product selection.",
    imageSrc:"/assets/point-of-sale/key-highlights/quick-billing.webp",
    className: "xl:col-span-4",
    mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
    paddingClass: "px-[24px]",   
   },
  {
    title: "Integrated with Inventory",
    description: "Automatic stock updates with every transaction—no more manual adjustments.",
    imageSrc:"/assets/point-of-sale/key-highlights/intigrated-with-inventory.webp",
    className: "xl:col-span-4 xl:row-span-2 xl:col-start-5 ",
    mediaClassName: "w-full h-[220px] xl:h-[320px] object-cover",
   
    
  },
  {
    title: "Multi-Store & Multi-Device Ready",
    description: "Manage product catalogs, variants, pricing, and stock in one place.",
   imageSrc:"/assets/point-of-sale/key-highlights/multi-store.webp",
    className: "xl:col-span-4 xl:col-start-9",
    mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
    
  },
  {
    title: "Offline Mode Support",
    description: "Continue selling even without internet; data syncs automatically when you’re back online.",
    imageSrc:"/assets/point-of-sale/key-highlights/offline-support.webp",
    className: "xl:col-span-4 xl:row-span-2 xl:col-start-1 xl:row-start-2",
    mediaClassName: "w-full h-[220px] xl:h-[320px] object-cover",
    
  },
  {
    title: "Flexible Payments",
    description: "Accept cash, cards, mobile wallets, and split payments—all in one system.",
    imageSrc:"/assets/point-of-sale/key-highlights/flexible-payments.webp",
    className: "xl:col-span-4 xl:col-start-5 xl:row-start-3",
    mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
    
  },
   {
    title: "Customer Engagement",
    description: "Build loyalty with discounts, promotions, and customer profiles directly from the POS.",
    imageSrc:"/assets/point-of-sale/key-highlights/customer-engagement.webp",
    className: "xl:col-span-4 xl:row-span-2 xl:col-start-9 xl:row-start-2",
    mediaClassName: "w-full h-[220px] xl:h-[320px] object-cover",
   
  },
];

const KeyHighlights: React.FC = () => {
  return (
    <section className="wrapper features-core-opretions">
      {/* Heading */}
      <div className="flex flex-col items-start justify-center lg:mt-[10px] md:mt-0 mt-20">
        <h1
          className="font-onest font-semibold text-[#231F20] text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl leading-9 sm:leading-[48px] lg:leading-[60px] xl:mb-10 lg:mb-6 mb-5 text-center w-full">
          Key Highlights
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-auto items-stretch gap-6">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default KeyHighlights;
