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
    let smartBreak = gsap.matchMedia();

    // 📱 Medium screens (768px – 1023px)
    smartBreak.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top -5%",
          end: "+=" + window.innerHeight * 3,
          pin: ".pinned-section-3",
          scrub: 2,
          // markers: true,
        },
      });

      if (window.innerWidth >= 800 && window.innerWidth < 1024) {
        gsap.set(".smart-way-images", { y: 30, x: 145 });

        tl2.to(".smart-way-images", { x: -80, duration: 1 }, 0)
          .to(".smart-way-cards", { y: -200, duration: 1 }, 0)
          .to(".smart-way-images", { x: -328, duration: 1 }, 1)
          .to(".smart-way-cards", { y: -400, duration: 1 }, 1)
          .to(".smart-way-images", { x: -574, duration: 1 }, 2)
          .to(".smart-way-cards", { y: -600, duration: 1 }, 2)
          .to(".smart-way-images", { x: -835, duration: 1 }, 3)
          .to(".smart-way-cards", { y: -830, duration: 1 }, 3);
      } else {
        gsap.set(".smart-way-images", { y: 30, x: 125 });

        tl2.to(".smart-way-images", { x: -120, duration: 1 }, 0)
          .to(".smart-way-cards", { y: -200, duration: 1 }, 0)
          .to(".smart-way-images", { x: -365, duration: 1 }, 1)
          .to(".smart-way-cards", { y: -400, duration: 1 }, 1)
          .to(".smart-way-images", { x: -613, duration: 1 }, 2)
          .to(".smart-way-cards", { y: -600, duration: 1 }, 2)
          .to(".smart-way-images", { x: -858, duration: 1 }, 3)
          .to(".smart-way-cards", { y: -830, duration: 1 }, 3);
      }
    });

    // 💻 Large screens (>= 1024px)
    smartBreak.add("(min-width: 1024px)", () => {
      ScrollTrigger.matchMedia({
        "(min-width: 1536px)": function () {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              scroller: "body",
              start: "top -4%",
              end: "+=" + window.innerHeight * 2,
              pin: ".pinned-section-3",
              scrub: 2,
              // markers: true,
            },
          });

          gsap.set(".smart-way-images", { y: 30, x: 200 });

          tl2.to(".smart-way-images", { x: -130, duration: 1 }, 0)
            .to(".smart-way-cards", { y: -330, duration: 1 }, 0)
            .to(".smart-way-images", { x: -460, duration: 1 }, 1)
            .to(".smart-way-cards", { y: -630, duration: 1 }, 1)
            .to(".smart-way-images", { x: -795, duration: 1 }, 2)
            .to(".smart-way-cards", { y: -930, duration: 1 }, 2)
            .to(".smart-way-images", { x: -1130, duration: 1 }, 3)
            .to(".smart-way-cards", { y: -1230, duration: 1 }, 3);
        },

        "(min-width: 1280px) and (max-width: 1535px)": function () {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              scroller: "body",
              start: "top -7%",
              end: "+=" + window.innerHeight * 2,
              pin: ".pinned-section-3",
              scrub: 2,
              // markers: true,
            },
          });

          gsap.set(".smart-way-images", { y: 30, x: 230 });

          tl2.to(".smart-way-images", { x: -52, duration: 1 }, 0)
            .to(".smart-way-cards", { y: -300, duration: 1 }, 0)
            .to(".smart-way-images", { x: -330, duration: 1 }, 1)
            .to(".smart-way-cards", { y: -600, duration: 1 }, 1)
            .to(".smart-way-images", { x: -615, duration: 1 }, 2)
            .to(".smart-way-cards", { y: -900, duration: 1 }, 2)
            .to(".smart-way-images", { x: -900, duration: 1 }, 3)
            .to(".smart-way-cards", { y: -1220, duration: 1 }, 3);
        },

        "(min-width: 1024px) and (max-width: 1279px)": function () {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              scroller: "body",
              start: "top -7%",
              end: "+=" + window.innerHeight * 2,
              pin: ".pinned-section-3",
              scrub: 2,
              // markers: true,
            },
          });

          gsap.set(".smart-way-images", { y: 30, x: 120 });

          tl2.to(".smart-way-images", { x: -165, duration: 1 }, 0)
            .to(".smart-way-cards", { y: -330, duration: 1 }, 0)
            .to(".smart-way-images", { x: -445, duration: 1 }, 1)
            .to(".smart-way-cards", { y: -630, duration: 1 }, 1)
            .to(".smart-way-images", { x: -726, duration: 1 }, 2)
            .to(".smart-way-cards", { y: -930, duration: 1 }, 2)
            .to(".smart-way-images", { x: -1010, duration: 1 }, 3)
            .to(".smart-way-cards", { y: -1205, duration: 1 }, 3);
        },
      });
    });

    // 🔄 Refresh to prevent hydration/layout shift issues
    ScrollTrigger.refresh();

    return () => {
      smartBreak.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="pinned-section-3">
      <div className="md:h-screen lg:block flex flex-col items-start md:pt-[140px] lg:pt-[110px] justify-center">
        {/* <SmartSellSection /> */}
        {/* <IndustryPOSShowcase /> */}
        <IndustryPosMobile />
      </div>
    </div>
  );
};

export default PinnedSection3;
