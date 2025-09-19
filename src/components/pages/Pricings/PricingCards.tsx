import React, { useRef, useEffect, useState } from 'react';
import PricingCard from './PricingCard';
import { PricingPlan } from './types';

interface PricingCardsProps {
  plans: PricingPlan[];
  isYearly: boolean;
}

const PricingCards: React.FC<PricingCardsProps> = ({ plans, isYearly }) => {
  return (
    <div className="wrapper mx-auto">
      <div className={`owner-inventory-hero-section__pricing-cards mt-10 md:mt-14 xl:mt-20 w-full max-w-[1312px] overflow-x-auto flex items-stretch justify-start gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory md:snap-none scroll-smooth px-[calc((100vw-310px)/2)] md:px-0`}>
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isYearly={isYearly}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
