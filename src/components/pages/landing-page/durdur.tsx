"use client";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const industries = [
  {
    title: "Retail Stores",
    description:
      "Barcode scanning, price overrides, and detailed sales reports help you move faster at the counter while keeping inventory and revenue under control, perfect for convenience stores, electronics, cosmetics, and more.",
    image: "/assets/industry-type/retail-store.webp",
  },
  {
    title: "Restaurant Types",
    description:
      "Speed up service with quick-bill POS, manage tables and menus with ease, and track ingredients or stock levels in real-time — ensuring smooth operations from kitchen to counter.",
    image: "/assets/industry-type/restaurant.webp",
  },
  {
    title: "Wholesalers",
    description:
      "Handle bulk orders with customer-specific pricing, manage multi-location inventory, and keep fulfillment running efficiently with a system built for volume.",
    image: "/assets/industry-type/whole-sale.webp",
  },
  {
    title: "Pharmacies",
    description:
      "Ensure safety and compliance with batch tracking, expiry alerts, and detailed logs, all while managing walk-in sales and digital prescriptions effortlessly.",
    image: "/assets/industry-type/pharmacy.webp",
  },
  {
    title: "Fashion & Apparel",
    description:
      "Track every size, color, and style with product variants, manage seasonal collections, and keep stock aligned across online and physical stores, whether you sell streetwear, shoes, or high fashion.",
    image: "/assets/industry-type/fashion.webp",
  },
  {
    title: "Hardware Stores",
    description:
      "Manage diverse inventory with variants, track tools and equipment, and handle both retail and contractor sales efficiently.",
    image: "/assets/industry-type/hardware.webp",
  },
];

export default function IndustryPOSShowcase() {
  const [activeCard, setActiveCard] = useState(0);
  const [screenSize, setScreenSize] = useState("desktop");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate visible cards based on screen size
  const getVisibleCardsCount = () => {
    switch(screenSize) {
      case "mobile": return 1;
      case "tablet": return 2;
      case "smallDesktop": return 2;
      case "desktop": return 3;
      default: return 3;
    }
  };

  const visibleCardsCount = getVisibleCardsCount();
  const visibleCards = industries.slice(currentSlide, currentSlide + visibleCardsCount);

  // Calculate max slides based on screen size
  const maxSlides = Math.max(0, industries.length - visibleCardsCount);

  // Next/Prev with animation
  const nextSlide = () => {
    if (currentSlide < maxSlides && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide && index >= 0 && index <= maxSlides) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else if (width < 1200) {
        setScreenSize("smallDesktop");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset current slide when screen size changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [screenSize]);

  const toggleCard = (index: number) => {
    const globalIndex = currentSlide + index;
    
    // On mobile and tablet, toggle card open/close on click
    if (screenSize === "mobile" || screenSize === "tablet") {
      setActiveCard(activeCard === globalIndex ? -1 : globalIndex);
    }
    // On desktop, we keep hover functionality
  };

  // Check if card is expanded (for mobile/tablet)
  const isCardExpanded = (index: number) => {
    const globalIndex = currentSlide + index;
    return (screenSize === "mobile" || screenSize === "tablet") && activeCard === globalIndex;
  };

  // Calculate card width based on screen size and expanded state
  const getCardWidth = (index: number) => {
    const isExpanded = isCardExpanded(index);
    
    if (screenSize === "tablet" && isExpanded) {
      return "min-w-[70%]";
    }
    
    switch(screenSize) {
      case "mobile": return "min-w-full";
      case "tablet": return "min-w-[50%]";
      case "smallDesktop": return "min-w-[50%]";
      case "desktop": return "min-w-[33%]";
      default: return "min-w-[33%]";
    }
  };

  const getHoverCardWidth = () => {
    switch(screenSize) {
      case "mobile": return "hover:min-w-full";
      case "tablet": return "hover:min-w-[60%]";
      case "smallDesktop": return "hover:min-w-[60%]";
      case "desktop": return "hover:min-w-[48%]";
      default: return "hover:min-w-[48%]";
    }
  };

  const isMobileOrTablet = screenSize === "mobile" || screenSize === "tablet";

  return (
    <section className="flex items-stretch justify-center relative xl:py-5 md:px-0 px-6 md:py-5 py-5 lg:mt-0 md:mt-6 mt-10 mx-auto rounded-2xl">
      <div className="flex items-center justify-center lg:py-[30px] md:py-14 py-2 rounded-br-2xl rounded-tr-2xl w-full">
        <div className="w-full overflow-hidden">
          {/* SLIDER CONTAINER */}
          <div className="flex flex-col gap-10 w-full">
            {/* WRAPPER */}
            <div className="flex gap-4 lg:gap-12 items-stretch transition-all duration-500 ease-in-out transform">
              {visibleCards.map((item, i) => {
                const globalIndex = currentSlide + i;
                const isExpanded = isCardExpanded(i);

                const cardBg =
                  globalIndex % 2 === 0 ? "bg-[#1AD1B9]" : "bg-[#795CF5]";
                const hoverBg =
                  globalIndex % 2 === 0
                    ? "group-hover:bg-[#1AD1B9]"
                    : "group-hover:bg-[#795CF5]";

                // For tablet active cards, apply same styles as desktop hover
                const isTabletActive = screenSize === "tablet" && isExpanded;
                const showHoverStyles = !isMobileOrTablet || isTabletActive;

                return (
                  <div
                    key={globalIndex}
                    onClick={() => toggleCard(i)}
                    className={`group relative grid grid-cols-12 gap-4 ${getCardWidth(i)} ${screenSize !== "tablet" ? getHoverCardWidth() : ""} h-[370px] p-4 lg:p-6 xl:p-8 
                      rounded-[30px] shadow-[0px_0px_20px_0px_#00000005]
                      ${cardBg}
                      ${(!isMobileOrTablet && "hover:bg-[#F3F3F3]") || ""}
                      ${isExpanded ? "bg-[#F3F3F3]" : ""}
                      transition-all duration-1000 overflow-hidden cursor-pointer
                      ${
                        isAnimating
                          ? "transition-transform duration-500 ease-in-out"
                          : ""
                      }`}
                  >
                    <div
                      className={`col-span-8 flex flex-col justify-between gap-6 transition-all duration-1000
                        ${showHoverStyles ? "col-span-8" : ""}`}
                    >
                      <div>
                        <h4
                          className={`text-[24px] lg:text-[28px] xl:text-[32px] font-medium mb-4 ${
                            showHoverStyles ? "text-[#231F20]" : "text-white"
                          } transition-colors duration-1000`}
                        >
                          {item.title}
                        </h4>

                        <p
                          className={`text-sm lg:text-base text-[#666666] transition-opacity duration-700
                            ${showHoverStyles ? "opacity-100" : "opacity-0"}
                          `}
                        >
                          {item.description}
                        </p>
                      </div>

                      <Link
                        href="#"
                        className={`flex justify-between absolute bottom-6 left-6 lg:left-8 items-center rounded-full bg-white 
                          py-[6px] ps-4 pe-1 w-[85%] max-w-full gap-4 text-[#333333] cursor-pointer text-sm lg:text-base font-semibold leading-[100%]
                          transition-[max-width] duration-1000 overflow-hidden
                          ${showHoverStyles ? "max-w-[180px]" : "max-w-full"}`}
                      >
                        Read more
                        <span
                          className={`px-4 py-[18px] rounded-[50%] bg-[#F3F3F3] transition-colors duration-1000 ${
                            showHoverStyles ? hoverBg : ""
                          }`}
                        >
                          <MoveUpRight size={20} />
                        </span>
                      </Link>
                    </div>

                    {/* IMAGE */}
                    <div
                      className={`col-span-4 transition-opacity duration-700
                        ${showHoverStyles ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      <Image
                        src={item.image}
                        alt="card-img"
                        width={800}
                        height={600}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* SVG DECORATIONS */}
                    <div
                      className={`absolute top-14 left-0 transition-all duration-1000 ${
                        showHoverStyles ? "hidden" : "block"
                      }`}
                    >
                      <svg
                        width="109"
                        height="201"
                        viewBox="0 0 109 201"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.31">
                          <circle
                            opacity="0.58"
                            cx="1.93124"
                            cy="109.93"
                            r="56.4429"
                            transform="rotate(-117.665 1.93124 109.93)"
                            fill="white"
                          />
                          <path
                            d="M-26.0787 34.5577C10.3286 15.472 55.3146 29.514 74.4003 65.9213C93.486 102.329 79.4441 147.315 43.0368 166.4C6.62944 185.486 -38.3565 171.444 -57.4422 135.037C-76.528 98.6294 -62.486 53.6434 -26.0787 34.5577ZM38.8728 158.457C70.8933 141.671 83.2433 102.106 66.4573 70.0852C49.6713 38.0647 10.1057 25.7147 -21.9147 42.5008C-53.9352 59.2868 -66.2852 98.8523 -49.4992 130.873C-32.7132 162.893 6.8523 175.243 38.8728 158.457Z"
                            fill="white"
                          />
                          <path
                            d="M-26.0787 34.5577C10.3286 15.472 55.3146 29.514 74.4003 65.9213C93.486 102.329 79.4441 147.315 43.0368 166.4C6.62944 185.486 -38.3565 171.444 -57.4422 135.037C-76.528 98.6294 -62.486 53.6434 -26.0787 34.5577ZM38.8728 158.457C70.8933 141.671 83.2433 102.106 66.4573 70.0852C49.6713 38.0647 10.1057 25.7147 -21.9147 42.5008C-53.9352 59.2868 -66.2852 98.8523 -49.4992 130.873C-32.7132 162.893 6.8523 175.243 38.8728 158.457Z"
                            fill="url(#paint0_linear_1504_442)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1504_442"
                            x1="-30.7951"
                            y1="205.105"
                            x2="-35.0605"
                            y2="97.9782"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div
                      className={`absolute right-0 top-0 transition-all duration-1000 ${
                        showHoverStyles ? "hidden" : "block"
                      }`}
                    >
                      <svg
                        width="111"
                        height="94"
                        viewBox="0 0 111 94"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M151.526 18.9166C149.997 59.9948 115.457 92.0555 74.3787 90.5263C33.3005 88.997 1.23975 54.4568 2.76901 13.3787C4.29826 -27.6995 38.8384 -59.7603 79.9166 -58.231C120.995 -56.7018 153.056 -22.1616 151.526 18.9166ZM11.7311 13.7123C10.3861 49.8409 38.5838 80.2192 74.7123 81.5642C110.841 82.9092 141.219 54.7115 142.564 18.5829C143.909 -17.5456 115.712 -47.924 79.583 -49.269C43.4544 -50.6139 13.0761 -22.4163 11.7311 13.7123Z"
                          fill="white"
                        />
                        <path
                          d="M151.526 18.9166C149.997 59.9948 115.457 92.0555 74.3787 90.5263C33.3005 88.997 1.23975 54.4568 2.76901 13.3787C4.29826 -27.6995 38.8384 -59.7603 79.9166 -58.231C120.995 -56.7018 153.056 -22.1616 151.526 18.9166ZM11.7311 13.7123C10.3861 49.8409 38.5838 80.2192 74.7123 81.5642C110.841 82.9092 141.219 54.7115 142.564 18.5829C143.909 -17.5456 115.712 -47.924 79.583 -49.269C43.4544 -50.6139 13.0761 -22.4163 11.7311 13.7123Z"
                          fill="url(#paint0_linear_1504_447)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1504_447"
                            x1="5.87024"
                            y1="-69.9254"
                            x2="100.954"
                            y2="-20.393"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SLIDER BUTTONS - Show on all devices */}
            <div className="flex justify-end items-center gap-2 mb-6 lg:mb-[10px]">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0 || isAnimating}
                className={`p-2 rounded-full shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] border transition-all duration-300 ${
                  currentSlide === 0 || isAnimating
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-600 hover:bg-gray-50 hover:scale-105 active:scale-95"
                } ${isAnimating ? "opacity-50" : ""}`}
                aria-label="Previous slide"
              >
                <Image
                  src="/assets/home-page-images/slider-arrow-left.svg"
                  alt="arrow-right"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-[20px] h-[20px] transition-transform duration-300"
                />
              </button>

              {/* Bullets */}
              <div className="flex gap-2">
                {Array.from({ length: maxSlides + 1 }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      disabled={isAnimating}
                      className={`transition-all duration-500 ease-in-out ${
                        index === currentSlide
                          ? "w-[34px] h-[15px] bg-[rgba(26,209,185,1)] rounded-[60px] transform scale-110"
                          : "w-[16px] h-[15px] bg-[rgba(243,244,246,1)] rounded-[60px] hover:bg-gray-300"
                      } ${isAnimating ? "opacity-70" : ""}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  )
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                disabled={currentSlide === maxSlides || isAnimating}
                className={`p-2 rounded-full border shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 ${
                  currentSlide === maxSlides || isAnimating
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-600 hover:bg-gray-50 hover:scale-105 active:scale-95"
                } ${isAnimating ? "opacity-50" : ""}`}
                aria-label="Next slide"
              >
                <Image
                  src="/assets/home-page-images/slider-arrow-right.svg"
                  alt="arrow-right"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-[20px] h-[20px] transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}