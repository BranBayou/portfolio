import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

const NavLinks = () => (
  <>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/works">Works</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden w-full justify-between md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button type="button" onClick={toggleNavbar}>
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
