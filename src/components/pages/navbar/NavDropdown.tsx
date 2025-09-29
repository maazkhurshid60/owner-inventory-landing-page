import { useRouter } from "next/navigation";

type NavDropdownProps = {
  label: string;
  children: React.ReactNode;
};

const NavDropdown = ({ label, children }: NavDropdownProps) => {
  const router = useRouter();
  return (
    <li className="group lg:group">
      {/* Trigger */}
      <a
      onClick={()=>{router.push(`/${label.toLowerCase()}`)}}
        href="#"
        className="dropdown-toggle flex items-center justify-center xl:gap-3 gap-1 px-[6px] py-[6px] md:text-[8px] xl:px-4 xl:py-[9px] xl:text-sm font-semibold text-[#231F20] bg-white border border-[#F3F4F6] hover:bg-gray-100 hover:border-[#795CF5] active:bg-gray-100 active:border-[#795CF5] rounded-full"
      >
        {label}
        <img
          src="/assets/header-images/dropdown-icon.svg"
          className="w-2 h-1"
          alt="dropdown-icon"
        />
      </a>

      {/* Dropdown Menu */}
      <div
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
    </li>
  );
};

export default NavDropdown;
