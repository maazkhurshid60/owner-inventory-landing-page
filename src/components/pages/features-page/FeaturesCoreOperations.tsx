"use client";
import React from "react";
import FeatureMainCard from "./FeatureMainCard";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";

// Base features coming from backend (without class props)
const features = [
  {
    title: "Point of Sale (POS)",
    description: "Fast, reliable, and intuitive POS system for retail and quick sales.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/purchases.webm",
  },
  {
    title: "Products",
    description: "Manage product catalogs, variants, pricing, and stock in one place.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/products.webm",
  },
  {
    title: "Purchases",
    description: "Automate purchase orders, procurement and vendor management.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/purchases.webm",
  },
  {
    title: "Inventory Operations",
    description: "Track stock levels, transfers, and adjustments with real-time accuracy.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/inventory-operations.webm",
  },
  {
    title: "Sales & Orders",
    description: "Streamline your order processing, from quotation to fulfillment.",
    videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/sale-order.webm",
  },
];

const layoutClasses = [
  // First card - 8 columns (full height)
  {
    className: "col-span-12 xl:col-span-8 xl:row-span-2",
    mediaClassName: "h-[220px] lg:h-[330px] xl:h-[320px]",
    paddingClass: "px-[24px]",
    heightClass: "h-fit",
  },
  
  // Second card - 4 columns (shorter height)
  {
    className: "col-span-12 md:col-span-6 xl:col-span-4 xl:row-span-1",
    mediaClassName: "h-[220px] lg:h-[330px] xl:h-[194px]",
    paddingClass: "ps-[24px] pe-0",
    heightClass: "xl:h-fit",
  },

  // Third card - 4 columns (same height as first card)
  {
    className: "col-span-12 md:col-span-6 xl:col-span-4 xl:col-start-1 xl:row-start-3 xl:row-span-1",
    mediaClassName: "h-[220px] lg:h-[330px] xl:h-[204px]",
    heightClass: "xl:h-fit",
  },

  // Fourth card - 4 columns (same height as first card)
  {
    className: "col-span-12 md:col-span-6 xl:col-span-4 xl:col-start-5 xl:row-start-3 xl:row-span-1",
    mediaClassName: "h-[220px] lg:h-[310px] xl:h-[204px]",
    heightClass: "xl:h-fit",
  },

  // Fifth card - 4 columns (tallest height)
  {
    className: "col-span-12 md:col-span-6 xl:col-span-4 xl:col-start-9 xl:row-start-2 xl:row-span-2",
    mediaClassName: "h-[220px] lg:h-[330px] xl:h-[340px] scale-x-[1.05] scale-y-110 md:scale-110 lg:scale-x-135 lg:scale-y-110 xl:scale-100",
    paddingClass: "px-[24px] pt-4 xl:ps-[24px] pe-0",
    heightClass: "xl:h-fit",
  },
];

const defaultLayout = {
  className: "col-span-12 md:col-span-6 xl:col-span-4",
  mediaClassName: "h-[220px] lg:h-[330px] xl:h-[204px]",
  heightClass: "xl:h-fit",
};

const FeaturesCoreOperations: React.FC = () => {
  return (
    <section className="wrapper features-core-opretions">
      {/* Heading */}
      <div className="flex flex-col items-start justify-center lg:mt-[0px] md:mt-28 mt-20">
        <MainHeading className="lg:max-w-4xl xl:mb-10 lg:mb-6 mb-5">
          Core Business Operations
        </MainHeading>
        <Paragraph className="w-full max-w-[978px]">
          Take full control of your day-to-day operations with tools designed to
          keep your business running seamlessly
        </Paragraph>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 items-stretch xl:items-start gap-6 lg:mt-10 mt-10 xl:grid-rows-[auto_auto_auto]">
        {features.map((feature, i) => {
          const layout = layoutClasses[i] || defaultLayout;
          return <FeatureMainCard key={i} {...feature} {...layout} />;
        })}
      </div>
    </section>
  );
};

export default FeaturesCoreOperations;