import Logo from "./Logo";
import NavItems from "./NavItems";
import RightIcons from "./RightIcons";
import Mobileicons from "./Mobileicons";

const Navbar = () => (
  <header className="fixed md:top-8 top-8 left-1/2 transform -translate-x-1/2 z-[999] w-full transition-colors duration-300 ease-in-out">
    <div className="wrapper">
      <nav className="relative flex items-center justify-between py-2">
        <Logo />
        <Mobileicons />
        <NavItems />
        <RightIcons />
      </nav>
    </div>
  </header>
);

export default Navbar;
