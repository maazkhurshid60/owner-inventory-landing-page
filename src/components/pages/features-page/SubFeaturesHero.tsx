"use client";

import { ReactNode, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSm from "@/components/button/ButtonSm";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useHeroAnimation2 } from "@/hooks/useHeroAnimation2";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import Image from "next/image";
import { H1Icon } from "@heroicons/react/16/solid";
import Paragraph from "../typography/Paragraph";
import DropdownButtonSm from "@/components/dropdown/DropdownButtonSm";
import SubHeading from "../typography/SubHeading";

gsap.registerPlugin(ScrollTrigger);

interface SubFeaturesHeroProps {
  title?: string;
  video?: string;
  description?: string;
  children?: ReactNode;
  heroHeight?: string;
  heroOverflow?: string;
  variant?: "animation1" | "animation2" | "none";
}

const SubFeaturesHero: React.FC<SubFeaturesHeroProps> = ({
  title = "Grow Faster with Smarter Inventory Tools",
  description,
  video,
  heroHeight = "",
  heroOverflow = "overflow-y-hidden",
  children,
  variant = "animation1",
}) => {
  useHeaderAnimation();
  if (variant === "animation1") {
    useHeroAnimation();
  } else if (variant === "animation2") {
    useHeroAnimation2();
  }

  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  // Refs
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
   const homeHeroSecRef = useRef<HTMLImageElement>(null);
  const heroLowerRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);


 

  return (
    <div className="" ref={homeHeroSecRef}>
      <div className="pinned-section-1">
        <div className="top-section md:h-6 h-8"></div>
        <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 w-[100%] z-50">
          {/* SHAPE HEADER */}
          <div className=" owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
            {/* Left Shape (only visible on md+) */}
            <div className="owner-inventory-hero__shape-left hidden lg:block relative w-1/2 h-20 bg-[#F3F4F6] rounded-tl-[40px] owner-inventory-hero__border-left-top">
              <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>

            {/* Right Shape */}
            <div className="owner-inventory-hero__shape-right relative w-40 rounded-tr-[40px] rounded-tl-[40px] lg:rounded-tl-none h-20 md:w-1/2 lg:h-20 bg-[#F3F4F6] lg:rounded-tr-[40px] owner-inventory-hero__border-right-top top-right">
              <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
          </div>

          {/* HERO BODY */}
          <div className="md:py-[1px] bg-[#F3F4F6] rounded-[20px] lg:rounded-[40px]">
            <div
              className={`owner-inventory-hero__bottom relative flex flex-col items-center justify-center  w-full ${heroHeight} ${heroOverflow} pt-10 pb-6 md:py-[76px] lg:py-0 px-6 lg:px-[100px] bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] bg-cover bg-no-repeat backdrop-blur-[374px]`}
              style={{
                backgroundImage: "url('/assets/home-page-images/hero-bg.webp')",
              }}
            >
              {/* Heading */}
              <div className="owner-inventory-hero__content flex flex-col items-center justify-center w-full">
                {/* <h1 className="owner-inventory-hero__content--title text-4xl md:text-[60px] xl:text-7xl leading-[48px] md:leading-[66px] xl:leading-[90px] text-center font-onest font-semibold mx-auto md:max-w-screen-sm xl:max-w-5xl lg:mt-[150px] text-[#231F20]">
                {title}
              </h1> */}
                <div ref={mainHeadingRef}>
                  <h1 className="text-center xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[#231F20] font-onest   lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
                    {title}
                  </h1>
                </div>

                <div ref={paragraphRef}>
                  <Paragraph className="mb-4 text-center mx-auto">
                    {description}
                  </Paragraph>
                </div>

                <div className="flex md:gap-4 gap-2 lg:p-1.5  relative z-[60] owner-inventory-hero__content--buttons">
                  <ButtonSm
                    url="#"
                    text="Get Started for Free"
                    bgColor="[#1AD1B9]"
                    textColor="white"
                    isBorder
                  />
                  {/* <DropdownButtonSm
                    text="Book a Free Demo"
                    bgColor="[#1AD1B9]"
                    textColor="white"
                    isBorder={true}
                    items={[
                      { label: "Meet With Expert", url: "" },
                      { label: "View Demo", url: "" },
                    ]}
                  /> */}
                </div>

                {/* Extra flexibility */}
                {children}
                <div
                  ref={heroLowerRef}
                  className="owner-inventory-hero__lower relative w-full wrapper"
                >
                  <video
                        ref={videoRef}
                        className="w-full object-cover rounded-3xl"
                        muted
                        playsInline
                        autoPlay
                        loop
                      >
                        <source
                          src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos_system-hero.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos_system-hero.webm"
                          type="video/webm"
                        />
                      </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubFeaturesHero;
