"use client";

import Image from "next/image";

interface CardItem {
  icon: string;
  title: string;
  description: string;
}

interface WhyChoosePOSProps {
  heading: string;
  cards: CardItem[];
  mainImage: string;
}

export default function WhyChoosePOS({
  heading,
  cards,
  mainImage,
}: WhyChoosePOSProps) {
  return (
    <section className="lg:mt-40 md:mt-28 mt-20">
      <div className="finance-reporting-shadow">
        <div className="wrapper">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-onest font-semibold text-[#231F20] text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl leading-9 sm:leading-[48px] lg:leading-[60px] xl:mb-10 lg:mb-6 mb-5 text-center">
              {heading}
            </h1>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center gap-[60px]">
            {/* Cards Section */}
            <div className="xl:col-span-5 col-span-6 flex flex-col xl:gap-6 lg:gap-3 gap-5">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white xl:px-[30px] xl:py-6 px-4 py-4 flex items-center justify-start gap-[30px] rounded-[20px]"
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col xl:gap-4 gap-2">
                    <h4 className="xl:text-2xl sm:text-xl text-base font-semibold text-[#231F20] font-onest">
                      {card.title}
                    </h4>
                    <p className="xl:text-base text-sm font-normal font-onest text-[#231F20]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side Main Image */}
            <div className="xl:col-span-7 col-span-6">
              <Image
                src={mainImage}
                alt="POS main image"
                width={800}
                height={600}
                className="w-full rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
