import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Socials() {
  return (
    <div className="flex gap-6">
      <div className="hover:cursor-pointer bg-white bg-opacity-10 hover:text-aquab hover:border rounded-full w-8 h-8 flex items-center justify-center"><FaGithub /></div>
      <div className="hover:cursor-pointer bg-white bg-opacity-10 hover:text-aquab hover:border rounded-full w-8 h-8 flex items-center justify-center"><FaLinkedinIn /></div>
      <div className="hover:cursor-pointer bg-white bg-opacity-10 hover:text-aquab hover:border rounded-full w-8 h-8 flex items-center justify-center"><FaXTwitter /></div>
    </div>
  );
}

export default Socials;
