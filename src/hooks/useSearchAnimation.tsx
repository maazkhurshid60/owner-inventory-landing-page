// src/hooks/useHeroScrollAnimation.ts
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSearchAnimation() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const heroBreak = gsap.matchMedia();

      // -------------------
      // Mobile (max-width: 767px)
      // -------------------
      heroBreak.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            scroller: "body",
            start: "top top",
            end: "+=" + window.innerHeight * 1,
            trigger: ".pinned-section-1",
            scrub: 2,
            // markers: true,
          },
        });

        tl.to(".mobile-iventory", { width: "100%", duration: 1 }, 0);
        tl.to("header", { y: -30, duration: 1 }, 1);
      });

      // -------------------
      // Tablet (768px - 1023px)
      // -------------------
      heroBreak.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            scroller: "body",
            start: "top top",
            end: "+=" + window.innerHeight * 1,
            trigger: ".pinned-section-1",
            scrub: 2,
            // markers: true,
          },
        });

        tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0)
          .to(".inventory-menu", { width: "100%", duration: 1 }, 0)
          .to(".header-right-col", { x: "0%", duration: 1 }, 0)
          .to(".header-left-col", { x: "0%", duration: 1 }, 0);

        // Optional extra animations you had commented out:
        // .to(".top-section", { autoAlpha: 0, duration: 1 }, 0)
        // .to(".owner-inventory-hero", { y: -150, paddingLeft: 0, paddingRight: 0, duration: 1.5, ease: "power2.out" }, 0)
        // .to(".owner-inventory-hero__content", { y: -800, duration: 2, ease: "power2.out" }, 1)
        // .to(".owner-inventory-hero__video", { y: -100, duration: 2, ease: "power2.out" }, 1);
      });

      // -------------------
      // Desktop (min-width: 1024px)
      // -------------------
      heroBreak.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            scroller: "body",
            start: "top top",
            end: "+=" + window.innerHeight * 1,
            pin: ".pinned-section-1",
            scrub: 2,
            // markers: true,
          },
        });

        tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0)
          .to(".inventory-menu", { width: "100%", duration: 1 }, 0)
          .to(".header-right-col", { x: "0%", duration: 1 }, 0)
          .to(".header-left-col", { x: "0%", duration: 1 }, 0)
          .to(".top-section", { autoAlpha: 0, duration: 1 }, 0)
          .to(
            ".owner-inventory-hero",
            { y: -150, paddingLeft: 0, paddingRight: 0, duration: 1.5, ease: "power2.out" },
            0
          )
          .to(".owner-inventory-hero__content", { y: -800, duration: 2, ease: "power2.out" }, 1)
          .to(".owner-inventory-hero__video", { y: -300, duration: 2, ease: "power2.out" }, 1);
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);
}
