"use client";

import React, { useState } from "react";

const records = [
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
];

const SearchRecords: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleRecords = showAll ? records : records.slice(0, 4);

  return (
    <div
      className="md:col-span-7 lg:col-span-8 flex flex-col gap-8 lg:gap-10 "
      id="search-records"
    >
      {visibleRecords.map((item, idx) => (
        <div key={idx} className="search-record flex flex-col">
          <h3 className="search-record__title xl:text-2xl text-xl leading-100% font-semibold text-[#231F20] font-onest">
            {item.title}
          </h3>
          <a
            href={item.url}
            className="xl:text-sm text-xs font-bold font-onest text-[#795CF5] cursor-pointer"
          >
            {item.url}
          </a>
          <p className="search-record__desc xl:text-base text-sm font-normal font-onest text-[#231F20] mt-4">
            {item.desc}
          </p>
        </div>
      ))}

      {/* Show button only if there are more than 4 records */}
      {records.length > 4 && (
        <div className="md:mt-7 mt-5 flex items-center justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-[#795CF5] text-white border border-transparent hover:bg-transparent hover:border-[#795CF5] hover:text-[#795CF5] font-onest font-semibold text-base px-[60px] py-5 rounded-full transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchRecords;
