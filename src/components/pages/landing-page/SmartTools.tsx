import React, { useState } from "react";
import MainHeading from "../typography/MainHeading";
import CardHeading from "../typography/CardHeading";
import Paragraph from "../typography/Paragraph";
import ButtonSm from "@/components/button/ButtonSm";
import ButtonOutline from "@/components/button/ButtonOutline";
import Image from "next/image";
import ContactModal from "@/components/models/ContactModal";
import Link from "next/link";

const usedTools = [
  {
    id: 1,
    name: "Shopify",
    image: "/assets/home-page-images/tools-section/shopify.svg",
  },
  {
    id: 2,
    name: "WooCommerce",
    image: "/assets/home-page-images/tools-section/woocomerce.svg",
  },
  {
    id: 3,
    name: "QuickBooks",
    image: "/assets/home-page-images/tools-section/quick-book.svg",
  },
  {
    id: 4,
    name: "Xero",
    image: "/assets/home-page-images/tools-section/xero.svg",
  },
  {
    id: 5,
    name: "Stripe",
    image: "/assets/home-page-images/tools-section/stripe.svg",
  },
];

const SmartTools = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="wrapper">
      <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      <div
        className="w-full px-8 pt-[60px] pb-0 rounded-[20px] lg:rounded-[40px] mt-[28px] md:mt-20 lg:mt-[100px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/home-page-images/black-background.webp')",
        }}
      >
        <MainHeading className="text-center lg:mb-6 md:mb-6 mb-5 text-[var(--white-color)]">
          Stay Ahead with Smart Tools
        </MainHeading>
        <Paragraph className="text-center lg:mb-[42px] md:mb-6 mb-5 text-[var(--white-color)]">
          Everything you need to grow your business, learn at your pace, and
          stay connected with the community of smart sellers.
        </Paragraph>
        <div className="flex gap-3 lg:gap-6 flex-col md:flex-row items-center justify-center relative z-50">
          <Link
            href=""
            className="bg-transparent w-full md:w-fit
    px-4 py-2.5 md:px-5 md:py-3 lg:px-[40px] xl:px-[64px] lg:py-4 flex items-center justify-center text-base font-onest font-semibold
     text-[var(--white-color)]  border border-[var(--white-color)] hover:border-transparent rounded-full hover:text-black  hover:bg-[var(--white-color)]
     transition-colors duration-300"
          >
            Watch Tutorials
          </Link>
          <ButtonSm
            url="#"
            text="Contact Now"
            bgColor="[#795CF5]"
            textColor="white"
            paddingLg="lg:px-[40px] xl:px-[64px] lg:py-4"
            isBorder
            className="w-full md:w-fit"
            onClick={() => setOpenModal(true)}
          />
        </div>

        <div className="w-full lg:max-w-[1000px] md:max-w-[760px] xl:max-w-[1065px] bg-transparent px-5 relative z-30 mx-auto md:mt-[-88px] lg:mt-[-162px]">
          {/* <Image
            src="/assets/home-page-images/smart-tools.webp"
            alt="Chaos Image"
            width={800}
            height={600}
            loading="lazy"
            className="w-full"
          /> */}
          <video
            className="w-full object-cover bg-transparent rounded-3xl"
            muted
            playsInline
            autoPlay
            loop
            preload="auto"
            controls={false}
          >
            <source
              src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/stay-ahead.mp4"
              type="video/mp4"
            />
            <source
              src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/stay-ahead.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default SmartTools;
