import React from 'react';
import Detail from './About/Detail';
import Image from './About/Image';

function About() {
  return (
    <div id="about" className="h-screen w-10/12 mx-auto flex flex-col items-center justify-center relative">
      <div className="h-1/2 flex items-center justify-center">
        <Detail />    
        <Image />
      </div>
    </div>
  );
}

export default About;
