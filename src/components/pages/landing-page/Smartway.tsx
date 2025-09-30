'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tooltip from '@/components/toolTip/Tooltip';

export default function PosIconsSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let iconsBreak = gsap.matchMedia();

    // 📱 Mobile
    iconsBreak.add("(max-width: 767px)", () => {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top top",
          end: "+=" + window.innerHeight * 2,
          pin: ".pinned-section-4",
          scrub: 2,
          // markers: true,
        },
      });

      if (window.innerWidth < 375) {
        tl3.to("#feature-icon-1", { x: -115, y: -180, duration: 1 }, 0);
      } else {
        tl3.to("#feature-icon-1", { x: -136, y: -180, duration: 1 }, 0);
      }

      if (window.innerWidth < 375) {
        tl3.to("#feature-icon-2", { x: 115, y: -180, duration: 1 }, 0);
      } else {
        tl3.to("#feature-icon-2", { x: 136, y: -180, duration: 1 }, 0);
      }

      tl3.to("#feature-icon-3", { x: -70, y: -120, duration: 1 }, 0);
      tl3.to("#feature-icon-4", { x: 70, y: -120, duration: 1 }, 0);

      if (window.innerWidth < 375) {
        tl3.to("#feature-icon-5", { x: -115, y: 240, duration: 1 }, 0);
      } else {
        tl3.to("#feature-icon-5", { x: -136, y: 240, duration: 1 }, 0);
      }

      tl3.to("#feature-icon-6", { x: 0, y: 240, duration: 1 }, 0);
      tl3.to("#feature-icon-7", { x: -70, y: 200, duration: 1 }, 0);

      if (window.innerWidth < 375) {
        tl3.to("#feature-icon-8", { x: -115, y: 0, duration: 1 }, 0);
      } else {
        tl3.to("#feature-icon-8", { x: -136, y: 0, duration: 1 }, 0);
      }

      if (window.innerWidth < 375) {
        tl3.to("#feature-icon-9", { x: 115, y: 0, duration: 1 }, 0);
      } else {
        tl3.to("#feature-icon-9", { x: 136, y: 0, duration: 1 }, 0);
      }

      tl3.to("#feature-icon-10", { x: 70, y: 200, duration: 1 }, 0);
      tl3.to("#feature-icon-11", { x: 0, y: -180, duration: 1 }, 0);

      if (window.innerWidth < 375) {
        tl3.to("#feature-icon-12", { x: 115, y: 240, duration: 1 }, 0);
      } else {
        tl3.to("#feature-icon-12", { x: 136, y: 240, duration: 1 }, 0);
      }

      tl3.to("#feature-icon-13", { x: -70, y: 80, duration: 1 }, 0);
      tl3.to("#feature-icon-14", { x: 70, y: 80, duration: 1 }, 0);

      if (window.innerWidth < 375) {
        tl3.to("#feature-icon-15", { x: -115, y: 140, duration: 1 }, 0);
      } else {
        tl3.to("#feature-icon-15", { x: -136, y: 140, duration: 1 }, 0);
      }

      if (window.innerWidth < 375) {
        tl3.to("#feature-icon-16", { x: 115, y: 140, duration: 1 }, 0);
      } else {
        tl3.to("#feature-icon-16", { x: 136, y: 140, duration: 1 }, 0);
      }

      tl3.to("#feature-icon-17", { x: 0, y: 140, duration: 1 }, 0);
    });

    // 💻 Tablet
    iconsBreak.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top -6%",
          end: "+=" + window.innerHeight * 2,
          pin: ".pinned-section-4",
          scrub: 2,
          // markers: true,
        },
      });

      tl3.to("#feature-icon-1", { x: -272, y: -230 }, 0);
      tl3.to("#feature-icon-2", { x: 272, y: -230 }, 0);
      tl3.to("#feature-icon-3", { x: -132, y: -140 }, 0);
      tl3.to("#feature-icon-4", { x: 132, y: -140 }, 0);
      tl3.to("#feature-icon-5", { x: -330, y: -140 }, 0);
      tl3.to("#feature-icon-6", { x: 330, y: -140 }, 0);
      tl3.to("#feature-icon-7", { x: -340, y: 100 }, 0);
      tl3.to("#feature-icon-8", { x: -220, y: 0 }, 0);
      tl3.to("#feature-icon-9", { x: 220, y: 0 }, 0);
      tl3.to("#feature-icon-10", { x: 220, y: 250 }, 0);
      tl3.to("#feature-icon-11", { x: -220, y: 250 }, 0);
      tl3.to("#feature-icon-12", { x: 340, y: 100 }, 0);
      tl3.to("#feature-icon-13", { x: -132, y: 130 }, 0);
      tl3.to("#feature-icon-14", { x: 132, y: 130 }, 0);
      tl3.to("#feature-icon-15", { x: -240, y: 170 }, 0);
      tl3.to("#feature-icon-16", { x: 240, y: 170 }, 0);
      tl3.to("#feature-icon-17", { x: 0, y: 250 }, 0);
    });

    // 🖥 Desktop
    iconsBreak.add("(min-width: 1024px)", () => {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: ".smart-features-icons",
          start: "top -17%",
          end: "+=" + window.innerHeight * 2,
          pin: ".pinned-section-4",
          scrub: 2,
          // markers: true,
        },
      });

      if (window.innerWidth >= 1280) {
        tl3.to("#feature-icon-1", { x: -460, y: -240 }, 0);
        tl3.to("#feature-icon-2", { x: 460, y: -240 }, 0);
        tl3.to("#feature-icon-3", { x: -160, y: -170 }, 0);
        tl3.to("#feature-icon-4", { x: 160, y: -170 }, 0);
        tl3.to("#feature-icon-5", { x: -400, y: -130 }, 0);
        tl3.to("#feature-icon-6", { x: 400, y: -130 }, 0);
        tl3.to("#feature-icon-7", { x: -540, y: 0 }, 0);
        tl3.to("#feature-icon-8", { x: -220, y: 0 }, 0);
        tl3.to("#feature-icon-9", { x: 540, y: 0 }, 0);
        tl3.to("#feature-icon-10", { x: 220, y: 0 }, 0);
        tl3.to("#feature-icon-11", { x: -400, y: 100 }, 0);
        tl3.to("#feature-icon-12", { x: 400, y: 100 }, 0);
        tl3.to("#feature-icon-13", { x: -160, y: 140 }, 0);
        tl3.to("#feature-icon-14", { x: 160, y: 140 }, 0);
        tl3.to("#feature-icon-15", { x: -460, y: 200 }, 0);
        tl3.to("#feature-icon-16", { x: 460, y: 200 }, 0);
        tl3.to("#feature-icon-17", { x: 0, y: 200 }, 0);
      } else {
        tl3.to("#feature-icon-1", { x: -460, y: -240 }, 0);
        tl3.to("#feature-icon-2", { x: 460, y: -240 }, 0);
        tl3.to("#feature-icon-3", { x: -160, y: -170 }, 0);
        tl3.to("#feature-icon-4", { x: 160, y: -170 }, 0);
        tl3.to("#feature-icon-5", { x: -400, y: -130 }, 0);
        tl3.to("#feature-icon-6", { x: 400, y: -130 }, 0);
        tl3.to("#feature-icon-7", { x: -460, y: 0 }, 0);
        tl3.to("#feature-icon-8", { x: -220, y: 0 }, 0);
        tl3.to("#feature-icon-9", { x: 460, y: 0 }, 0);
        tl3.to("#feature-icon-10", { x: 220, y: 0 }, 0);
        tl3.to("#feature-icon-11", { x: -400, y: 100 }, 0);
        tl3.to("#feature-icon-12", { x: 400, y: 100 }, 0);
        tl3.to("#feature-icon-13", { x: -160, y: 140 }, 0);
        tl3.to("#feature-icon-14", { x: 160, y: 140 }, 0);
        tl3.to("#feature-icon-15", { x: -460, y: 220 }, 0);
        tl3.to("#feature-icon-16", { x: 460, y: 220 }, 0);
        tl3.to("#feature-icon-17", { x: 0, y: 220 }, 0);
      }
    });

    return () => {
      iconsBreak.revert(); // cleanup GSAP matchMedia on unmount
    };
  }, []);

  return (
    <div className="pinned-section-4 lg:pt-40 md:pt-28 pt-20 smart-features-icons">
      <div className="lg:h-auto md:h-screen flex flex-col items-center justify-center">
        <section
          className="w-full relative rounded-[40px] py-10 px-6 xl:p-[70px] lg:p-10 md:p-10 ownerinventory-landing__pos-icons-section bg-cover bg-no-repeat bg-top"
          style={{
            backgroundImage: "url('/assets/icons-section/icons-section.webp')",
          }}
        >
          {/* Heading */}
          <h1 className="text-center m-auto text-white font-onest xl:text-[64px] lg:text-[56px] md:text-5xl text-4xl xl:leading-[76px] lg:leading-[66px] md:leading-[64px] max-w-2xl">
            Smart Features Built for Modern Selling
          </h1>

          {/* Center logo */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[550px] flex flex-col justify-center items-center">
            <a
              href="#"
              className="relative h-[500px] md:h-[600px] lg:h-[550px] flex flex-col justify-center items-center"
            >
              <Image
                src="/assets/icons-section/icons-section-logo.webp"
                alt="Logo Image"
                width={198}
                height={100}
                className="flex items-center justify-center w-full mx-auto md:max-w-[198px] max-w-[100px] h-[100px] z-10"
              />
            </a>

            {/* Feature icons */}
            {iconData.map((icon) => (
              <a
                key={icon.id}
                href="#"
                id={icon.id}
                className={`absolute cursor-pointer ${icon.size}
                  rounded-[20px] border border-transparent hover:border-white 
                  flex items-center justify-center group`}
              >
                <Image
                  src={icon.src}
                  alt={icon.label}
                  width={80}
                  height={80}
                  className="w-full h-full rounded-[20px] transition 
                             group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
                />

                {/* Tooltip */}
                <Tooltip text={icon.label} />
                {/* <div className="absolute left-1/2 -translate-x-1/2 top-[100%] z-[999] hidden group-hover:flex flex-col items-center">
                  <div className="w-2 h-2 rotate-45 bg-white border-l border-t border-[#795DF5] -mb-1"></div>
                  <div className="rounded-xl border border-[#795DF5] bg-white px-4 py-2 text-sm whitespace-nowrap leading-4 font-semibold text-[#231F20] shadow-lg w-fit">
                    {icon.label}
                  </div>
                </div> */}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


const iconData = [
  // Left Side
  {
    id: 'feature-icon-1',
    label: "Point of Sale",
    src: '/assets/icons-section/point-of-sale.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-3',
    label: "People",
    src: '/assets/icons-section/people.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-5',
    label: " Products",
    src: '/assets/icons-section/products.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-7',
    label: "Restaurant",
    src: '/assets/icons-section/restaurant.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-8',
    label: "Sales & Orders",
    src: '/assets/icons-section/sales-order.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-11',
    label: "Marketing",
    src: '/assets/icons-section/marketing.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-15',
    label: "Facilities",
    src: '/assets/icons-section/facilities.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-13',
    label: "General Tools",
    src: '/assets/icons-section/general-tools.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-17',
    label: "Integrations",
    src: '/assets/icons-section/integration.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },

  // Right Side
  {
    id: 'feature-icon-2',
    label: "Ecommerce",
    src: '/assets/icons-section/ecomerce.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-6',
    src: '/assets/icons-section/inventory-operation.svg',
    label: "Inventory Operations",
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-4',
    src: '/assets/icons-section/reports.svg',
    label: "Reports",
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-10',
    label: "Purchases",
    src: '/assets/icons-section/purchases.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-9',
    label: "Human Resource",
    src: '/assets/icons-section/human-resource.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-12',
    label: "Advance Reports",
    src: '/assets/icons-section/advance-reports.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-14',
    label: "Accounts & Finance",
    src: '/assets/icons-section/acounts-finance.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
  {
    id: 'feature-icon-16',
    label: "Manufacturing",
    src: '/assets/icons-section/manufacturing.svg',
    size: 'lg:w-[87px] lg:h-[87px] md:w-20 md:h-20 w-12 h-12',
  },
];
