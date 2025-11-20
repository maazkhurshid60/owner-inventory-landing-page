"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface HeroImageSliderProps {
  images: string[];
  backgrounds?: string[];
  className?: string;
}

const HeroImageSlider: React.FC<HeroImageSliderProps> = ({
  images,
  backgrounds = [],
  className,
}) => {
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const setImageRef = (el: HTMLDivElement | null, idx: number) => {
    if (el) imageRefs.current[idx] = el;
  };

 useEffect(() => {
  const imgs = imageRefs.current;
  if (!imgs || imgs.length === 0 || !containerRef.current) return;

  // --- Initial Styles ---
  gsap.set(imgs, {
    opacity: 0,
    scale: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  });

  gsap.set(imgs[0], { opacity: 1, scale: 1 });

  if (backgrounds[0])
    containerRef.current.style.backgroundColor = backgrounds[0];

  const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });

  const startSlider = () => {
    imgs.forEach((current, idx) => {
      const next = imgs[(idx + 1) % imgs.length];
      const nextBg = backgrounds[(idx + 1) % backgrounds.length];

      // CURRENT IMAGE → zoom little → fade out
      tl.to(
        current,
        {
          scale: 1.4,
          opacity: 0,
          duration: 1.5,
        },
        "+=2" // wait 2 seconds before each transition
      );

      // NEXT IMAGE → fade in smoothly (scale stays normal)
      tl.fromTo(
        next,
        { opacity: 0, scale: 1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
        },
        "<" // run at the same time as fade out
      );

      // Background change in sync
      if (nextBg) {
        tl.to(
          containerRef.current,
          { backgroundColor: nextBg, duration: 1.5 },
          "<"
        );
      }
    });
  };

  const handle = () => startSlider();
  document.addEventListener("heroAnimationFinished", handle);

  return () => {
    document.removeEventListener("heroAnimationFinished", handle);
    tl.kill();
  };
}, [images, backgrounds]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-[376px] lg:h-[598px] px-6 rounded-[40px] relative overflow-hidden ${className}`}
    >
      {images.map((src, idx) => (
        <div key={idx} ref={(el) => setImageRef(el, idx)}>
          <Image
            src={src}
            alt={`Hero Image ${idx + 1}`}
            fill
            className="object-contain w-full max-w-[100%] mx-auto h-full"
            priority={idx === 0} // First image should be prioritized for loading
          />
        </div>
      ))}
    </div>
  );
};

export default HeroImageSlider;