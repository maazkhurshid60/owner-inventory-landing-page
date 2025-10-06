"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

type SearchFieldProps = {
  searchOpen?: boolean; // only relevant for navbar variant
  setSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  variant?: "navbar" | "page"; 
};

const SearchField: React.FC<SearchFieldProps> = ({
  searchOpen = false,
  setSearchOpen,
  searchQuery,
  setSearchQuery,
  variant = "navbar",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (variant === "navbar" && searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen, variant]);

  const wrapperClasses =
    variant === "navbar"
      ? `absolute left-0 top-[100%] w-full h-fit bg-white shadow-[0_0_20px_0_#0000001A] rounded-2xl transition-all duration-300 ${searchOpen ? "block" : "hidden"
      }`
      : "w-full"; 
  return (
    <div id="searchDropdown" className={wrapperClasses}>
      <div className={`${variant === "navbar" ? "py-4 px-7" : "py-4 px-0 md:px-7"} relative`}>
        <form action="/search" method="GET">
          <input
            ref={inputRef}
            type="text"
            name="q"
            placeholder="Search for features overviews, FAQs, and more..."
            className="w-full border text-[#231F20] border-gray-300 rounded-full p-3"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute top-6  rounded-full sm:top-[40%] p-2 right-2   sm:right-4 md:right-12 bg-white">
            <Image
              src="/assets/header-images/search-icon.svg"
              alt="Search"
              className="cursor-pointer"
              width={16}
              height={16}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchField;
