"use client";

import CustomSwiper from "@/components/slider/CustomSwiper";
import React from "react";
import FeatureCard from "./FeatureCard";
import FeaturesMainSwiper from "@/components/slider/FeaturesMainSwiper";

interface EmpoweredSectionProps {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    videoSrc: string;
    className?: string;
    mediaClassName?: string;
    paddingClass?: string;
    heightClass?: string;
  }[];
  wrapperClass?: string;
}

const EmpoweredSection: React.FC<EmpoweredSectionProps> = ({
  title,
  description,
  features,
  wrapperClass = "",
}) => {
  return (
    <section className={`${wrapperClass} lg:mx-10 lg:mt-[100px] md:mt-28 mt-20`}>
      <div className="wrapper flex flex-col items-center justify-center">
        <h1 className="font-onest font-semibold text-[#231F20] text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl leading-9 sm:leading-[48px] lg:leading-[60px] xl:mb-10 lg:mb-6 mb-5 text-center">
          {title}
        </h1>
        <p className="font-onest font-normal text-[#231F20] text-sm lg:text-lg xl:text-xl leading-6 lg:leading-7 text-center xl:leading-9 w-full max-w-[978px]">
          {description}
        </p>
      </div>

      <div className="wrapper ">
      <div className="mt-4 md:mt-12 lg:mt-20 relative flex self-stretch">
        <FeaturesMainSwiper
          slides={features}
          renderSlide={(card, i) => (
            <FeatureCard
              key={i}
              title={card.title}
              description={card.description}
              videoSrc={card.videoSrc}
              className={card.className}
              mediaClassName="w-full scale-x-110  h-[220px] rounded-tl-[20px] rounded-tr-[20px] "
              heightClass="h-full"
              paddingClass={card.paddingClass}
              buttonLabel="View Details"
              buttonHref="#"
            />
          )}
        />
      </div>
      </div>
    </section>
  );
};

export default EmpoweredSection;