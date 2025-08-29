'use client';
import React from 'react';
import Link from 'next/link';
import '../../../app/globals.css'
import ButtonLg from '@/components/button/ButtonLg';

const CalltoActionBottom: React.FC = () => {
  return (
    <div   style={{
        background: 'linear-gradient(90deg, rgba(121, 92, 245, 0.25) 0%, rgba(26, 209, 185, 0.25) 100%)',
          backgroundPosition: 'bottom center',
      }}>
    <section
      className="ownerinventory-landing__pos-icons-section rounded-[40px] z-50"
      style={{
        backgroundImage: "url('/assets/icons-section/icons-section.webp')",
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="wrapper">
        <div className="flex flex-col w-full mx-auto lg:py-44 md:py-48 py-24 text-center lg:max-w-4xl">
          <h2 className="text-4xl md:text-[40px] lg:text-5xl xl:text-[64px] leading-[48px] md:leading-[57px] lg:leading-[60px] xl:leading-[76px] font-semibold text-white mb-5 md:mb-8 lg:mb-10 font-onest">
            Grow with a platform trusted by businesses worldwide.
          </h2>
          <p className="text-xs md:text-base lg:text-xl leading-6 lg:leading-9 font-normal text-white mb-10 md:mb-8 lg:mb-14 font-onest">
            Join a growing community of retailers, wholesalers, and entrepreneurs who are transforming how they manage
            inventory, sales, and growth. With Owners Inventory, you're not just using another tool — you're becoming
            part of a forward-thinking ecosystem that’s built to scale with your ambition. Let’s build smarter,
            together.
          </p>
          <div className="inline-flex w-fit mx-auto p-1 lg:p-1.5 border bg-white rounded-full">
            {/* <Link
              href="#"
              className="px-4 md:px-5 lg:px-[30px] py-2.5 md:py-2 lg:py-[14px] text-[10px] md:text-xs lg:text-base font-semibold text-white bg-[#795CF5] border hover:bg-transparent hover:text-[#231F20] hover:border-[#795CF5] rounded-full transition-colors duration-300 font-onest"
            >
              Book Free Demo
            </Link>
            <Link
              href="#"
              className="px-4 md:px-5 lg:px-[30px] py-2.5 md:py-2 lg:py-[14px] text-[10px] md:text-xs lg:text-base font-semibold text-[#231F20] bg-transparent rounded-full transition-colors duration-300 font-onest"
            >
              Contact Us
            </Link> */}
            <ButtonLg url='#' text='Book Free Demo' bgColor='[#795CF5]' textColor="white" isBorder/>
          <ButtonLg url='#' text='Contact Us' bgColor='white' textColor="[#231F20]" isBorder={false}/>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  );
};

export default CalltoActionBottom;
