"use client";
import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Point of Sale (POS)",
    description: "Fast, reliable, and intuitive POS system for retail and quick sales.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/purchases.webm",
    className: "col-span-12 xl:col-span-8 order-3 xl:order-1",
    videoClassName: "scale-110 h-[285px]",
    paddingClass: "px-[24px]",   
   },
  {
    title: "Products",
    description: "Manage product catalogs, variants, pricing, and stock in one place.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/products.webm",
    className: "col-span-12 md:col-span-6 xl:col-span-4 order-2",
    videoClassName: "scale-100 h-[220px] xl:h-[190px]",
    paddingClass: "ps-[24px] pe-0",
    
  },
  {
    title: "Purchases",
    description: "Automate purchase orders, procurement and vendor management.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/purchases.webm",
    className: "col-span-12 md:col-span-6 xl:col-span-4 order-2 xl:order-3",
    videoClassName: "scale-110 h-[220px]",
    
  },
  {
    title: "Inventory Operations",
    description: "Track stock levels, transfers, and adjustments with real-time accuracy.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/inventory-operations.webm",
    className: "col-span-12 md:col-span-6 xl:col-span-4 order-4",
    videoClassName: "scale-110 h-[220px]",
    
  },
  {
    title: "Sales & Orders",
    description: "Streamline your order processing, from quotation to fulfillment.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/sale-order.webm",
    className: "col-span-12 md:col-span-6 xl:col-span-4 xl:-mt-[70px] order-5",
    videoClassName: "h-[220px] xl:h-[290px]",
    paddingClass: "ps-[24px] pe-0",
  },
];

const FeaturesCoreOperations: React.FC = () => {
  return (
    <section className="wrapper features-core-opretions">
      {/* Heading */}
      <div className="flex flex-col items-start justify-center lg:mt-[10px] md:mt-28 mt-20">
        <h1 className="font-onest font-semibold text-[#231F20] text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl leading-9 sm:leading-[48px] lg:leading-[60px] lg:max-w-4xl xl:mb-10 lg:mb-6 mb-5">
          Core Business Operations
        </h1>
        <p className="font-onest font-normal text-[#231F20] text-sm lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 w-full max-w-[978px]">
          Take full control of your day-to-day operations with tools designed to
          keep your business running seamlessly
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6 lg:mt-20 mt-10">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesCoreOperations;
