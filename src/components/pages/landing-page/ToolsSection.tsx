import React from "react";
import MainHeading from "../typography/MainHeading";
import CardHeading from "../typography/CardHeading";

const usedTools = [
  { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
  { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
  { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
  { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
  { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
];

const ToolsSection = () => {
  return (
    <section className="wrapper">
      <div className="w-full bg-[#F3F4F6] p-8 rounded-[20px] lg:rounded-[40px] mt-[28px] md:mt-20 lg:mt-[100px]">

        <MainHeading className="text-center lg:mb-10 md:mb-6 mb-5">
          Connect Seamlessly with Your Favorite Tools
        </MainHeading>

        <div className="mt-10 grid grid-cols-12 gap-6">
          {usedTools.map((tool, index) => {
            const i = index % 5;

            let mdCol = "md:col-span-6";
            if (i === 4) mdCol = "md:col-span-12"; 

            let lgCol = "lg:col-span-4";
            if (i >= 3) lgCol = "lg:col-span-6"; 

            return (
              <div
                key={tool.id}
                className={`col-span-12 ${mdCol} ${lgCol} bg-white p-5 rounded-2xl flex flex-col gap-4 items-center justify-start`}
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-14 h-14 object-contain"
                />
                <CardHeading>{tool.name}</CardHeading>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ToolsSection;
