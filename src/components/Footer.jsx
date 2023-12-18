import React from 'react';
import Links from './footer/Links';
import Socials from './footer/Social';

function Footer() {
  return (
    <div className="w-full h-1/4 border-solid border-t border-gray-500">
      <div className="w-1/2 mx-auto flex flex-col gap-6 items-center justify-center py-16">
        <Links />
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
