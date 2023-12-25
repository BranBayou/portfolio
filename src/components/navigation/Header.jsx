import React from 'react';
import Headroom from 'react-headroom';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => (
  <Headroom>
    <header className="w-full border-solid border-b border-gray-500 bg-darkw">
      <div className="w-10/12 mx-auto flex  items-center justify-between flex-wrap py-2.5">
        <Logo />
        <Nav />
      </div>
    </header>
  </Headroom>
);

export default Header;
