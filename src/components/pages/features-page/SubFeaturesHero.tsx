"use client";

import { ReactNode, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSm from "@/components/button/ButtonSm";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useHeroAnimation2 } from "@/hooks/useHeroAnimation2";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import Image from "next/image";
import Paragraph from "../typography/Paragraph";
import DropdownButtonSm from "@/components/dropdown/DropdownButtonSm";
import SubHeading from "../typography/SubHeading";

gsap.registerPlugin(ScrollTrigger);

interface SubFeaturesHeroProps {
  title?: string;
  video?: string;
  description?: string;
  variant?: "animation1" | "animation2" | "none";
}

const SubFeaturesHero: React.FC<SubFeaturesHeroProps> = ({
  title = "Grow Faster with Smarter Inventory Tools",
  description,
  video,
  variant = "animation1",
}) => {
  useHeaderAnimation();
  if (variant === "animation1") {
    useHeroAnimation();
  } else if (variant === "animation2") {
    useHeroAnimation2();
  }

  const [videoError, setVideoError] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  // Refs
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const homeHeroSecRef = useRef<HTMLDivElement>(null);
  const heroLowerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const growthBoxRef = useRef<HTMLDivElement>(null); // Added missing ref

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial states - FIXED properties
    gsap.set(mainHeadingRef.current, { opacity: 0, y: 50 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 30 });
    gsap.set(homeHeroSecRef.current, { 
      clipPath: "inset(0% 0% 100% 0%)" // Correct clipPath syntax
    });
    gsap.set(videoRef.current, { 
      y: 150, 
      opacity: 0 // Fixed: separated properties
    });
    gsap.set(growthBoxRef.current, { // Initialize the missing ref
      opacity: 0,
      y: 50
    });

    // Animations - FIXED timeline
    tl.to(mainHeadingRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8 
    }, 0);
    
    tl.to(paragraphRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8 
    }, 0.2); 
    
    tl.to(homeHeroSecRef.current, { 
      clipPath: "inset(0% 0% 0% 0%)", 
      duration: 1 
    }, 0.5);
    
    tl.to(videoRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      onComplete: () => {
        setShouldPlayVideo(true);
      },
    }, 1);
    
    tl.to(growthBoxRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, 1.2);

  }, []);

  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };


  const getMp4Version = (videoUrl: string) => {
    if (videoUrl.endsWith('.webm')) {
      return videoUrl.replace('.webm', '.mp4');
    }
    return videoUrl;
  };

 
  const getVideoType = (videoUrl: string) => {
    if (videoUrl.endsWith('.webm')) return 'video/webm';
    if (videoUrl.endsWith('.mp4')) return 'video/mp4';
    return 'video/mp4'; 
  };

   useEffect(() => {
    if (shouldPlayVideo && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video play failed:", error);
      });
    }
  }, [shouldPlayVideo]);

  return (
    <div className="" ref={homeHeroSecRef}>
      <div className="pinned-section-1">
        <div className="top-section md:h-6 h-8"></div>
        <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 w-[100%] z-50">
          {/* SHAPE HEADER */}
          <div className="owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
            {/* Left Shape (only visible on md+) */}
            <div className="owner-inventory-hero__shape-left hidden lg:block relative w-1/2 h-20 bg-[#F3F4F6] rounded-tl-[40px] owner-inventory-hero__border-left-top">
              <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>

            {/* Right Shape */}
            <div className="owner-inventory-hero__shape-right relative w-40 rounded-tr-[40px] rounded-tl-[40px] lg:rounded-tl-none h-20 md:w-1/2 lg:h-20 bg-[#F3F4F6] lg:rounded-tr-[40px] owner-inventory-hero__border-right-top top-right">
              <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
          </div>

          {/* HERO BODY */}
          <div className="md:py-[1px] bg-[#F3F4F6] rounded-[20px] lg:rounded-[40px]">
            <div
              className={`owner-inventory-hero__bottom relative flex flex-col items-center justify-center w-full pt-10 pb-6 md:py-[76px] lg:py-0 px-6 lg:px-[100px] bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] bg-cover bg-no-repeat backdrop-blur-[374px]`}
              style={{
                backgroundImage: "url('/assets/home-page-images/hero-bg.webp')",
              }}
            >
              {/* Heading */}
              <div className="owner-inventory-hero__content flex flex-col items-center justify-center w-full">
                <div ref={mainHeadingRef}>
                  <h1 className="text-center xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[#231F20] font-onest lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
                    {title}
                  </h1>
                </div>

                <div ref={paragraphRef}>
                  <Paragraph className="mb-4 text-center mx-auto">
                    {description}
                  </Paragraph>
                </div>

                <div 
                  ref={growthBoxRef} 
                  className="flex md:gap-4 gap-2 lg:p-1.5 relative z-[60] owner-inventory-hero__content--buttons"
                >
                  <ButtonSm
                    url="#"
                    text="Get Started for Free"
                    bgColor="[#1AD1B9]"
                    textColor="white"
                    isBorder
                  />
                </div>

                <div
                  ref={heroLowerRef}
                  className="owner-inventory-hero__lower relative w-full wrapper"
                >
                  {video && !videoError ? (
                    <video
                      ref={videoRef}
                      className="w-full object-cover rounded-3xl"
                      muted
                      playsInline
                      autoPlay={shouldPlayVideo} 
                      loop
                      onError={handleVideoError}
                    >
                      {/* Primary source - use the provided video */}
                      <source
                        src={video}
                        type={getVideoType(video)}
                      />
                      
                      {/* Fallback to MP4 if WebM is provided */}
                      {video.endsWith('.webm') && (
                        <source
                          src={getMp4Version(video)}
                          type="video/mp4"
                        />
                      )}
                      
                      Your browser does not support the video tag.
                    </video>
                  ) : videoError ? (
                    // Fallback content if video fails to load
                    <div className="w-full h-64 bg-gray-200 rounded-3xl flex items-center justify-center">
                      <p className="text-gray-500">Video failed to load</p>
                    </div>
                  ) : (
                    // Fallback when no video is provided
                    <div className="w-full h-64 bg-gray-200 rounded-3xl flex items-center justify-center">
                      <p className="text-gray-500">No video available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubFeaturesHero;