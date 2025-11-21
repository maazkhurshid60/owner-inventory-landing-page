"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const features = [
  {
    id: "inventorypos-system",
    title: "Smart POS System for Modern Retail",
    icon: "/assets/features-section/pos-system.svg",
    video:
      "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/pos-systemopt.webm",
  },
  {
    id: "inventory-ecommerce",
    title: "Built-in E-commerce - Fully Synced and Ready to Sell",
    icon: "/assets/features-section/cart-icon.svg",
    video:
      "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/e-commerceopt.webm",
  },
  {
    id: "inventory-management",
    title: "Inventory Management to Stay in Control of Every Product",
    icon: "/assets/features-section/inventory-management.svg",
    video:
      "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/inventory-managementopt.webm",
  },
  {
    id: "inventory-autosync",
    title: "Streamline Manufacturing + Stay in Control of Every Process",
    icon: "/assets/features-section/autosync.svg",
    video:
      "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/manufacturing-opt.webm",
  },
];

export default function FeaturesTabSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [progressMap, setProgressMap] = useState<{ [key: string]: number }>({});

  const desktopRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const mobileRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const video =
      desktopRefs.current[activeFeature] || mobileRefs.current[activeFeature];
    if (!video) return;

    // reset progress and play video
    setProgressMap((prev) => ({ ...prev, [activeFeature]: 0 }));
    video.currentTime = 0;
    video.play();

    const animateProgress = () => {
      if (video.duration > 0) {
        const percent = (video.currentTime / video.duration) * 100;
        setProgressMap((prev) => ({ ...prev, [activeFeature]: percent }));
      }
      animationRef.current = requestAnimationFrame(animateProgress);
    };

    animationRef.current = requestAnimationFrame(animateProgress);

    const handleLoop = () => {
      setProgressMap((prev) => ({ ...prev, [activeFeature]: 0 }));
    };

    video.addEventListener("ended", handleLoop);

    return () => {
      video.removeEventListener("ended", handleLoop);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [activeFeature]);

  return (
    <section className="features-tab-section mt-20 md:mt-28 lg:mt-40 py-10 md:py-10 xl:py-24 rounded-[20px] lg:rounded-[40px] bg-[#231F20] z-11">
      <div className="wrapper">
        <h1 className="w-full text-4xl md:text-[44px] lg:text-[56px] xl:text-[64px] leading-[48px] md:leading-[56px] lg:leading-[60px] xl:leading-[76px] mb-10 md:mb-11 xl:mb-10 text-left font-onest font-semibold text-white lg:max-w-[867px] md:max-w-[657px]">
          Powerful Features Built for Growing Businesses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-14 xl:gap-32 items-center justify-center w-full">
          {/* Desktop Videos */}
          <div className="hidden md:flex flex-col justify-center items-center gap-3 h-full">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`feature-image w-full max-w-[743] h-full max-h-[460px] p-1 ${
                  activeFeature === feature.id ? "flex" : "hidden"
                } items-center justify-center`}
              >
                <video
                  ref={(el) => {
                    desktopRefs.current[feature.id] = el;
                  }}
                  className=" object-cover rounded-3xl"
                  muted
                  playsInline
                  autoPlay
                  loop
                >
                  <source src={feature.video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>

          {/* Right Side Tabs + Mobile Video */}
          <div className="flex flex-col items-start justify-center gap-10 xl:gap-10 h-full">
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              const progress = progressMap[feature.id] || 0;

              return (
                <div
                  key={feature.id}
                  className="flex flex-col w-full items-start"
                >
                  {/* Tab Button */}
                  <div
                    className="feature-tab flex items-center justify-center gap-4 xl:gap-6 cursor-pointer"
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <div
                      className={`tab-icon-wrapper w-10 xl:w-11 px-2.5 py-2.5 flex items-center justify-center rounded-full ${
                        isActive ? "bg-[#795CF5]" : "bg-[rgba(243,244,246,0.1)]"
                      }`}
                    >
                      <Image
                        src={feature.icon}
                        alt="features-icon"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <span
                      className={`tab-label leading-6 xl:leading-9 font-onest ${
                        isActive
                          ? "text-[#795CF5] font-semibold text-base xl:text-2xl"
                          : "text-white text-sm xl:text-xl font-normal"
                      }`}
                    >
                      {feature.title}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div
                    className={`progress-bar w-full h-1 xl:h-1.5 mt-5 xl:mt-7 rounded-2xl bg-[rgba(243,244,246,0.1)] overflow-hidden ${
                      isActive ? "block" : "hidden"
                    }`}
                  >
                    <div
                      className="h-full bg-[#F3F4F6]"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  {/* Mobile Video */}
                  <div
                    className={`md:hidden w-full mt-5 ${
                      isActive ? "block" : "hidden"
                    }`}
                  >
                    {/* <video
                      ref={(el) => {
                        mobileRefs.current[feature.id] = el;
                      }}
                      className="w-full object-cover rounded-3xl"
                      muted
                      playsInline
                      autoPlay
                      loop
                    >
                      <source src={feature.video} type="video/mp4" />
                    </video> */}
                    <video
                      ref={(el) => {
                        desktopRefs.current[feature.id] = el;
                      }}
                      className="object-cover rounded-3xl"
                      muted
                      playsInline
                      autoPlay
                      loop
                    >
                      {/* MP4 fallback first */}
                      <source
                        src={feature.video}
                        type="video/mp4"
                      />

                      {/* Correct WebM MIME type */}
                      <source src={feature.video} type="video/webm" />
                    </video>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
