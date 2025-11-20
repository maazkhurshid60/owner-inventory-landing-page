'use client';
import React from 'react';
import Link from 'next/link';
import '../../../app/globals.css'
import ButtonSm from '@/components/button/ButtonSm';
import MainHeading from '../typography/MainHeading';
import Paragraph from '../typography/Paragraph';

const CalltoActionBottom: React.FC = () => {
  return (
    <div  >
    <section
      className="ownerinventory-landing__pos-icons-section trusted-by-section lg:mt-40 md:mt-28 mt-20 flex items-center justify-center rounded-[20px] lg:rounded-[40px] w-[100%] relative z-[100]"
      style={{
        backgroundImage: "url('/assets/icons-section/icons-section.webp')",
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center w-full mx-auto lg:py-44 md:py-48 py-24 text-center lg:max-w-4xl">
          {/* <h2 className="text-4xl md:text-[40px] lg:text-5xl xl:text-[64px] leading-[48px] md:leading-[57px] lg:leading-[60px] xl:leading-[76px] font-semibold text-white mb-5 md:mb-8 lg:mb-10 font-onest">
            Empower Your Business with a Platform Built for Growth
          </h2> */}
          <MainHeading className='text-white lg:mb-10 md:mb-6 mb-5'>Empower Your Business with a Platform Built for Growth</MainHeading>
          {/* <p className="text-xs md:text-base lg:text-xl leading-6 lg:leading-9 font-normal text-white mb-10 md:mb-8 lg:mb-14 font-onest">
            Enter into a world of ambitious retailers, wholesalers, and entrepreneurs who are transforming the way inventory, sales and growth are handled. You are not merely taking a tool with Owners Inventory, but rather entering an intelligent, scaled ecosystem that can get your business through any phase. Automatize, base decisions on data, and realize your full potential. We combine aspiration with success.
          </p> */}
          <Paragraph className='text-white mb-10 md:mb-8 lg:mb-14'>
            Enter into a world of ambitious retailers, wholesalers, and entrepreneurs who are transforming the way inventory, sales and growth are handled. You are not merely taking a tool with Owners Inventory, but rather entering an intelligent, scaled ecosystem that can get your business through any phase. Automatize, base decisions on data, and realize your full potential. We combine aspiration with success.
          </Paragraph>
              <div className="flex gap-6 flex-col w-full  md:flex-row items-center justify-center">
        
          <a href="" className="bg-transparent
    px-4 py-2.5 md:px-[70px] md:py-3 lg:px-[70px] lg:py-4 flex items-center justify-center w-full text-[10px] md:text-xs lg:text-xs font-onest font-semibold
     text-white  border border-white hover:border-transparent rounded-full hover:text-black  hover:bg-white
     transition-colors duration-300">Free Demo</a>
      <ButtonSm url='#' text='Get Stared for Free' className='w-full md:w-fit' bgColor='[#795CF5]' textColor="white" paddingLg="md:px-[38px] lg:px-[38px] lg:py-4" isBorder/>
          
        </div>
        </div>
      </div>
      
    </section>
    </div>
  );
};

export default CalltoActionBottom;
