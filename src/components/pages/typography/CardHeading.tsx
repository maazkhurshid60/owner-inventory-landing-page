import React from "react";
import clsx from "clsx";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string; // For dynamic margin, padding, etc.
}

const CardHeading: React.FC<SubHeadingProps> = ({ children, className }) => {
  return (
    <h3
      className={clsx(
        "font-semibold text-[var(--text-dark)]",
        "font-onest",
        "text-2xl",
        "leading-[100%]",
        "",
        className 
      )}
    >
      {children}
    </h3>
  );
};

export default CardHeading;
