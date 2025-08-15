import Image from 'next/image';

const RightIcons = () => (
  <div className="hidden md:flex items-center gap-1.5 lg:gap-4">
    <a href="#">
      <Image src="/assets/header-images/search-icon.svg" alt="Search" width={16} height={16} />
    </a>
    <a href="#">
      <Image src="/assets/header-images/user.svg" alt="User" width={16} height={16} />
    </a>
    <a
      href="#"
      className="px-3.5 py-1.5 xl:px-[18px] xl:py-[9px] md:text-[10px] xl:text-sm font-bold font-onest text-white bg-[#231F20] rounded-full border hover:bg-white hover:text-[#231F20] hover:border-[#231F20] transition-all whitespace-nowrap"
    >
      Contact Us
    </a>
  </div>
);

export default RightIcons;
