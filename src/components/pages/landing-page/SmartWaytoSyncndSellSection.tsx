"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ButtonSm from "@/components/button/ButtonSm";
import Image from "next/image";
import MainHeading from "../typography/MainHeading";

function SmartWaytoSyncndSellSection() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        defaults: { duration: 1, ease: "power1.inOut" },
      });

      // Safe screen width
      const moveX =
        typeof window !== "undefined" && window.innerWidth >= 1024 ? 70 : 40;

      // Initial states
      gsap.set(
        [
          "#gif-anime__text1",
          "#gif-anime__staryellow",
          "#gif-anime__text2",
          "#gif-anime__arrow-right",
        ],
        { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }
      );

      gsap.set("#gif-anime__arrow-left", {
        opacity: 0,
        clipPath: "inset(0% 0% 0% 100%)",
      });

      gsap.set("#gif-anime__line", {
        opacity: 0,
        clipPath: "inset(0% 100% 0% 0%)",
      });

      gsap.set(["#gif-anime__white-star1", "#gif-anime__white-star2"], {
        opacity: 0,
        scale: 0,
      });

      // Sequence
      tl.to("#gif-anime__text1", {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
      });

      tl.to(
        "#gif-anime__staryellow",
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        },
        "<0.1"
      );

      tl.to(
        "#gif-anime__text2",
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        },
        "<0.2"
      );

      tl.to(
        "#gif-anime__arrow-left",
        {
          opacity: 1,
        },
        "<"
      );

      tl.to(
        "#gif-anime__arrow-right",
        {
          opacity: 1,
        },
        "<"
      );

      tl.to(
        "#gif-anime__line",
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        },
        "<"
      );

      // Stars animation
      tl.to("#gif-anime__white-star1", { opacity: 1, scale: 1 }, "<0.1");

      tl.to("#gif-anime__white-star1", { x: moveX }, "+=0.3");

      tl.to("#gif-anime__white-star2", { opacity: 1, scale: 1 }, "<0.2");

      tl.to("#gif-anime__white-star2", { x: moveX }, "+=0.2");

      // END FADE OUT
      tl.to(
        [
          "#gif-anime__text1",
          "#gif-anime__text2",
          "#gif-anime__staryellow",
          "#gif-anime__arrow-left",
          "#gif-anime__arrow-right",
          "#gif-anime__line",
          "#gif-anime__white-star1",
          "#gif-anime__white-star2",
        ],
        { opacity: 0 },
        "+=0.5"
      );
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section className="wrapper lg:pt-[100px] md:pt-20 pt-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-14 xl:gap-32 items-center justify-center w-full">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center">
          {/* <h1 className="text-4xl md:text-[40px] lg:text-5xl xl:text-[64px] leading-[48px] lg:leading-[60px] xl:leading-[76px] mb-5 lg:mb-6 xl:mb-10 font-semibold text-[#231F20]">
              The Smart Way to Sell, Sync & Scale
            </h1> */}
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
                      >
                        <source
                          src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/modern-feauture.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/modern-feauture.webm"
                          type="video/webm"
                        />
                      </video>
        </div>

        {/* <div className="w-full relative gif-anime">
          <Image
            src="/assets/gif-anime/background.png"
            alt="Sell Image"
            width={800}
            height={600}
            className="w-full h-auto"
            loading="lazy"
          />

          <p
            id="gif-anime__text1"
            className="absolute lg:top-[30px] top-5 2xl:left-10 lg:left-6 left-2 
                   xl:text-xl lg:text-base text-[11px] text-[#231F20] font-onest font-medium leading-[100%]"
          >
            4.9 Average Rating
          </p>

          <Image
            src="/assets/gif-anime/star-dark.svg"
            width={168}
            height={57}
            alt="Star Dark"
            loading="lazy"
            className="absolute lg:top-[70px] top-10 2xl:left-10 lg:left-6 left-2
                   2xl:w-[202px] xl:w-[168px] lg:w-[128px] w-[110px] lg:h-[57px] h-7
                   lg:py-2 lg:px-3 py-1 px-1 bg-white rounded-2xl"
          />

          <Image
            id="gif-anime__staryellow"
            src="/assets/gif-anime/yellow-stars.svg"
            width={158}
            height={57}
            alt="Yellow Stars"
            loading="lazy"
            className="absolute lg:top-[70px] top-[43px] 2xl:left-10 lg:left-6 md:left-[13px] left-[14px]
                   2xl:w-[191px] xl:w-[158px] lg:w-[120px] w-[93px] lg:h-[57px] h-[22px]
                   lg:py-2 lg:px-3 py-0 px-0 rounded-2xl"
          />

          <p
            id="gif-anime__text2"
            className="absolute lg:top-[90px] top-[57px] 2xl:right-10 right-6
                   xl:text-xl lg:text-base text-[11px] text-white font-onest font-medium leading-[100%]"
          >
            Transactions Managed
          </p>

          <Image
            id="gif-anime__arrow-left"
            src="/assets/gif-anime/left-too-right.svg"
            width={50}
            height={40}
            alt="Arrow Left"
            loading="lazy"
            className="absolute lg:top-[128px] top-[70px] 2xl:right-10 right-6
                   2xl:w-[50px] w-8 2xl:h-[40px] h-7"
          />

          <Image
            id="gif-anime__arrow-right"
            src="/assets/gif-anime/right-too-left.svg"
            width={53}
            height={40}
            alt="Arrow Right"
            loading="lazy"
            className="absolute 2xl:top-[161px] lg:top-[150px] top-[89px] 2xl:right-10 right-6
                   2xl:w-[53px] w-8 2xl:h-[40px] h-7"
          />

          <Image
            id="gif-anime__line"
            src="/assets/gif-anime/line.svg"
            width={242}
            height={120}
            alt="Line"
            loading="lazy"
            className="absolute 2xl:bottom-10 bottom-6 2xl:right-10 right-6
                   2xl:w-[242px] 2xl:h-[120px] xl:w-[200px] lg:w-[180px] w-[120px]
                   lg:h-[100px] h-[64px]"
          />

          <Image
            id="gif-anime__white-star1"
            src="/assets/gif-anime/white-star.svg"
            width={42}
            height={42}
            alt="White Star 1"
            loading="lazy"
            className="absolute 2xl:bottom-[220px] xl:bottom-[190px] lg:bottom-[160px] 
                   md:bottom-[120px] bottom-[130px] 2xl:left-10 left-6 lg:w-[42px] lg:h-[42px] h-7"
          />

          <Image
            id="gif-anime__white-star2"
            src="/assets/gif-anime/white-star.svg"
            width={42}
            height={42}
            alt="White Star 2"
            loading="lazy"
            className="absolute 2xl:bottom-[220px] xl:bottom-[190px] lg:bottom-[160px] 
                   md:bottom-[120px] bottom-[130px] 2xl:left-10 left-6 lg:w-[42px] lg:h-[42px] h-7"
          />
        </div> */}

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
