'use client'; // Optional: Only needed if you're using client-side interactivity

import ButtonLg from '@/components/button/ButtonLg';
import Image from 'next/image';

import { useEffect, useState } from 'react';

export default function SellerClubSection() {
  const [bgImage, setBgImage] = useState(' /assets/seller-club-mobile.webp');

  useEffect(() => {
    const handleResize = () => {
      setBgImage(
        window.innerWidth >= 768
          ? '/assets/seller-club-bg.webp'
          : '/assets/seller-club-mobile.webp'
      );
    };

    handleResize(); // Set initial background image
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="wrapper">
      <div
        className="ownerinventory-landing-sellerclub overflow-y-hidden mb-20 rounded-[40px] lg:mt-40 md:mt-28 mt-20 lg:h-[480px] md:h-[632px] h-[522px] "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="grid items-start justify-center w-full grid-cols-1 lg:grid-cols-12 md:gap-[76px] gap-10 lg:pt-[60px] md:pt-[90px] pt-10 lg:px-[60px] md:px-[76px] px-9">
          <div className="lg:col-span-7 lg:order-1 order-2 lg:mt-0 mt-8">
            <Image
              src="/assets/features-section/testing.webp"
              alt="Sell Image"
              width={800}
              height={600}
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-center lg:items-start md:items-center items-start lg:col-span-5 lg:order-2 order-1 lg:text-left md:text-center text-left">
            <h1 className="font-onest font-semibold text-white lg:text-5xl md:text-[44px] text-[32px] md:leading-[60px] leading-10 mb-5">
              Join the Smart Sellers Club
            </h1>
            <p className="font-onest font-normal text-white lg:leading-6 leading-6 md:text-base text-xs xl:mb-14 md:mb-10 mb-8">
              Discover how easy it is to manage inventory, run POS, and launch an online store — all from a single,
              unified dashboard.
            </p>
            {/* <Link
              href="#"
              className="inline-block bg-[#795CF5] border border-transparent hover:border-[#795CF5] hover:bg-transparent hover:text-[#795CF5] rounded-full font-semibold text-white lg:text-base text-xs leading-none lg:py-5 md:py-2.5 py-3 lg:px-12 md:px-6 px-6"
            >
              Book a Free Demo
            </Link> */}
            <ButtonLg url='#' text='Book a Free Demo' bgColor='[#795CF5]' textColor="white" isBorder/>

          </div>
        </div>
      </div>
    </section>
  );
}
