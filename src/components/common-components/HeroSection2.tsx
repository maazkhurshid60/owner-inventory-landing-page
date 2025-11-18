"use client";

import { ReactNode, useRef, useEffect } from "react";
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

  // Refs
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const homeHeroImageRef = useRef<HTMLImageElement>(null);
  const homeHeroImage1Ref = useRef<HTMLImageElement>(null);
  const homeHeroImage2Ref = useRef<HTMLImageElement>(null);
  const homeHeroImage3Ref = useRef<HTMLImageElement>(null);
  const homeHeroImage4Ref = useRef<HTMLImageElement>(null);
  const homeHeroImage5Ref = useRef<HTMLImageElement>(null);
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

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial states
    gsap.set(mainHeadingRef.current, { opacity: 0, y: 50 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 30 });
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
      { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, duration: 2 },
      "2"
    );
    tl.to(
      growthBoxRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 2,
        onComplete: () => {
          document.dispatchEvent(new Event("heroAnimationFinished")); // SIGNAL HERO ANIMATION COMPLETE
        },
      },
      "3"
    );
  }, []);

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
          <div className="md:py-[1px] bg-[#F3F4F6] rounded-[40px]">
            <div
              className={`owner-inventory-hero__bottom relative flex flex-col items-center justify-center bac w-full ${heroHeight} ${heroOverflow} pt-10 pb-6 md:py-[76px] lg:py-0 px-6 md:px-[100px] bg-[#F3F4F6] rounded-b-[40px] rounded-tr-[40px] lg:rounded-tl-[40px]  backdrop-blur-[374px]`}
              style={{
                backgroundImage: `
    linear-gradient(180deg, #F3F4F6 0%, transparent 60%),
    linear-gradient(90deg, rgba(26, 209, 185, 0.3) 0%, rgba(207, 181, 249, 1) 50%, rgba(158, 2, 255, 0.3) 80%)
  `,
              }}
            >
              {/* Heading */}
              <div className="owner-inventory-hero__content flex flex-col items-center justify-center w-full">
                {/* <h1 className="owner-inventory-hero__content--title text-4xl md:text-[60px] xl:text-7xl leading-[48px] md:leading-[66px] xl:leading-[90px] text-center font-onest font-semibold mx-auto md:max-w-screen-sm xl:max-w-5xl lg:mt-[150px] text-[#231F20]">
                {title}
              </h1> */}
                <div ref={mainHeadingRef}>
                  <MainHeading className="text-center mx-auto md:max-w-screen-sm xl:max-w-5xl lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
                    {title}
                  </MainHeading>
                </div>

                <div ref={paragraphRef}>
                  <Paragraph className="mb-4 text-center">
                    {description}
                  </Paragraph>
                </div>

                <div className="flex gap-4 lg:p-1.5  relative z-[60] owner-inventory-hero__content--buttons">
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
                      { label: "Profile", url: "/profile" },
                      { label: "Settings", url: "/settings" },
                      { label: "Logout", url: "/logout" },
                    ]}
                  />
                </div>

                {/* Extra flexibility */}
                {children}
              </div>

              <div
                ref={heroLowerRef}
                className="owner-inventory-hero__lower relative w-full mt-10 md:mt-10 xl:mt-10 "
              >
                <div
                  ref={heroLowerBoxRef}
                  className="w-full max-w-[498px] mx-auto relative z-[-10] backdrop-blur-md  px-6 py-5 border-[3px] border-[rgba(255,255,255,0.5)] bg-[rgba(255, 255, 255, 0.12)] rounded-[40px] -mb-20"
                >
                  <HeroImageSlider
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
                  />

                  <div
                    ref={productsImageRef}
                    className="flex w-fit items-center justify-center gap-4 px-4 py-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.13)] backdrop-blur-md bg-[rgba(255, 255, 255, 0.07)] border-[1.5px]  border-[rgba(255,255,255,1)] rounded-full absolute top-[120px] left-[-60px]"
                  >
                    <Image
                      src="/assets/home-page-images/products.svg"
                      alt="Pricing Image"
                      width={33}
                      height={33}
                      loading="lazy"
                      className="w-[33px] h-[33px]"
                    />
                    <p className="text-[22px] leading-[38px] font-medium font-onest text-[#333333]">
                      Products
                    </p>
                  </div>

                  <div
                    ref={advanceReportImageRef}
                    className="flex w-fit items-center justify-center gap-4 px-4 py-3 backdrop-blur-md bg-[rgba(255, 255, 255, 0.25)] border-[1.5px] border-[rgba(255,255,255,1)] rounded-full absolute top-[300px] left-[-60px]"
                  >
                    <Image
                      src="/assets/home-page-images/advance-report.svg"
                      alt="Pricing Image"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-[33px] h-[33px]"
                    />
                    <p className="text-[22px] leading-[38px] font-medium font-onest text-[#333333]">
                      Advance Reports
                    </p>
                  </div>

                  <div
                    ref={inventorySystemImageRef}
                    className="flex w-fit items-center justify-center gap-4 px-4 py-3 backdrop-blur-md bg-[rgba(255, 255, 255, 0.25)] border-[1.5px] border-[rgba(255,255,255,1)] rounded-full absolute top-[120px] right-[-200px]"
                  >
                    <Image
                      src="/assets/home-page-images/inventory-system.svg"
                      alt="Pricing Image"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-[33px] h-[33px]"
                    />
                    <p className="text-[22px] leading-[38px] font-medium font-onest text-[#333333]">
                      Inventory Operations
                    </p>
                  </div>
                  <div
                    ref={reportsImageRef}
                    className="flex w-fit items-center justify-center gap-4 px-4 py-3 backdrop-blur-md bg-[rgba(255, 255, 255, 0.25)] border-[1.5px]  border-[rgba(255,255,255,1)] rounded-full absolute top-[300px] right-[-120px]"
                  >
                    <Image
                      src="/assets/home-page-images/reports.svg"
                      alt="Pricing Image"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-[33px] h-[33px]"
                    />
                    <p className="text-[22px] leading-[38px] font-medium font-onest text-[#333333]">
                      Reports
                    </p>
                  </div>
                </div>

                <div
                  ref={fastServiceDescRef}
                  className="flex w-fit items-center justify-center gap-4 px-4 py-2 backdrop-blur-md bg-[rgba(255, 255, 255, 0.25)] border-[1.5px]  border-[rgba(255,255,255,1)] rounded-full absolute top-[120px] left-[-30px]"
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
                  className="w-[51px] h-[64px] absolute top-[50px] left-[60px]"
                />
                <div
                  ref={safeSecureDescRef}
                  className="flex w-fit items-center justify-center gap-4 px-4 py-2 backdrop-blur-md bg-[rgba(255, 255, 255, 0.25)] border-[1.5px]  border-[rgba(255,255,255,1)] rounded-full absolute bottom-[200px] right-[-10px]"
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
                  className="w-[100px] h-[118px] absolute bottom-[250px] right-[60px]"
                />

                <Image
                  src="/assets/home-page-images/inventory-blur-icon.svg"
                  alt="Pricing Image"
                  ref={inventoryBlurIconRef}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-[120px] h-[120px] absolute top-[0px] right-[60px]"
                />

                <Image
                  src="/assets/home-page-images/inventory-icon.svg"
                  alt="Pricing Image"
                  ref={inventoryIconRef}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-[120px] h-[120px] absolute top-[30px] right-[80px]"
                />

                <div
                  ref={growthBoxRef}
                  className="flex flex-col w-full max-w-[480px] p-4 absolute bottom-[0px] z-[-10]"
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
                    <Paragraph className="text-center">Total Growth</Paragraph>
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
