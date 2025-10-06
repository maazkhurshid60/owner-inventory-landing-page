"use client";
import { useState } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import RightIcons from "./RightIcons";
import Mobileicons from "./Mobileicons";
import SearchField from "./SearchField";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="header-animation relative z-[200]">
      <header className="fixed md:top-8 top-8  z-20 w-full transition-colors duration-300 ease-in-out">
        <div className="wrapper relative">
          <nav className="relative flex items-center justify-end lg:justify-center py-2">
            <Logo />
            <Mobileicons />
            <NavItems />
            <RightIcons
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
              setSearchQuery={setSearchQuery}
            />
          </nav>

          {/* Search dropdown */}
          <SearchField
            variant="navbar"
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
