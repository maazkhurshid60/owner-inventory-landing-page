import Image from 'next/image';
import React from 'react';

interface PricingTabsProps {
  activeTab: 'monthly' | 'yearly';
  onTabChange: (tab: 'monthly' | 'yearly') => void;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ activeTab, onTabChange }) => {
  return (
     <div className="inline-flex p-1 lg:p-2 mt-10 xl:mt-20 border border-transparent rounded-full bg-white">
      {/* Monthly Button */}
      <button
        onClick={() => onTabChange("monthly")}
        className={`tab-btn px-4 py-2 md:px-5 md:py-2 lg:px-[60px] lg:py-[14px] 
          text-[10px] md:text-xs lg:text-base font-onest font-semibold border rounded-full 
          transition-colors duration-300 ${
            activeTab === "monthly"
              ? "text-white bg-[#795CF5] border-[#795CF5]"
              : "text-[#231F20] bg-transparent border-transparent hover:text-white hover:bg-[#795CF5] hover:border-[#795CF5]"
          }`}
      >
        Monthly
      </button>

      {/* Yearly Button */}
      <div className="relative">
        <button
          onClick={() => onTabChange("yearly")}
          className={`tab-btn relative px-4 py-2 md:px-5 md:py-2 lg:px-[60px] lg:py-[14px] 
            text-[10px] md:text-xs lg:text-base font-onest font-semibold border rounded-full 
            transition-colors duration-300 ${
              activeTab === "yearly"
                ? "text-white bg-[#795CF5] border-[#795CF5]"
                : "text-[#231F20] bg-transparent border-transparent hover:text-white hover:bg-[#795CF5] hover:border-[#795CF5]"
            }`}
        >
          Yearly
        </button>

        {/* 10% Off Badge */}
        <span className="px-5 py-2 text-white font-onest font-semibold text-xs lg:text-sm bg-[#1AD1B9] whitespace-nowrap absolute right-0 lg:-right-10 -top-12 lg:-top-14 rounded-full z-30">
          10% Off
        </span>

        {/* Arrow */}
        <Image
          src="/assets/owners-inventory-pricing/right-arrow-off.svg"
          alt="arrow"
          width={64} // lg:w-16
          height={56} // lg:h-14
          className="lg:w-16 lg:h-14 h-10 w-10 absolute right-3 lg:-right-4 -top-8 lg:-top-10 z-20"
        />
      </div>
    </div>
  );
};

export default PricingTabs;
