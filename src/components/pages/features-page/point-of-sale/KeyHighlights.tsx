"use client";
import React from "react";
import FeatureCard from "../FeatureCard";
import MainHeading from "../../typography/MainHeading";



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
        <MainHeading className="xl:mb-10 lg:mb-6 mb-5 text-center w-full">
          {heading}
        </MainHeading>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 xl:auto-rows-auto items-stretch gap-6">
        {features.map((feature, i) => {
          const pattern = layoutPatterns[i % layoutPatterns.length];
          return <FeatureCard key={i} {...feature} {...pattern} />;
        })}
      </div>
    </section>
  );
};

export default KeyHighlights;
