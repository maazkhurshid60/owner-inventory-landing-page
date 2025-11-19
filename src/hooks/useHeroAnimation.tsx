'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = () => {
  useEffect(() => {
    let heroBreak = gsap.matchMedia();

    // Mobile < 768px
    heroBreak.add('(max-width: 1023px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: 'body',
          start: 'top top',
          end: '+=' + window.innerHeight * 1,
          trigger: '.pinned-section-1',
          scrub: 2,
          // markers: true,
        },
      });

      tl.to('.mobile-iventory', { width: '100%', duration: 1 }, 0);
      tl.to('header', { y: -30, duration: 1 }, 1);
    });

    // Tablet 768px – 1023px
    // heroBreak.add('(min-width: 768px) and (max-width: 1023px)', () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       scroller: 'body',
    //       start: 'top top',
    //       end: '+=' + window.innerHeight * 1,
    //       pin: '.pinned-section-1',
    //       scrub: 2,
    //       // markers: true,
    //     },
    //   });

    //   gsap.set('.owner-inventory-hero__content', { y: 0, force3D: true });
    //   gsap.set('.owner-inventory-hero__video', { y: 0, force3D: true });

    //   tl.to('header', { y: -20, duration: 1.5, ease: 'power2.out' }, 0);

    //   tl.to('.inventory-menu', { width: '100%', duration: 1 }, 0);
    //   tl.to('.header-right-col', { x: '0%', duration: 1 }, 0);
    //   tl.to('.header-left-col', { x: '0%', duration: 1 }, 0);

    //   tl.to('.top-section', { autoAlpha: 0, duration: 1 }, 0);
    //   tl.to(
    //     '.owner-inventory-hero',
    //     { y: -112, paddingLeft: 0, paddingRight: 0, duration: 1.5, ease: 'power2.out' },
    //     0
    //   );
    //   tl.to('.owner-inventory-hero__content', { y: -800, duration: 2, ease: 'power2.out' }, 0);
    //   tl.to('.owner-inventory-hero__video', { y: -100, duration: 2, ease: 'power2.out' }, 0);
    // });

    // Desktop >= 1024px
    heroBreak.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: 'body',
          start: 'top top',
          end: '+=' + window.innerHeight * 0.5,
          pin: '.pinned-section-1',
          scrub: 2,
          // markers: true,
        },
      });

      gsap.set('.owner-inventory-hero__content', { y: 0, force3D: true });
      gsap.set('.owner-inventory-hero__video', { y: 0, force3D: true });

      tl.to('header', { y: -20, duration: 1.5, ease: 'power2.out' }, 0);

      tl.to('.inventory-menu', { width: '100%', duration: 1 }, 0);
      tl.to('.header-right-col', { x: '0%', duration: 1 }, 0);
      tl.to('.header-left-col', { x: '0%', duration: 1 }, 0);

      tl.to('.top-section', { autoAlpha: 0, duration: 1 }, 0);
      tl.to(
        '.owner-inventory-hero',
        { y: -150, paddingLeft: 0, paddingRight: 0, duration: 1.5, ease: 'power2.out' },
        0
      );
      tl.to('.owner-inventory-hero__content', { y: -800, duration: 1, ease: 'power2.out' }, 0);
      tl.to('.owner-inventory-hero__video', { y: -300, duration: 1, ease: 'power2.out' }, 0);
    });

    return () => {
      heroBreak.revert(); 
    };
  }, []);
};
