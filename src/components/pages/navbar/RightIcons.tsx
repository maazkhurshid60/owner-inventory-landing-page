import Image from "next/image";

type RightIconsProps = {
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const RightIcons: React.FC<RightIconsProps> = ({ searchOpen, setSearchOpen }) => (
  <div className="header-right-col hidden md:flex justify-end items-center gap-1.5 xl:gap-4 lg:gap-[6px] ps-1 md:absolute right-2 z-50">
    <div className="relative group">
      <button
        type="button"
        onClick={() => setSearchOpen((prev) => !prev)}
        className="block"
      >
        {!searchOpen ? (
          <Image
            id="searchIcon"
            src="/assets/header-images/search-icon.svg"
            alt="Search"
            className="cursor-pointer"
            width={16}
            height={16}
          />
        ) : (
          <Image
            id="crossIcon"
            src="/assets/header-images/cross-btn.svg"
            alt="Close"
            className="cursor-pointer"
            width={16}
            height={16}
          />
        )}
      </button>

      <div className="absolute left-[50%] -translate-x-[50%] top-[120%] z-[999] hidden group-hover:flex flex-col items-left">
        <div className="w-2 h-2 rotate-45 bg-white border-l border-t border-[#795DF5] -mb-1 mx-auto"></div>
        <div className="rounded-xl border border-[#795DF5] bg-white px-4 py-2 text-sm leading-4 font-onest font-semibold text-[#231F20] shadow-lg w-fit">
          Search
        </div>
      </div>
    </div>

    <div className="relative group">
      <a href="#">
        <Image src="/assets/header-images/user.svg" alt="User" width={16} height={16} />
      </a>
      <div className="absolute left-[50%] -translate-x-[50%] top-[120%] z-[999] hidden group-hover:flex flex-col items-left">
        <div className="w-2 h-2 rotate-45 bg-white border-l border-t border-[#795DF5] -mb-1 mx-auto"></div>
        <div className="rounded-xl border border-[#795DF5] bg-white px-4 py-2 text-sm leading-4 font-onest font-semibold text-[#231F20] shadow-lg w-fit">
          Login
        </div>
      </div>
    </div>

    <a
      href="#"
      className="px-3.5 py-1.5 xl:px-[18px] xl:py-[9px] md:text-[10px] xl:text-sm font-bold font-onest text-white bg-[#231F20] rounded-full border hover:bg-white hover:text-[#231F20] hover:border-[#231F20] transition-all whitespace-nowrap"
    >
      Contact Us
    </a>
  </div>
);

export default RightIcons;
