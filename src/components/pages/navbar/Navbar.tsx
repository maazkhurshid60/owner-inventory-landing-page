"use client"; // required for GSAP in Next.js

import { useState } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import RightIcons from "./RightIcons";
import Mobileicons from "./Mobileicons";
import SearchField from "./SearchField";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="header-animation relative z-[200]">
      <header className="fixed md:top-8 top-8 z-20 w-full transition-colors duration-300 ease-in-out">
        <div className="wrapper relative">
          <nav className="relative flex items-center justify-end md:justify-center py-2">
            <Logo />
            <Mobileicons />
            <NavItems />
            <RightIcons searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
          </nav>

          {/* Search dropdown */}
          <SearchField searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
