'use client';

import ButtonLg from '@/components/button/ButtonLg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface SellerClubSectionProps {
  mediaType?: 'image' | 'video';
  mediaSrc: string;
  mediaAlt?: string;
  heading: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
}

export default function SellerClubSection({
  mediaType = 'image',
  mediaSrc,
  mediaAlt = 'Media',
  heading,
  description,
  buttonText = 'Book a Free Demo',
  buttonUrl = '#',
}: SellerClubSectionProps) {
  const [bgImage, setBgImage] = useState('/assets/seller-club-mobile.webp');

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
        className="ownerinventory-landing-sellerclub overflow-y-hidden mb-20 rounded-[40px] lg:mt-40 md:mt-28 mt-20 lg:h-[480px] md:h-[632px] h-[522px]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="grid items-start justify-center w-full grid-cols-1 lg:grid-cols-12 md:gap-[76px] gap-10 lg:pt-[60px] md:pt-[90px] pt-10 lg:px-[60px] md:px-[76px] px-9">
          <div className="lg:col-span-7 lg:order-1 order-2 lg:mt-0 mt-8">
            {mediaType === 'image' ? (
              <Image
                src={mediaSrc}
                alt={mediaAlt}
                width={800}
                height={600}
                className="w-full"
              />
            ) : (
              <video
                src={mediaSrc}
                className="w-full rounded-[20px]"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>

          <div className="flex flex-col justify-center lg:items-start md:items-center items-start lg:col-span-5 lg:order-2 order-1 lg:text-left md:text-center text-left">
            <h1 className="font-onest font-semibold text-white lg:text-5xl md:text-[44px] text-[32px] md:leading-[60px] leading-10 mb-5">
              {heading}
            </h1>
            <p className="font-onest font-normal text-white lg:leading-6 leading-6 md:text-base text-xs xl:mb-14 md:mb-10 mb-8">
              {description}
            </p>

            <ButtonLg
              url="#"
              text="Book Free Demo"
              bgColor="#795CF5"
              textColor="white"
              isBorder
            />
          </div>
        </div>
      </div>
    </section>
  );
}
