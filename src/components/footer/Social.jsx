/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Socials() {
  return (
    <div className="flex gap-6">
      <a
        href="https://github.com/BranBayou"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:cursor-pointer bg-white bg-opacity-10 hover:text-aquab hover:border rounded-full w-8 h-8 flex items-center justify-center"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/bran-baye/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:cursor-pointer bg-white bg-opacity-10 hover:text-aquab hover:border rounded-full w-8 h-8 flex items-center justify-center"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://twitter.com/bran_baye"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:cursor-pointer bg-white bg-opacity-10 hover:text-aquab hover:border rounded-full w-8 h-8 flex items-center justify-center"
      >
        <FaXTwitter />
      </a>
    </div>
  );
}

export default Socials;
