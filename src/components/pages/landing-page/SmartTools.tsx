import React, { useState } from "react";
import MainHeading from "../typography/MainHeading";
import CardHeading from "../typography/CardHeading";
import Paragraph from "../typography/Paragraph";
import ButtonSm from "@/components/button/ButtonSm";
import ButtonOutline from "@/components/button/ButtonOutline";
import Image from "next/image";
import ContactModal from "@/components/models/ContactModal";

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
        <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
      <div
        className="w-full px-8 pt-[60px] pb-0 rounded-[40px] mt-[28px] md:mt-20 lg:mt-[100px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/home-page-images/black-background.webp')",
        }}
      >
        <MainHeading className="text-center lg:mb-6 md:mb-6 mb-5 text-white">
          Stay Ahead with Smart Tools
        </MainHeading>
        <Paragraph className="text-center lg:mb-[42px] md:mb-6 mb-5 text-white">
          Everything you need to grow your business, learn at your pace, and
          stay connected with the community of smart sellers.
        </Paragraph>
        <div className="flex gap-6 items-center justify-center">
          <a
            href=""
            className="bg-transparent
    px-4 py-2.5 md:px-5 md:py-3 lg:px-[64px] lg:py-5 flex items-center justify-center text-[10px] md:text-xs lg:text-xs font-onest font-semibold
     text-white  border border-white hover:border-transparent rounded-full hover:text-black  hover:bg-white
     transition-colors duration-300"
          >
            Watch Tutorials
          </a>
          <ButtonSm
            url="#"
            text="Contact Now"
            bgColor="[#795CF5]"
            textColor="white"
            paddingLg="lg:px-[64px] lg:py-5"
            isBorder
             onClick={() => setOpenModal(true)}
          />
        </div>

        <div className="w-full max-w-[913px] px-5 mx-auto">
          <Image
            src="/assets/home-page-images/smart-tools.webp"
            alt="Chaos Image"
            width={800}
            height={600}
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SmartTools;
