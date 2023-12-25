import React from 'react';
import Detail from './About/Detail';
import Image from './About/Image';
import TechStackIntro from './About/TechStackIntro';

function About() {
  return (
    <div id="about" className="h-full w-10/12 mx-auto flex flex-col items-center justify-center relative">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Detail />
        <Image />
      </div>
      <TechStackIntro />
    </div>
  );
}

export default About;
