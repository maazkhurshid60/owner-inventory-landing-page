"use client";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="owner-inventory-footer relative -mt-[131px] pt-[251px] lg:pt-[291px] pb-10 px-4 md:px-6 lg:px-10 bg-white/50 backdrop-blur-xl"
      style={{
        background:
          "linear-gradient(90deg,  rgba(158, 2, 255, 0.3) 0%, rgba(207, 181, 249, 1) 10%, rgba(26, 209, 185, 0.3) 80%) ",
      }}
    >
      <div className="flex wrapper  flex-col gap-10 bg-[var(--white-color)] px-6 py-10 xl:px-[60px] xl:py-[60px] rounded-[40px]">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* Logo */}
          <Link href={'/'} className="owner-inventery-footer__logo">
            <Image
              src="/assets/owner-inventory-logo.svg"
              alt="Owner's logo"
              width={130}
              height={40}
              className="w-[130px] h-10 md:w-[97px] md:h-[30px] lg:w-[110px] xl:w-[130px] lg:h-10"
              loading="lazy"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 xl:gap-6">
            {[
              { text: "Privacy Policy", href: "/privacy-policy" },
              { text: "Terms & Conditions", href: "/terms-and-conditions" },
              { text: "Help Center", href: "/help-center" },
              { text: "Cookies", href: "/cookies" },
              { text: "FAQs", href: "/faqs" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-sm md:text-[10px] lg:text-xs xl:text-sm font-semibold font-onest text-[var(--text-dark)] cursor-pointer"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 md:gap-[10px] lg:gap-4 xl:gap-6">
            {["facebook", "instagram", "twitter", "linkdn"].map(
              (platform, index) => (
                <Link
                  key={index}
                  href="#"
                  className="cursor-pointer w-7 h-7 md:w-[17px] md:h-[17px] lg:w-7 lg:h-7"
                >
                  <Image
                    src={`/assets/footer/${platform}-logo.svg`}
                    alt={`${platform}-logo`}
                    width={28}
                    height={28}
                    className="w-full"
                    loading="lazy"
                  />
                </Link>
              )
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[var(--text-dark)] rounded-full" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <p className="text-[10px] lg:text-base font-normal text-[var(--text-dark)]">
            ©2025 Owners Inventory - All rights reserved
          </p>
          <p className="text-[10px] lg:text-base font-normal text-[var(--text-dark)]">
            A product of{" "}
            <Link href="#" className="font-semibold underline cursor-pointer">
              Owners Universe
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
