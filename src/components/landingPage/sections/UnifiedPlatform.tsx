import ButtonLg from "@/components/button/ButtonLg";
import Image from "next/image";
import React from "react";

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
  return (
    <section className= " max-w-[1312px] mx-auto w-full mt-52 rounded-4xl bg-[#F3F4F6] py-12 sm:py-20 xl:py-16 px-4 md:px-8 xl:px-0">
      <div className=" flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 lg:gap-14   px-6 sm:px-10 xl:px-28 xl:gap-24 rounded-[40px]">
        {/* Cards Column */}
        <div className="flex flex-col items-center justify-start gap-5 w-full order-2 md:order-1 md:w-1/2 lg:w-2/5 h-[560px] lg:h-[750px] overflow-auto">
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

        {/* Text Column */}
        <div className="w-full order-1 md:order-2 md:w-1/2 lg:w-3/5">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-[40px] lg:text-5xl xl:text-6xl leading-[48px] md:leading-[56px] lg:leading-[60px] xl:leading-[76px] mb-6 xl:mb-10 font-semibold text-[#231F20]">
              The Power of One Unified Platform
            </h1>
            <p className="text-sm lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 mb-10 xl:mb-14 text-[#231F20]">
              With Owners Inventory, everything you need—inventory, POS, e-commerce, customer management, and
              reporting—works together seamlessly in one place. Simplify your operations, reduce manual errors, and
              scale your business faster with a platform built to unify, automate, and grow alongside you.
            </p>
            {/* <a
              href="#"
              className="inline-block px-6 md:px-6 lg:px-12 py-3 md:py-2.5 lg:py-5 text-base md:text-xs leading-none font-semibold text-white bg-[#1AD1B9] border border-transparent hover:border-[#1AD1B9] hover:bg-transparent hover:text-[#1AD1B9] mb-3 rounded-full transition-colors duration-300"
            >
              Book a Free Demo
            </a> */}
            <ButtonLg url='#' text='Book a Free Demo' bgColor='[#1AD1B9]' textColor="white" isBorder/>

          </div>
        </div>
      </div>
    </section>
  );
}
