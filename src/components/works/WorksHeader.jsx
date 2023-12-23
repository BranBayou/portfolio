import React from 'react'
import Showcase from './Showcase';

const WorksHeader = () => {
  return (
    <div className="h-full">
      <div className="w-full flex items-center justify-center mb-12 py-12 border-b">
       <h1 className="text-4xl">
         My recent <span className="text-aquab">works</span>
       </h1>
      </div>
      <Showcase />
    </div>
  );
};

export default WorksHeader;