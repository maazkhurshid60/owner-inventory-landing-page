import React from "react";

interface SmallTabsProps {
  activeTab: "recent" | "popular";
  onTabChange: (tab: "recent" | "popular") => void;
  variant?: "tabs" | "toggle";
}

const SmallTabs: React.FC<SmallTabsProps> = ({
  activeTab,
  onTabChange,
  variant = "tabs",
}) => {
  if (variant === "toggle") {
    return (
      <div className="flex items-center gap-3 w-full">
        {/* Recent Label */}
        <span
          className={`text-sm md:text-base font-onest font-semibold w-full ${
            activeTab === "recent" ? "text-[#231F20]" : "text-gray-400"
          }`}
        >
          Recent
        </span>

        {/* Toggle */}
        <button
          onClick={() =>
            onTabChange(activeTab === "recent" ? "popular" : "recent")
          }
          className="relative inline-flex items-center w-[50%] h-6 md:h-8 md:w-16 rounded-full bg-[#1AD1B9] transition-colors duration-300"
        >
          <span
            className={`inline-block h-5 w-[50%] md:w-6 md:h-6 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out 
              ${
                activeTab === "popular"
                  ? "translate-x-6 md:translate-x-8"
                  : "translate-x-1"
              }`}
          />
        </button>

        {/* Popular Label */}
        <span
          className={`text-sm md:text-base font-onest font-semibold w-full ${
            activeTab === "popular" ? "text-[#231F20]" : "text-gray-400"
          }`}
        >
          Popular
        </span>
      </div>
    );
  }

  // Tabs variant
  return (
    <div className="inline-flex p-1 lg:p-2 border border-transparent rounded-full w-full bg-white">
      {/* Recent Button */}
      <button
        onClick={() => onTabChange("recent")}
        className={`tab-btn px-4 py-2 md:px-5 md:py-2 lg:px-[30px] lg:py-[10px] 
          text-[10px] md:text-xs lg:text-base font-onest font-semibold border rounded-full w-[50%]
          transition-colors duration-300 ${
            activeTab === "recent"
              ? "text-white bg-[#1AD1B9] border-[#1AD1B9]"
              : "text-[#231F20] bg-transparent border-transparent hover:text-white hover:bg-[#1AD1B9] hover:border-[#1AD1B9]"
          }`}
      >
        Recent
      </button>

      {/* Popular Button */}
      <div className="relative w-[50%]">
        <button
          onClick={() => onTabChange("popular")}
          className={`tab-btn relative px-4 py-2 md:px-5 md:py-2 lg:px-[30px] lg:py-[10px] 
            text-[10px] md:text-xs lg:text-base font-onest font-semibold border rounded-full  w-[100%]
            transition-colors duration-300 ${
              activeTab === "popular"
                ? "text-white bg-[#1AD1B9] border-[#1AD1B9]"
                : "text-[#231F20] bg-transparent border-transparent hover:text-white hover:bg-[#1AD1B9] hover:border-[#1AD1B9]"
            }`}
        >
          Popular
        </button>
      </div>
    </div>
  );
};

export default SmallTabs;
