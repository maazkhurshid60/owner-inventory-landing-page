'use client';
import React, { useState } from 'react';
import Header from './Header';
import PricingHero from './PricingHero';
import PricingCards from './PricingCards';
import ComparisonTable from './ComparisonTable';
import { pricingPlans, featureCategories } from './tableConfig';
import FeaturesSection from '../FeaturesSection';
import FaqSection from '../FAQSection';
import CalltoActionBottom from '../CalltoActionBottom';
import Footer from '../Footer';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');

  const handleTabChange = (tab: 'monthly' | 'yearly') => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
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
        <ComparisonTable categories={featureCategories} />

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
