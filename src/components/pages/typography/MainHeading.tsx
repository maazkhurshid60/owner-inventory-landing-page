import React from "react";
import clsx from "clsx";

interface MainHeadingProps {
  children: React.ReactNode;
  className?: string; // For dynamic margin, padding, etc.
}

const MainHeading: React.FC<MainHeadingProps> = ({ children, className }) => {
  return (
    <h2
      className={clsx(
        "font-semibold text-[#231F20]",
        "font-onest",
        "xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl",
        "xl:leading-[76px] lg:leading-[60px] leading-[48px]",
        className 
      )}
    >
      {children}
    </h2>
  );
};

export default MainHeading;
