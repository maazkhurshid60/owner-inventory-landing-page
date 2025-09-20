import React from 'react';
import { PricingPlan } from './types';

interface PricingCardProps {
  plan: PricingPlan;
  isYearly?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly = false }) => {
  const displayPrice = isYearly ? plan.yearlyPrice : plan.price;
  const priceText = displayPrice === 0 ? 'Free' : `$${displayPrice}${isYearly ? '' : ''}`;

  return (
    <div className="flex flex-col items-center justify-start p-8 bg-white rounded-[30px] w-[310px] lg:w-[310px] snap-start flex-shrink-0">
      <h3 className="text-[28px] text-[#231F20] font-semibold leading-[100%] text-center mb-3 font-onest">
        {plan.name}
      </h3>
      <h2 
        className="lg:text-4xl md:text-[32px] text-[28px] font-semibold leading-[100%] text-center mb-3 font-onest"
        style={{ color: plan.color }}
      >
         {plan.price === 0 ? "Free" : `${priceText}`}<span className="text-xs">{plan.price === 0 ? "" : `/month`}</span>
      </h2>
     
      <a
        href="#"
        className="inline-block px-6 md:px-10 lg:px-[75px] py-3 md:py-2.5 text-xs lg:text-base leading-none font-semibold text-white whitespace-nowrap border border-transparent hover:bg-transparent rounded-full font-onest mb-8 transition-all"
        style={{ 
          backgroundColor: plan.color,
          '--hover-border-color': plan.color,
          '--hover-text-color': plan.color 
        } as React.CSSProperties}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = 'transparent';
          target.style.borderColor = plan.color;
          target.style.color = plan.color;
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = plan.color;
          target.style.borderColor = 'transparent';
          target.style.color = 'white';
        }}
      >
        Get Started
      </a>

      <ul className="flex flex-col justify-center items-center">
        {plan.features.map((feature, index) => (
          <li 
            key={index}
            className="text-xs sm:text-base leading-9 font-normal font-onest text-[#231F20] whitespace-nowrap"
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
