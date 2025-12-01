"use client";
import React, { useState, useEffect } from "react";
import FeatureCard from "../FeatureCard";
import MainHeading from "../../typography/MainHeading";
import { ArrowDown } from "lucide-react";
import ButtonSm from "@/components/button/ButtonSm";

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
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Calculate visible features based on screen size and showAll state
  const getVisibleFeatures = () => {
    if (showAll) {
      return features;
    }
    return features.slice(0, isMobile ? 3 : 6);
  };

  const visibleFeatures = getVisibleFeatures();

  return (
    <section className="wrapper features-core-opretions">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center lg:mt-[10px] md:mt-28 mt-20">
        <MainHeading className="xl:mb-10 lg:mb-6 mb-5 text-center w-full">
          {heading}
        </MainHeading>
      </div>

      {/* Cards */}
      <div className="relative w-full">
        <div className="w-full absolute top-0 left-0 right-0 bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)] h-[163px]"></div>
      <div className="grid grid-cols-12 xl:auto-rows-auto items-stretch gap-6">
        {visibleFeatures.map((feature, i) => {
          const pattern = layoutPatterns[i % layoutPatterns.length];
          return <FeatureCard key={i} {...feature} {...pattern} />;
        })}
      </div>
      <div className="w-full absolute bottom-0 left-0 right-0  bg-[linear-gradient(0deg,#FFFFFF_5%,rgba(255,255,255,0)_100%)] h-[163px]"></div>
      </div>

      {/* See More/Less Button */}
      {(features.length > 6 || (isMobile && features.length > 3)) && (
        <div className="md:mt-7 mt-5 flex items-center justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-lg leading-[100%] font-medium font-onest text-[var(--text-grey)] flex gap-1 items-center justify-center cursor-pointer"
          >
            {showAll ? "View Less" : "View More"}
            <span>
              <ArrowDown size={24} />
            </span>
          </button>
        </div>
      )}
     <div className="md:mt-7 mt-5 flex items-center justify-center">
          <ButtonSm
                             url="#"
                             text="Get a Free Demo"
                             bgColor="[#1AD1B9]"
                             textColor="white"
                             isBorder
                           />
     </div>
    </section>
  );
};

export default KeyHighlights;