import ButtonSm from "@/components/button/ButtonSm";
import React from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import IndustryPOSShowcase from "./IndustryPosShowcase";

export default function SmartSellSection() {
  return (
    <section className="wrapper">
      <div className="flex flex-col items-start justify-center">
        
        {/* Heading */}
                <MainHeading className="mb-6">
                    Built for Every Industry
                </MainHeading>

        {/* Description */}             
                        <Paragraph className="mb-6">
                          No matter what you sell, the Owners Inventory management program adapts to you.
                        </Paragraph>

  

      
          <ButtonSm url='#' text='Get Explore Now' bgColor='[#795CF5]' textColor="white" isBorder/>
          

          <div className="w-full">
            <IndustryPOSShowcase/>
          </div>

      </div>
    </section>
  );
}
