"use client"; // 👈 important, because GSAP runs on client

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./Logo";
import NavItems from "./NavItems";
import RightIcons from "./RightIcons";
import Mobileicons from "./Mobileicons";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    const headerMenu = document.querySelector(".inventory-menu");
    const headerMobile = document.querySelector(".mobile-iventory");
    const headerMobile3 = document.querySelector(".mobile-navbar");

    if (!header) return;

    if (window.innerWidth < 768) {
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top -10",
          toggleActions: "play reverse play reverse",
        },
      })
        .to(header, {
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 12px rgba(0,0,0,0.1)",
          borderRadius: "20px",
          width: "90%",
          paddingInline: "6px",
          duration: 0.3,
        })
        .to(
          headerMobile,
          {
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
            boxShadow: "none",
            duration: 0.3,
          },
          "<"
        )
        .to(headerMobile3, {
          backgroundColor: "rgba(255,255,255,0)",
          boxShadow: "none",
          duration: 0.3,
        });
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top -10",
          toggleActions: "play reverse play reverse",
        },
      })
        .to(header, {
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 12px rgba(0,0,0,0.1)",
          borderRadius: "999px",
          width: "90%",
          paddingInline: "6px",
          duration: 0.3,
        })
        .to(
          headerMenu,
          {
            backgroundColor: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(4px)",
            boxShadow: "none",
            duration: 0.3,
          },
          "<"
        );
    }

    if (window.innerWidth >= 1024 && window.innerWidth < 1200) {
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top -10",
          toggleActions: "play reverse play reverse",
        },
      })
        .to(header, {
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 12px rgba(0,0,0,0.1)",
          borderRadius: "999px",
          width: "90%",
          paddingInline: "6px",
          duration: 0.3,
        })
        .to(
          headerMenu,
          {
            backgroundColor: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(4px)",
            boxShadow: "none",
            duration: 0.3,
          },
          "<"
        );
    }

    if (window.innerWidth >= 1200) {
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top -10",
          toggleActions: "play reverse play reverse",
        },
      })
        .to(header, {
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 12px rgba(0,0,0,0.1)",
          borderRadius: "999px",
          width: "1100px",
          paddingInline: "6px",
          duration: 0.3,
        })
        .to(
          headerMenu,
          {
            backgroundColor: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(4px)",
            boxShadow: "none",
            duration: 0.3,
          },
          "<"
        );
    }
  }, []);

  return (
    <header className="header-animation fixed md:top-8 top-8 left-1/2 transform -translate-x-1/2 z-[999] w-full transition-colors duration-300 ease-in-out">
      <div className="wrapper">
        <nav className="relative flex items-center justify-between py-2">
          <Logo />
          <Mobileicons />
          <NavItems />
          <RightIcons />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
