import React from "react";
import FeatureCard from "./FeatureCard";

// just content from backend (no layout classes here)
const features = [
  {
    title: "Manufacturing",
    description:
      "Manage production planning, bills of materials, and assembly workflows with ease.",
    videoSrc:
      "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/manufacturing.webm",
  },
  {
    title: "Integrations",
    description:
      "Connect Owners Inventory with third-party apps, marketplaces, and payment gateways.",
    videoSrc:
      "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/integration.webm",
  },
  
  
];

const SmartIntegration: React.FC = () => {

  const classPatterns = [
    {
      colClass: "col-span-12 md:col-span-6 lg:col-span-7",
      scaleClass: "scale-110",
     
    },
    {
      colClass: "col-span-12 md:col-span-6 lg:col-span-5",
      scaleClass: "scale-125",
     
    },
    {
      colClass: "col-span-12 md:col-span-6 lg:col-span-5",
      scaleClass: "scale-125",
     
    },
    {
      colClass: "col-span-12 md:col-span-6 lg:col-span-7",
      scaleClass: "scale-110",
     
    },
  ];

  return (
    <section className="wrapper">
      <div className="lg:mt-40 md:mt-28 mt-20 flex flex-col gap-12 lg:gap-20">
        {/* Heading & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <h1 className="font-onest font-semibold text-[#231F20] text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl leading-9 sm:leading-[48px] lg:leading-[60px] lg:max-w-4xl xl:mb-10 lg:mb-6 mb-5">
            Connected Production & Smart Integrations
          </h1>
          <p className="font-onest font-normal text-[#231F20] text-sm lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 w-full max-w-[978px]">
            Take control of your manufacturing workflows while keeping your business
            connected. You can manage production orders, bills of materials, and
            assembly processes effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-12 items-stretch gap-6">
          {features.map((feature, index) => {
            const pattern = classPatterns[index % classPatterns.length]; 
            return (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                videoSrc={feature.videoSrc}
                className={`${pattern.colClass} p-[1px] rounded-[30px] flex`}
                paddingClass="p-4"
                mediaClassName="lg:h-auto h-[280px]"
                buttonLabel="View Details"
                buttonHref="#"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SmartIntegration;
