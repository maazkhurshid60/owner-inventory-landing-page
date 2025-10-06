"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ButtonLg from "@/components/button/ButtonLg"
import Image from "next/image"

function SmartWaytoSyncndSellSection() {

  useEffect(() => {
    const tl6 = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      defaults: { duration: 1, ease: "power1.inOut" },
    });

    // initial states
    gsap.set("#gif-anime__text1 , #gif-anime__staryellow , #gif-anime__text2, #gif-anime__arrow-right", {
      opacity: 0,
      clipPath: "inset(0% 100% 0% 0%)",
    });
    gsap.set("#gif-anime__arrow-left", {
      opacity: 0,
      clipPath: "inset(0% 0% 0% 100%)",
    });
    gsap.set("#gif-anime__line", {
      opacity: 0,
      clipPath: "inset(0% 100% 0% 0%)",
    });
    gsap.set("#gif-anime__white-star1, #gif-anime__white-star2", {
      opacity: 0,
      scale: 0,
    });

    // animate in
    tl6.to("#gif-anime__text1", { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, 0);
    tl6.to("#gif-anime__staryellow", { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, 0);
    tl6.to("#gif-anime__text2", { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, 0);
    tl6.to("#gif-anime__arrow-right", { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, 0);
    tl6.to("#gif-anime__arrow-left", { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, 0);
    tl6.to("#gif-anime__line", { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, 0);
    tl6.to("#gif-anime__white-star1", { opacity: 1, scale: 1 }, 0);

    // responsive star movement
    const moveX = window.innerWidth >= 1024 ? 70 : 40;
    tl6.to("#gif-anime__white-star1", { x: moveX }, 1);
    tl6.to("#gif-anime__white-star2", { opacity: 1, scale: 1 }, 1);
    tl6.to("#gif-anime__white-star1", { opacity: 0 }, 2);
    tl6.to("#gif-anime__white-star2", { x: moveX }, 2);
  }, []);
  return (
   <section className="w-full px-6 md:px-10 xl:px-20 2xl:px-[100px]">
      <div className="mt-20 md:mt-28 lg:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-14 xl:gap-32 items-center justify-center w-full">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-[40px] lg:text-5xl xl:text-[64px] leading-[48px] lg:leading-[60px] xl:leading-[76px] mb-5 lg:mb-6 xl:mb-10 font-semibold text-[#231F20]">
              The Smart Way to Sell, Sync & Scale
            </h1>

            <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 mb-8 md:mb-10 xl:mb-14 font-normal text-[#231F20]">
              Owners Inventory is the trusted choice for modern retailers, wholesalers, and growing brands. Designed to simplify operations, it offers a seamless experience from setup to daily use—making inventory, sales, and customer management effortless.
            </p>

            {/* <a
              href="#"
              className="inline-block px-6 py-3 md:px-6 md:py-2.5 lg:px-12 lg:py-5 text-xs lg:text-base leading-none font-semibold text-white bg-[#795CF5] border border-transparent rounded-full hover:border-[#795CF5] hover:bg-transparent hover:text-[#795CF5] transition-colors duration-300 mb-3"
            >
              Get Started Now
            </a> */}
                      <ButtonLg url='#' text='Get Started Now' bgColor='[#795CF5]' textColor="white" isBorder/>

          </div>

          {/* Right Image */}
          {/* <div className="w-full">
            <Image
              src="/assets/sell-section-img.webp"
              alt="Sell Image"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div> */}
       <div className="w-full relative gif-anime">
      <Image src="/assets/gif-anime/background.png" alt="Sell Image" 
       width={800}
              height={600}
              className="w-full h-auto"
              priority
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
    </div>
        </div>
      </div>
    </section> 
  )
}

export default SmartWaytoSyncndSellSection