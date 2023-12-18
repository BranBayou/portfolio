import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-[20] border-solid border-b border-gray-500">
      <div className="w-10/12 mx-auto flex  items-center justify-between flex-wrap py-6">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
