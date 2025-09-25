"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmartSellSection from "./SmartSell";
import IndustryPOSShowcase from "./IndustryPosShowcase";
import IndustryPosMobile from "./IndustryPosMobile";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  sectionId?: string; // unique ID for each page
}

const PinnedSection3: React.FC<Props> = ({ sectionId = "pinned-section-3" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const images = containerRef.current.querySelector(".smart-way-images");
    const cards = containerRef.current.querySelector(".smart-way-cards");

    if (!images || !cards) return; // ✅ prevents "_gsap" undefined errors

    let mm = gsap.matchMedia();

    // 📱 Medium screens (768px – 1023px)
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: containerRef.current,
          pin: containerRef.current,
          start: "top top",
          end: "+=" + window.innerHeight * 3,
          scrub: 2,
          // markers: true,
        },
      });

      if (window.innerWidth >= 800 && window.innerWidth < 1024) {
        gsap.set(images, { y: 30, x: 145 });

        tl2.to(images, { x: -80, duration: 1 }, 0)
          .to(cards, { y: -200, duration: 1 }, 0)
          .to(images, { x: -328, duration: 1 }, 1)
          .to(cards, { y: -400, duration: 1 }, 1)
          .to(images, { x: -574, duration: 1 }, 2)
          .to(cards, { y: -600, duration: 1 }, 2)
          .to(images, { x: -835, duration: 1 }, 3)
          .to(cards, { y: -830, duration: 1 }, 3);
      } else {
        gsap.set(images, { y: 30, x: 125 });

        tl2.to(images, { x: -120, duration: 1 }, 0)
          .to(cards, { y: -200, duration: 1 }, 0)
          .to(images, { x: -365, duration: 1 }, 1)
          .to(cards, { y: -400, duration: 1 }, 1)
          .to(images, { x: -613, duration: 1 }, 2)
          .to(cards, { y: -600, duration: 1 }, 2)
          .to(images, { x: -858, duration: 1 }, 3)
          .to(cards, { y: -830, duration: 1 }, 3);
      }
    });

    // 💻 Large screens (>= 1024px)
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.matchMedia({
        // 🖥️ 1536px+
        "(min-width: 1536px)": () => {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              scroller: "body",
              trigger: containerRef.current,
              pin: containerRef.current,
              start: "top top",
              end: "+=" + window.innerHeight * 2,
              scrub: 2,
            },
          });

          gsap.set(images, { y: 30, x: 200 });

          tl2.to(images, { x: -130, duration: 1 }, 0)
            .to(cards, { y: -330, duration: 1 }, 0)
            .to(images, { x: -460, duration: 1 }, 1)
            .to(cards, { y: -630, duration: 1 }, 1)
            .to(images, { x: -795, duration: 1 }, 2)
            .to(cards, { y: -930, duration: 1 }, 2)
            .to(images, { x: -1130, duration: 1 }, 3)
            .to(cards, { y: -1230, duration: 1 }, 3);
        },

        // 🖥️ 1280–1535px
        "(min-width: 1280px) and (max-width: 1535px)": () => {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              scroller: "body",
              trigger: containerRef.current,
              pin: containerRef.current,
              start: "top top",
              end: "+=" + window.innerHeight * 2,
              scrub: 2,
            },
          });

          gsap.set(images, { y: 30, x: 230 });

          tl2.to(images, { x: -52, duration: 1 }, 0)
            .to(cards, { y: -300, duration: 1 }, 0)
            .to(images, { x: -330, duration: 1 }, 1)
            .to(cards, { y: -600, duration: 1 }, 1)
            .to(images, { x: -615, duration: 1 }, 2)
            .to(cards, { y: -900, duration: 1 }, 2)
            .to(images, { x: -900, duration: 1 }, 3)
            .to(cards, { y: -1220, duration: 1 }, 3);
        },

        // 🖥️ 1024–1279px
        "(min-width: 1024px) and (max-width: 1279px)": () => {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              scroller: "body",
              trigger: containerRef.current,
              pin: containerRef.current,
              start: "top top",
              end: "+=" + window.innerHeight * 2,
              scrub: 2,
            },
          });

          gsap.set(images, { y: 30, x: 120 });

          tl2.to(images, { x: -165, duration: 1 }, 0)
            .to(cards, { y: -330, duration: 1 }, 0)
            .to(images, { x: -445, duration: 1 }, 1)
            .to(cards, { y: -630, duration: 1 }, 1)
            .to(images, { x: -726, duration: 1 }, 2)
            .to(cards, { y: -930, duration: 1 }, 2)
            .to(images, { x: -1010, duration: 1 }, 3)
            .to(cards, { y: -1205, duration: 1 }, 3);
        },
      });
    });

    // 🔄 Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionId]);

  return (
    <div id={sectionId} ref={containerRef} className="pinned-section-3">
      <div className="md:h-screen lg:block flex flex-col items-center justify-center">
        <SmartSellSection />
        <IndustryPOSShowcase />
        <IndustryPosMobile />
      </div>
    </div>
  );
};

export default PinnedSection3;
