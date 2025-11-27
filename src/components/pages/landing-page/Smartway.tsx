'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Tooltip from '@/components/toolTip/Tooltip';
import MainHeading from '../typography/MainHeading';
import Paragraph from '../typography/Paragraph';

gsap.registerPlugin(ScrollTrigger);

type GSAPMatchMedia = {
  add: (query: string, context: () => void) => void;
  revert: () => void;
};

export default function PosIconsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconsBreak = useRef<GSAPMatchMedia | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);
  const loopTl = useRef<gsap.core.Tween | null>(null);

  // Hover bounce effect for nav icon
  const handleMouseEnter = () => {
    if (spanRef.current) {
      loopTl.current?.kill();
      loopTl.current = gsap.to(spanRef.current, {
        scale: 1.2,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  };

  const handleMouseLeave = () => {
    loopTl.current?.kill();
    if (spanRef.current) gsap.set(spanRef.current, { scale: 1 });
  };

  // Animate icons to positions with responsive breakpoints
  const animateIconsToPositions = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    if (iconsBreak.current) iconsBreak.current.revert();
    iconsBreak.current = gsap.matchMedia();

    const small = window.innerWidth < 375;

    iconsBreak.current.add("(max-width: 767px)", () => {
      const tl = gsap.timeline();
      tl.to("#feature-icon-1", { x: small ? -115 : -136, y: -180, duration: 1.6 }, 0);
      tl.to("#feature-icon-2", { x: small ? 115 : 136, y: -180, duration: 1.6 }, 0);
      tl.to("#feature-icon-3", { x: -70, y: -120, duration: 1.6 }, 0);
      tl.to("#feature-icon-4", { x: 70, y: -120, duration: 1.6 }, 0);
      tl.to("#feature-icon-5", { x: small ? -115 : -136, y: 240, duration: 1.6 }, 0);
      tl.to("#feature-icon-6", { x: 0, y: 240, duration: 1.6 }, 0);
      tl.to("#feature-icon-7", { x: -70, y: 200, duration: 1.6 }, 0);
      tl.to("#feature-icon-8", { x: small ? -115 : -136, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-9", { x: small ? 115 : 136, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-10", { x: 70, y: 200, duration: 1.6 }, 0);
      tl.to("#feature-icon-11", { x: 0, y: -180, duration: 1.6 }, 0);
      tl.to("#feature-icon-12", { x: small ? 115 : 136, y: 240, duration: 1.6 }, 0);
      tl.to("#feature-icon-13", { x: -70, y: 80, duration: 1.6 }, 0);
      tl.to("#feature-icon-14", { x: 70, y: 80, duration: 1.6 }, 0);
      tl.to("#feature-icon-15", { x: small ? -115 : -136, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-16", { x: small ? 115 : 136, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-17", { x: 0, y: 140, duration: 1.6 }, 0);
    });

    iconsBreak.current.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const tl = gsap.timeline();
      tl.to("#feature-icon-1", { x: -272, y: -230, duration: 1.6 }, 0);
      tl.to("#feature-icon-2", { x: 272, y: -230, duration: 1.6 }, 0);
      tl.to("#feature-icon-3", { x: -132, y: -140, duration: 1.6 }, 0);
      tl.to("#feature-icon-4", { x: 132, y: -140, duration: 1.6 }, 0);
      tl.to("#feature-icon-5", { x: -330, y: -140, duration: 1.6 }, 0);
      tl.to("#feature-icon-6", { x: 330, y: -140, duration: 1.6 }, 0);
      tl.to("#feature-icon-7", { x: -340, y: 100, duration: 1.6 }, 0);
      tl.to("#feature-icon-8", { x: -220, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-9", { x: 220, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-10", { x: 220, y: 250, duration: 1.6 }, 0);
      tl.to("#feature-icon-11", { x: -220, y: 250, duration: 1.6 }, 0);
      tl.to("#feature-icon-12", { x: 340, y: 100, duration: 1.6 }, 0);
      tl.to("#feature-icon-13", { x: -132, y: 130, duration: 1.6 }, 0);
      tl.to("#feature-icon-14", { x: 132, y: 130, duration: 1.6 }, 0);
      tl.to("#feature-icon-15", { x: -240, y: 170, duration: 1.6 }, 0);
      tl.to("#feature-icon-16", { x: 240, y: 170, duration: 1.6 }, 0);
      tl.to("#feature-icon-17", { x: 0, y: 250, duration: 1.6 }, 0);
    });

    iconsBreak.current.add("(min-width: 1024px) and (max-width: 1199px)", () => {
      const tl = gsap.timeline();
      const xOffset = window.innerWidth >= 1280 ? 400 : 400;
      const yOffset = window.innerWidth >= 1280 ? 240 : 220;
      tl.to("#feature-icon-1", { x: -xOffset, y: -240, duration: 1.6 }, 0);
      tl.to("#feature-icon-2", { x: xOffset, y: -240, duration: 1.6 }, 0);
      tl.to("#feature-icon-3", { x: -160, y: -170, duration: 1.6 }, 0);
      tl.to("#feature-icon-4", { x: 160, y: -170, duration: 1.6 }, 0);
      tl.to("#feature-icon-5", { x: -400, y: -130, duration: 1.6 }, 0);
      tl.to("#feature-icon-6", { x: 400, y: -130, duration: 1.6 }, 0);
      tl.to("#feature-icon-7", { x: -460, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-8", { x: -220, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-9", { x: 460, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-10", { x: 220, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-11", { x: -400, y: 100, duration: 1.6 }, 0);
      tl.to("#feature-icon-12", { x: 400, y: 100, duration: 1.6 }, 0);
      tl.to("#feature-icon-13", { x: -160, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-14", { x: 160, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-15", { x: -460, y: yOffset, duration: 1.6 }, 0);
      tl.to("#feature-icon-16", { x: 460, y: yOffset, duration: 1.6 }, 0);
      tl.to("#feature-icon-17", { x: 0, y: yOffset, duration: 1.6 }, 0);
    });

    iconsBreak.current.add("(min-width: 1200px)", () => {
  const tl = gsap.timeline();
   const xOffset = window.innerWidth >= 1280 ? 460 : 460;
      const yOffset = window.innerWidth >= 1280 ? 240 : 220;
      tl.to("#feature-icon-1", { x: -xOffset, y: -240, duration: 1.6 }, 0);
      tl.to("#feature-icon-2", { x: xOffset, y: -240, duration: 1.6 }, 0);
      tl.to("#feature-icon-3", { x: -160, y: -170, duration: 1.6 }, 0);
      tl.to("#feature-icon-4", { x: 160, y: -170, duration: 1.6 }, 0);
      tl.to("#feature-icon-5", { x: -400, y: -130, duration: 1.6 }, 0);
      tl.to("#feature-icon-6", { x: 400, y: -130, duration: 1.6 }, 0);
      tl.to("#feature-icon-7", { x: -540, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-8", { x: -220, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-9", { x: 540, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-10", { x: 220, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-11", { x: -400, y: 100, duration: 1.6 }, 0);
      tl.to("#feature-icon-12", { x: 400, y: 100, duration: 1.6 }, 0);
      tl.to("#feature-icon-13", { x: -160, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-14", { x: 160, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-15", { x: -460, y: yOffset, duration: 1.6 }, 0);
      tl.to("#feature-icon-16", { x: 460, y: yOffset, duration: 1.6 }, 0);
      tl.to("#feature-icon-17", { x: 0, y: yOffset, duration: 1.6 }, 0);
});

  };

  // ScrollTrigger effect
 useEffect(() => {
  if (!sectionRef.current) return;

  const mm = gsap.matchMedia(); // matchMedia instance

  // Desktop – start at 30%
  mm.add("(min-width: 1200px)", () => {
    return ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 45%",
      once: true,
      onEnter: animateIconsToPositions,
    });
  });

  // Tablet – start at 50%
  mm.add("(min-width: 768px) and (max-width: 1199px)", () => {
    return ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 50%",
      once: true,
      onEnter: animateIconsToPositions,
    });
  });

  // Mobile – start at 70%
  mm.add("(max-width: 767px)", () => {
    return ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 60%",
      once: true,
      onEnter: animateIconsToPositions,
    });
  });

  return () => {
    mm.revert(); 
    if (iconsBreak.current) iconsBreak.current.revert();
  };
}, []);


  return (
    <div
      ref={sectionRef}
      className="pinned-section-4 lg:mt-40 md:mt-28 mt-20 smart-features-icons"
    >
      <div className=" md:h-auto flex flex-col items-center justify-center">
        <section
          className="w-full relative rounded-[20px] lg:rounded-[40px] py-10 px-6 xl:p-[70px] lg:p-10 md:p-10 ownerinventory-landing__pos-icons-section bg-cover bg-no-repeat bg-top"
          style={{ backgroundImage: "url('/assets/icons-section/icons-section.webp')" }}
        >
          <MainHeading className="text-[var(--white-color)] text-center mb-6">
            Your Complete Inventory Toolkit
          </MainHeading>

           <p
              className="font-onest font-normal text-[var(--white-color)] xl:text-xl lg:text-lg md:text-base text-xs xl:leading-9 lg:leading-7 md:leading-6 leading-5 flex items-center justify-center gap-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span ref={spanRef}>
                <Image
                  src="/assets/icons-section/navigation-icon.svg"
                  alt="Navigation Icon"
                  width={24}
                  height={24}
                  className="flex items-center justify-center w-6 h-6 z-10"
                />
              </span>
              Click any feature below to get started
            </p>
          {/* <Paragraph className="text-[var(--white-color)] text-center">
            Click any feature below to get started
          </Paragraph> */}

          <div className="relative h-[500px] md:h-[600px] lg:h-[550px] flex flex-col justify-center items-center">
            <a
              href="#"
              className="relative flex flex-col justify-center gap-[11px] items-center"
            >
              <Image
                src="/assets/icons-section/icons-section-logo.webp"
                alt="Logo Image"
                width={198}
                height={100}
                className="flex items-center justify-center w-full mx-auto md:max-w-[198px] max-w-[100px] h-[100px] z-10"
              />
            </a>

            {/* <p
              className="text-sm font-medium leading-5 font-onest text-[var(--white-color)] flex items-center justify-center gap-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span ref={spanRef}>
                <Image
                  src="/assets/icons-section/navigation-icon.svg"
                  alt="Navigation Icon"
                  width={24}
                  height={24}
                  className="flex items-center justify-center w-6 h-6 z-10"
                />
              </span>
              Click on Interactive Features
            </p> */}

            {iconData.map((icon) => (
              <a
                key={icon.id}
                href="#"
                id={icon.id}
                className={`absolute cursor-pointer ${icon.size} rounded-[20px] border border-transparent hover:border-white w-auto flex items-center justify-center group`}
              >
                <Image
                  src={icon.src}
                  alt={icon.label}
                  width={80}
                  height={80}
                  className="w-full h-full rounded-[20px] transition group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
                />
                <Tooltip text={icon.label} isComparisonToolTip={false} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const iconData = [
  { id: 'feature-icon-1', label: "Point of Sale", src: '/assets/icons-section/point-of-sale.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-2', label: "Ecommerce", src: '/assets/icons-section/ecomerce.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-3', label: "People", src: '/assets/icons-section/people.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-4', label: "Reports", src: '/assets/icons-section/reports.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-5', label: "Products", src: '/assets/icons-section/products.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-6', label: "Inventory Operations", src: '/assets/icons-section/inventory-operation.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-7', label: "Restaurant", src: '/assets/icons-section/restaurant.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-8', label: "Sales & Orders", src: '/assets/icons-section/sales-order.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-30 md:h-20 w-12 h-12' },
  { id: 'feature-icon-9', label: "Human Resource", src: '/assets/icons-section/human-resource.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-10', label: "Purchases", src: '/assets/icons-section/purchases.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-11', label: "Marketing", src: '/assets/icons-section/marketing.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-12', label: "Advance Reports", src: '/assets/icons-section/advance-reports.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-13', label: "General Tools", src: '/assets/icons-section/general-tools.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-14', label: "Accounts & Finance", src: '/assets/icons-section/acounts-finance.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-15', label: "Facilities", src: '/assets/icons-section/facilities.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-16', label: "Manufacturing", src: '/assets/icons-section/manufacturing.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
  { id: 'feature-icon-17', label: "Integrations", src: '/assets/icons-section/integration.svg', size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12' },
];
