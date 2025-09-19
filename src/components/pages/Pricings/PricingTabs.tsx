import React from 'react';

interface PricingTabsProps {
  activeTab: 'monthly' | 'yearly';
  onTabChange: (tab: 'monthly' | 'yearly') => void;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="inline-flex p-1 lg:p-1.5 mt-10 xl:mt-20 border rounded-full bg-white">
      <button
        onClick={() => onTabChange('monthly')}
        className={`tab-btn px-4 py-2 md:px-5 md:py-2 lg:px-[30px] lg:py-[14px] text-[10px] md:text-xs lg:text-base font-onest font-semibold border rounded-full transition-colors duration-300 ${
          activeTab === 'monthly'
            ? 'text-white bg-[#795CF5] border-[#795CF5]'
            : 'text-[#231F20] bg-transparent border-transparent hover:text-white hover:bg-[#795CF5] hover:border-[#795CF5]'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onTabChange('yearly')}
        className={`tab-btn px-4 py-2 md:px-5 md:py-2 lg:px-[30px] lg:py-[14px] text-[10px] md:text-xs lg:text-base font-onest font-semibold border rounded-full transition-colors duration-300 ${
          activeTab === 'yearly'
            ? 'text-white bg-[#795CF5] border-[#795CF5]'
            : 'text-[#231F20] bg-transparent border-transparent hover:text-white hover:bg-[#795CF5] hover:border-[#795CF5]'
        }`}
      >
        Yearly
      </button>
    </div>
  );
};

export default PricingTabs;
