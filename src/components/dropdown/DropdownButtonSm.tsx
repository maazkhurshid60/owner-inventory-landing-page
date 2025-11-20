"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  url: string;
}

interface DropdownButtonSmProps {
  text: string;
  bgColor: string;
  textColor?: string;
  isBorder?: boolean;
  items: DropdownItem[];
}

const DropdownButtonSm: React.FC<DropdownButtonSmProps> = ({
  text,
  bgColor,
  textColor = "white",
  isBorder = false,
  items,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (for mobile/tablet)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative z-[99999] inline-block text-left group"
      // For desktop: open on hover using group-hover
      onMouseEnter={() => window.innerWidth >= 1024 && setOpen(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && setOpen(false)}
    >
      <button
        onClick={() => window.innerWidth < 1024 && setOpen(!open)}
        className={`bg-${bgColor} px-3 py-2.5 md:px-5 md:py-3 border border-transparent lg:px-[30px] lg:py-4 flex items-center justify-center text-[11px] sm:text-sm whitespace-nowrap md:text-base font-onest font-semibold text-${textColor}
          ${isBorder ? `hover:border hover:border-${bgColor}` : ""}
          rounded-full hover:text-[#231F20] hover:bg-transparent transition-colors duration-300`}
      >
        {text}
        <svg
          className={`ml-2 h-3 w-3 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-1 w-full rounded-lg shadow-lg bg-white
          transition-all duration-200 ${
            open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
          }
          lg:group-hover:scale-100 lg:group-hover:opacity-100 lg:pointer-events-auto`}
          style={{
        backgroundColor: bgColor === "transparent" ? "transparent" : bgColor,
        color: textColor,
        border: isBorder ? `1px solid ${bgColor}` : "transparent",
        boxShadow: "2px 2px 22px 0px rgba(0,0,0,0.15)"
      }}
      >
        <ul className="py-1 text-sm text-gray-700 ">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className="block px-4 py-2 hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownButtonSm;
