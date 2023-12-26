import React from 'react';
import { Link } from 'react-scroll';
import { LuHome } from 'react-icons/lu';
import { FaRegUser } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

function Links() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-12">
      <Link to="home" smooth duration={500} className="hover:cursor-pointer flex items-center gap-2">
        <LuHome />
        <p className="hover:text-aquab ">Home</p>
      </Link>
      <Link to="about" smooth duration={500} className="hover:cursor-pointer flex items-center gap-2">
        <FaRegUser />
        <p className="hover:text-aquab ">About me</p>
      </Link>
      <Link to="contact" smooth duration={500} className="hover:cursor-pointer flex items-center gap-2">
        <FiPhone />
        <p className="hover:text-aquab">Contact</p>
      </Link>
    </div>
  );
}

export default Links;
