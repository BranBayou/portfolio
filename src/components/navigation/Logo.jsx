import React from 'react';
import { Link } from 'react-scroll';

const Logo = () => (
  <Link to="home" smooth duration={500} className="cursor-pointer">
    <div className="flex items-center gap-2">
      <p className="text-2xl text-amber-500">&#123;</p>
      <div className="flex flex-col items-center">
        <p className="text-xl">Bran</p>
        <p className="text-xxs">Web Apps</p>
      </div>
      <p className="text-2xl text-amber-500">&#125;</p>
    </div>
  </Link>
);

export default Logo;
