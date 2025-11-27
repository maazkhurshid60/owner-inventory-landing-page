"use client";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import ButtonSm from "@/components/button/ButtonSm";

const industries = [
  {
    title: "Retail Stores",
    description:
      "Barcode scanning, price overrides, and detailed sales reports help you move faster at the counter while keeping inventory and revenue under control, perfect for convenience stores, electronics, cosmetics, and more.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp", // Add mobile image
  },
  {
    title: "Restaurant Types",
    description:
      "Speed up service with quick-bill POS, manage tables and menus with ease, and track ingredients or stock levels in real-time — ensuring smooth operations from kitchen to counter.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp", // Add mobile image
  },
  {
    title: "Wholesalers",
    description:
      "Handle bulk orders with customer-specific pricing, manage multi-location inventory, and keep fulfillment running efficiently with a system built for volume.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp", // Add mobile image
  },
  {
    title: "Pharmacies",
    description:
      "Ensure safety and compliance with batch tracking, expiry alerts, and detailed logs, all while managing walk-in sales and digital prescriptions effortlessly.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp", // Add mobile image
  },
  {
    title: "Fashion & Apparel",
    description:
      "Track every size, color, and style with product variants, manage seasonal collections, and keep stock aligned across online and physical stores, whether you sell streetwear, shoes, or high fashion.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp", // Add mobile image
  },
];

export default function IndustryPOSShowcase() {
  const [activeCard, setActiveCard] = useState(0);
  const [screenSize, setScreenSize] = useState("desktop");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [isHovering, setIsHovering] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(0);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const linkRefsss = useRef<(HTMLAnchorElement | null)[]>([]);
  const svgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const timelineRefs = useRef<(gsap.core.Timeline | null)[]>([]);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate visible cards based on screen size
  const getVisibleCardsCount = () => {
    switch (screenSize) {
      case "mobile":
        return 1;
      case "tablet":
        return 2;
      case "smallDesktop":
        return 3;
      case "desktop":
        return 3;
      default:
        return 3;
    }
  };

  const visibleCardsCount = getVisibleCardsCount();

  const getVisibleCards = () => {
    const cards = [];
    const totalCards = industries.length;

    for (let i = 0; i < visibleCardsCount; i++) {
      const index = (currentSlide + i) % totalCards;
      cards.push({
        ...industries[index],
        originalIndex: index,
        position: i,
      });
    }

    return cards;
  };

  const visibleCards = getVisibleCards();
  const maxSlides = industries.length;

  // Initialize GSAP animations on mount and slide change
  useEffect(() => {
    visibleCards.forEach((_, index) => {
      // Set initial states
      if (screenSize !== "mobile") {
        gsap.set(descriptionRefs.current[index], { opacity: 0 });
        gsap.set(imageRefs.current[index], { opacity: 0 });
        gsap.set(linkRefs.current[index], { width: "100%", maxWidth: "85%" });
        gsap.set(svgRefs.current[index], { opacity: 0.4 });
      }

      // Reset card widths based on screen size and expanded state
      if (screenSize === "tablet") {
        if (expandedCard === index) {
          gsap.set(cardRefs.current[index], {
            minWidth: "63%",
            backgroundColor: "var(--background-light)",
          });
          gsap.set(descriptionRefs.current[index], { opacity: 1 });
          gsap.set(imageRefs.current[index], { opacity: 1 });
          gsap.set(linkRefs.current[index], {
            width: "auto",
            maxWidth: "180px",
          });
          gsap.set(svgRefs.current[index], { opacity: 0 });
          gsap.set(titleRefs.current[index], { color: "var(--text-dark)" });
        } else {
          gsap.set(cardRefs.current[index], {
            minWidth: "32%",
            backgroundColor:
              visibleCards[index].originalIndex % 2 === 0
                ? "#1AD1B9"
                : "#795CF5",
          });
        }
      } else if (screenSize === "mobile") {
        gsap.set(cardRefs.current[index], {
          minWidth: "100%",
          maxWidth: "100%",
          backgroundColor: "var(--background-light)",
        });
        gsap.set(descriptionRefs.current[index], { opacity: 1 });
        gsap.set(imageRefs.current[index], { opacity: 1 });
        gsap.set(linkRefs.current[index], { width: "auto", maxWidth: "180px" });
        gsap.set(svgRefs.current[index], { opacity: 0 });
        gsap.set(titleRefs.current[index], { color: "var(--text-dark)" });
      } else {
        // Desktop and other screens
        gsap.set(cardRefs.current[index], {
          minWidth: "auto",
          maxWidth: "32%",
          backgroundColor:
            visibleCards[index].originalIndex % 2 === 0 ? "#1AD1B9" : "#795CF5",
        });
      }
    });
  }, [currentSlide, screenSize, expandedCard]);

  // GSAP Animations for tablet click - FASTER ANIMATIONS
  const expandCardOnTablet = (index: number) => {
    if (screenSize !== "tablet") return;

    const card = cardRefs.current[index];
    const description = descriptionRefs.current[index];
    const image = imageRefs.current[index];
    const link = linkRefs.current[index];
    const svgs = svgRefs.current[index];
    const title = titleRefs.current[index];

    if (!card || !description || !image || !link || !svgs || !title) return;

    // Kill any existing timelines - FIXED: Check if timeline exists before killing
    timelineRefs.current.forEach((tl, i) => {
      if (tl) {
        tl.kill();
        timelineRefs.current[i] = null;
      }
    });

    const newTimeline = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "power2.inOut",
      },
    });

    timelineRefs.current[index] = newTimeline;

    // EXPAND ANIMATION for clicked card - FASTER
    newTimeline
      // Expand this card to 65%
      .to(
        card,
        {
          minWidth: "63%",
          backgroundColor: "var(--background-light)",
          duration: 0.4,
        },
        0
      )
      // Show description and image with minimal delay
      .to(
        description,
        {
          opacity: 1,
          duration: 0.4,
        },
        0.1
      )
      .to(
        image,
        {
          opacity: 1,
          duration: 0.4,
        },
        0.1
      )
      // Hide SVGs
      .to(
        svgs,
        {
          opacity: 0,
          duration: 0.3,
        },
        0
      )
      // Change title color
      .to(
        title,
        {
          color: "var(--text-dark)",
          duration: 0.3,
        },
        0
      )
      // Animate link width
      .to(
        link,
        {
          width: "auto",
          maxWidth: "180px",
          duration: 0.5,
        },
        0
      );

    // Compress other cards to 34% - FASTER
    visibleCards.forEach((_, i) => {
      if (i !== index) {
        const otherCard = cardRefs.current[i];
        const otherDescription = descriptionRefs.current[i];
        const otherImage = imageRefs.current[i];
        const otherLink = linkRefs.current[i];
        const otherSvgs = svgRefs.current[i];
        const otherTitle = titleRefs.current[i];

        if (
          otherCard &&
          otherDescription &&
          otherImage &&
          otherLink &&
          otherSvgs &&
          otherTitle
        ) {
          newTimeline
            // Compress other card to 34%
            .to(
              otherCard,
              {
                minWidth: "32%",
                duration: 0.4,
              },
              0
            )
            // Hide description and image
            .to(
              [otherDescription, otherImage],
              {
                opacity: 0,
                duration: 0.3,
              },
              0
            )
            // Show SVGs
            .to(
              otherSvgs,
              {
                opacity: 0.4,
                duration: 0.3,
              },
              0
            )
            // Reset title color
            .to(
              otherTitle,
              {
                color: "var(--white-color)",
                duration: 0.3,
              },
              0
            )
            // Reset link width
            .to(
              otherLink,
              {
                width: "100%",
                maxWidth: "85%",
                duration: 0.4,
              },
              0
            );
        }
      }
    });

    setExpandedCard(index);
  };

  const resetTabletCards = () => {
    if (screenSize !== "tablet") return;

    // Kill any existing timelines - FIXED: Check if timeline exists before killing
    timelineRefs.current.forEach((tl, i) => {
      if (tl) {
        tl.kill();
        timelineRefs.current[i] = null;
      }
    });

    const resetTimeline = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "power2.out",
      },
    });

    visibleCards.forEach((cardData, i) => {
      const card = cardRefs.current[i];
      const description = descriptionRefs.current[i];
      const image = imageRefs.current[i];
      const link = linkRefs.current[i];
      const svgs = svgRefs.current[i];
      const title = titleRefs.current[i];

      if (!card || !description || !image || !link || !svgs || !title) return;

      const cardBg = cardData.originalIndex % 2 === 0 ? "#1AD1B9" : "#795CF5";

      resetTimeline
        // Reset card width to default tablet size (48%)
        .to(
          card,
          {
            minWidth: "48%",
            backgroundColor: cardBg,
            duration: 0.5,
          },
          0
        )
        // Hide description and image
        .to(
          [description, image],
          {
            opacity: 0,
            duration: 0.3,
          },
          0
        )
        // Show SVGs
        .to(
          svgs,
          {
            opacity: 0.4,
            duration: 0.3,
          },
          0
        )
        // Reset title color
        .to(
          title,
          {
            color: "var(--white-color)",
            duration: 0.3,
          },
          0
        )
        // Reset link width
        .to(
          link,
          {
            width: "100%",
            maxWidth: "85%",
            duration: 0.4,
          },
          0
        );
    });

    setExpandedCard(null);
  };

  const handleCardClick = (index: number) => {
    if (screenSize === "tablet") {
      const globalIndex = visibleCards[index].originalIndex;

      if (expandedCard === index) {
        resetTabletCards();
      } else {
        expandCardOnTablet(index);
      }
    }
 
  };

  const autoSlideInterval = 5000;

  const startAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }

    autoSlideTimerRef.current = setInterval(() => {
      if (
        !isAnimating &&
        !isHovering &&
        (screenSize !== "tablet" || expandedCard === null)
      ) {
        nextSlide();
      }
    }, autoSlideInterval);
  };

  const stopAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
  };


  const handleCardHover = (index: number) => {
    if (screenSize !== "desktop" || expandedCard !== null) return;

    setIsHovering(true);
    stopAutoSlide();

    
    const existingTimeline = timelineRefs.current[index];
    if (existingTimeline) {
      existingTimeline.kill();
      timelineRefs.current[index] = null;
    }

    const card = cardRefs.current[index];
    const description = descriptionRefs.current[index];
    const image = imageRefs.current[index];
    const link = linkRefs.current[index];
    const svgs = svgRefs.current[index];
    const title = titleRefs.current[index];

    if (!card || !description || !image || !link || !svgs || !title) return;

    // Create timeline for this specific card
    // Create timeline for this specific card
const newTimeline = gsap.timeline({
  defaults: {
    duration: 0.6,
    ease: "power2.inOut",
  },
});

timelineRefs.current[index] = newTimeline;

// HOVER IN ANIMATION for this specific card - FASTER
newTimeline
  // Expand this card - at position 0
  .to(
    card,
    {
      minWidth: "41%",
      duration: 0.5,
    },
    0 // At timeline position 0
  )

  // All other properties at timeline position 1 (after the width expansion)
  .to(
    card,
    {
      backgroundColor: "var(--background-light)",
      duration: 0.4,
    },
    0.6
  )
  .to(
    [description, image],
    {
      opacity: 1,
      duration: 0.4,
    },
    0.6
  )
  // Hide SVGs
  .to(
    svgs,
    {
      opacity: 0,
      duration: 0.4,
    },
    0.6
  )
  // Change title color
  .to(
    title,
    {
      color: "var(--text-dark)",
      duration: 0.4,
    },
    0.6
  )
  // Animate link width
  .to(
    link,
    {
      width: "auto",
      maxWidth: "180px",
      duration: 0.6,
    },
   0.6
  );

// Compress other cards - FASTER
visibleCards.forEach((_, i) => {
  if (i !== index) {
    const otherCard = cardRefs.current[i];
    if (otherCard) {
      newTimeline.to(
        otherCard,
        {
          minWidth: `calc(${(100 - 42) / (visibleCardsCount - 1)}% - 20px)`,
          duration: 0.5,
        },
        0 
      );
    }
  }
});
  };

  const handleCardLeave = (index: number) => {
    if (screenSize !== "desktop" || expandedCard !== null) return;

    setIsHovering(false);
    startAutoSlide();

    // Kill timeline for this card - FIXED: Check if timeline exists
    const existingTimeline = timelineRefs.current[index];
    if (existingTimeline) {
      existingTimeline.kill();
      timelineRefs.current[index] = null;
    }

    // Reset all cards to original state - FASTER
    const resetTimeline = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "power2.out",
      },
    });

    visibleCards.forEach((cardData, i) => {
      const card = cardRefs.current[i];
      const description = descriptionRefs.current[i];
      const image = imageRefs.current[i];
      const link = linkRefs.current[i];
      const svgs = svgRefs.current[i];
      const title = titleRefs.current[i];

      if (!card || !description || !image || !link || !svgs || !title) return;

      const cardBg = cardData.originalIndex % 2 === 0 ? "#1AD1B9" : "#795CF5";

      resetTimeline
        // Reset card width and background
        .to(
          card,
          {
            minWidth: "32%",
            backgroundColor: cardBg,
            duration: 0.5,
          },
          0
        )
        // Hide description and image
        .to(
          [description, image],
          {
            opacity: 0,
            duration: 0.3,
          },
          0
        )
        // Show SVGs
        .to(
          svgs,
          {
            opacity: 0.4,
            duration: 0.3,
          },
          0
        )
        // Reset title color
        .to(
          title,
          {
            color: "var(--white-color)",
            duration: 0.3,
          },
          0
        )
        // Reset link width
        .to(
          link,
          {
            width: "100%",
            maxWidth: "85%",
            duration: 0.4,
          },
          0
        );
    });
  };

  // FIXED: Navigation functions - allow navigation even when cards are expanded on tablet
  const nextSlide = () => {
    if (!isAnimating && !isHovering) {
      // On tablet, reset expanded state before changing slide
      if (screenSize === "tablet" && expandedCard !== null) {
        resetTabletCards();
      }

      setSlideDirection("next");
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && !isHovering) {
      // On tablet, reset expanded state before changing slide
      if (screenSize === "tablet" && expandedCard !== null) {
        resetTabletCards();
      }

      setSlideDirection("prev");
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && !isHovering && index !== currentSlide) {
      // On tablet, reset expanded state before changing slide
      if (screenSize === "tablet" && expandedCard !== null) {
        resetTabletCards();
      }

      setSlideDirection(index > currentSlide ? "next" : "prev");
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  // Auto slide effect
  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [currentSlide, isAnimating, isHovering, expandedCard, screenSize]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
        setExpandedCard(null);
      } else if (width < 1024) {
        setScreenSize("tablet");
        setExpandedCard(0);
      } else if (width < 1200) {
        setScreenSize("smallDesktop");
        setExpandedCard(null);
      } else {
        setScreenSize("desktop");
        setExpandedCard(null);
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

  // Initialize first card as expanded on tablet mount
  useEffect(() => {
    if (screenSize === "tablet") {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        setExpandedCard(0);
      }, 50);
    }
  }, [screenSize, currentSlide]);

  const isCardExpanded = (index: number) => {
    if (screenSize === "tablet") {
      return expandedCard === index;
    }
    return false;
  };

  const getSlideAnimationClass = (position: number) => {
    if (!isAnimating) return "";

    if (slideDirection === "next") {
      return `animate-[slideFlowOut_0.4s_ease-in-out_forwards]`;
    } else {
      return `animate-[slideFlowOutReverse_0.4s_ease-in-out_forwards]`;
    }
  };

  const isMobileOrTablet = screenSize === "mobile" || screenSize === "tablet";

  return (
    <section className="wrapper">
      <style jsx>{`
        @keyframes continuousFlowOut {
          0% {
            transform: translateX(0%);
            opacity: 1;
          }
          80% {
            transform: translateX(-80%);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes continuousFlowOutReverse {
          0% {
            transform: translateX(0%);
            opacity: 1;
          }
          80% {
            transform: translateX(80%);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
       <div className="w-full flex justify-between items-end">
       <div className="flex flex-col items-start justify-center w-full max-w-[100%] md:max-w-[70%]">
        
        {/* Heading */}
                <MainHeading className="mb-6">
                    Built for Every Industry
                </MainHeading>

        {/* Description */}             
                        <Paragraph className="mb-6">
                          No matter what you sell, the Owners Inventory management program adapts to you.
                        </Paragraph>

  

      
          <ButtonSm url='#' text='Get Explore Now' bgColor='[#795CF5]' textColor="white" isBorder/>
          


      </div>
       {/* SLIDER BUTTONS */}
            <div className="hidden md:flex justify-end items-center gap-2 mb-6 lg:mb-[10px]">
              <button
                onClick={prevSlide}
                disabled={isAnimating || isHovering}
                className={`p-2 rounded-full shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] border transition-all duration-300 ${
                  isAnimating || isHovering
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-600 hover:bg-gray-50 hover:scale-105 active:scale-95"
                } ${isAnimating || isHovering ? "opacity-50" : ""}`}
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

              <div className="flex gap-2">
                {Array.from({ length: industries.length }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isAnimating || isHovering}
                    className={`transition-all duration-300 ease-in-out ${
                      index === currentSlide
                        ? "w-[34px] h-[15px] bg-[rgba(26,209,185,1)] rounded-[60px] transform scale-110"
                        : "w-[16px] h-[15px] bg-[rgba(243,244,246,1)] rounded-[60px] hover:bg-gray-300"
                    } ${isAnimating || isHovering ? "opacity-70" : ""}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={isAnimating || isHovering}
                className={`p-2 rounded-full border shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 ${
                  isAnimating || isHovering
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-600 hover:bg-gray-50 hover:scale-105 active:scale-95"
                } ${isAnimating || isHovering ? "opacity-50" : ""}`}
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
       <div className="flex items-stretch justify-center relative xl:py-5 px-0 md:py-5 py-5 lg:mt-0 md:mt-6 mt-10 mx-auto rounded-2xl">
      <div className="flex items-center justify-center lg:py-[30px] md:py-14 py-2 rounded-br-2xl rounded-tr-2xl w-full">
        <div className="w-full overflow-hidden">
          <div className="flex flex-col gap-10 w-full">
            <div className="flex gap-4 lg:gap-6 items-stretch justify-between relative">
              {visibleCards.map((item, i) => {
                const globalIndex = item.originalIndex;
                const isExpanded = isCardExpanded(i);

                const cardBg = globalIndex % 2 === 0 ? "#1AD1B9" : "#795CF5";
                const hoverBg =
                  globalIndex % 2 === 0
                    ? "group-hover:bg-[#1AD1B9]"
                    : "group-hover:bg-[#795CF5]";

                return (
                  <div
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    key={`${globalIndex}-${currentSlide}`}
                    onMouseEnter={() =>
                      screenSize === "desktop" && handleCardHover(i)
                    }
                    onMouseLeave={() =>
                      screenSize === "desktop" && handleCardLeave(i)
                    }
                    onClick={() =>
                      screenSize === "tablet" && handleCardClick(i)
                    }
                    className={`group relative grid grid-cols-12 gap-4 h-auto md:h-[400px] lg:h-[370px] p-4 lg:p-6 xl:p-8 
                      rounded-[30px] shadow-[0px_0px_20px_0px_#00000005]   
                      ${
                        screenSize === "mobile"
                          ? "min-w-full max-w-full bg-[var(--background-light)]"
                          : ""
                      }
                      ${
                        screenSize === "tablet"
                          ? isExpanded
                            ? "bg-[var(--background-light)]"
                            : `bg-[${cardBg}]`
                          : ""
                      }
                      ${screenSize === "smallDesktop" ? `bg-[${cardBg}]` : ""}
                      ${screenSize === "desktop" ? `bg-[${cardBg}]` : ""}
                      overflow-hidden
                      ${screenSize !== "mobile" ? "cursor-pointer" : ""}
                      ${isAnimating ? getSlideAnimationClass(i) : ""}
                      ${
                        !isAnimating
                          ? "animate-[slideInLeft_0.4s_ease-in-out]"
                          : ""
                      }`}
                    style={{
                      transition: isMobileOrTablet
                        ? "all 0.3s ease-in-out"
                        : "none",
                    }}
                  >
                    <div
                      className={`col-span-12 md:col-span-7 flex flex-col justify-between gap-6
                        ${screenSize === "mobile" ? "col-span-12" : ""}
                        ${
                          !isMobileOrTablet
                            ? "col-span-12"
                            : isExpanded
                            ? "col-span-12 md:col-span-7"
                            : ""
                        }`}
                    >
                      <div>
                        <h4
                          ref={(el) => {
                            titleRefs.current[i] = el;
                          }}
                          className={`text-[24px] lg:text-[28px] lg:whitespace-nowrap xl:text-[32px] font-medium mb-4 ${
                            screenSize === "mobile" || isExpanded
                              ? "text-[var(--text-dark)]"
                              : "text-[var(--white-color)]"
                          }`}
                        >
                          {item.title}
                        </h4>

                        <p
                          ref={(el) => {
                            descriptionRefs.current[i] = el;
                          }}
                          className={`text-sm lg:text-base text-[var(--text-grey)] ${
                            screenSize === "mobile" || isExpanded
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>

                      <Link
                        ref={(el) => {
                          linkRefs.current[i] = el;
                        }}
                        href="#"
                        className={`hidden md:flex justify-between md:absolute bottom-6 left-6 lg:left-8 items-center rounded-full bg-white 
                          py-[6px] ps-4 pe-1 gap-4 text-[#333333] cursor-pointer text-sm lg:text-base font-semibold leading-[100%]
                          overflow-hidden ${
                            screenSize === "mobile" || isExpanded
                              ? "w-auto max-w-[180px]"
                              : "w-full max-w-[85%]"
                          }`}
                      >
                        Read more
                        <span
                          className={`px-4 py-[18px] rounded-[50%] bg-[var(--background-light)] ${hoverBg}`}
                        >
                          <MoveUpRight
                            size={20}
                            className="group-hover:text-white group-hover:rotate-45"
                          />
                        </span>
                      </Link>
                    </div>

                    {/* IMAGE */}
                    <div
                      ref={(el) => {
                        imageRefs.current[i] = el;
                      }}
                      className={`col-span-12 md:col-span-5 ${
                        screenSize === "mobile" || isExpanded
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <Image
                        src={
                          screenSize === "mobile"
                            ? item.mobileImage
                            : item.image
                        }
                        alt="card-img"
                        width={800}
                        height={600}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="w-full col-span-12">
                      <Link
                        ref={(el) => {
                          linkRefsss.current[i] = el;
                        }}
                        href="#"
                        className={`flex md:hidden justify-between items-center rounded-full bg-white 
      py-[6px] ps-4 pe-1 gap-4 text-[#333333] cursor-pointer text-sm lg:text-base font-semibold leading-[100%]
      overflow-hidden w-full min-w-[100%]`}
                      >
                        Read more
                        <span
                          className={`px-4 py-[18px] rounded-[50%] ${
                            item.originalIndex % 2 === 0
                              ? "bg-[#1AD1B9]"
                              : "bg-[#795CF5]"
                          }`}
                        >
                          <MoveUpRight
                            size={20}
                            className="text-white rotate-45"
                          />
                        </span>
                      </Link>
                    </div>

                    {/* SVG DECORATIONS - Hidden on mobile */}
                    <div
                      ref={(el) => {
                        svgRefs.current[i] = el;
                      }}
                      className={`hidden md:flex absolute top-14 left-0 ${
                        screenSize === "mobile" || isExpanded
                          ? "opacity-0"
                          : "opacity-40"
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
                      ref={(el) => {
                        svgRefs.current[i] = el;
                      }}
                      className={`hidden md:flex absolute right-0 top-0 ${
                        screenSize === "mobile" || isExpanded
                          ? "opacity-0"
                          : "opacity-40"
                      }`}
                    >
                      <svg
                        width="111"
                        height="94"
                        viewBox="0 0 111 94"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        opacity="0.40"
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

            {/* SLIDER BUTTONS */}
            <div className="flex md:hidden justify-center items-center gap-2 mb-6 lg:mb-[10px]">
              <button
                onClick={prevSlide}
                disabled={isAnimating || isHovering}
                className={`p-2 rounded-full shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] border transition-all duration-300 ${
                  isAnimating || isHovering
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-600 hover:bg-gray-50 hover:scale-105 active:scale-95"
                } ${isAnimating || isHovering ? "opacity-50" : ""}`}
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

              <div className="flex gap-2">
                {Array.from({ length: industries.length }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isAnimating || isHovering}
                    className={`transition-all duration-300 ease-in-out ${
                      index === currentSlide
                        ? "w-[34px] h-[15px] bg-[rgba(26,209,185,1)] rounded-[60px] transform scale-110"
                        : "w-[16px] h-[15px] bg-[rgba(243,244,246,1)] rounded-[60px] hover:bg-gray-300"
                    } ${isAnimating || isHovering ? "opacity-70" : ""}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={isAnimating || isHovering}
                className={`p-2 rounded-full border shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 ${
                  isAnimating || isHovering
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-600 hover:bg-gray-50 hover:scale-105 active:scale-95"
                } ${isAnimating || isHovering ? "opacity-50" : ""}`}
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
      </div>
    </section>
  );
}
