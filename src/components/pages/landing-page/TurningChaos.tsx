"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import CardHeading from "../typography/CardHeading";
import CardDesc from "../typography/CardDesc";

gsap.registerPlugin(ScrollTrigger);

interface Chaos {
  id: number;
  chaosNumber: string;
  chaosHead: string;
  chaosDesc: string;
}

const chaos: Chaos[] = [
  { id: 1, chaosNumber: "5000", chaosHead: "Items", chaosDesc: "Items Already Organized" },
  { id: 2, chaosNumber: "90", chaosHead: "Efficiency", chaosDesc: "Users Report Time Saved" },
  { id: 3, chaosNumber: "3", chaosHead: "Reach", chaosDesc: "Serving Teams in Continents" },
  { id: 4, chaosNumber: "250", chaosHead: "Users", chaosDesc: "Active Users Growing With Us" },
];

interface TurningChaosProps {
  title: string;
  description: string;
 
}

const TurningChaos: React.FC<TurningChaosProps> = ({
  title,
  description,
 
}) => {
  const chaosRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const firstBox = chaosRefs.current[0];
    if (!firstBox || !imageRef.current) return;

    const triggers: ScrollTrigger[] = [];

    const trigger = ScrollTrigger.create({
      trigger: firstBox,
      start: "top 70%",
      once: true,
      onEnter: () => {
        // Animate all numbers
        chaosRefs.current.forEach((el, index) => {
          if (!el) return;

          const finalValue = parseInt(chaos[index].chaosNumber, 10) || 0;
          const obj = { val: 0 };

          gsap.to(obj, {
            val: finalValue,
            duration: 1,
            ease: "power3.out",
            onUpdate: () => {
              if (el) el.innerText = Math.floor(obj.val).toLocaleString();
            },
          });
        });

        // Animate image at the same time
        gsap.fromTo(
          imageRef.current,
          { y: 300, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
          }
        );
      },
    });

    triggers.push(trigger);

    // Refresh ScrollTrigger for proper syncing
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="md:py-[1px] bg-[#F3F4F6] overflow-hidden lg:rounded-bl-[40px] lg:rounded-br-[40px] rounded-bl-[24px] rounded-br-[24px] mb-28 md:mb-20 lg:mb-[100px]">
      <div
        className={`relative  flex flex-col items-center justify-center w-full  pt-10 py-0 px-6 lg:px-[100px] overflow-hidden bg-[#F3F4F6] lg:rounded-bl-[40px] lg:rounded-br-[40px] rounded-bl-[24px] rounded-br-[24px] backdrop-blur-[42px]`}
           style={{
 backgroundImage: `
    linear-gradient(180deg, #F3F4F6 33%, transparent 60%),
    linear-gradient(90deg, rgba(26, 209, 185, 0.3) 0%, rgba(207, 181, 249, 1) 50%, rgba(158, 2, 255, 0.3) 80%)
  `,
}}
      >
        <div className="flex wrapper flex-col items-center justify-center w-full">
          <MainHeading className="text-center mx-auto md:max-w-screen-sm xl:max-w-5xl lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
            {title}
          </MainHeading>

          <Paragraph className="lg:mb-4 mb-6 text-center">{description}</Paragraph>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8 mt-10">
            {chaos.map(({ id, chaosHead, chaosDesc }, index) => (
              <div
                key={id}
                className="flex flex-col gap-3 items-center justify-start p-4 [var(--white-color)] border border-[rgba(255,255,255,0.5)] rounded-[30px] shadow-[0_4px_4px_0_rgba(0,0,0,0.13)] backdrop-blur-[22px] text-center"
              >
                <h2
                  className="text-[42px] leading-[100%] font-onest text-center font-semibold"
                  ref={(el) => {
                    chaosRefs.current[index] = el;
                  }}
                >
                  0
                </h2>

                <div className="flex flex-col items-center justify-start">
                  <CardHeading className="mb-2">{chaosHead}</CardHeading>
                  <CardDesc>{chaosDesc}</CardDesc>
                </div>
              </div>
            ))}
          </div>

          <div className=" w-full max-w-[913px] mt-[45px]" ref={imageRef}>
            <Image
              src="/assets/home-page-images/chaos-mainImage.webp"
              alt="Chaos Image"
              width={800}
              height={600}
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurningChaos;
