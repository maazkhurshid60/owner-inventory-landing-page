'use client';
import Button from '@/components/button/ButtonLg';
import ButtonSm from '@/components/button/ButtonSm';
import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="onwer-inventory-hero mt-6 px-3 md:px-5 lg:px-10">
      {/* SHAPE HEADER */}
      <div className=" flex items-center justify-start md:justify-center md:items-center w-[63%] ml-0 md:mx-auto relative inset-x-0">
        {/* Left Shape (only visible on md+) */}
        <div className="hidden md:block relative w-1/2 h-20 bg-[#F3F4F6] rounded-tl-[40px]">
          <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
        </div>

        {/* Right Shape */}
        <div className="relative w-40 rounded-tr-[40px] rounded-tl-[40px] md:rounded-tl-none h-20 md:w-1/2 md:h-20 bg-[#F3F4F6] md:rounded-tr-[40px] ">
          <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
        </div>
      </div>

      {/* HERO BODY */}
      <div
        className="relative flex flex-col items-center justify-center w-full overflow-y-hidden pt-10 pb-6 md:py-[76px] lg:py-0 lg:h-[920px] px-6 md:px-[100px] bg-[#F3F4F6] rounded-b-[40px] rounded-tr-[40px] md:rounded-tl-[40px]  backdrop-blur-[374px]"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #F3F4F6 0%, transparent 40%), linear-gradient(90deg, rgba(26, 209, 185, 0.3) 0%, rgba(121, 92, 245, 0.3) 100%)',
        }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-[60px] xl:text-7xl leading-[48px] md:leading-[66px] xl:leading-[90px] text-center font-onest font-semibold mx-auto md:max-w-screen-sm xl:max-w-5xl lg:mt-[150px] text-[#231F20]">
          Grow Faster with Smarter Inventory Tools
        </h1>

        {/* CTA Buttons */}
        <div className="inline-flex p-1 lg:p-1 mt-10 xl:mt-20 rounded-full bg-white">
          {/* <a
            href="#"
            className="px-4 py-2.5 md:px-5 md:py-2 lg:px-[30px] lg:py-[14px] text-[10px] md:text-xs lg:text-base font-onest font-semibold text-white bg-[#1AD1B9] border rounded-full hover:text-[#231F20] hover:border-[#1AD1B9] hover:bg-transparent transition-colors duration-300"
          >
            Book Free Demo
          </a> */}
          <ButtonSm url='#' text='Book Free Demo' bgColor='[#1AD1B9]' textColor="white" isBorder/>
          <ButtonSm url='#' text='View Pricing Plans' bgColor='white' textColor="[#231F20]" isBorder={false}/>
          
          {/* <Link
            href="#"
            className="px-4 py-2.5 md:px-5 md:py-2 lg:px-[30px] lg:py-[14px] text-[10px] md:text-xs lg:text-sm font-onest font-medium text-[#231F20] bg-transparent rounded-full transition-colors duration-300"
          >
            View Pricing Plans
          </Link> */}
        </div>

        {/* Video */}
        <div className="owner-inventory-hero-section__image-box w-full mt-10 md:mt-14 xl:mt-40 sm:max-w-lg md:max-w-xl lg:max-w-4xl overflow-hidden">
          <video
            className="w-full object-cover rounded-3xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/Manual.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
