import Image from 'next/image';

const Logo = () => (
  <a href="#" className="shrink-0">
    <Image
      src="/assets/owner-inventory-logo.svg"
      alt="Owner's logo"
      width={130}
      height={40}
      className="w-[78px] h-[24px] md:w-[105px] md:h-[35px] lg:w-[130px] lg:h-[40px]"
      loading="lazy"
    />
  </a>
);

export default Logo;
