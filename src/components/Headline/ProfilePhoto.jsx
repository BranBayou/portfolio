import React from 'react';
import { Link } from 'react-scroll';
import bran from '../../Assets/branf.jpg';
import nextP from '../../Assets/nextP.svg';
import './ProfilePhoto.css';

function ProfilePhoto() {
  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="glow-container hover:cursor-pointer hover:p-1">
        <img className="w-52 md:w-72 rounded-full" src={bran} alt="avatar" />
        <div className="glow-animation" />
      </div>
      <div className="">
        <Link
          to="contact"
          smooth
          duration={500}
          className="hover:cursor-pointer hover:text-aquab hover:border-b hover:border-aquab hover:px-2 transition-all duration-300 ease-linear"
        >
          <img
            className="w-12 hidden md:block absolute bottom-24 left-1/2 border"
            src={nextP}
            alt="next page"
          />
        </Link>
      </div>
    </div>
  );
}

export default ProfilePhoto;
