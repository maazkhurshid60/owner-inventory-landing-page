import React from "react";
import PricingTabs from "./PricingTabs";
import PricingCards from "./PricingCards";
import { pricingPlans } from "./tableConfig";

interface PricingHeroProps {
  activeTab: "monthly" | "yearly";
  onTabChange: (tab: "monthly" | "yearly") => void;
}

const PricingHero: React.FC<PricingHeroProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <>
      <section className="onwer-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 overflow-hidden">
        <div className=" flex items-center justify-start md:justify-center md:items-center w-[63%] ml-0 md:mx-auto relative inset-x-0">
          {/* Left Shape (only visible on md+) */}
          <div className="hidden md:block relative w-1/2 h-20 bg-[#F3F4F6] rounded-tl-[40px]">
            <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
          </div>

          {/* Right Shape */}
          <div className="relative w-40 rounded-tr-[40px] rounded-tl-[40px] md:rounded-tl-none h-20 md:w-1/2 md:h-20 bg-[#F3F4F6] md:rounded-tr-[40px] ">
            <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg, #F3F4F6 0%, transparent 40%), linear-gradient(90deg, rgba(26, 209, 185, 0.3) 0%, rgba(121, 92, 245, 0.3) 100%)",
          }}
          className=" relative flex flex-col items-center justify-center w-full overflow-hidden pt-10 pb-6 md:py-[76px] lg:py-0 lg:pb-[150px]  bg-[#F3F4F6] rounded-b-[40px] rounded-tr-[40px] md:rounded-tl-[40px] backdrop-blur-[374px]"
        >
          <h1 className="text-4xl px-6 md:text-[60px] xl:text-7xl leading-[48px] md:leading-[66px] xl:leading-[90px] text-center font-onest font-semibold mx-auto md:max-w-screen-sm xl:max-w-5xl lg:mt-[150px] text-[#231F20]">
            Start free. Scale anytime.
          </h1>

          <p className="font-onest px-6  text-xl leading-9 font-normal text-[#231F20] text-center w-full max-w-4xl mt-10">
            Get full access to powerful inventory tools without upfront costs.
            Start managing smarter today and upgrade only when your business is
            ready — no contracts, no pressure.
          </p>

          <PricingTabs activeTab={activeTab} onTabChange={onTabChange} />
               
          {/* Pricing Cards - properly constrained within hero */}
          <div className="w-full mt-10 md:mt-14 xl:mt-20">
            <PricingCards plans={pricingPlans} isYearly={activeTab === "yearly"} />
          </div>
        </div>  
      </section>
     
    </>
  );
};

export default PricingHero;
