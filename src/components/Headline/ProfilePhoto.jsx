import React from 'react';
import bran from '../../Assets/bran.jpg';
import nextP from '../../Assets/nextP.svg';

function ProfilePhoto() {
  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="">
        <img className="w-72" src={bran} alt="avatar" />
      </div>
      <div className="">
        <img className="w-12 absolute bottom-24 left-96 border" src={nextP} alt="next page" />
      </div>
    </div>
  );
}

export default ProfilePhoto;
