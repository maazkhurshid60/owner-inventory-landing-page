import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  url?: string;
  text: string;
  bgColor: string;
  textColor: string;
  isBorder?: boolean;
  icon?: ReactNode;
  onClick?: () => void;   // <-- added

  padding?: string;
  paddingMd?: string;
  paddingLg?: string;
}

export default function Button({
  url = "#",
  text,
  bgColor,
  textColor,
  isBorder,
  icon,
  onClick,                // <-- added
  padding = "px-4 py-2.5",
  paddingMd = "md:px-5 md:py-3",
  paddingLg = "lg:px-[30px] lg:py-5",
}: ButtonProps) {
  const classes = `
    ${padding}
    ${paddingMd}
    ${paddingLg}
    bg-${bgColor}
    text-${textColor}
    flex items-center justify-center gap-2 whitespace-nowrap
    text-[10px] md:text-xs lg:text-xs font-onest font-semibold
    ${isBorder ? `border border-${bgColor} hover:border hover:border-${bgColor}` : ""}
    rounded-full hover:text-${bgColor} hover:bg-transparent
    transition-colors duration-300 cursor-pointer
  `;

  const style = {
    border: isBorder ? `1px solid ${bgColor}` : "transparent",
  };

  // If onClick exists → return Button instead of Link
  if (onClick) {
    return (
      <button onClick={onClick} style={style} className={classes}>
        <span>{text}</span>
        {icon && <span className="ml-1 flex items-center">{icon}</span>}
      </button>
    );
  }

  // Default → Link button
  return (
    <Link href={url} style={style} className={classes}>
      <span>{text}</span>
      {icon && <span className="ml-1 flex items-center">{icon}</span>}
    </Link>
  );
}
