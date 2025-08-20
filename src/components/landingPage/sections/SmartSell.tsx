import ButtonLg from "@/components/button/ButtonLg";
import React from "react";

export default function SmartSellSection() {
  return (
    <section className="wrapper xl:w-full  ">
      <div className="max-w-[1312px] mx-auto flex flex-col items-start justify-center mt-20 md:mt-28 lg:mt-40">
        
        {/* Heading */}
        <h1 className="font-semibold text-[#231F20] text-4xl mr-7 md:text-[40px] lg:text-5xl leading-[48px] lg:leading-[60px] lg:max-w-4xl mb-5 lg:mb-6 xl:mb-10">
          The Smart Way to Sell, Sync & Scale
        </h1>

        {/* Description */}
        <p className="text-[#231F20] text-sm lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 font-normal w-[90%] max-w-[978px] mb-8 md:mb-10 xl:mb-14">
          Owners Inventory is the trusted choice for modern retailers, wholesalers, and growing brands. Designed to
          simplify operations, it offers a seamless experience from setup to daily use—making inventory, sales, and
          customer management effortless.
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
