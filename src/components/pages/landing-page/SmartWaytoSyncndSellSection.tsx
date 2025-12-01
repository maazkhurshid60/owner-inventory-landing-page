"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSm from "@/components/button/ButtonSm";
import Image from "next/image";
import MainHeading from "../typography/MainHeading";

gsap.registerPlugin(ScrollTrigger);

function SmartWaytoSyncndSellSection() {
  useEffect(() => {
    // optional: we can add small scroll-based subtle animation later.
    // For now keep this simple and ensure it doesn't affect layout calculation.
    // If you need gif/anime timeline, create a gsap.context and matchMedia here similarly.
    return () => {};
  }, []);

  // Helper to refresh ScrollTrigger when the video loads
  const onVideoLoaded = () => {
    try {
      ScrollTrigger.refresh();
    } catch (e) {}
  };

  return (
    <section className="wrapper lg:pt-[100px] md:pt-20 pt-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-14 xl:gap-32 items-center justify-center w-full">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center">
          <MainHeading className=" mb-0 md:mb-10 lg:mb-[50px]">
            Modern Features Designed for Real Owners and Real Growth.
          </MainHeading>

          <div className="hidden md:flex gap-4 w-full items-center justify-start">
            <ButtonSm
              url="#"
              text="Boost Your Sales"
              bgColor="[#1AD1B9]"
              textColor="white"
              isBorder
              paddingLg="xl:px-[64px] lg:px-[40px] lg:py-5"
            />
            <ButtonSm
              url="#"
              text="Scale with Ease"
              bgColor="[#795CF5]"
              textColor="white"
              isBorder
              paddingLg="xl:px-[64px] lg:px-[40px] lg:py-5"
            />
          </div>
        </div>

        <div className="w-full h-full">
          <video
            className="w-full object-cover bg-transparent rounded-3xl"
            muted
            playsInline
            autoPlay
            loop
             preload="auto"
           controls={false}
            onLoadedMetadata={onVideoLoaded}
            onLoadedData={onVideoLoaded}
          >
            <source
              src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/modern-feauturehome.mp4"
              type="video/mp4"
            />
            <source
              src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/modern-feauturehome.webm"
              type="video/webm"
            />
          </video>
        </div>

        <div className="md:hidden flex gap-4 w-full items-center justify-start">
          <ButtonSm
            url="#"
            text="Boost Your Sales"
            bgColor="[#1AD1B9]"
            textColor="white"
            isBorder
            paddingLg="lg:px-[64px] lg:py-5"
            className="w-full"
          />
          <ButtonSm
            url="#"
            text="Scale with Ease"
            bgColor="[#795CF5]"
            textColor="white"
            isBorder
            paddingLg="lg:px-[64px] lg:py-5"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default SmartWaytoSyncndSellSection;
