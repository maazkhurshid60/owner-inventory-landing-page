import { useRouter } from "next/navigation";

type NavDropdownProps = {
  label: string;
  children: React.ReactNode;
};

const NavDropdown = ({ label, children }: NavDropdownProps) => {
  const router = useRouter();
  return (
    <li className="group ">
      {/* Trigger */}
      <a
      onClick={()=>{router.push(`/${label.toLowerCase()}`)}}
        href="#"
        className="dropdown-toggle flex items-center justify-center gap-3 px-3.5 py-1.5 
                   md:text-[10px] xl:px-4 xl:py-[9px] xl:text-sm 
                   font-semibold text-[#231F20] bg-white border border-[#F3F4F6] 
                   rounded-full hover:bg-gray-100 hover:border-[#795CF5] cursor-pointer"
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
        className={`
          dropdown-menu absolute top-8 lg:top-12 left-1/2 z-50 hidden group-hover:flex
          transform -translate-x-1/2
          md:w-[750px] lg:w-[950px] xl:w-[1220px] 2xl:w-[1500px]
        `}
      >
        {children}
      </div>
    </li>
  );
};

export default NavDropdown;
