"use client";
import Image from "next/image";
import React from "react";

const industries = [
  {
    title: "Retail Stores",
    description:
      "Barcode scanning, price overrides, and detailed sales reports help you move faster at the counter while keeping inventory and revenue under control, perfect for convenience stores, electronics, cosmetics, and more.",
  },
  {
    title: "Restaurant Types",
    description:
      "Speed up service with quick-bill POS, manage tables and menus with ease, and track ingredients or stock levels in real-time — ensuring smooth operations from kitchen to counter.",
  },
  {
    title: "Wholesalers",
    description:
      "Handle bulk orders with customer-specific pricing, manage multi-location inventory, and keep fulfillment running efficiently with a system built for volume.",
  },
  {
    title: "Pharmacies",
    description:
      "Ensure safety and compliance with batch tracking, expiry alerts, and detailed logs, all while managing walk-in sales and digital prescriptions effortlessly.",
  },
  {
    title: "Fashion & Apparel",
    description:
      "Track every size, color, and style with product variants, manage seasonal collections, and keep stock aligned across online and physical stores, whether you sell streetwear, shoes, or high fashion.",
  },
];

export default function IndustryPOSShowcase() {
  return (
   <section
  className="
    grid grid-cols-12 items-stretch justify-center relative md:px-0 py-5 md:py-14 mt-10 md:mt-14 lg:mt-20 mx-auto sm:mx-0
    bg-[linear-gradient(180deg,_rgba(121,92,245,0.5)_0%,_rgba(26,209,185,0.4)_100%)]
    md:bg-none
  "
>
  {/* Left Scrollable Image Row */}
 <div
  className="
    col-span-12 md:col-span-7 lg:col-span-8 overflow-x-auto w-[70%] md:w-full py-8 lg:py-[60px] md:ps-10 xl:ps-[100px] order-2 md:order-1
    bg-transparent md:bg-[linear-gradient(180deg,_rgba(121,92,245,0.5)_0%,_rgba(26,209,185,0.4)_100%)] mx-auto md:mx-0
  "
>
  <div className="
    flex items-center gap-8
    mx-auto w-max
    md:translate-x-[30%] lg:translate-x-[20%] xl:translate-x-[20%]
    md:mx-0
  ">

      {[1, 2, 3, 4].map((img, index) => (
       <Image
  key={index}
  src="/assets/features-section/testing.webp"
  alt={`Feature Image ${index + 1}`}
  width={427}
  height={427}
  className="
   rounded-2xl w-[250px] h-[240px] md:w-[213px] md:h-[213px] lg:w-[380px] lg:h-[380px] xl:w-[437px] xl:h-[437px]
    transition-all duration-300 ease-in-out
  "
/>

      ))}
      {/* Glow Border Image (Desktop Only) */}
      <div className="absolute pointer-events-none hidden md:block md:-left-3.5 lg:-left-7">
        <Image
          src="/assets/glow-border.webp"
          alt="Glow Border"
          width={500}
          height={497}
          className="w-[240px] h-[240px] lg:w-[440px] lg:h-[440px] xl:w-[500px] xl:h-[497px]"
        />
      </div>
    </div>
  </div>

  {/* Right Scrollable Card Column */}
  <div
    className="
      col-span-12 md:col-span-5 lg:col-span-4 md:py-24 px-6 md:ps-[30px] md:pe-[40px] xl:ps-[60px] xl:pe-[100px] order-1 md:order-2
      bg-transparent md:bg-[#F3F4F6]
    "
  >
    <div className="flex flex-col gap-12 max-h-44 md:max-h-[210px] lg:max-h-[330px] overflow-y-auto items-center">
      {industries.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-start w-full max-w-[342px] md:max-w-[250px] lg:max-w-[361px] p-5 lg:p-6 xl:p-8 bg-white rounded-[30px] shadow-[0_0_20px_0_#00000005]"
        >
          <h4 className="text-xl lg:text-2xl font-semibold text-[#231F20] mb-2 lg:mb-5">{item.title}</h4>
          <p className="text-xs lg:text-base text-[#231F20]">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
