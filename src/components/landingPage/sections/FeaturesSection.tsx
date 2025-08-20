"use client";
import { useState } from "react";
import Image from "next/image";
import '../../../app/globals.css'


const features = [
  {
    id: "inventorypos-system",
    title: "Smart POS system for modern retail",
    icon: "/assets/features-section/pos-system.svg",
    media: (
      <video
        className="w-full object-cover rounded-3xl"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/Manual.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    mobileImage: "/assets/sell-section-img.webp",
  },
  {
    id: "inventory-ecommerce",
    title: "Sell online with built-in, fully synced e-commerce",
    icon: "/assets/features-section/cart-icon.svg",
    media: (
      <Image
        src="/assets/features-section/testing.webp"
        alt="Ecommerce"
        width={800}
        height={470}
        className="w-full max-h-[470px] object-cover rounded-3xl"
      />
    ),
    mobileImage: "/assets/features-section/testing.webp",
  },
  {
    id: "inventory-management",
    title: "Inventory management to stay in control of every product",
    icon: "/assets/features-section/inventory-management.svg",
    media: (
      <Image
        src="/assets/sell-section-img.webp"
        alt="Inventory"
        width={800}
        height={470}
        className="w-full max-h-[470px] object-cover rounded-3xl"
      />
    ),
    mobileImage: "/assets/sell-section-img.webp",
  },
  {
    id: "inventory-autosync",
    title: "Smart analytics and reports to drive visibility and accountability",
    icon: "/assets/features-section/autosync.svg",
    media: (
      <Image
        src="/assets/features-section/testing.webp"
        alt="Auto Sync"
        width={800}
        height={470}
        className="w-full max-h-[470px] object-cover rounded-3xl"
      />
    ),
    mobileImage: "/assets/features-section/testing.webp",
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(features[0].id);

  return (
    <section className="mt-20 md:mt-28 lg:mt-40 py-10 md:py-10 xl:py-24 rounded-[40px] bg-[#231F20] px-6 md:px-10 xl:px-20 2xl:px-[100px]">
      <h1 className="text-4xl md:text-[44px] lg:text-[56px] xl:text-[64px] leading-[48px] md:leading-[56px] lg:leading-[60px] xl:leading-[76px] mb-10 md:mb-11 xl:mb-20 text-left font-semibold text-white max-w-[867px]">
        Powerful Features Built for Growing Businesses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-14 xl:gap-32 items-center">
        {/* IMAGE SECTION (Desktop Only) */}
        <div className="hidden md:flex flex-col gap-3">
          {features.map(
            (feature) =>
              active === feature.id && (
                <div key={feature.id} className="w-full">
                  {feature.media}
                </div>
              )
          )}
        </div>

        {/* FEATURES SECTION */}
        <div className="flex flex-col items-start justify-center gap-10 xl:gap-14 w-full">
          {features.map((feature) => (
            <div key={feature.id} className="w-full">
              <div
                onClick={() => setActive(feature.id)}
                className={`feature-tab flex items-center gap-4 xl:gap-6 cursor-pointer ${
                  active === feature.id ? "text-[#795CF5]" : "text-white"
                }`}
              >
                <div
                  className={`w-10 xl:w-11 p-2.5 flex items-center justify-center rounded-full ${
                    active === feature.id
                      ? "bg-[#795CF5]"
                      : " bg-[rgba(243,244,246,0.1)]"
                  }`}
                >
                  <Image
                    src={feature.icon}
                    alt="icon"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                    priority
                  />
                </div>
                <span
                  className={`text-base xl:text-xl font-semibold xl:leading-9 ${
                    active === feature.id
                      ? "text-[#795CF5]"
                      : "text-white hover:text-[#795CF5]"
                  }`}
                >
                  {feature.title}
                </span>
              </div>

              {/* Progress Bar */}
              <div className={ `w-full h-1 xl:h-1.5 mt-5 xl:mt-7 rounded-2xl bg-[rgba(243,244,246,0.1)] overflow-hidden  ${
                    active === feature.id ? "" : "hidden"
                  }`}>
                <div
                  className={`transition-all duration-300 h-full ${
                    active === feature.id ? "w-[25%] bg-[#F3F4F6]" : "hidden w-0"
                  }`}
                />
              </div>

              {/* Mobile Image */}
              <div className={`transition-all duration-300 h-full ${
                    active === feature.id ? "md:hidden mt-5" : "hidden mt-5"
                  }`}>
                <Image
                  src={feature.mobileImage}
                  alt="Mobile"
                  width={800}
                  height={470}
                  className="w-full max-h-[470px] object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
