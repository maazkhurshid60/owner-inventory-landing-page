"use client";
import React from "react";
import Image from "next/image";

type SearchFieldProps = {
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchField: React.FC<SearchFieldProps> = ({
  searchOpen,
  setSearchOpen,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div
      id="searchDropdown"
      className={`absolute left-0 top-[100%] w-full h-fit bg-white shadow-[0_0_20px_0_#0000001A] rounded-2xl transition-all duration-300 ${
        searchOpen ? "block" : "hidden"
      }`}
    >
      <div className="py-4 px-7 relative">
        <form action="/search" method="GET">
          <input
            type="text"
            name="q"
            placeholder="Search for features overviews, FAQs, and more..."
            className="w-full border text-[#231F20] border-gray-300 rounded-full p-3"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute top-[40%] right-12">
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
