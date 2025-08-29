import React from 'react';
import PricingPage from '@/components/landingPage/sections/Pricings/PricingPage';
import Footer from '@/components/landingPage/sections/Footer';

const Page: React.FC = () => {
  return(
    <div>
      <PricingPage />
      <div className='pt-33'>
        <Footer />
      </div>
     
    </div>
  );
};

export default Page;
