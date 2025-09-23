"use client";
import React from "react";
import Link from "next/link";

interface FeatureCard2Props {
  title: string;
  description: string;
  videoSrc: string;
  buttonLabel: string;
  buttonHref: string;
  buttonColor: string;
  index: number;
  containerWidth?: string;
  containerHeight?: string;
  containerBorderColor?: string;
  containerBackgroundColor?: string;
  containerShadow?: boolean;
  scale?: number;
}

const FeatureCard2: React.FC<FeatureCard2Props> = ({
  title,
  description,
  videoSrc,
  buttonLabel,
  buttonHref,
  buttonColor,
  index,
  containerWidth = "100%",
  containerHeight = "420px",
  containerBorderColor = "#FFFFFF",
  containerBackgroundColor = "rgba(255,255,255,0.4)",
  containerShadow = true,
  scale = 1,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="lg:mt-40 md:mt-28 mt-20 grid grid-cols-1 lg:grid-cols-2 items-center xl:gap-[170px] gap-12">
      
      {/* Video */}
      <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div
          className={`px-[30px] py-[35px] flex items-center justify-center gradient-shadow rounded-[30px] ${
            containerShadow ? "shadow-[0px_0px_20px_0px_rgba(121,92,245,0.2)]" : ""
          }`}
          style={{
            width: containerWidth,
            height: containerHeight,
            border: `2px solid ${containerBorderColor}`,
            backgroundColor: containerBackgroundColor,
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <video
              className="w-full h-full rounded-[20px]"
              style={{ transform: `scale(${scale})`}}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className={`flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <h1 className="font-onest font-semibold text-[#231F20] text-[27px] sm:text-4xl md:text-[40px] xl:text-5xl leading-9 sm:leading-[48px] xl:leading-[60px] xl:mb-10 lg:mb-6 mb-5">
          {title}
        </h1>

        <p className="font-onest font-normal text-[#231F20] text-sm lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 mb-6 lg:mb-[60px]">
          {description}
        </p>

        <Link
          href={buttonHref}
          className="inline-block w-fit px-6 md:px-6 lg:px-12 py-3 md:py-2.5 lg:py-[17px] text-base md:text-xs lg:text-xl leading-none font-semibold text-white border border-transparent hover:bg-transparent mb-3 rounded-full transition-colors duration-300"
          style={{ backgroundColor: buttonColor }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "transparent";
            (e.target as HTMLElement).style.color = buttonColor;
            (e.target as HTMLElement).style.borderColor = buttonColor;
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = buttonColor;
            (e.target as HTMLElement).style.color = "#fff";
            (e.target as HTMLElement).style.borderColor = "transparent";
          }}
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard2;
