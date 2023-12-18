import React from 'react';
import Intro from './Intro';
import ProfilePhoto from './ProfilePhoto';


function Headline() {
  return (
    <div className="h-full w-10/12 mx-auto flex relative">
      <Intro />
      <ProfilePhoto />
    </div>
  );
}

export default Headline;
