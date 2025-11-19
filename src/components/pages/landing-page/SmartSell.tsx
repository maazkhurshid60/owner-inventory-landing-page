import ButtonSm from "@/components/button/ButtonSm";
import React from "react";

export default function SmartSellSection() {
  return (
    <section className="wrapper" id="pos-animation">
      <div className="flex flex-col items-start  justify-center lg:pt-[136px] 2xl:pt-40 lg:mt-0 md:mt-36 mt-20" id="pos-animation">
        
        {/* Heading */}
        <h1 className="font-onest font-semibold text-[#231F20] text-4xl md:text-3xl xl:text-5xl leading-9 xl:leading-[60px] lg:max-w-4xl xl:mb-2 lg:mb-2 mb-5">
                            Built for Every Industry
                        </h1>

        {/* Description */}
                        <p
                            className="font-onest font-normal text-[#231F20] text-sm lg:text-lg xl:text-xl leading-6 lg:leading-7 w-full xl:mb-3 lg:mb-3 md:mb-10 mb-8">
                            No matter what you sell, the Owners Inventory management program adapts to you.
                        </p>

      
          <ButtonSm url='#' text='Get Explore Now' bgColor='[#795CF5]' textColor="white" isBorder/>

      </div>
    </section>
  );
}
