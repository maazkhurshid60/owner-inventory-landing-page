"use client";

import { ReactNode, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSm from "@/components/button/ButtonSm";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useHeroAnimation2 } from "@/hooks/useHeroAnimation2";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import DropdownButtonSm from "../dropdown/DropdownButtonSm";
import MainHeading from "../pages/typography/MainHeading";
import Paragraph from "../pages/typography/Paragraph";
import Image from "next/image";
import SubHeading from "../pages/typography/CardHeading";
import HeroImageSlider from "./HeroImageSlider";
import { H1Icon } from "@heroicons/react/16/solid";

gsap.registerPlugin(ScrollTrigger);

interface HeroSection2Props {
  title?: string;
  video?: string;
  description?: string;
  children?: ReactNode;
  heroHeight?: string;
  heroOverflow?: string;
  variant?: "animation1" | "animation2" | "none";
}

const HeroSection2: React.FC<HeroSection2Props> = ({
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
  // const homeHeroImageRef = useRef<HTMLImageElement>(null);
  // const homeHeroImage1Ref = useRef<HTMLImageElement>(null);
  // const homeHeroImage2Ref = useRef<HTMLImageElement>(null);
  // const homeHeroImage3Ref = useRef<HTMLImageElement>(null);
  // const homeHeroImage4Ref = useRef<HTMLImageElement>(null);
  // const homeHeroImage5Ref = useRef<HTMLImageElement>(null);
  const productsImageRef = useRef<HTMLImageElement>(null);
  const advanceReportImageRef = useRef<HTMLImageElement>(null);
  const homeHeroSecRef = useRef<HTMLImageElement>(null);
  const inventorySystemImageRef = useRef<HTMLImageElement>(null);
  const reportsImageRef = useRef<HTMLImageElement>(null);
  const fastServiceImageRef = useRef<HTMLImageElement>(null);
  const fastServiceDescRef = useRef<HTMLImageElement>(null);
  const safeSecureDescRef = useRef<HTMLImageElement>(null);
  const safeSecureImageRef = useRef<HTMLImageElement>(null);
  const inventoryBlurIconRef = useRef<HTMLImageElement>(null);
  const inventoryIconRef = useRef<HTMLImageElement>(null);
  const totalGrowthImageRef = useRef<HTMLImageElement>(null);
  const totalGrowthHeadingRef = useRef<HTMLImageElement>(null);
  const totalGrowthDescRef = useRef<HTMLImageElement>(null);
  const heroLowerRef = useRef<HTMLImageElement>(null);
  const heroLowerBoxRef = useRef<HTMLImageElement>(null);
  const growthBoxRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial states
    gsap.set(mainHeadingRef.current, { opacity: 0, y: 50 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 30 });
    gsap.set(homeHeroSecRef.current, {
      clipPath: "inset(0% 0% 100% 0%)", // Fixed: using clipPath instead of inset
    });
    gsap.set(productsImageRef.current, {
      opacity: 0,
      rotation: 45,
      scale: 0.5,
      x: 60,
      y: 60,
    });
    gsap.set(advanceReportImageRef.current, {
      opacity: 0,
      rotation: 45,
      scale: 0.5,
      x: 60,
      y: -60,
    });
    gsap.set(inventorySystemImageRef.current, {
      opacity: 0,
      rotation: -45,
      scale: 0.5,
      x: -60,
      y: 60,
    });
    gsap.set(reportsImageRef.current, {
      opacity: 0,
      rotation: -45,
      scale: 0.5,
      x: -60,
      y: -30,
    });
    gsap.set(fastServiceImageRef.current, { opacity: 0, x: 60, y: 30 });
    gsap.set(fastServiceDescRef.current, { opacity: 0, x: 200 });
    gsap.set(safeSecureImageRef.current, { opacity: 0, x: 60, y: 30 });
    gsap.set(safeSecureDescRef.current, { opacity: 0, x: -200 });
    gsap.set(heroLowerBoxRef.current, { opacity: 0, y: 300 });
    gsap.set(inventoryBlurIconRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(inventoryIconRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(growthBoxRef.current, { opacity: 0, y: 100 });

    // Animations
    tl.to(mainHeadingRef.current, { opacity: 1, y: 0, duration: 0.8 }, "0");
    tl.to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.8 }, "0");

    tl.to(
      homeHeroSecRef.current,
      { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8 },
      "0.2"
    );
    tl.to(
      [
        productsImageRef.current,
        advanceReportImageRef.current,
        inventorySystemImageRef.current,
        reportsImageRef.current,
        fastServiceImageRef.current,
        fastServiceDescRef.current,
        safeSecureImageRef.current,
        safeSecureDescRef.current,
        heroLowerBoxRef.current,
        inventoryBlurIconRef.current,
        inventoryIconRef.current,
      ],
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 2,
        onComplete: () => {
          setShouldPlayVideo(true);
        },
      },
      "0.4"
    );
    tl.to(
      growthBoxRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 2,
        // onComplete: () => {
        //   document.dispatchEvent(new Event("heroAnimationFinished"));
        // },
      },
      "0.6"
    );
  }, []);

  useEffect(() => {
    if (shouldPlayVideo && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video play failed:", error);
      });
    }
  }, [shouldPlayVideo]);

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
                {/* <h1 className="owner-inventory-hero__content--title text-4xl md:text-[60px] xl:text-7xl leading-[48px] md:leading-[66px] xl:leading-[90px] text-center font-onest font-semibold mx-auto md:max-w-screen-sm xl:max-w-5xl lg:mt-[150px] text-[var(--text-dark)]">
                {title}
              </h1> */}
                <div ref={mainHeadingRef}>
                  <h1 className="text-center xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[var(--text-dark)] font-onest xl:max-w-5xl lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
                    {title}
                  </h1>
                </div>

                <div ref={paragraphRef}>
                  <Paragraph className="mb-4 text-center mx-auto md:max-w-screen-sm xl:max-w-5xl 2xl:max-w-6xl ">
                    {description}
                  </Paragraph>
                </div>

                <div className="flex md:gap-4 gap-2 lg:p-1.5  relative z-[60] owner-inventory-hero__content--buttons">
                  <ButtonSm
                    url="#"
                    text="Get Started for Free"
                    bgColor="[#795CF5]"
                    textColor="white"
                    isBorder
                  />
                  <DropdownButtonSm
                    text="Book a Free Demo"
                    bgColor="[#1AD1B9]"
                    textColor="white"
                    isBorder={true}
                    items={[
                      { label: "Meet With Expert", url: "" },
                      { label: "View Demo", url: "" },
                    ]}
                  />
                </div>

                {/* Extra flexibility */}
                {children}
                <div
                  ref={heroLowerRef}
                  className="owner-inventory-hero__lower relative w-full wrapper pt-10 md:pt-10 xl:pt-10 "
                >
                  <div
                    ref={heroLowerBoxRef}
                    className="w-full h-[376px] lg:h-[650px] max-w-[250px] md:max-w-[300px] lg:max-w-[498px] mx-auto relative z-[-10] backdrop-blur-xl  px-[14px] py-3 lg:px-6 lg:py-5 border-[3px] border-[rgba(255,255,255,0.5)] bg-[rgba(255, 255, 255, 0.12)] rounded-[40px] -mb-34 -lg:mb-20"
                  >
                    {/* <HeroImageSlider
                    images={[
                      "/assets/home-page-images/home-herofirst.webp",
                      "/assets/home-page-images/girl.webp",
                      "/assets/home-page-images/products.webp",
                      "/assets/home-page-images/pos.webp",
                      "/assets/home-page-images/warehouse.webp",
                    ]}
                    backgrounds={[
                      "#E9E3F6",
                      "#F1F6E3",
                      "#E9E3F6",
                      "#F1F6E3",
                      "#E9E3F6",
                    ]}
                  /> */}

                    <div className="w-full h-full  rounded-[40px] relative overflow-hidden">
                      <video
                        ref={videoRef}
                        className="w-full object-cover rounded-3xl"
                        muted
                        playsInline
                        autoPlay={shouldPlayVideo}
                        loop
                      >
                        <source
                          src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/hero-animation.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/hero-animation.webm"
                          type="video/webm"
                        />
                      </video>
                    </div>

                    <div
                      ref={productsImageRef}
                      className="flex w-fit items-center justify-center gap-[6px] md:gap-4 px-[10px] py-[6px] md:px-4 md:py-3 glass-background absolute top-[90px] lg:top-[120px] left-[-20px] lg:left-[-60px]"
                    >
                      <Image
                        src="/assets/home-page-images/products.svg"
                        alt="Pricing Image"
                        width={33}
                        height={33}
                        loading="lazy"
                        className="xl:w-[33px] xl:h-[33px] lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px] w-[13px] h-[13px]"
                      />
                      <p className="text-[10px] leading-4 md:text-[12px] md:leading-[19px] lg:text-lg lg:leading-6 xl:text-[22px] xl:leading-[38px] font-medium font-onest text-[var(--text-light)]">
                        Products
                      </p>
                    </div>

                    <div
                      ref={advanceReportImageRef}
                      className="flex w-fit items-center justify-center gap-[6px] md:gap-4 px-[10px] py-[6px] md:px-4 md:py-3 glass-background absolute top-[180px] left-[-20px] lg:top-[300px] lg:left-[-60px]"
                    >
                      <Image
                        src="/assets/home-page-images/advance-report.svg"
                        alt="Pricing Image"
                        width={800}
                        height={600}
                        loading="lazy"
                        className="xl:w-[33px] xl:h-[33px] lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px] w-[13px] h-[13px]"
                      />
                      <p className="text-[10px] leading-4 md:text-[12px] md:leading-[19px] lg:text-lg lg:leading-6 xl:text-[22px] xl:leading-[38px] font-medium font-onest text-[var(--text-light)]">
                        Advance Reports
                      </p>
                    </div>

                    <div
                      ref={inventorySystemImageRef}
                      className="flex w-fit items-center justify-center gap-[6px] md:gap-4 px-[10px] py-[6px] md:px-4 md:py-3 glass-background absolute top-[55px] right-[-19px] md:top-[110px] lg:top-[130px] md:right-[-110px] lg:right-[-150px] 2xl:top-[120px] 2xl:right-[-200px]"
                    >
                      <Image
                        src="/assets/home-page-images/inventory-system.svg"
                        alt="Pricing Image"
                        width={800}
                        height={600}
                        loading="lazy"
                        className="xl:w-[33px] xl:h-[33px] lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px] w-[13px] h-[13px]"
                      />
                      <p className="text-[10px] leading-4 md:text-[12px] md:leading-[19px] lg:text-lg lg:leading-6 xl:text-[22px] xl:leading-[38px] font-medium font-onest text-[var(--text-light)]">
                        Inventory Operations
                      </p>
                    </div>
                    <div
                      ref={reportsImageRef}
                      className="flex w-fit items-center justify-center gap-[6px] md:gap-4 px-[10px] py-[6px] md:px-4 md:py-3 glass-background absolute top-[148px] -right-5 md:top-[200px] md:right-[-60px] lg:top-[300px] lg:right-[-120px]"
                    >
                      <Image
                        src="/assets/home-page-images/reports.svg"
                        alt="Pricing Image"
                        width={800}
                        height={600}
                        loading="lazy"
                        className="xl:w-[33px] xl:h-[33px] lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px] w-[13px] h-[13px]"
                      />
                      <p className="text-[10px] leading-4 md:text-[12px] md:leading-[19px] lg:text-lg lg:leading-6 xl:text-[22px] xl:leading-[38px] font-medium font-onest text-[var(--text-light)]">
                        Reports
                      </p>
                    </div>
                  </div>

                  <div
                    ref={fastServiceDescRef}
                    className="hidden lg:flex w-fit items-center justify-center gap-4 px-4 py-2 backdrop-blur-xl bg-[rgba(255, 255, 255, 0.25)] border-[1.5px]  border-[rgba(255,255,255,1)] rounded-full absolute top-[200px] left-0 2xl:top-[120px] 2xl:left-0"
                  >
                    <p className="text-base leading-5 font-medium font-onest text-[#581C87]">
                      Fast Service
                    </p>
                  </div>
                  <Image
                    src="/assets/home-page-images/fast-service.svg"
                    alt="Pricing Image"
                    ref={fastServiceImageRef}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-[51px] h-[64px] hidden lg:block absolute top-[110px] left-[30px] 2xl:top-[50px] 2xl:left-[60px]"
                  />
                  <div
                    ref={safeSecureDescRef}
                    className="hidden lg:flex w-fit items-center justify-center gap-4 px-4 py-2 backdrop-blur-xl bg-[rgba(255, 255, 255, 0.25)] border-[1.5px]  border-[rgba(255,255,255,1)] rounded-full absolute bottom-[40px] right-[-10px] xl:bottom-[250px] 2xl:bottom-[200px] 2xl:right-0"
                  >
                    <p className="text-base leading-5 font-medium font-onest text-[#581C87]">
                      Safe & Secure
                    </p>
                  </div>
                  <Image
                    src="/assets/home-page-images/safe-secure.svg"
                    alt="Pricing Image"
                    ref={safeSecureImageRef}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="2xl:w-[100px] hidden lg:block 2xl:h-[118px] w-20 h-[90px] absolute bottom-[85px] right-[0px] xl:bottom-[300px] 2xl:bottom-[250px] 2xl:right-[60px]"
                  />

                  <Image
                    src="/assets/home-page-images/inventory-blur-icon.svg"
                    alt="Pricing Image"
                    ref={inventoryBlurIconRef}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="2xl:w-[120px] lg:w-[90px] lg:h-[90px] md:w-[63px] md:h-[63px] w-[46px] h-[46px] 2xl:h-[120px] absolute top-[-20px] right-[-10px] md:top-[-10px] 2xl:top-[-60px] 2xl:right-[200px] md:right-0"
                  />

                  <Image
                    src="/assets/home-page-images/inventory-icon.svg"
                    alt="Pricing Image"
                    ref={inventoryIconRef}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="2xl:w-[120px] 2xl:h-[120px] lg:w-[90px] lg:h-[90px] md:w-[63px] md:h-[63px] w-[46px] h-[46px] absolute top-[-5px] right-[-5px] md:top-[10px] md:right-[20px] lg:top-[10px] lg:right-[20px] 2xl:top-[-40px] 2xl:right-[180px]"
                  />

                  <div
                    ref={growthBoxRef}
                    className="hidden lg:flex flex-col w-full max-w-[300px] xl:max-w-[400px] 2xl:max-w-[480px] p-4 absolute bottom-[0px]  z-[-20]"
                  >
                    <div ref={totalGrowthHeadingRef}>
                      <SubHeading>42.5k</SubHeading>
                    </div>
                    <Image
                      src="/assets/home-page-images/total-growth.svg"
                      alt="Pricing Image"
                      ref={totalGrowthImageRef}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full "
                    />
                    <div ref={totalGrowthDescRef}>
                      <Paragraph className="text-left xl:text-center mt-3">
                        Total Growth
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection2;
