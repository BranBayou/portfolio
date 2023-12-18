import React from 'react'
import arrow2 from '../../Assets/arr2.svg'
import grow from '../../Assets/grow.svg'

const Invite = () => {
  return (
    <div className="w-1/2">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold">Got a project in</h1>
        <span className="text-aquab text-5xl font-bold">mind?</span>
      </div>
      <div className="flex">
        <img src={arrow2} alt="arrow" />
        <img src={grow} alt="arrow" />
      </div>
    </div>
  );
};

export default Invite;