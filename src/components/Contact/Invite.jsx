import React from 'react';
import arrow2 from '../../Assets/arr2.svg';
import grow from '../../Assets/grow.svg';

const Invite = () => (
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
    <div className="flex flex-col items-center md:items-start">
      <h1 className="text-5xl font-bold">Got a project in</h1>
      <span className="text-aquab text-5xl font-bold">mind?</span>
    </div>
    <div className="flex items-center">
      <img src={arrow2} alt="arrow" />
      <img src={grow} alt="arrow" />
    </div>
  </div>
);

export default Invite;
