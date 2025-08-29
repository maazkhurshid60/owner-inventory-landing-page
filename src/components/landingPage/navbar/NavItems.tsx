'use client';
import { useState } from 'react';
import { companyItems } from './dropdownItems/Companylist';
import { featuresItems, featuresDetailsMap, FeatureList } from './dropdownItems/Featureslist';
import { industriesItems, industryDetailsMap, IndustryList  } from './dropdownItems/IndustryItemslist';
import { resourcesItems, resourcesDetailsMap } from './dropdownItems/ResourceItemlist';
import NavDropdown from './NavDropdown';
import Image from 'next/image';
import '../../../app/globals.css';

const NavItems = () => {
  const [selectedFeatureKey, setSelectedFeatureKey] = useState('pos');
  const [selectedIndustryKey, setSelectedIndustryKey] = useState('retail');
  const [selectedResourceKey, setSelectedResourceKey] = useState<string>('learning');

  return (
    <ul className="hidden md:flex items-center gap-2 bg-white px-2 py-1 shadow-md rounded-full inventory-menu">
      {/* FEATURES DROPDOWN */}
<NavDropdown label="Features">
  <div className="flex w-full gap-4">
    {/* Left Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full 2xl:w-[1200px] xl:w-[1220px] lg:w-[950px] md:w-[700px] gap-6" style={{ alignContent: 'start' }}>
      {featuresItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setSelectedFeatureKey(item.key)}
          className={`flex items-center gap-2 px-4 py-4 border rounded-xl ${
            selectedFeatureKey === item.key
              ? 'border-[#795CF5] bg-gray-100'
              : 'border-[#D9D9D9]'
          } hover:bg-gray-100`}
        >
          <Image src={item.icon} alt={item.title} width={16} height={16} />
          <span className="text-xs font-medium text-[#231F20]">
            {item.title}
          </span>
        </button>
      ))}
    </div>

    {/* Right Sidebar - only if data exists */}
    {featuresDetailsMap[selectedFeatureKey] && (
      <div className="w-3/12 pl-3 border-l border-[#D9D9D9]">
        <p className="mb-4 text-xs font-bold text-[#231F20]">
          {featuresItems.find((item) => item.key === selectedFeatureKey)?.title}
        </p>
        <FeatureList items={featuresDetailsMap[selectedFeatureKey]} />
      </div>
    )}
  </div>
</NavDropdown>


      {/* INDUSTRIES DROPDOWN */}
<NavDropdown label="Industries">
  <div className="flex w-full gap-2">
    {/* LEFT GRID */}
    <div
      className={`grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ${
        industryDetailsMap[selectedIndustryKey] ? 'w-9/12' : 'w-full'
      } 2xl:w-[1200px] xl:w-[1220px] lg:w-[950px] md:w-[700px] gap-6`}
      style={{ alignContent: 'start' }}
    >
      {industriesItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setSelectedIndustryKey(item.key)}
          className={`flex items-center gap-1 px-4 py-4 border rounded-xl ${
            selectedIndustryKey === item.key ? 'border-[#795CF5] bg-gray-100' : 'border-[#D9D9D9]'
          } hover:bg-gray-100`}
        >
          <Image src={item.icon} alt={item.title} width={16} height={16} />
          <span className="text-xs font-medium text-[#231F20]">{item.title}</span>
        </button>
      ))}
    </div>

    {/* RIGHT SIDEBAR — only shown if subcategories exist */}
    {industryDetailsMap[selectedIndustryKey] && (
      <div className="xl:w-2/12 w-3/12 pl-4 border-l border-[#D9D9D9]">
        <p className="mb-4 text-xs font-bold text-[#231F20]">
          {industriesItems.find((i) => i.key === selectedIndustryKey)?.title}
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
  <div className={`flex w-full gap-4`}>
    {/* Left Grid */}
    <div
      className={`grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ${
        resourcesDetailsMap[selectedResourceKey] ? 'w-9/12' : 'w-full'
      } 2xl:w-[1200px] xl:w-[1220px] lg:w-[950px] md:w-[700px] gap-6`}
      style={{ alignContent: 'start' }}
    >
      {resourcesItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setSelectedResourceKey(item.key)}
          className={`flex items-center gap-2 px-5 py-4 border rounded-2xl ${
            selectedResourceKey === item.key ? 'border-[#795CF5] bg-gray-100' : 'border-[#D9D9D9]'
          } hover:bg-gray-100`}
        >
          <Image src={item.icon} alt={item.title} width={16} height={16} />
          <span className="text-xs font-medium text-[#231F20]">{item.title}</span>
        </button>
      ))}
    </div>

    {/* Right Sidebar: ONLY when the selected item has extra details */}
    {resourcesDetailsMap[selectedResourceKey] && (
      <div className="w-3/12 pl-4 border-l border-[#D9D9D9]">
        <p className="mb-6 text-xs font-bold text-[#231F20]">
          {resourcesItems.find((i) => i.key === selectedResourceKey)?.title}
        </p>
        <ul className="space-y-0">
          {resourcesDetailsMap[selectedResourceKey].map((item) => (
            <li key={item}>
              <a href="#" className="text-xs font-normal leading-9 text-[#231F20] hover:text-gray-400">
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
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full xl:w-[950px] lg:w-[950px] md:w-[700px] 2xl:w-[1200px] gap-6" style={{ alignContent: 'start' }}>
          {companyItems.map((item) => (
            <a
              key={item.title}
              href="#"
              className="flex items-center gap-2 px-4 py-4 border border-[#D9D9D9] rounded-xl hover:bg-gray-100 hover:border-[#795CF5]"
            >
              <Image src={item.icon} alt={item.title} width={16} height={16} />
              <span className="text-xs font-medium text-[#231F20] hover:font-semibold">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </NavDropdown>
    </ul>
  );
};

export default NavItems;
