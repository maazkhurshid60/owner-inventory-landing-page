"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLg from "@/components/button/ButtonLg";
import Image from "next/image";
import React from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: "/assets/unified-platform/unified-operations.svg",
    title: "Unified Operations",
    description:
      "Manage inventory, POS, e-commerce, and customer data from one unified system — no switching between tools.",
  },
  {
    icon: "/assets/unified-platform/real-time-reporting.svg",
    title: "Real-Time Reporting",
    description:
      "Make faster, smarter decisions with live sales insights, stock analytics, and performance dashboards.",
  },
  {
    icon: "/assets/unified-platform/cost-effection.svg",
    title: "Cost-Efficient Operations",
    description:
      "Replace multiple apps with one smart solution, save on software costs and reduce manual errors.",
  },
  {
    icon: "/assets/unified-platform/built-to-scale.svg",
    title: "Built to Scale with You",
    description:
      "Owners Inventory grows with your business — start small, scale big.",
  },
];

export default function UnifiedPlatform() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionTriggerRef = useRef<HTMLDivElement | null>(null);
  const ctxRef = useRef<gsap.Context | null>(null);
  const mmRef = useRef<any>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // create a GSAP context for scoping to this component
    const ctx = gsap.context(() => {
      // matchMedia to separate desktop/tablet/mobile timelines
      const mm = gsap.matchMedia();
      mmRef.current = mm;

      // common timeline factory
      const createTimeline = (opts: { start?: string; end?: string }) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionTriggerRef.current,
            start: opts.start ?? "top top",
            end: opts.end ?? "+=200%",
            pin: sectionRef.current,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // markers can be turned on while debugging
            markers: false,
          },
        });

        tl.to(".unified-platform-cards", { y: "-50%", ease: "none" });
        return tl;
      };

      // Desktop
      mm.add("(min-width:1024px)", () => {
        // return cleanup function for this matchMedia entry if needed
        const tl = createTimeline({ start: "top top", end: "+=200%" });
        return () => {
          tl.scrollTrigger && tl.scrollTrigger.kill();
          tl.kill();
        };
      });

      // Tablet
      mm.add("(min-width:768px) and (max-width:1023px)", () => {
        const tl = createTimeline({ start: "top top", end: "+=160%" });
        return () => {
          tl.scrollTrigger && tl.scrollTrigger.kill();
          tl.kill();
        };
      });

      // Mobile - No pin on small screens; keep it simple
      mm.add("(max-width:767px)", () => {
        // no pin, just subtle entrance if desired
        const cards = sectionRef.current?.querySelectorAll(".unified-platform-cards > *");
        if (cards?.length) {
          gsap.set(cards, { y: 30, opacity: 0 });
          const reveal = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          });
          reveal.to(cards, { y: 0, opacity: 1, stagger: 0.12, ease: "power2.out" });
          return () => {
            reveal.scrollTrigger && reveal.scrollTrigger.kill();
            reveal.kill();
          };
        }
        return;
      });

      // Ensure refresh after matchMedia setup
      ScrollTrigger.refresh();
    }, sectionRef);

    ctxRef.current = ctx;

    // Refresh triggers after load and when important media finishes loading.
    const refresh = () => {
      try {
        ScrollTrigger.refresh();
      } catch (e) {}
    };

    // Debounced resize refresh
    let resizeTimer: any = null;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        refresh();
      }, 200);
    };

    // When window load occurs (images/fonts/videos finished parsing) — refresh.
    window.addEventListener("load", refresh);
    window.addEventListener("resize", onResize);

    // If there are any videos on the page, refresh when they load metadata/data
    const videos = document.querySelectorAll("video");
    const boundVideoHandler = () => refresh();
    videos.forEach((v) => {
      v.addEventListener("loadedmetadata", boundVideoHandler);
      v.addEventListener("loadeddata", boundVideoHandler);
    });

    // small safety refresh after short delay to handle late layout shifts
    const safetyTimeout1 = window.setTimeout(refresh, 800);
    const safetyTimeout2 = window.setTimeout(refresh, 1500);

    return () => {
      // cleanup
      window.clearTimeout(safetyTimeout1);
      window.clearTimeout(safetyTimeout2);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", onResize);
      videos.forEach((v) => {
        v.removeEventListener("loadedmetadata", boundVideoHandler);
        v.removeEventListener("loadeddata", boundVideoHandler);
      });

      // revert matchMedia & context
      try {
        if (mmRef.current) mmRef.current.revert();
      } catch (e) {}
      try {
        ctxRef.current?.revert();
      } catch (e) {}
      // kill any remaining ScrollTriggers
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className=" min-h-[100vh] relative"
      aria-label="Unified Platform Section"
    >
      <div ref={sectionTriggerRef} className="h-1 w-full mb-4 md:mb-28 lg:mb-[100px]"></div>
      <section className="wrapper">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5 lg:gap-14 xl:gap-32 py-8 sm:py-20 xl:py-16 px-6 sm:px-10 xl:px-28 rounded-[20px] lg:rounded-[40px] bg-[#F3F4F6]">
          {/* Cards Column */}
          <div className="md:order-1 order-2 md:w-3/6 lg:w-2/5 md:h-[560px] lg:h-[695px] overflow-hidden">
            <div className="unified-platform-cards flex flex-col items-center justify-start gap-4 w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full max-w-[342px] md:max-w-full p-6 lg:p-8 rounded-[30px] border border-gray-100 shadow-[0px_0px_20px_0px_#00000005] bg-white"
                >
                  <div className="w-20 h-20 lg:w-[100px] lg:h-[100px] flex items-center justify-center mb-5 lg:mb-10 rounded-xl bg-[#F3F4F6]">
                    <Image
                      src={card.icon}
                      alt={`${card.title} Icon`}
                      width={56}
                      height={56}
                      className="w-14 h-14"
                    />
                  </div>
                  <h3 className="text-xl lg:text-2xl leading-8 lg:leading-10 mb-3 lg:mb-4 font-semibold text-[var(--text-dark)]">
                    {card.title}
                  </h3>
                  <p className="text-sm lg:text-base leading-6 text-[var(--text-grey)]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full order-1 md:order-2 md:w-1/2 lg:w-3/5">
            <div className="flex flex-col items-center justify-center">
              <MainHeading className="text-center mb-4">Features That Set Us Apart</MainHeading>
              <Paragraph className="text-center mb-6">
                Modern tools designed to simplify, scale, and smarten your business.
              </Paragraph>

              <div className="hidden md:flex">
                <ButtonLg url="#" text="View All FAQs" bgColor="#1AD1B9" textColor="white" isBorder />
              </div>
            </div>
          </div>

          <div className="md:hidden flex order-3">
            <ButtonLg
              url="#"
              text="View All FAQs"
              bgColor="#1AD1B9"
              textColor="white"
              isBorder
              className="px-[50px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
