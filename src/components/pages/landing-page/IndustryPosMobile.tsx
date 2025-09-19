"use client";

import CustomSwiper from "@/components/slider/CustomSwiper";
import Image from "next/image";

const slides = [
  {
    title: "Retail Stores",
    desc: "Barcode scanning, price overrides, and detailed sales reports help you move faster at the counter while keeping inventory and revenue under control.",
    img: "/assets/industry-type/restaurant.webp",
  },
  {
    title: "Restaurant Types",
    desc: "Speed up service with quick-bill POS, manage tables and menus with ease, and track ingredients or stock levels in real-time.",
    img: "/assets/industry-type/restaurant.webp",
  },
  {
    title: "Wholesalers",
    desc: "Handle bulk orders with customer-specific pricing, manage multi-location inventory, and keep fulfillment running efficiently.",
    img: "/assets/industry-type/whole-sale.webp",
  },
  {
    title: "Pharmacies",
    desc: "Ensure safety and compliance with batch tracking, expiry alerts, and detailed logs, while managing walk-in sales and prescriptions.",
    img: "/assets/industry-type/pharmacy.webp",
  },
  {
    title: "Fashion & Apparel",
    desc: "Track every size, color, and style with product variants, manage seasonal collections, and keep stock aligned across stores.",
    img: "/assets/industry-type/fashion.webp",
  },
];

export default function IndustryPosMobile() {
  return (
    <section className="relative block md:hidden w-full min-h-[630px] py-10 px-6 mt-10 mx-auto rounded-2xl ownerinventory-landing__pos-buildingmobile">
      <CustomSwiper
        slides={slides}
        renderSlide={(slide) => (
          <div className="flex flex-col gap-4 pt-6 pb-16">
            <div className="flex flex-col items-start justify-start w-full md:max-w-[250px] lg:max-w-[361px] p-5 lg:p-6 xl:p-8 bg-white rounded-[30px] shadow-[0px_0px_20px_0px_#00000005]">
              <h4 className="text-xl lg:text-2xl text-left font-semibold text-[#231F20] font-onest mb-2 lg:mb-5">
                {slide.title}
              </h4>
              <p className="text-xs lg:text-base text-left font-normal text-[#231F20] font-onest">
                {slide.desc}
              </p>
            </div>
            <Image
              src={slide.img}
              width={437}
              height={437}
              alt={slide.title}
              className="rounded-[30px] h-[342px] md:w-[213px] md:h-[213px] lg:w-[380px] lg:h-[380px] xl:w-[437px] xl:h-[437px] object-cover"
            />
          </div>
        )}
      />
    </section>
  );
}
