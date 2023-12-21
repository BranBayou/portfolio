import React from 'react';
import Detail from './About/Detail';
import Image from './About/Image';
import Stack from './About/Stack';

function About() {
  return (
    <div id="about" className="h-screen w-10/12 mx-auto flex flex-col items-center justify-center relative">
      <div className="h-1/2 flex items-center justify-center">
        <Detail />    
        <Image />
      </div>
      <Stack />
    </div>
  );
}

export default About;
