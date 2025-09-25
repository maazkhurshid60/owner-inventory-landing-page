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
      className="md:max-w-[800px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1312px] hidden md:grid grid-cols-12 items-stretch justify-center relative xl:py-5 md:px-0 px-6 md:py-5 py-5 lg:mt-0 md:mt-6 mt-10 mx-auto rounded-2xl ownerinventory-landing__pos-buildingmobile"
      id="pos-images"
    >
      {/* Left Scrollable Image Row */}
      <div
        className="ownerinventory-landing__pos-buildingdesktop md:bg-[linear-gradient(180deg,_rgba(121,92,245,0.5)_0%,_rgba(26,209,185,0.4)_100%)] lg:col-span-8 md:col-span-7 col-span-12 overflow-hidden w-full lg:py-[20px] md:py-8 py-1 md:max-w-full max-w-[342px] mx-auto md:ps-10 xl:ps-[100px] md:order-1 order-2 rounded-bl-2xl rounded-tl-2xl relative"
      >
        {/* Glow Border Image */}
        <Image
          src="/assets/glow-border.png"
          alt="Glow Border"
          width={320}
          height={320}
          className="scrolling-images-pointer hidden md:block absolute z-10 md:w-[226px] md:h-[223px] lg:w-[270px] lg:h-[270px] 2xl:w-[320px] 2xl:h-[320px] md:right-[64px] lg:right-[263px] md:top-[58px] lg:top-[40px] xl:top-[40px] 2xl:top-[40px]"
        />

        <div className="smart-way-images flex items-center gap-8 w-full md:max-w-full max-w-[342px]">
          {[1, 2, 3, 4, 5].map((img, index) => (
            <Image
              key={index}
              src={`/assets/industry-type/${["retail-store","restaurant","whole-sale","pharmacy","fashion"][index]}.webp`}
              alt={`Industry ${index + 1}`}
              width={300}
              height={300}
              className="rounded-2xl h-[342px] md:w-[213px] md:h-[213px] lg:w-[250px] lg:h-[250px] 2xl:w-[300px] 2xl:h-[300px]"
            />
          ))}
        </div>
      </div>

      {/* Right Scrollable Card Column */}
      <div className="flex items-center justify-center lg:col-span-4 md:col-span-5 col-span-12 md:bg-[#F3F4F6] lg:py-[30px] md:py-14 py-2 xl:px-[60px] md:px-[30px] md:order-2 order-1 rounded-br-2xl rounded-tr-2xl">
        <div className="smart-way-cards-wrapper overflow-hidden">
          <div className="smart-way-cards flex flex-col gap-12 h-auto my-auto items-center m-auto max-h-44 md:max-h-[210px] lg:max-h-[290px] 2xl:max-h-[330px]">
            {industries.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-start justify-start w-full max-w-[342px] md:max-w-[250px] lg:max-w-[361px] p-5 ${
                  i === 0 ? "lg:p-5 2xl:p-8" : "lg:p-6 xl:p-8"
                } bg-white rounded-[30px] shadow-[0px_0px_20px_0px_#00000005]`}
              >
                <h4 className="text-xl lg:text-2xl text-left font-semibold text-[#231F20] font-onest mb-2 lg:mb-5">
                  {item.title}
                </h4>
                <p className="text-xs lg:text-base text-left font-normal text-[#231F20] font-onest">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
