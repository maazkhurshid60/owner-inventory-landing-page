"use client";
import Image from "next/image";
import MainHeading from "../pages/typography/MainHeading";
import BrandsSwiper from "../slider/BrandsSwiper";

const brands = [
  { id: 1, name: "ASK Food Industries", logo: "/assets/brands-logo-section/ask-food.webp" },
  { id: 2, name: "Industrial Valco", logo: "/assets/brands-logo-section/industrial-valco.webp" },
  { id: 3, name: "Texas Pipe & Supply", logo: "/assets/brands-logo-section/texas-pipe.webp" },
  { id: 4, name: "Al-Asif", logo: "/assets/brands-logo-section/al-asif.webp" },
 { id: 5, name: "Sportifi", logo: "/assets/brands-logo-section/sportifi.webp" },
];


const TrustedBySection = () => {
  return (
    <section className="mt-28 md:mt-40 lg:mt-0 mb-28 md:mb-40 lg:mb-[100px]">
      <div className="wrapper bg-white text-center">
        <MainHeading className="xl:mb-12 lg:mb-6 mb-5">
          Preferred to businesses who demand precision and performance
        </MainHeading>

        <BrandsSwiper
          slides={brands}
          renderSlide={(brandItem) => (
            <div className="flex items-center justify-center relative z-20 rounded-0 p-4 ">
              <Image
                src={brandItem.logo}
                alt={brandItem.name}
                width={160}
                height={80}
                className="object-cover w-full"
              />
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default TrustedBySection;
