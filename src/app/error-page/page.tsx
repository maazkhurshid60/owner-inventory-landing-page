"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useErrorAnimation } from "@/hooks/useErrorAnimation";

interface ErrorPageProps {
  code: number;
}

const errorContent: Record<
  number,
  { message: string; image: string; alt: string }
> = {
  400: {
    message: 'We’re sorry, it’s a “Bad Request”. Please go back to the homepage.',
    image: "/assets/error-pages/error-400.svg",
    alt: "400 Bad Request",
  },
  401: {
    message:
      'We’re sorry, the page you requested is “Unauthorized”. Please go back to the homepage.',
    image: "/assets/error-pages/error-401.svg",
    alt: "401 Unauthorized",
  },
  403: {
    message:
      'We’re sorry, you have requested a “Forbidden Page”. Please go back to the homepage.',
    image: "/assets/error-pages/error-403.svg",
    alt: "403 Forbidden",
  },
  404: {
    message:
      'We’re sorry, the page you are looking for could not be found. Please go back to the homepage.',
    image: "/assets/error-pages/error-404.svg",
    alt: "404 Not Found",
  },
  500: {
    message:
      'We’re sorry, there is an “Internal Server Error”. Please go back to the homepage.',
    image: "/assets/error-pages/error-500.svg",
    alt: "500 Internal Server Error",
  },
  503: {
    message:
      'We’re sorry, “Service is not Available”. Please go back to the homepage.',
    image: "/assets/error-pages/error-503.svg",
    alt: "503 Service Unavailable",
  },
};

export default function ErrorPage({ code }: ErrorPageProps) {
  const content = errorContent[code] || {
    message: "Unexpected error occurred. Please go back to the homepage.",
    image: "/assets/img/error-pages/error-500.svg",
    alt: "Error",
  };

  useErrorAnimation();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let heroBreak = gsap.matchMedia();

      // Small screens
      heroBreak.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          delay: 0.5,
          defaults: { duration: 1, ease: "power1.inOut" },
        });

        tl.fromTo(
          ".error-heading",
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1 }
        )
          .fromTo(
            ".error-image",
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1 },
            "-=0.3"
          )
          .fromTo(
            ".error-message",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1 },
            "-=0.2"
          )
          .fromTo(
            ".error-button",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 },
            "-=0.2"
          );
      });

      // Tablet screens
      heroBreak.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const tl = gsap.timeline({
          delay: 0.5,
          defaults: { duration: 1, ease: "power2.out" },
        });

        tl.fromTo(".error-heading", { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(".error-image", { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.4")
          .fromTo(".error-message", { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.4")
          .fromTo(".error-button", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1 });
      });

      // Desktop screens
      heroBreak.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          delay: 0.5,
          defaults: { duration: 1, ease: "power2.out" },
        });

        tl.fromTo(".error-heading", { y: -60, opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(".error-image", { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1 }, "-=0.5")
          .fromTo(".error-message", { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.3")
          .fromTo(".error-button", { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="wrapper">
      <section className="h-screen pt-[130px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {/* Heading */}
          <h2 className="error-heading text-4xl md:text-[60px] xl:text-7xl leading-[48px] md:leading-[66px] xl:leading-[90px] text-center font-onest font-semibold mx-auto md:max-w-screen-sm xl:max-w-5xl text-[#231F20]">
            Ooops!
          </h2>

          {/* Error Image */}
          <Image
            src={content.image}
            alt={content.alt}
            width={600}
            height={280}
            priority
            className="error-image w-full max-w-[500px] lg:max-w-[600px] h-[230px] lg:h-[280px] mt-2 lg:mt-8"
          />

          {/* Message */}
          <p className="error-message text-center text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 max-w-[500px] font-onest font-normal text-[#231F20] mt-6">
            {content.message}
          </p>

          {/* Button */}
          <Link
            href="/"
            className="error-button inline-block px-6 py-3 md:px-6 md:py-2.5 lg:px-12 lg:py-5 text-xs lg:text-base leading-none font-semibold text-white bg-[#795CF5] border border-transparent rounded-full hover:border-[#795CF5] hover:bg-transparent hover:text-[#795CF5] mb-3 mt-14 transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </section>
    </div>
  );
}
