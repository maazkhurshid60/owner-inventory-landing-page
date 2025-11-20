import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  url?: string;
  text: string;
  bgColor: string;
  textColor: string;
  isBorder?: boolean;
  icon?: ReactNode;
  onClick?: () => void;

  padding?: string;
  paddingMd?: string;
  paddingLg?: string;

  className?: string;   // <-- OPTIONAL extra classes
}

export default function Button({
  url = "#",
  text,
  bgColor,
  textColor,
  isBorder,
  icon,
  onClick,
  padding = "px-3 py-2.5",
  paddingMd = "md:px-5 md:py-3",
  paddingLg = "lg:px-[30px] lg:py-4",
  className = "",         // <-- default empty
}: ButtonProps) {
  const classes = `
    ${padding}
    ${paddingMd}
    ${paddingLg}
    bg-${bgColor}
    text-${textColor}
    flex items-center justify-center gap-2 whitespace-nowrap
    text-[11px] sm:text-sm md:text-base font-onest font-semibold
    ${isBorder ? `border border-${bgColor} hover:border-${bgColor}` : ""}
    rounded-full hover:text-${bgColor} hover:bg-transparent
    transition-colors duration-300 cursor-pointer
    ${className}          // <-- added here
  `;

  const style = {
    border: isBorder ? `1px solid ${bgColor}` : "transparent",
  };

  // If onClick is passed → render <button>
  if (onClick) {
    return (
      <button onClick={onClick} style={style} className={classes}>
        <span>{text}</span>
        {icon && <span className="ml-1 flex items-center">{icon}</span>}
      </button>
    );
  }

  // Otherwise → render <Link>
  return (
    <Link href={url} style={style} className={classes}>
      <span>{text}</span>
      {icon && <span className="ml-1 flex items-center">{icon}</span>}
    </Link>
  );
}
