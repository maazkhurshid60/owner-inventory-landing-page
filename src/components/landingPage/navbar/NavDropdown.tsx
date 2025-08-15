type NavDropdownProps = {
  label: string;
  children: React.ReactNode;
};

const NavDropdown = ({ label, children }: NavDropdownProps) => {
  // Determine position class based on the label
  const isLeftAligned = label === "Resources" || label === "Company";
const positionClasses = isLeftAligned
  ? "-left-1/2 transform lg:-translate-x-[60%] md:-translate-x-[60%] xl:-translate-x-1/2"
  : "left-1/2 transform xl:-translate-x-[35%] md:-translate-x-[33%] lg:-translate-x-[40%]";

  return (

    <li className="group relative">
      <a
        href="#"
        className="dropdown-toggle flex items-center justify-center gap-3  px-3.5 py-1.5 md:text-[10px] xl:px-4 xl:py-[9px] xl:text-sm font-semibold text-[#231F20] bg-white border border-[#F3F4F6] rounded-full hover:bg-gray-100  hover:border-[#795CF5] cursor-pointer"
      >
        {label}
        <img
          src="/assets/header-images/dropdown-icon.svg"
          className="w-2 h-1"
          alt="dropdown-icon"
          loading="lazy"
        />
      </a>
      
      <div
        className={`wrapper dropdown-menu absolute top-7 lg:top-7 xl:top-10 z-50 hidden group-hover:flex xl:w-[1100px] lg:w-[800px] md:w-[700px] p-10 mt-2 mx-auto bg-white rounded-2xl shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-track-transparent h-[480px] gap-2 ${positionClasses}`}
      >
        
        {/* IMPORTANT: children should include the grid wrapper like below */}
        {children}
      </div>
    </li>
  );
};

export default NavDropdown;
