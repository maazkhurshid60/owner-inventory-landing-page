import React from "react";
import clsx from "clsx";


interface ParagraphProps {
  children: React.ReactNode;
  className?: string; 
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p
      className={clsx(
        "font-onest font-normal text-[var(--text-grey)]",
        "xl:text-xl lg:text-lg md:text-base text-xs",
        "xl:leading-9 lg:leading-7 md:leading-6 leading-5",
        className 
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
