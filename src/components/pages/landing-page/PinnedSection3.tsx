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
        gsap.set(".smart-way-images", { y: 30, x: 182 });

        tl2.to(".smart-way-images", { x: -62, duration: 1 }, 0);
        tl2.to(".smart-way-cards", { y: -200, duration: 1 }, 0);

        tl2.to(".smart-way-images", { x: -308, duration: 1 }, 1);
        tl2.to(".smart-way-cards", { y: -400, duration: 1 }, 1);

        tl2.to(".smart-way-images", { x: -550, duration: 1 }, 2);
        tl2.to(".smart-way-cards", { y: -600, duration: 1 }, 2);

        tl2.to(".smart-way-images", { x: -800, duration: 1 }, 3);
        tl2.to(".smart-way-cards", { y: -830, duration: 1 }, 3);
      } else {
        gsap.set(".smart-way-images", { y: 30, x: 165 });

        tl2.to(".smart-way-images", { x: -80, duration: 1 }, 0);
        tl2.to(".smart-way-cards", { y: -200, duration: 1 }, 0);

        tl2.to(".smart-way-images", { x: -325, duration: 1 }, 1);
        tl2.to(".smart-way-cards", { y: -400, duration: 1 }, 1);

        tl2.to(".smart-way-images", { x: -573, duration: 1 }, 2);
        tl2.to(".smart-way-cards", { y: -600, duration: 1 }, 2);

        tl2.to(".smart-way-images", { x: -815, duration: 1 }, 3);
        tl2.to(".smart-way-cards", { y: -830, duration: 1 }, 3);
      }
    });

    
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
            },
          });

          gsap.set(".smart-way-images", { y: 30, x: 300 });

          tl2.to(".smart-way-images", { x: -30, duration: 1 }, 0);
          tl2.to(".smart-way-cards", { y: -330, duration: 1 }, 0);

          tl2.to(".smart-way-images", { x: -360, duration: 1 }, 1);
          tl2.to(".smart-way-cards", { y: -630, duration: 1 }, 1);

          tl2.to(".smart-way-images", { x: -695, duration: 1 }, 2);
          tl2.to(".smart-way-cards", { y: -925, duration: 1 }, 2);

          tl2.to(".smart-way-images", { x: -1030, duration: 1 }, 3);
          tl2.to(".smart-way-cards", { y: -1230, duration: 1 }, 3);
        },

        "(min-width: 1280px) and (max-width: 1535px)": function () {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              scroller: "body",
              start: "top -7%",
              end: "+=" + window.innerHeight * 2,
              pin: ".pinned-section-3",
              scrub: 2,
            },
          });

          gsap.set(".smart-way-images", { y: 20, x: 330 });

          tl2.to(".smart-way-images", { x: 48, duration: 1 }, 0);
          tl2.to(".smart-way-cards", { y: -300, duration: 1 }, 0);

          tl2.to(".smart-way-images", { x: -235, duration: 1 }, 1);
          tl2.to(".smart-way-cards", { y: -600, duration: 1 }, 1);

          tl2.to(".smart-way-images", { x: -515, duration: 1 }, 2);
          tl2.to(".smart-way-cards", { y: -900, duration: 1 }, 2);

          tl2.to(".smart-way-images", { x: -798, duration: 1 }, 3);
          tl2.to(".smart-way-cards", { y: -1220, duration: 1 }, 3);
        },

        "(min-width: 1024px) and (max-width: 1279px)": function () {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              scroller: "body",
              start: "top -7%",
              end: "+=" + window.innerHeight * 2,
              pin: ".pinned-section-3",
              scrub: 2,
            },
          });

          gsap.set(".smart-way-images", { y: 30, x: 158 });

          tl2.to(".smart-way-images", { x: -123, duration: 1 }, 0);
          tl2.to(".smart-way-cards", { y: -330, duration: 1 }, 0);

          tl2.to(".smart-way-images", { x: -405, duration: 1 }, 1);
          tl2.to(".smart-way-cards", { y: -630, duration: 1 }, 1);

          tl2.to(".smart-way-images", { x: -687, duration: 1 }, 2);
          tl2.to(".smart-way-cards", { y: -930, duration: 1 }, 2);

          tl2.to(".smart-way-images", { x: -970, duration: 1 }, 3);
          tl2.to(".smart-way-cards", { y: -1205, duration: 1 }, 3);
        },
      });
    });

    return () => {
      smartBreak.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pinned-section-3">
      <div className="md:h-screen lg:block flex flex-col items-center justify-center">
        <SmartSellSection />
        <IndustryPOSShowcase />
        <IndustryPosMobile/>
      </div>
    </div>
  );
};

export default PinnedSection3;
