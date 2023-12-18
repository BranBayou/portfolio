import React from 'react';
import ringArrow from '../../Assets/ringArrow.svg';

function Intro() {
  return (
    <div className="">
      <div className="">
        <img className="" src={ringArrow} alt="arrow" />
      </div>
      <div className="w-1/2">
        <div className="">
          <h1 className="">
            Hi I&apos;m Bran,a Creative
            {' '}
            <span className="">
              UI Designer.
            </span>
          </h1>
        </div>
        <p className="">
          Passionate about creating visually
          appealing and user-friendly websites,
          focusing on seamless user interfaces and
          engaging experiences.
        </p>
        <div className="">
          <button className="" href="https://www.linkedin.com/in/bran-baye/">Hire me</button>
          <button className="" href="https://docs.google.com/document/d/1dM-S4qVg-4mAeqKDHwAXpnUdvD9nyQF6BXXPGFv8ybA/edit?usp=sharing">Download my CV</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
