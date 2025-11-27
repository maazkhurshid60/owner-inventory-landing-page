"use client";
import React from "react";
import Link from "next/link";
import "../../../app/globals.css";
import ButtonSm from "@/components/button/ButtonSm";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";

const FeaturesCallToAction: React.FC = () => {
  return (
    <div className="wrapper">
      <section
        className="ownerinventory-landing__pos-icons-section trusted-by-section lg:mt-[100px] md:mt-28 mt-20 flex items-center justify-center rounded-[20px] lg:rounded-[40px] w-[100%] relative z-[100]"
        style={{
          backgroundImage: "url('/assets/icons-section/icons-section.webp')",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="wrapper">
          <div className="flex flex-col items-center justify-center w-full mx-auto lg:py-[160px] md:py-28 py-9 lg:px-8 md:px-6 px-3  text-center">
            <MainHeading className="text-[var(--white-color)] lg:mb-10 md:mb-6 mb-5">
              Sell Smarter. Run Your Business Better
            </MainHeading>

            <Paragraph className="text-[var(--white-color)] mb-10 md:mb-8 lg:mb-14">
              Get a POS system to make your business smooth and trouble-free in practice by having complete control of sales, inventory, and operations.
            </Paragraph>
            <div className="flex gap-6 flex-col w-full  md:flex-row items-center justify-center">
              <ButtonSm
                url="#"
                text="Get Started Instantly"
                className="w-full md:w-fit"
                bgColor="[#795CF5]"
                textColor="white"
                paddingLg="md:px-[38px] lg:px-[38px] lg:py-4"
                isBorder
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesCallToAction;
