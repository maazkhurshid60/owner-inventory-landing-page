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
        "font-normal text-[var(--text-grey)] ",
        "font-onest",
        "md:text-lg text-base",
        "leading-[28px]",
        "",
        className 
      )}
    >
      {children}
    </p>
  );
};

export default CardDesc;
