import ButtonLg from "@/components/button/ButtonLg";
import React from "react";

export default function SmartSellSection() {
  return (
    <section className="wrapper" id="pos-animation">
      <div className="flex flex-col items-start  justify-center lg:pt-[136px] 2xl:pt-40 lg:mt-0 md:mt-36 mt-20" id="pos-animation">
        
        {/* Heading */}
        <h1 className="font-onest font-semibold text-[#231F20] text-4xl md:text-3xl xl:text-5xl leading-9 xl:leading-[60px] lg:max-w-4xl xl:mb-2 lg:mb-2 mb-5">
                            POS Systems Built for Your Industry
                        </h1>

        {/* Description */}
                        <p
                            className="font-onest font-normal text-[#231F20] text-sm lg:text-lg xl:text-xl leading-6 lg:leading-7 w-full xl:mb-3 lg:mb-3 md:mb-10 mb-8">
                            Every business operates differently—so why settle for a one-size-fits-all system? Owners
                            Inventory adapts to the specific needs of your industry, delivering smart, relevant features
                            that streamline daily operations and help you sell more with less effort.
                        </p>

        {/* CTA Button */}
        {/* <a
          href="#"
          className="inline-block px-6 py-3 md:px-6 md:py-2.5 lg:px-12 lg:py-5 text-base md:text-xs font-semibold leading-none text-white bg-[#795CF5] rounded-full border border-transparent hover:border-[#795CF5] hover:bg-transparent hover:text-[#795CF5] transition-colors duration-300"
        >
          Get Explore Now
        </a> */}
        <ButtonLg url='#' text='Get Explore Now' bgColor='[#795CF5]' textColor="white" isBorder/>

      </div>
    </section>
  );
}
