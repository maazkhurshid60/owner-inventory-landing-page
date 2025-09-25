import Link from "next/link";
import React from "react";

interface ButtonLgProps {
  text: string;
  bgColor: string;       // initial background
  url: string;
  textColor?: string;
  isBorder?: boolean;
  hoverBgColor?: string; // ✅ new optional hover bg color
}

const ButtonLg: React.FC<ButtonLgProps> = ({
  text,
  bgColor,
  url,
  textColor = "white",
  isBorder = false,
  hoverBgColor,
}) => {
  return (
    <Link
      href={url}
      style={{
        backgroundColor: bgColor === "transparent" ? "transparent" : bgColor,
        color: textColor,
        border: isBorder ? `1px solid ${bgColor}` : "transparent",
      }}
      className={`px-4 py-2.5 md:px-5 md:py-2 lg:px-[40px] lg:py-3.5 
        flex items-center justify-center text-[10px] md:text-xs lg:text-sm 
        font-onest font-semibold rounded-full transition-colors duration-300`}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          hoverBgColor ?? "transparent"; // ✅ use hoverBgColor if provided
        (e.currentTarget as HTMLElement).style.color =
          hoverBgColor ? "#fff" : bgColor; // auto white text if hover bg given
        (e.currentTarget as HTMLElement).style.border = `1px solid ${
          hoverBgColor ?? bgColor
        }`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          bgColor === "transparent" ? "transparent" : bgColor;
        (e.currentTarget as HTMLElement).style.color = textColor;
        (e.currentTarget as HTMLElement).style.border = isBorder
          ? `1px solid ${bgColor}`
          : "transparent";
      }}
    >
      {text}
    </Link>
  );
};

export default ButtonLg;
