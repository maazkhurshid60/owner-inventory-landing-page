'use client';

import { ReactNode, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ButtonSm from '@/components/button/ButtonSm';
import InputField from '@/components/form-fields/InputField';
import ButtonLg from '@/components/button/ButtonLg';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';
import { useHeroAnimation2 } from '@/hooks/useHeroAnimation2';
import { useHeaderAnimation } from '@/hooks/useHeaderAnimation';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  title?: string;
  description?: string; 
  video?: string; 
  showButtons?: boolean;
  showSubscribe?: boolean;  
  children?: ReactNode; 
  heroHeight?: string;
  heroOverflow?: string;
   variant?: 'animation1' | 'animation2' | 'none';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'Grow Faster with Smarter Inventory Tools',
  description,
  video,
  showButtons = true,
  showSubscribe = false,
  heroHeight= "lg:h-[920px]",
  heroOverflow= "overflow-y-hidden",
  children,
  variant = 'animation1',
}) => {
 
   useHeaderAnimation();
  if (variant === 'animation1') {
    useHeroAnimation();
  } else if (variant === 'animation2') {
    useHeroAnimation2();
  }
  return (
    <div className="pinned-section-1">
      <div className="top-section md:h-6 h-8"></div>
      <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 w-[100%] z-50">
        {/* SHAPE HEADER */}
        <div className=" owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
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
        <div className="md:py-[1px] bg-[#F3F4F6] rounded-[40px]">
          <div
            className={`owner-inventory-hero__bottom relative flex flex-col items-center justify-center w-full ${heroHeight} ${heroOverflow} pt-10 pb-6 md:py-[76px] lg:py-0 px-6 md:px-[100px] bg-[#F3F4F6] rounded-b-[40px] rounded-tr-[40px] lg:rounded-tl-[40px]  backdrop-blur-[374px]`}
            style={{
              backgroundImage:
                'linear-gradient(180deg, #F3F4F6 0%, transparent 40%), linear-gradient(90deg, rgba(26, 209, 185, 0.3) 0%, rgba(121, 92, 245, 0.3) 100%)',
            }}
          >
            {/* Heading */}
            <div className="owner-inventory-hero__content flex flex-col items-center justify-center w-full">
              <h1 className="owner-inventory-hero__content--title text-4xl md:text-[60px] xl:text-7xl leading-[48px] md:leading-[66px] xl:leading-[90px] text-center font-onest font-semibold mx-auto md:max-w-screen-sm xl:max-w-5xl lg:mt-[150px] text-[#231F20]">
                 {title}
              </h1>

              {description && !showButtons &&(
                 <p className="font-onest text-xl leading-9 font-normal text-[#231F20] text-center w-full max-w-4xl mt-16">
                  {description}
                </p>
              )}

              {showButtons &&(
                <div className="inline-flex p-1 lg:p-1.5 mt-10 xl:mt-20 rounded-full bg-white owner-inventory-hero__content--buttons">
                <ButtonSm url="#" text="Book Free Demo" bgColor="[#1AD1B9]" textColor="white" isBorder />
                <ButtonSm url="#" text="View Pricing Plans" bgColor="white" textColor="[#231F20]" isBorder={false} />
              </div>
              )}
               {showSubscribe && (
                <div className="mt-10 relative xl:mt-20 w-full max-w-xl mx-auto">
                  <div className="flex  items-center bg-white sm:px-2 rounded-full overflow-hidden shadow-sm">
                    <InputField
                     placeholder="Enter email" type="email" rounded="left" py='py-3 sm:py-4' px='px-4 sm:px-8'/>
                     <div className='absolute bottom-[-45px] left-0 w-full sm:relative sm:bottom-0 sm:w-auto'>

                   <ButtonSm url="#" text="Subscribe" bgColor="[#795CF5]" textColor="white" isBorder/>
                     </div>
                  </div>
                </div>
              )}
                {/* Extra flexibility */}
              {children}
              
            </div>

            {/* Video */}
            <div className="owner-inventory-hero__video w-full mt-10 md:mt-10 xl:mt-10 sm:max-w-lg md:max-w-xl lg:max-w-4xl">
              <video
                className="w-full object-cover rounded-3xl lazy-video feature-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
