import BrandsSwiper from "@/components/slider/BrandsSwiper";
import MainHeading from "../typography/MainHeading";
import Image from "next/image";

const otherBrands = [
  {
    id: 1,
    name: "ASK Food Industries",
    logo: "/assets/home-page-images/voices-icons/captera-logo.svg",
  },
  {
    id: 2,
    name: "Industrial Valco",
    logo: "/assets/home-page-images/voices-icons/getapp-logo.svg",
  },
  {
    id: 3,
    name: "Texas Pipe & Supply",
    logo: "/assets/home-page-images/voices-icons/trust-pilot-logo.svg",
  },
  {
    id: 4,
    name: "Al-Asif",
    logo: "/assets/home-page-images/voices-icons/captera-logo.svg",
  },
  {
    id: 5,
    name: "ASK Food Industries",
    logo: "/assets/home-page-images/voices-icons/getapp-logo.svg",
  },
  {
    id: 6,
    name: "Texas Pipe & Supply",
    logo: "/assets/home-page-images/voices-icons/trust-pilot-logo.svg",
  },
];

const VoicesRealBusiness = () => {
  return (
    <section
      className="mt-28 md:mt-40 lg:mt-[100px] py-8 lg:py-[60px] mb-28 md:mb-40 lg:mb-[100px]"
      style={{
        backgroundImage: `
    linear-gradient(180deg, #F3F4F6 0%, transparent 0%),
    linear-gradient(90deg, rgba(26, 209, 185, 0.3) 0%,  rgba(158, 2, 255, 0.2) 100%)
  `,
      }}
    >
      <div className="wrapper text-center">
        <MainHeading className="xl:mb-12 lg:mb-6 mb-5">
          Voices of Real Businesses
        </MainHeading>

        <BrandsSwiper
          slides={otherBrands}
          renderSlide={(brandItem) => (
            <div className="relative z-[10] bg-white py-4 lg:px-[68px] my-10 rounded-2xl 
      border border-[#666666]/40 flex justify-center items-center">
              <Image
                src={brandItem.logo}
                alt={brandItem.name}
                width={160}
                height={80}
                className="object-contain w-full h-[60px]"
              />

              <Image
                src="/assets/home-page-images/voices-icons/stars-icons.svg"
                width={158}
                height={57}
                alt="Yellow Stars"
                loading="lazy"
                className="absolute bottom-[-24px] lg:bottom-[-40px] -xl:bottom-10 left-1/2 -translate-x-1/2
         w-full xl:max-w-[202px] lg:max-w-[180px] lg:py-2 max-w-[133px] lg:px-3 py-0 px-0 rounded-2xl"
              />
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default VoicesRealBusiness;
