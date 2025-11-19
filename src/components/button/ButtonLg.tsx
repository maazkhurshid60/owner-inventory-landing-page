import Link from "next/link";
import React from "react";

interface ButtonLgProps {
  text: string;
  bgColor: string;
  url: string;
  textColor?: string;
  isBorder?: boolean;
  hoverBgColor?: string;
  className?: string;   // ✅ optional extra classes
}

const ButtonLg: React.FC<ButtonLgProps> = ({
  text,
  bgColor,
  url,
  textColor = "white",
  isBorder = false,
  hoverBgColor,
  className = "",        // ✅ default empty
}) => {
  return (
    <Link
      href={url}
      style={{
        backgroundColor: bgColor === "transparent" ? "transparent" : bgColor,
        color: textColor,
        border: isBorder ? `1px solid ${bgColor}` : "transparent",
      }}
      className={`
        px-4 py-2.5 md:px-5 md:py-2 lg:px-[40px] lg:py-3.5
        flex items-center justify-center text-sm md:text-base
        font-onest font-semibold rounded-full transition-colors duration-300
        ${className}                // ✅ merged here
      `}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = hoverBgColor ?? "transparent";
        el.style.color = hoverBgColor ? "#fff" : bgColor;
        el.style.border = `1px solid ${hoverBgColor ?? bgColor}`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor =
          bgColor === "transparent" ? "transparent" : bgColor;
        el.style.color = textColor;
        el.style.border = isBorder
          ? `1px solid ${bgColor}`
          : "transparent";
      }}
    >
      {text}
    </Link>
  );
};

export default ButtonLg;
