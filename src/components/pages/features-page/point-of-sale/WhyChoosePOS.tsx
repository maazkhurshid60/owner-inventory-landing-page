"use client";

import Image from "next/image";
import MainHeading from "../../typography/MainHeading";
import Paragraph from "../../typography/Paragraph";

interface CardItem {
  icon: string;
  title: string;
  description: string;
}

interface WhyChoosePOSProps {
  heading: string;
  paragraph: string;
  cards: CardItem[];
  mainImage: string;
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
          {/* Heading */}
          <div className="flex flex-col items-center justify-center">
            <MainHeading className="mb-6 text-center">
              {heading}
            </MainHeading>
            <Paragraph className="mb-[60px] text-center">
              {paragraph}
            </Paragraph>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center gap-[60px]">
            {/* Cards Section */}
            <div className="xl:col-span-5 col-span-6 flex flex-col xl:gap-6 lg:gap-3 gap-5">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white xl:px-[30px] xl:py-6 px-4 py-4 flex flex-col md:flex-row items-start justify-start gap-[30px] rounded-[20px]"
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col items-start justify-baseline xl:gap-4 gap-2">
                    <h4 className="xl:text-2xl sm:text-xl text-base font-semibold text-[var(--text-dark)] font-onest">
                      {card.title}
                    </h4>
                    <p className="xl:text-base leading-6 font-normal font-onest text-[var(--text-grey)]">
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
