'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type NavDropdownProps = {
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void; // for click
  children: React.ReactNode;

};

const NavDropdown = ({ label,
  isOpen,
  onOpen,
  onClose,
  onToggle,
  children, }: NavDropdownProps) => {
  const router = useRouter();
  const ref = useRef<HTMLLIElement>(null);

  // close when click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) onClose();
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);
  const linkUrl = `/${label.toLowerCase()}`;

  // desktop hover open close
  const openOnHover = () => onOpen();
  const closeOnLeave = () => onClose();
  return (
    <li className="group lg:group" onMouseEnter={openOnHover}
      onMouseLeave={closeOnLeave}>
      {/* Trigger */}
      <Link
        href={linkUrl}
        onClick={onToggle} // will still toggle dropdown on click
        className="flex items-center justify-center xl:gap-3 gap-1 px-[6px] py-[6px] md:text-[8px] xl:px-4 xl:py-[9px] xl:text-sm font-semibold text-[#231F20] bg-white border border-[#F3F4F6] hover:bg-gray-100 hover:border-[#795CF5] active:bg-gray-100 active:border-[#795CF5] rounded-full"
      >
        {label}
        <img
          src="/assets/header-images/dropdown-icon.svg"
          className="w-2 h-1"
          alt="dropdown-icon"
        />
      </Link>

      {/* Dropdown Menu */}
      {isOpen && <div
        // className={`
        //   dropdown-menu absolute lg:top-10 top-8 left-1/2 z-50 hidden xl:w-[1220px] lg:w-[950px] md:w-[700px] bg-amber-700  transform -translate-x-1/2  group-hover:flex flex-col h-[55
        //           0px]
        // `}
        className={`
          dropdown-menu absolute lg:top-10 top-8 left-1/2 z-50 hidden   transform -translate-x-1/2  group-hover:flex flex-col h-[55
                  0px]
        `}
      >
        {children}
      </div>
      }
    </li>
  );
};

export default NavDropdown;
