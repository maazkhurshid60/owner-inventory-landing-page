"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SellerClubSection2Props {
  description: string;
  highlight: string;
  buttonLabel: string;
  buttonHref: string;
  imageSrc: string;
}

export default function SellerClubSection2({
  description,
  highlight,
  buttonLabel,
  buttonHref,
  imageSrc,
}: SellerClubSection2Props) {
  const [bgImage, setBgImage] = useState("/assets/seller-club-mobile.webp");

  useEffect(() => {
    const handleResize = () => {
      setBgImage(
        window.innerWidth >= 768
          ? "/assets/seller-club-bg.webp"
          : "/assets/seller-club-mobile.webp"
      );
    };

    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="wrapper">
      <div
        className="ownerinventory-landing-sellerclub mb-20 rounded-[40px] lg:mt-40 md:mt-28 mt-20"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex flex-col justify-between items-center pb-0 lg:pt-[60px] md:pt-[90px] pt-10 lg:px-[60px] md:px-[76px] px-4">
          {/* Text Content */}
          <div className="flex flex-col justify-center lg:items-center md:items-center items-center lg:text-left md:text-center text-left">
            <p className="font-onest font-normal text-white lg:leading-[48px] leading-6 lg:text-[28px] md:text-xl text-base xl:mb-14 md:mb-10 mb-8 text-center">
              {description}{" "}
              <span className="lg:block inline">{highlight}</span>
            </p>

            <Link
              href={buttonHref}
              className="inline-block bg-[#1AD1B9] border border-transparent hover:border-[#1AD1B9] hover:bg-transparent hover:text-[#1AD1B9] rounded-full font-semibold text-white lg:text-base text-xs leading-none lg:py-5 md:py-2.5 py-3 lg:px-12 md:px-6 px-6 mb-6"
            >
              {buttonLabel}
            </Link>
          </div>

          {/* Foreground Image */}
          <div className="lg:order-2 order-2 lg:mt-0 mt-8">
            <Image
              src={imageSrc}
              alt="Sell Image"
              loading="lazy"
              width={800}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
