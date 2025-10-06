// src/hooks/useHeroAnimation.ts
"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function useErrorAnimation() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const heroBreak = gsap.matchMedia();

      // Mobile
      heroBreak.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          delay: 1,
          defaults: { duration: 1, ease: "power1.inOut" },
        });

        tl.to(".mobile-iventory", { width: "100%", duration: 1 }, 0);
        tl.to("header", { y: -30, duration: 1 }, 1);
      });

      // Tablet
      // heroBreak.add("(min-width: 768px) and (max-width: 1023px)", () => {
      //   const tl = gsap.timeline({
      //     delay: 1,
      //     defaults: { duration: 1, ease: "power1.inOut" },
      //   });

      //   tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0)
      //     .to(".inventory-menu", { width: "100%", duration: 1 }, 0)
      //     .to(".header-right-col", { x: "0%", duration: 1 }, 0)
      //     .to(".header-left-col", { x: "0%", duration: 1 }, 0);
      // });

      // Desktop
      heroBreak.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          delay: 1,
          defaults: { duration: 1, ease: "power1.inOut" },
        });

        tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0)
          .to(".inventory-menu", { width: "100%", duration: 1 }, 0)
          .to(".header-right-col", { x: "0%", duration: 1 }, 0)
          .to(".header-left-col", { x: "0%", duration: 1 }, 0);
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);
}
