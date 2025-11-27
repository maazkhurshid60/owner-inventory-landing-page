"use client";

import Image, { StaticImageData } from "next/image";
import MainHeading from "../../typography/MainHeading";
import Paragraph from "../../typography/Paragraph";

interface CardItem {
  icon: string | StaticImageData;
  title: string;
  description: string;
}

interface WhyChoosePOSProps {
  heading: string;
  paragraph?: string;
  cards: CardItem[];
  mainImage: string | StaticImageData;
}

export default function WhyChoosePOS({
  heading,
  paragraph,
  cards,
  mainImage,
}: WhyChoosePOSProps) {
  return (
    <section className="lg:mt-[100px] md:mt-28 mt-20">
      <div className="finance-reporting-shadow">
        <div className="wrapper">
          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center">
            <MainHeading className="mb-6 text-center">
              {heading}
            </MainHeading>
            <Paragraph className="mb-[60px] text-center max-w-4xl mx-auto">
              {paragraph}
            </Paragraph>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center gap-[60px]">
            {/* Cards Container */}
            <div className="xl:col-span-5 col-span-6 flex flex-col xl:gap-6 lg:gap-3 gap-5">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white xl:px-[30px] xl:py-6 px-4 py-4 flex flex-col md:flex-row items-start justify-start gap-[30px] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:translate-y-[-2px]"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-baseline xl:gap-4 gap-2 flex-1">
                    <h4 className="xl:text-2xl sm:text-xl text-base font-semibold text-[var(--text-dark)] font-onest leading-tight">
                      {card.title}
                    </h4>
                    <p className="xl:text-base text-sm leading-6 font-normal font-onest text-[var(--text-grey)]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Image Container */}
            <div className="xl:col-span-7 col-span-6">
              <div className="relative rounded-[20px] overflow-hidden shadow-lg">
                <Image
                  src={mainImage}
                  alt="Modern POS system interface showing sales analytics and transaction processing"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}