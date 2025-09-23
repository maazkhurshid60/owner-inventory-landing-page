"use client";
import { useState } from "react";
import { companyItems } from "./dropdownItems/Companylist";
import {
  featuresItems,
  featuresDetailsMap,
  FeatureList,
} from "./dropdownItems/Featureslist";
import {
  industriesItems,
  industryDetailsMap,
  IndustryList,
} from "./dropdownItems/IndustryItemslist";
import {
  resourcesItems,
  resourcesDetailsMap,
} from "./dropdownItems/ResourceItemlist";
import NavDropdown from "./NavDropdown";
import Image from "next/image";
import "../../../app/globals.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavItems = () => {
  const [selectedFeatureKey, setSelectedFeatureKey] = useState("pos");
  const [selectedIndustryKey, setSelectedIndustryKey] = useState("retail");
  const [selectedResourceKey, setSelectedResourceKey] =
    useState<string>("learning");

  const router= useRouter();

  return (
    <div className="bg-white md:px-1 md:py-1 xl:px-3 xl:py-1.5 shadow-[0_0_20px_0_#0000001A] rounded-full  inventory-menu md:flex justify-center w-auto">
      <ul className="hidden md:flex items-center justify-center md:gap-1 lg:gap-3 w-auto">
        {/* FEATURES DROPDOWN */}
        <NavDropdown label="Features" >
          <div className="h-2 bg-transparent"></div>
           
          <div
            
            className="grid grid-cols-12 gap-6 p-10 mt-2 mx-auto bg-white 
                    rounded-2xl shadow-[0_0_20px_0_#0000001A] h-[450px] overflow-hidden"
          >
            {/* Left Section (9/12) */}
            <div
              className="col-span-12 md:col-span-9 overflow-y-auto pr-4 
                          scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-track-transparent"
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 content-start">
                {featuresItems.map((item) => (
                <button
  key={item.key}
  onClick={() => setSelectedFeatureKey(item.key)}
  className={`relative flex items-center gap-2 px-3 py-4 border rounded-xl ${
    selectedFeatureKey === item.key
      ? "border-[#795CF5] bg-gray-100"
      : "border-[#D9D9D9]"
  } hover:bg-gray-100`}
>
  <Image
    src={item.icon}
    alt={item.title}
    width={16}
    height={16}
  />
  <span className="text-xs font-medium text-left whitespace-nowrap text-[#231F20]">
    {item.title}
  </span>

  {/* Absolute arrow link */}
  <Link
    href={`/features/${item.key.toLowerCase()}`}
    
    className="absolute top-1/2 right-2 transform -translate-y-1/2"
  >
    <Image
      src="/assets/detail-icon.svg"
      alt="arrow-up"
      width={12}
      height={16}
      priority
      className="h-4 w-3"
    />
  </Link>
</button>

                ))}
              </div>
            </div>

            {/* Right Section (3/12, hidden on mobile) */}
            {featuresDetailsMap[selectedFeatureKey] && (
              <div className="hidden lg:block col-span-3 border-l border-[#D9D9D9] pl-4 overflow-y-auto overflow-x-auto w-3xl">
                <p className="mb-4 text-xs font-bold text-[#231F20]">
                  {
                    featuresItems.find(
                      (item) => item.key === selectedFeatureKey
                    )?.title
                  }
                </p>
                <FeatureList items={featuresDetailsMap[selectedFeatureKey]} />
              </div>
            )}
          </div>
        </NavDropdown>

        {/* INDUSTRIES DROPDOWN */}
        <NavDropdown label="Industries">
          <div className="h-2 bg-transparent"></div>

          <div
            className="grid grid-cols-12 gap-6 p-10 mt-2 mx-auto bg-white 
               rounded-2xl shadow-[0_0_20px_0_#0000001A] h-[450px] overflow-hidden"
          >
            {/* Left Section (9/12) */}
            <div
              className={`overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-track-transparent
    ${
      industryDetailsMap[selectedIndustryKey]
        ? "md:col-span-9 col-span-12"
        : "col-span-12"
    }`}
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 content-start">
                {industriesItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setSelectedIndustryKey(item.key)}
                    className={`flex items-center gap-2 px-3 py-4 border rounded-xl ${
                      selectedIndustryKey === item.key
                        ? "border-[#795CF5] bg-gray-100"
                        : "border-[#D9D9D9]"
                    } hover:bg-gray-100`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={16}
                      height={16}
                    />
                    <span className="text-xs font-medium text-left whitespace-nowrap text-[#231F20]">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section (3/12, hidden on mobile) */}
            {industryDetailsMap[selectedIndustryKey] && (
              <div className="hidden lg:block col-span-3 border-l border-[#D9D9D9] pl-4 overflow-y-auto">
                <p className="mb-4 text-xs font-bold text-[#231F20]">
                  {
                    industriesItems.find((i) => i.key === selectedIndustryKey)
                      ?.title
                  }
                </p>
                <IndustryList items={industryDetailsMap[selectedIndustryKey]} />
              </div>
            )}
          </div>
        </NavDropdown>

        {/* PRICING LINK */}
        <li>
          <a
            href="/pricing"
            className="flex items-center justify-center gap-3 px-3.5 py-1.5 md:text-[10px] xl:px-4 xl:py-[9px] xl:text-sm font-semibold hover:bg-gray-100 hover:border-[#795CF5] text-[#231F20] bg-white border border-[#F3F4F6] rounded-full"
          >
            Pricing
          </a>
        </li>

        {/* RESOURCES DROPDOWN */}

        <NavDropdown label="Resources">
          <div className="h-2 bg-transparent"></div>

          <div
            className="grid grid-cols-12 gap-6 p-10 mt-2 mx-auto bg-white 
               rounded-2xl shadow-[0_0_20px_0_#0000001A] h-[450px] overflow-hidden"
          >
            {/* Left Section (9/12) */}
            <div
              className={`overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-track-transparent
    ${
      resourcesDetailsMap[selectedResourceKey]
        ? "md:col-span-9 col-span-12"
        : "col-span-12"
    }`}
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 content-start">
                {resourcesItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setSelectedResourceKey(item.key)}
                    className={`flex items-center gap-2 px-3 py-4 border rounded-xl ${
                      selectedResourceKey === item.key
                        ? "border-[#795CF5] bg-gray-100"
                        : "border-[#D9D9D9]"
                    } hover:bg-gray-100`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={16}
                      height={16}
                    />
                    <span className="text-xs font-medium text-left whitespace-nowrap text-[#231F20]">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section (3/12, hidden on mobile) */}
            {resourcesDetailsMap[selectedResourceKey] && (
              <div className="hidden lg:block col-span-3 border-l border-[#D9D9D9] pl-4 overflow-y-auto">
                <p className="mb-4 text-xs font-bold text-[#231F20]">
                  {
                    resourcesItems.find((i) => i.key === selectedResourceKey)
                      ?.title
                  }
                </p>
                <ul className="space-y-0">
                  {resourcesDetailsMap[selectedResourceKey].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-xs font-normal leading-9 text-[#231F20] hover:text-gray-400"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </NavDropdown>

        {/* COMPANY DROPDOWN */}

        <NavDropdown label="Company">
          <div className="h-2 bg-transparent"></div>

          <div
            className="grid grid-cols-12 gap-6 p-10 mt-2 mx-auto bg-white 
               rounded-2xl shadow-[0_0_20px_0_#0000001A] h-[450px] overflow-hidden"
          >
            {/* Left Section (9/12) */}
            <div
              className={`overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-track-transparent
    col-span-12`}
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 content-start">
                {companyItems.map((item) => (
                  <a
                    key={item.title}
                    href="#"
                    className="flex items-center gap-2 px-4 py-4 border border-[#D9D9D9] rounded-xl hover:bg-gray-100 hover:border-[#795CF5]"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={16}
                      height={16}
                    />
                    <span className="text-xs font-medium text-[#231F20] hover:font-semibold">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </NavDropdown>
      </ul>
    </div>
  );
};

export default NavItems;
