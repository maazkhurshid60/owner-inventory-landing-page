"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function useHeaderAnimation() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth >= 768) {
      const tlHeader = gsap.timeline({
        delay: 0,
        defaults: { duration: 1, ease: "power1.inOut" },
      });

      gsap.set(".inventory-menu, .header-left-col, .header-right-col", {
        y: -300,
        opacity: 0,
      });
      gsap.set(".owner-inventory-hero__content--title", { opacity: 0 });
      gsap.set(
        ".owner-inventory-hero__content--buttons, .owner-inventory-hero__video",
        { y: 100, opacity: 0 }
      );

      tlHeader.to(".inventory-menu, .header-left-col, .header-right-col", {
        y: 0,
        opacity: 1,
      }, 0);
      tlHeader.to(".owner-inventory-hero__content--title", { opacity: 1 }, 1);
      tlHeader.to(
        ".owner-inventory-hero__content--buttons, .owner-inventory-hero__video",
        { y: 0, opacity: 1 },
        1
      );
    } else {
      const tlHeader = gsap.timeline({
        delay: 1,
        defaults: { duration: 1, ease: "power1.inOut" },
      });

      gsap.set(".mobile-iventory, .header-left-col", {
        y: -300,
        opacity: 0,
      });
      gsap.set(".owner-inventory-hero__content--title", { opacity: 0 });
      gsap.set(
        ".owner-inventory-hero__content--buttons, .owner-inventory-hero__video",
        { y: 100, opacity: 0 }
      );

      tlHeader.to(".mobile-iventory, .header-left-col", { y: 0, opacity: 1 }, 0);
      tlHeader.to(".owner-inventory-hero__content--title", { opacity: 1 }, 1);
      tlHeader.to(
        ".owner-inventory-hero__content--buttons, .owner-inventory-hero__video",
        { y: 0, opacity: 1 },
        1
      );
    }
  }, []);
}
