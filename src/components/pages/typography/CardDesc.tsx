import React from "react";
import clsx from "clsx";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string; // For dynamic margin, padding, etc.
}

const CardDesc: React.FC<SubHeadingProps> = ({ children, className }) => {
  return (
    <p
      className={clsx(
        "font-normal text-[#231F20] ",
        "font-onest",
        "xl:text-base text-sm ",
        "xl:leading-[28px] leading-6",
        "",
        className 
      )}
    >
      {children}
    </p>
  );
};

export default CardDesc;
