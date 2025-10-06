import { useEffect } from "react";
import Image from "next/image";
import Tooltip from "@/components/toolTip/Tooltip";

type RightIconsProps = {
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const RightIcons: React.FC<RightIconsProps> = ({
  searchOpen,
  setSearchOpen,
  setSearchQuery,
}) => {
  useEffect(() => {
    console.log("searchOpen changed:", searchOpen);
  }, [searchOpen]);

  return (
    <div className="header-right-col hidden lg:flex justify-end items-center gap-1.5 xl:gap-4 lg:gap-[6px] ps-1 md:absolute right-2 z-50">
      <div className="relative group">

        <div className="bg-white rounded-full">
          {searchOpen ? <Image
            onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
            id="crossIcon"
            src="/assets/header-images/cross-btn.svg"
            alt="Close"
            className={`${searchOpen ? "block" : "hidden"} cursor-pointer`}
            width={16}
            height={16}
          /> : <Image
            onClick={() => setSearchOpen(true)}


            id="searchIcon"
            src="/assets/header-images/search-icon.svg"
            alt="Search"
            className={`${searchOpen ? "hidden" : "block"} cursor-pointer`}
            width={16}
            height={16}
          />}
        </div>
        {/* Tooltip */}
        <Tooltip text="Search" />
        {/* <div className="absolute left-[50%] -translate-x-[50%] top-[120%] z-[999] hidden group-hover:flex flex-col items-left">
          <div className="w-2 h-2 rotate-45 bg-white border-l border-t border-[#795DF5] -mb-1 mx-auto"></div>
          <div className="rounded-xl border border-[#795DF5] bg-white px-4 py-2 text-sm leading-4 font-onest font-semibold text-[#231F20] shadow-lg w-fit">
            Search
          </div>
        </div> */}
      </div>

      {/* User Icon */}
      <div className="relative group">
        <a href="#">
          <Image
            src="/assets/header-images/user.svg"
            alt="User"
            width={16}
            height={16}
          />
        </a>
        <Tooltip text="Login" />

        {/* <div className="absolute left-[50%] -translate-x-[50%] top-[120%] z-[999] hidden group-hover:flex flex-col items-left">
          <div className="w-2 h-2 rotate-45 bg-white border-l border-t border-[#795DF5] -mb-1 mx-auto"></div>
          <div className="rounded-xl border border-[#795DF5] bg-white px-4 py-2 text-sm leading-4 font-onest font-semibold text-[#231F20] shadow-lg w-fit">
            Login
          </div>
        </div> */}
      </div>

      <a
        href="#"
        className="px-3.5 py-1.5 xl:px-[18px] xl:py-[9px] md:text-[10px] xl:text-sm font-bold font-onest text-white bg-[#231F20] rounded-full border hover:bg-white hover:text-[#231F20] hover:border-[#231F20] transition-all whitespace-nowrap"
      >
        Start for free
      </a>
    </div>
  );
};

export default RightIcons;
