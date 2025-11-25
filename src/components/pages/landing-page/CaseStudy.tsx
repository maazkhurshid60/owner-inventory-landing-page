// components/CaseStudies.tsx
"use client";

import { useState } from "react";
import MainHeading from "../typography/MainHeading";
import ButtonOutline from "@/components/button/ButtonOutline";
import CardHeading from "../typography/CardHeading";
import Image from "next/image";
import ButtonSm from "@/components/button/ButtonSm";
import { ArrowUpRight } from "lucide-react";

export interface CaseStudy {
  id: string;
  title: string;
  overview: string;
  quote: string;
  image: string;
  author: string;
  backgroundImage: string;
  position: string;
  ctaText: string;
}

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesPerView = 1;
  const totalSlides = Math.ceil(caseStudies.length / slidesPerView);

  const currentStudies = caseStudies.slice(
    currentSlide * slidesPerView,
    (currentSlide + 1) * slidesPerView
  );

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
  };

  return (
    <div className="wrapper">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-x-3 items-end mb-6 lg:mb-[50px]">
          <MainHeading className="w-full max-w-full md:max-w-[65%] lg:max-w-[60%] gradient-text">
            Businesses Thriving with Owners Inventory
          </MainHeading>
          <div className="hidden md:flex">
            <ButtonOutline
              url="#"
              text="View All Case Studies"
              borderColor="[#795CF5]"
              textColor="white"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-2xl font-[200] leading-[100%] text-[var(--text-grey)]">
              Case Study:
            </h3>
          </div>
          <div className="hidden md:flex justify-end items-center gap-2 mb-6 lg:mb-[10px]">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] border transition-colors ${
                currentSlide === 0
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
              aria-label="Previous slide"
            >
              <Image
                src="/assets/home-page-images/slider-arrow-left.svg"
                alt="arrow-right"
                width={800}
                height={600}
                loading="lazy"
                className="w-[20px] h-[20px]"
              />
            </button>

            {/* Bullets */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "w-[34px] h-[15px] bg-[rgba(26,209,185,1)] rounded-[60px]"
                      : "w-[16px] h-[15px] bg-[rgba(243,244,246,1)] rounded-[60px]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`p-2 rounded-full border shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-colors ${
                currentSlide === totalSlides - 1
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
              aria-label="Next slide"
            >
              <Image
                src="/assets/home-page-images/slider-arrow-right.svg"
                alt="arrow-right"
                width={800}
                height={600}
                loading="lazy"
                className="w-[20px] h-[20px]"
              />
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-6 mb-8">
          {currentStudies.map((study) => (
            <div
              key={study.id}
              className="h-full grid grid-col-1 md:grid-cols-12 gap-y-8 md:gap-x-5 justify-center items-center"
            >
              {/* Header */}
              <div className="px-0 py-2 lg:p-2  md:col-span-6 lg:col-span-7 xl:col-span-8 relative z-[10]">
                <MainHeading className="mb-6">{study.title}</MainHeading>
                <div className="flex flex-col items-end">
                  <div className="bg-[var(--background-halfwhite)] rounded-l-[20px] rounded-tr-[20px] lg:rounded-l-[28px] lg:rounded-tr-[28px] p-6">
                    <p className="text-[var(--text-grey)] font-onest text-2xl leading-[165%] lg:text-[32px] lg:leading-[52px]">
                      {study.overview}
                    </p>
                  </div>
                  <div className="flex justify-between items-stretch gap-x-4 w-full">
                    <div className="flex items-center justify-center mt-4 w-full lg:max-w-[40%] xl:max-w-[30%] 2xl:max-w-[25%]">
                      <ButtonSm
                        url="#"
                        text={study.ctaText}
                        bgColor="[#795CF5]"
                        textColor="white"
                        isBorder
                        icon={<ArrowUpRight size={18} />}
                      />
                    </div>
                    <div className="relative flex bg-[var(--background-halfwhite)] w-full lg:max-w-[60%] xl:max-w-[70%] 2xl:max-w-[73%] lg:rounded-b-[28px] rounded-b-[20px] ">
                      <div className="absolute z-[-100] left-[-5.4rem] md:left-[-5.8rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] rotate-180 shadow-[0_2.5rem_0_0_#f3f4f6]" />
                    </div>
                    {/* CTA Button */}
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="md:col-span-6 lg:col-span-5 xl:col-span-4">
                <div className="relative ">
                  <div className="flex items-center gap-x-6">
                    <Image
                      src="/assets/home-page-images/blue-checker.svg"
                      alt="arrow-right"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-[36px] h-[33px]"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-[38px] font-onest  leading-[100%] text-[[var(--text-dark)]]">
                        {study.author}
                      </p>
                      <p className="px-4 py-2 text-[var(--primary-purple)] w-fit bg-[#F1EEFE] rounded-full">
                        {study.position}
                      </p>
                    </div>
                  </div>

                  <div
                    className="bg-contain bg-center bg-no-repeat min-h-[600px]"
                    style={{
                      backgroundImage: `url(${study.backgroundImage})`,
                    }}
                  >
                    <Image
                      src={study.image}
                      alt="arrow-right"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[[var(--text-dark)]] p-4 lg:p-6 italic text-lg leading-relaxed absolute bottom-0 bg-[#FFF7D7] rounded-xl border-[5px] border-white">
                    “{study.quote}”
                  </p>
                </div>

                {/* Author */}
                {/* <div className="text-right">
                
                </div> */}
              </div>


               <div className="md:hidden flex justify-center items-center gap-2 lg:mb-[10px]">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] border transition-colors ${
                currentSlide === 0
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
              aria-label="Previous slide"
            >
              <Image
                src="/assets/home-page-images/slider-arrow-left.svg"
                alt="arrow-right"
                width={800}
                height={600}
                loading="lazy"
                className="w-[20px] h-[20px]"
              />
            </button>

            {/* Bullets */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "w-[34px] h-[15px] bg-[rgba(26,209,185,1)] rounded-[60px]"
                      : "w-[16px] h-[15px] bg-[rgba(243,244,246,1)] rounded-[60px]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`p-2 rounded-full border shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-colors ${
                currentSlide === totalSlides - 1
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
              aria-label="Next slide"
            >
              <Image
                src="/assets/home-page-images/slider-arrow-right.svg"
                alt="arrow-right"
                width={800}
                height={600}
                loading="lazy"
                className="w-[20px] h-[20px]"
              />
            </button>
          </div>

              <div className="md:hidden justify-center items-center mt-0 flex">
                <ButtonOutline
                  url="#"
                  text="View All Case Studies"
                  borderColor="[#795CF5]"
                  textColor="white"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicator */}
        {/* <div className="text-center text-gray-500 text-sm">
          Showing {currentSlide * slidesPerView + 1}-
          {Math.min((currentSlide + 1) * slidesPerView, caseStudies.length)} of{" "}
          {caseStudies.length} case studies
        </div> */}
      </div>
    </div>
  );
}
