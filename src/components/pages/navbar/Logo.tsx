import Image from "next/image";

const Logo = () => (
  <div className="lg:w-auto header-left-col z-50 absolute md:left-2 left-2">
    <a href="/" className="shrink-0">
      <Image
        src="/assets/owner-inventory-logo.svg"
        alt="Owner's logo"
        width={130}
        height={40}
        className="main-logo w-[78px] h-[24px] md:w-[105px] md:h-[35px] lg:W-[120px] lg:h-[35px] xl:w-[130px] xl:h-[40px]"
        priority
      />
    </a>
  </div>
);

export default Logo;
