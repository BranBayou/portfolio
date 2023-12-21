import React from 'react';
import Detail from './About/Detail';
import Image from './About/Image';

function About() {
  return (
    <div id="about" className="h-screen w-10/12 mx-auto flex flex-col items-center justify-center relative">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Detail />    
        <Image />
      </div>
    </div>
  );
}

export default About;
