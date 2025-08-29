'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Navbar from '../../navbar/Navbar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar />
    </>
  );
};

export default Header;
