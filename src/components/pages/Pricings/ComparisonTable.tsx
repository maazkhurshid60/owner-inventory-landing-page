"use client";
import React, { useEffect, useState } from "react";
import { FeatureCategory } from "./types";
import { pricingPlans } from "./tableConfig";
import PricingTabs from "./PricingTabs";
import Tooltip from "@/components/toolTip/Tooltip";

interface ComparisonTableProps {
  categories: FeatureCategory[];
  tab: "monthly" | "yearly";
  onTabChange: (tab: "monthly" | "yearly") => void;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ categories, tab, onTabChange, }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex items-center justify-center">
          <img
            src="./assets/owners-inventory-pricing/compare-feature/tick-icon.svg"
            className="xl:h-[28px] md:h-6 md:w-[18px] w-3 h-[24px]"
            alt="Tick icon"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="text-gray-400">—</span>
        </div>
      );
    }
    return <div className="text-center">{value}</div>;
  };

  return (
    <section className="compare-section mt-20 md:mt-0 lg:mt-0">
      <div className="wrapper mx-auto flex items-center justify-center">
        <button
          onClick={toggleVisibility}
          className="compare-toggle flex gap-5 items-center justify-center px-12 py-5 bg-[#795CF5] text-white rounded-full text-xs md:text-lg leadign-[100%] font-semibold font-onest w-fit whitespace-nowrap"
        >
          Compare Feature List
          <img
            src="./assets/owners-inventory-pricing/compare-feature/arrow-down.svg"
            alt="Dropdown icon"
            className={`arrow-down ${isVisible ? "hidden" : "block"}`}
          />
          <img
            src="./assets/owners-inventory-pricing/compare-feature/arrow-up.svg"
            alt="Dropdown icon"
            className={`arrow-up ${isVisible ? "block" : "hidden"}`}
          />
        </button>
      </div>

      <div
        className={`compare-content pt-10 md:pt-16 lg:pt-20 wrapper mx-auto ${isVisible ? "block" : "hidden"
          }`}
      >
        <div className="w-full flex  items-center justify-end mb-10">
          <PricingTabs activeTab={tab} onTabChange={onTabChange} variant="toggle" />
        </div>
        <div className="flex w-full overflow-hidden rounded-[30px] bg-gradient-to-r from-[#1AD1B9] to-[#795CF5] p-[2px]">
          <div className="flex w-full overflow-hidden bg-white rounded-[28px]">
            {/* Left sticky column with feature names */}
            <div className="bg-white sticky left-0 z-10 w-6/12 md:w-4/12 lg:w-3/12 border-r border-[#1AD1B9] shrink-0">
              <table className="table-auto w-full border-collapse">
                {categories.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <thead>
                      <tr>
                        <th className="text-center md:h-[150px] h-[110px] p-[7.8px] md:p-[15.8px]">
                          <div className="flex flex-col items-center text-sm md:text-base lg:text-lg bg-[#F3F4F6] font-semibold text-[#231F20] rounded-[10px] justify-center gap-[6px] md:h-[150px] h-[110px] p-2 md:p-4">
                            {category.name}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} style={{ height: "68px" }}>
                          <td
                            className={`
                              px-4 text-left text-sm md:text-base lg:text-lg leading-6
                               text-[#231F20] font-normal 
                               ${(feature.name !== "Dedicated Account Manager") ? "border-b border-[#1AD1B9]" : "border-b border-transparent"
                              }`}
                            style={{ height: "68px", verticalAlign: "middle" }}
                          >
                            <div className="flex flex-col items-start justify-center gap-1">
                              {/* Title + Tooltip */}
                              <div className="flex items-center gap-3">
                                <span
                                  className={`${isSmallScreen
                                    ? "max-w-[70px] truncate flex-shrink"
                                    : ""
                                    }`}
                                >
                                  {feature.name}
                                </span>

                                {feature.info && (
                                  <div className="relative group inline-block">
                                    <img
                                      src="/assets/owners-inventory-pricing/compare-feature/info-icon.svg"
                                      className="md:h-3 md:w-3 h-[10px] w-[10px] cursor-pointer"
                                      alt="Info Icon"
                                      loading="lazy"
                                    />

                                    {/* Tooltip (opens upward) */}
                                    <Tooltip text={feature?.infoText} isComparisonToolTip />
                                    {/* <div className="absolute left-[-20px] bottom-[120%] z-[999] hidden group-hover:flex flex-col items-start">
                                      <div className="rounded-xl border border-[#795DF5] bg-white px-4 py-2 text-xs leading-4 font-normal text-[#231F20] shadow-lg w-[150px] md:w-[200px] lg:w-[250px]">
                                        {feature.infoText}
                                      </div>
                                      <div className="w-2 h-2 rotate-45 bg-white border-b border-r border-[#795DF5] -mt-1 ms-5"></div>
                                    </div> */}
                                  </div>
                                )}
                              </div>

                              {/* Subtitle */}
                              {feature.name === "Standard Reports" && (
                                <span className="text-[9px] sm:text-xs lg:text-sm xl:text-base text-[#231F20]">
                                  (Sales, Purchases, Inventory)
                                </span>
                              )}

                              {feature.name === "Advanced Reports" && (
                                <span className="text-[9px] sm:text-xs lg:text-sm xl:text-base text-[#231F20]">
                                  (Dashboards, Inventory Aging)
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </React.Fragment>
                ))}
              </table>
            </div>

            {/* Right scrollable column with pricing plans */}
            <div className="overflow-x-auto w-6/12 md:w-8/12 lg:w-9/12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth snap-x snap-mandatory">
              <div className="flex min-w-max">
                {pricingPlans.map((plan, planIndex) => {
                  // decide which price to show
                  const displayPrice =
                    tab === "yearly"
                      ? plan.yearlyPrice ?? plan.price
                      : plan.price;

                  return (
                    <div
                      key={plan.id}
                      className="w-[50vw] md:w-1/4 flex-shrink-0 snap-start"
                    >
                      {categories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                          {/* Plan header */}
                          <div
                            className={`p-2 md:p-4 ${planIndex < pricingPlans.length - 1
                              ? "border-r"
                              : ""
                              }`}
                            style={{ borderColor: plan.color }}
                          >
                            <div
                              className="flex flex-col items-center rounded-[10px] justify-center gap-[6px] md:h-[150px] h-[110px] p-2 md:p-4"
                              style={{ backgroundColor: plan.bgColor }}
                            >
                              <h4 className="text-sm md:text-base lg:text-lg text-[#231F20] font-semibold leading-[100%] font-onest">
                                {plan.name}
                              </h4>
                              <h3
                                className="text-base md:text-lg lg:text-xl font-bold leading-[100%] font-onest"
                                style={{ color: plan.color }}
                              >
                                {displayPrice === 0
                                  ? "Free"
                                  : `$${displayPrice}`}
                                <span className="text-xs">
                                  {displayPrice === 0
                                    ? ""
                                    : tab === "yearly"
                                      ? "/month"
                                      : "/month"}
                                </span>
                              </h3>
                              <p className="text-[10px] md:text-xs text-[#231F20] leading-[100%] font-normal font-onest">
                                {plan.description}
                              </p>
                              <a
                                href="#"
                                className="inline-block w-fit items-center justify-center px-6 md:px-[26px] lg:px-[26px] py-2 md:py-2 text-[10px] md:text-xs leading-[100%] font-semibold text-white whitespace-nowrap border border-transparent rounded-full font-onest mt-1 hover:bg-transparent transition-all"
                                style={
                                  {
                                    backgroundColor: plan.color,
                                    "--hover-border-color": plan.color,
                                    "--hover-text-color": plan.color,
                                  } as React.CSSProperties
                                }
                                onMouseEnter={(e) => {
                                  const target = e.target as HTMLElement;
                                  target.style.backgroundColor = "transparent";
                                  target.style.borderColor = plan.color;
                                  target.style.color = plan.color;
                                }}
                                onMouseLeave={(e) => {
                                  const target = e.target as HTMLElement;
                                  target.style.backgroundColor = plan.color;
                                  target.style.borderColor = "transparent";
                                  target.style.color = "white";
                                }}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>

                          {/* Feature rows */}
                          {category.features.map((feature, featureIndex) => {
                            const planColor =
                              planIndex === 0
                                ? "#1AD1B9"
                                : planIndex === 1
                                  ? "#38ACCC"
                                  : planIndex === 2
                                    ? "#5588DF"
                                    : "#795CF5";
                            const featureValue =
                              planIndex === 0
                                ? feature.basic
                                : planIndex === 1
                                  ? feature.standard
                                  : planIndex === 2
                                    ? feature.professional
                                    : feature.premium;

                            return (
                              <div
                                key={featureIndex}
                                className={`py-5 text-center text-sm md:text-base xl:text-lg leading-6 text-[#231F20] font-normal px-2 border-b ${planIndex < pricingPlans.length - 1
                                  ? "border-r"
                                  : ""
                                  }`}
                                style={{
                                  height: "68px",
                                  borderBottomColor: planColor,
                                  borderRightColor: plan.color,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {renderFeatureValue(featureValue)}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
