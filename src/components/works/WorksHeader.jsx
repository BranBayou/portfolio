import React from 'react'
import Showcase from './Showcase';

const WorksHeader = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <span className="">-------------------------</span>
       <h1 className="text-4xl">
         My recent <span className="text-aquab">works</span>
        </h1>
        <span>-------------------------</span>
      </div>
      <Showcase />
    </div>
  );
};

export default WorksHeader;