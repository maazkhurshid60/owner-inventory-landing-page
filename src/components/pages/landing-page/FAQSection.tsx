"use client";
import { useState } from "react";
import Image from "next/image";
import "../../../app/globals.css";
import ButtonLg from "@/components/button/ButtonLg";
const faqs = [
  {
    question: "What can I manage with Owners Inventory?",
    answer:
      "Owners Inventory gives you full control over your business operations from tracking stock and managing products to processing in-store sales, handling supplier purchases, monitoring customer activity, and even running a fully synced online store.",
  },
  {
    question: "Does the system support multi-location inventory?",
    answer:
      "Owners Inventory gives you full control over your business operations from tracking stock and managing products to processing in-store sales, handling supplier purchases, monitoring customer activity, and even running a fully synced online store.",
  },
  {
    question: "Can I create an online store with this platform?",
    answer:
      "Owners Inventory gives you full control over your business operations from tracking stock and managing products to processing in-store sales, handling supplier purchases, monitoring customer activity, and even running a fully synced online store.",
  },
  {
    question: "Is there a built-in POS system?",
    answer:
      "Owners Inventory gives you full control over your business operations from tracking stock and managing products to processing in-store sales, handling supplier purchases, monitoring customer activity, and even running a fully synced online store.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Owners Inventory gives you full control over your business operations from tracking stock and managing products to processing in-store sales, handling supplier purchases, monitoring customer activity, and even running a fully synced online store.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };  

  return (
    <section className="wrapper">
      <div className="rounded-[40px] bg-[#F3F4F6]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center gap-10 md-gap-[100px] lg:gap-12 w-full px-5 md:px-[77px] lg:px-[87px] py-10 md:py-[58px] lg:py-[60px]">
          {/* Left Accordion Cards */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6  rounded-[20px] bg-white overflow-hidden">
                <button
                  type="button"
                  className="accordion-toggle flex items-center justify-between w-full p-5 md:px-6 md:py-4 text-left font-medium focus:outline-none rounded-[20px] transition-colors duration-300"
                  onClick={() => toggle(index)}
                >
                  <span
                    className={`w-full max-w-[90%] text-sm md:text-xl leading-5 md:leading-9 font-onest transition-colors duration-300
                    
                    ${openIndex === index ? "text-[#795cf5]" : "text-[#231f20]"}
                    `}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={` ${
                      openIndex === index ? "hidden" : "block"
                    }`}
                  >
                    <Image
                      src="/assets/plus-icon.svg"
                      alt="Plus-icon"
                      width={24}
                      height={24}
                      priority
                    />
                  </span>
                  <span
                    className={`${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    <Image
                      src="/assets/minus-icon.svg"
                      alt="Minus-icon"
                      width={24}
                      height={24}
                      priority
                    />
                  </span>
                </button>
                <div
                  className={` overflow-hidden transition-all duration-300 ease-in-out
                    px-5 text-xs md:text-base text-[#231F20]
                    ${openIndex === index ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0 pb-0"}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-start justify-start text-left">
            <h1 className="mb-5 lg:mb-10 text-[32px] md:text-[44px] lg:text-5xl leading-10 md:leading-[60px] lg:leading-[60px] font-semibold text-[#231F20] font-onest">
              Everything You Were About to Ask
            </h1>
            <p className="mb-8 md:mb-5 xl:mb-10 text-xs md:text-xl leading-6 lg:leading-9 font-normal text-[#231F20] font-onest">
              We’ve compiled the most common questions about Owners Inventory —
              from setup and features to pricing and support. If you’re still
              unsure, our team is here to help.
            </p>
            {/* <a
              href="#"
              className="inline-block px-6 md:px-10 lg:px-12 py-3 md:py-2.5 lg:py-5 text-xs lg:text-base leading-none font-semibold text-white bg-[#1AD1B9] border border-transparent hover:bg-transparent hover:border-[#1AD1B9] hover:text-[#1AD1B9] rounded-full font-onest"
            >
              View All FAQs
            </a> */}

            <ButtonLg
              url="#"
              text="Start Now"
              bgColor="#1AD1B9"
              textColor="white"
              isBorder
            />
          </div>
        </div>
      </div>
    </section>
  );
}
