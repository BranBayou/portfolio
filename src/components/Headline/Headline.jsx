import React from 'react';
import Intro from './Intro';
import ProfilePhoto from './ProfilePhoto';


function Headline() {
  return (
    <div className="h-full md:w-10/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-center relative">
      <Intro />
      <ProfilePhoto />
    </div>
  );
}

export default Headline;
