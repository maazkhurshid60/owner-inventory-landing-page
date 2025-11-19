"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLg from "@/components/button/ButtonLg";
import Image from "next/image";
import React from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: "/assets/unified-platform/unified-operations.svg",
    title: "Unified Operations",
    description:
      "Manage inventory, POS, e-commerce, and customer data from one unified system — no switching between tools.",
  },
  {
    icon: "/assets/unified-platform/real-time-reporting.svg",
    title: "Real-Time Reporting",
    description:
      "Make faster, smarter decisions with live sales insights, stock analytics, and performance dashboards.",
  },
  {
    icon: "/assets/unified-platform/cost-effection.svg",
    title: "Cost-Efficient Operations",
    description:
      "Replace multiple apps with one smart solution, save on software costs and reduce manual errors.",
  },
  {
    icon: "/assets/unified-platform/built-to-scale.svg",
    title: "Built to Scale with You",
    description:
      "Whether you’re starting small or growing fast, Owners Inventory is flexible enough to grow alongside your business.",
  },
];

export default function UnifiedPlatform() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".pinned-section-2",
          start: "top top",
          end: "+=" + window.innerHeight * 2,
          pin: ".pinned-section-2",
          scrub: 2,
          // markers: true,
        },
      });

      tl1.to(".unified-platform-cards", { y: "-50%", duration: 1 }, 0);
    });

    mm.add("(min-width: 1024px)", () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".pinned-section-2",
          start: "top -15%",
          end: "+=" + window.innerHeight * 2,
          pin: ".pinned-section-2",
          scrub: 2,
          // markers: true,
        },
      });

      tl1.to(".unified-platform-cards", { y: "-50%", duration: 1 }, 0);
    });

    return () => mm.revert(); // cleanup on unmount
  }, []);

  return (
    <div className="pinned-section-2 lg:h-auto md:h-screen flex items-center justify-center md:mt-0 mt-6">
      <section className="max-w-[1312px] mx-auto pt-4 md:pt-28 lg:pt-40">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5 lg:gap-14 xl:gap-32 py-8 sm:py-20 xl:py-16 px-6 sm:px-10 xl:px-28 rounded-[40px] bg-[#F3F4F6]">
          {/* Cards Column */}
          <div className="md:order-1 order-2 md:w-3/6 lg:w-2/5 md:h-[560px] lg:h-[695px] overflow-hidden">
            <div className="unified-platform-cards flex flex-col items-center justify-start gap-4 w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full max-w-[342px] md:max-w-full p-6 lg:p-8 rounded-[30px] border border-gray-100 shadow-[0px_0px_20px_0px_#00000005] bg-white"
                >
                  <div className="w-20 h-20 lg:w-[100px] lg:h-[100px] flex items-center justify-center mb-5 lg:mb-10 rounded-xl bg-[#F3F4F6]">
                    <Image
                      src={card.icon}
                      alt={`${card.title} Icon`}
                      width={56}
                      height={56}
                      className="w-14 h-14"
                    />
                  </div>
                  <h3 className="text-xl lg:text-2xl leading-8 lg:leading-10 mb-3 lg:mb-4 font-semibold text-[#231F20]">
                    {card.title}
                  </h3>
                  <p className="text-sm lg:text-base leading-6 text-[#231F20]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full order-1 md:order-2 md:w-1/2 lg:w-3/5">
            <div className="flex flex-col items-center justify-center">
              <MainHeading className="text-center mb-4"> 
                 Features That Set Us Apart
              </MainHeading>
              <Paragraph className="text-center mb-6">Modern tools designed to simplify, scale, and smarten your business.</Paragraph>

              <ButtonLg
                url="#"
                text="View All FAQs"
                bgColor="#1AD1B9"
                textColor="white"
                isBorder
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
