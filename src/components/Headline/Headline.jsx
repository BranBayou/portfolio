import React from 'react';
import Intro from './Intro';
import ProfilePhoto from './ProfilePhoto';
import NextPage from './NextPage';

function Headline() {
  return (
    <div className="w-10/12 m-auto flex">
      <Intro />
      <ProfilePhoto />
      <NextPage />
    </div>
  );
}

export default Headline;
