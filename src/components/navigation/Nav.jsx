import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { Link } from 'react-scroll';

const NavLinks = () => (
  <>
  <Link to='about' smooth={true} duration={500} className="hover:cursor-pointer hover:text-aquab hover:border-b hover:border-aquab hover:px-2">About</Link>
  <Link to='skills' smooth={true} duration={500} className="hover:cursor-pointer hover:text-aquab hover:border-b hover:border-aquab hover:px-2">Skill</Link>
  <Link to='works' smooth={true} duration={500} className="hover:cursor-pointer hover:text-aquab hover:border-b hover:border-aquab hover:px-2">Works</Link>
  <Link to='contact' smooth={true} duration={500} className="hover:cursor-pointer hover:text-aquab hover:border-b hover:border-aquab hover:px-2">Contact</Link>
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
            {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-end basis-full w-full gap-6 py-6">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
