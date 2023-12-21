import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import { Link } from 'react-scroll';

const NavLinks = () => (
  <>
  <Link to='about' smooth={true} duration={500}>About</Link>
  <Link to='skills' smooth={true} duration={500}>Skill</Link>
  <Link to='works' smooth={true} duration={500}>Works</Link>
  <Link to='contact' smooth={true} duration={500}>Contact</Link>
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
