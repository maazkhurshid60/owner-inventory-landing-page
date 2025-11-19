import React from "react";
import clsx from "clsx";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string; // For dynamic margin, padding, etc.
}

const SubHeading: React.FC<SubHeadingProps> = ({ children, className }) => {
  return (
    <h3
      className={clsx(
        "font-semibold text-[#231F20]",
        "font-onest",
        "lg:text-[48px] md:text-[40px] text-4xl",
        "lg:leading-[48px] leading-[48px]",
        "xl:mb-10 lg:mb-6 mb-5",
        className 
      )}
    >
      {children}
    </h3>
  );
};

export default SubHeading;
