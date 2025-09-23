"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmartSellSection from "./SmartSell";
import IndustryPOSShowcase from "./IndustryPosShowcase";
import IndustryPosMobile from "./IndustryPosMobile";

gsap.registerPlugin(ScrollTrigger);

const PinnedSection3 = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // prevent SSR issues

    const mm = gsap.matchMedia();

    // 📌 Medium screens (768px - 1023px)
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".pinned-section-3",
          start: "top top",
          end: "+=" + window.innerHeight * 3,
          pin: true,
          scrub: 2,
          // markers: true,
        },
      });

      if (window.innerWidth >= 800 && window.innerWidth < 1024) {
        gsap.set(".smart-way-images", { y: 30, x: 182 });

        tl2.to(".smart-way-images", { x: -62 }, 0)
           .to(".smart-way-cards", { y: -200 }, 0)
           .to(".smart-way-images", { x: -308 }, 1)
           .to(".smart-way-cards", { y: -400 }, 1)
           .to(".smart-way-images", { x: -550 }, 2)
           .to(".smart-way-cards", { y: -600 }, 2)
           .to(".smart-way-images", { x: -800 }, 3)
           .to(".smart-way-cards", { y: -830 }, 3);
      } else {
        gsap.set(".smart-way-images", { y: 30, x: 165 });

        tl2.to(".smart-way-images", { x: -80 }, 0)
           .to(".smart-way-cards", { y: -200 }, 0)
           .to(".smart-way-images", { x: -325 }, 1)
           .to(".smart-way-cards", { y: -400 }, 1)
           .to(".smart-way-images", { x: -573 }, 2)
           .to(".smart-way-cards", { y: -600 }, 2)
           .to(".smart-way-images", { x: -815 }, 3)
           .to(".smart-way-cards", { y: -830 }, 3);
      }
    });

    // 📌 Large screens (>= 1024px)
    mm.add("(min-width: 1024px)", () => {
      // 1536px and above
      mm.add("(min-width: 1536px)", () => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".pinned-section-3",
            start: "top top",
            end: "+=" + window.innerHeight * 2,
            pin: true,
            scrub: 2,
          },
        });

        gsap.set(".smart-way-images", { y: 30, x: 300 });

        tl2.to(".smart-way-images", { x: -30 }, 0)
           .to(".smart-way-cards", { y: -330 }, 0)
           .to(".smart-way-images", { x: -360 }, 1)
           .to(".smart-way-cards", { y: -630 }, 1)
           .to(".smart-way-images", { x: -695 }, 2)
           .to(".smart-way-cards", { y: -925 }, 2)
           .to(".smart-way-images", { x: -1030 }, 3)
           .to(".smart-way-cards", { y: -1230 }, 3);
      });

      // 1280px - 1535px
      mm.add("(min-width: 1280px) and (max-width: 1535px)", () => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".pinned-section-3",
            start: "top top",
            end: "+=" + window.innerHeight * 2,
            pin: true,
            scrub: 2,
          },
        });

        gsap.set(".smart-way-images", { y: 20, x: 330 });

        tl2.to(".smart-way-images", { x: 48 }, 0)
           .to(".smart-way-cards", { y: -300 }, 0)
           .to(".smart-way-images", { x: -235 }, 1)
           .to(".smart-way-cards", { y: -600 }, 1)
           .to(".smart-way-images", { x: -515 }, 2)
           .to(".smart-way-cards", { y: -900 }, 2)
           .to(".smart-way-images", { x: -798 }, 3)
           .to(".smart-way-cards", { y: -1220 }, 3);
      });

      // 1024px - 1279px
      mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".pinned-section-3",
            start: "top top",
            end: "+=" + window.innerHeight * 2,
            pin: true,
            scrub: 2,
          },
        });

        gsap.set(".smart-way-images", { y: 30, x: 158 });

        tl2.to(".smart-way-images", { x: -123 }, 0)
           .to(".smart-way-cards", { y: -330 }, 0)
           .to(".smart-way-images", { x: -405 }, 1)
           .to(".smart-way-cards", { y: -630 }, 1)
           .to(".smart-way-images", { x: -687 }, 2)
           .to(".smart-way-cards", { y: -930 }, 2)
           .to(".smart-way-images", { x: -970 }, 3)
           .to(".smart-way-cards", { y: -1205 }, 3);
      });
    });

    return () => {
      mm.revert(); // cleanup media queries
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pinned-section-3">
      <div className="md:h-screen lg:block flex flex-col items-center justify-center">
        <SmartSellSection />
        <IndustryPOSShowcase />
        <IndustryPosMobile />
      </div>
    </div>
  );
};

export default PinnedSection3;
