'use client';
import React, { useState } from 'react';

import PricingCards from './PricingCards';
import ComparisonTable from './ComparisonTable';
import { pricingPlans, featureCategories } from './tableConfig';
import PricingHero from './PricingHero';
import FeaturesSection from '../landing-page/FeaturesSection';
import FaqSection from '../landing-page/FAQSection';
import CalltoActionBottom from '../landing-page/CalltoActionBottom';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');

  const handleTabChange = (tab: 'monthly' | 'yearly') => {
    console.log("tab", tab);
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen">
     
      
      {/* Spacing for fixed header */}
      <div className="md:h-6 h-8"></div>
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <PricingHero
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />

        
        {/* Comparison Table */}
        <ComparisonTable categories={featureCategories} tab={activeTab} onTabChange={setActiveTab} />

        <section className="">
          <FeaturesSection/>
          <FaqSection/>
          <CalltoActionBottom/>
        
         
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
