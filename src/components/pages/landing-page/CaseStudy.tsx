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
        <div className="flex justify-between items-end mb-[50px]">
          <MainHeading className="w-full max-w-[60%] gradient-text">
            Businesses Thriving with Owners Inventory
          </MainHeading>
          <ButtonOutline
            url="#"
            text="Get Started for Free"
            borderColor="[#795CF5]"
            textColor="white"
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-2xl font-[200] leading-[100%] text-[#666666]">
              Case Study:
            </h3>
          </div>
          <div className="flex justify-end items-center gap-2 mb-[10px]">
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
              className="h-full grid grid-cols-12 gap-5 justify-center items-center"
            >
              {/* Header */}
              <div className="p-2 col-span-8 relative z-[10]">
                <MainHeading>{study.title}</MainHeading>
                <div className="flex flex-col items-end">
                  <div className="bg-[#F3F4F6] rounded-l-[28px] rounded-tr-[28px] p-6">
                    <p className="text-[#666666] font-onest text-[32px] leading-[52px]">
                      {study.overview}
                    </p>
                  </div>
                  <div className="flex justify-between items-stretch gap-x-6 w-full">
                    <div className="mt-2 flex items-center justify-center">
                      <ButtonSm
                        url="#"
                        text={study.ctaText}
                        bgColor="[#795CF5]"
                        textColor="white"
                        isBorder
                        icon={<ArrowUpRight size={18} />}
                      />
                    </div>
                    <div className="relative flex bg-[#F3F4F6] w-full max-w-[75%] rounded-b-[28px] ">
                      <div className="absolute z-[-100] left-[-5.7rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] rotate-180 shadow-[0_2.5rem_0_0_#f3f4f6]" />
                    </div>
                    {/* CTA Button */}
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="col-span-4">
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
                      <p className="font-semibold text-[38px] font-onest  leading-[100%] text-[#231F20]">
                        {study.author}
                      </p>
                      <p className="px-4 py-2 text-[#795CF5] w-fit bg-[#F1EEFE] rounded-full">
                        {study.position}
                      </p>
                    </div>
                  </div>

                  <div
                    className="bg-contain bg-center bg-no-repeat min-h-[497px]"
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
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-[#231F20] p-6 italic text-lg leading-relaxed absolute bottom-0 bg-[#FFF7D7] rounded-xl border-[5px] border-white">
                    "{study.quote}"
                  </p>
                </div>

                {/* Author */}
                {/* <div className="text-right">
                
                </div> */}
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
