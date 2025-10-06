'use client';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Mobileicons = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleClick = () => {
    console.log('hello');
    setOpenMobileMenu(prev => !prev);
  };

  return (
    <div className="flex items-center justify-end gap-2 p-2 rounded-full bg-white shadow-[0px_0px_10px_0px_#00000026] lg:hidden mobile-iventory">
      <a
        href="#"
        className="px-4 py-2 text-sm font-bold text-white bg-[#231F20] rounded-full whitespace-nowrap"
      >
        Start for free
      </a>

      <button
        id="burger-toggle"
        className="relative z-[1100]"     
        onClick={handleClick}
        aria-expanded={openMobileMenu}
        aria-controls="mobile-menu"
      >
        <img
          src="/assets/header-images/burger-icon.svg"
          alt="Menu"
          className={`w-3.5 h-3 ${openMobileMenu ? 'hidden' : ''}`}
        />
        <img
          src="/assets/header-images/cross-icon.png"
          alt="Close"
          className={`w-3.5 h-3 ${openMobileMenu ? '' : 'hidden'}`}
        />
      </button>

   
{openMobileMenu && <MobileMenu open={openMobileMenu} onClose={() => setOpenMobileMenu(false)} />}



    </div>
  );
};

export default Mobileicons;
