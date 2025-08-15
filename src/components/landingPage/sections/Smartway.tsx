'use client';
import Image from 'next/image';
import React from 'react';

export default function PosIconsSection() {
  return (
    <section
      className="w-full relative rounded-[40px] py-10 px-6 md:h-[1160px] h-[772px] xl:p-[100px] lg:p-10 md:p-10 lg:mt-40 md:mt-28 mt-20 bg-cover bg-no-repeat bg-top"
      style={{
        backgroundImage: "url('/assets/icons-section/icons-section.webp')",
      }}
    >
      {/* Heading */}
      <h1 className="text-center m-auto text-white font-onest xl:text-[64px] lg:text-[56px] md:text-5xl text-4xl xl:leading-[76px] lg:leading-[66px] md:leading-[64px] max-w-2xl">
        Smart Features Built for Modern Selling
      </h1>

      {/* Center logo */}
      <a
        href="#"
        className="flex items-center justify-center w-full mx-auto md:max-w-[198px] max-w-[100px] md:mt-[279px] mt-[200px] h-[100px]"
      >
        <Image
          src="/assets/icons-section/icons-section-logo.webp"
          alt="Logo Image"
          width={198}
          height={100}
          className="w-full h-auto"
        />
      </a>

      {/* Icons (left + right + center) */}
      {iconData.map((icon, idx) => (
        <a
          key={idx}
          href="#"
          className={`absolute cursor-pointer ${icon.size} ${icon.position}`}
        >
          <Image
            src={icon.src}
            alt="Features Icon"
            width={87}
            height={87}
            className="w-full h-full"
          />
        </a>
      ))}
    </section>
  );
}

const iconData = [
  // Left Side
  {
    src: '/assets/icons-section/point-of-sale.svg',
    position: 'xl:top-[229px] xl:left-[140px] lg:left-[80px] md:left-14 left-4 top-[224px] md:top-[250px]',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/people.svg',
    position: 'md:top-[342px] top-[292px] xl:left-[464px] lg:left-[280px] md:left-[180px] left-[81px]',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/products.svg',
    position: 'md:top-[409px] top-[684px] xl:left-[230px] lg:left-[150px] md:left-[100px] right-4',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/restaurant.svg',
    position: 'md:top-[566px] top-[616px] xl:left-[80px] lg:left-[50px] md:left-[30px] left-[81px]',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/sales-order.svg',
    position: 'md:top-[566px] top-[386px] xl:left-[374px] lg:left-[200px] md:left-[160px] left-4',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/marketing.svg',
    position: 'md:bottom-[310px] bottom-[500px] xl:left-[230px] lg:left-[120px] md:left-[90px] left-[50%]',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/facilities.svg',
    position: 'md:bottom-[160px] bottom-[176px] xl:left-[140px] lg:left-[80px] md:left-[60px] left-4',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/general-tools.svg',
    position: 'md:bottom-[247px] bottom-[244px] xl:left-[444px] lg:left-[280px] md:left-[180px] left-[81px]',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/integration.svg',
    position: 'md:bottom-[140px] bottom-[176px] xl:left-[693px] lg:left-[450px] md:left-[330px] left-[50%]',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },

  // Right Side
  {
    src: '/assets/icons-section/ecomerce.svg',
    position: 'xl:top-[229px] xl:right-[150px] md:top-[250px] top-[224px] lg:right-[70px] md:right-14 right-4',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/inventory-operation.svg',
    position: 'md:top-[409px] top-[684px] xl:right-[240px] lg:right-[130px] md:right-[90px] right-[85%]',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/reports.svg',
    position: 'md:top-[342px] top-[292px] xl:right-[454px] lg:right-[250px] md:right-[170px] right-20',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/purchases.svg',
    position: 'md:top-[566px] top-[616px] xl:right-[90px] md:right-[60px] right-[81px]',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/human-resource.svg',
    position: 'md:top-[566px] top-[386px] xl:right-[297px] lg:right-[240px] md:right-[180px] right-4',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/advance-reports.svg',
    position: 'md:bottom-[320px] bottom-10 xl:right-[240px] lg:right-[140px] md:right-[120px] right-[50%]',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/acounts-finance.svg',
    position: 'md:bottom-[247px] bottom-[244px] xl:right-[454px] lg:right-[250px] md:right-[200px] right-[81px]',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    src: '/assets/icons-section/manufacturing.svg',
    position: 'md:bottom-[150px] bottom-[176px] xl:right-[150px] lg:right-[80px] md:right-[60px] right-4',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
];
