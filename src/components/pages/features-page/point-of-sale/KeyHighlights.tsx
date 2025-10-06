"use client";
import React from "react";
import FeatureCard from "../FeatureCard";

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
}

interface LayoutPattern {
  className?: string;
  mediaClassName?: string;
  paddingClass?: string;
}

interface KeyHighlightsProps {
  heading?: string;
  features: Feature[];
  layoutPatterns: LayoutPattern[];
}

const KeyHighlights: React.FC<KeyHighlightsProps> = ({
  heading = "Key Highlights",
  features,
  layoutPatterns,
}) => {
  return (
    <section className="wrapper features-core-opretions">
      {/* Heading */}
      <div className="flex flex-col items-start justify-center lg:mt-[10px] md:mt-28 mt-20">
        <h1 className="font-onest font-semibold text-[#231F20] text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl leading-9 sm:leading-[48px] lg:leading-[60px] xl:mb-10 lg:mb-6 mb-5 text-center w-full">
          {heading}
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-auto items-stretch gap-6">
        {features.map((feature, i) => {
          const pattern = layoutPatterns[i % layoutPatterns.length];
          return <FeatureCard key={i} {...feature} {...pattern} />;
        })}
      </div>
    </section>
  );
};

export default KeyHighlights;
