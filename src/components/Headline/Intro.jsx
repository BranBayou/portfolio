import React from 'react';
import ringArrow from '../../Assets/ringArrow.svg';
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Intro() {
  return (
    <div className="h-full w-full ">
      <div className="">
        <img className="absolute top-52" src={ringArrow} alt="arrow" />
      </div>
      <div className="h-full w-9/12 mx-auto flex flex-col gap-10 md:gap-10 items-center md:items-start justify-center">
        <div className="">
          <h1 className="text-4xl font-bold">
            Hi I&apos;m Bran,A Full-Stack{" "}
            <span className="text-aquab text-4xl font-bold">DEVELOPER.</span>
          </h1>
          <div>
            <p className="mt-9">
              Passionate about creating visually appealing and user-friendly
              websites, focusing on seamless user interfaces and engaging
              experiences.
            </p>
            <div className="py-2 flex gap-6">
              <div className="hover:cursor-pointer bg-white bg-opacity-10 hover:text-aquab hover:border rounded-full w-8 h-8 flex items-center justify-center">
                <FaGithub />
              </div>
              <div className="hover:cursor-pointer bg-white bg-opacity-10 hover:text-aquab hover:border rounded-full w-8 h-8 flex items-center justify-center">
                <FaLinkedinIn />
              </div>
              <div className="hover:cursor-pointer bg-white bg-opacity-10 hover:text-aquab hover:border rounded-full w-8 h-8 flex items-center justify-center">
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <button
            className="w-36 bg-darkt p-2 rounded-3xl border hover:bg-aquab"
            href="https://www.linkedin.com/in/bran-baye/"
          >
            Hire me
          </button>
          <button
            className="flex items-center justify-center gap-3 w-56 bg-darkt p-2 rounded-3xl border hover:bg-aquab"
            href="https://docs.google.com/document/d/1dM-S4qVg-4mAeqKDHwAXpnUdvD9nyQF6BXXPGFv8ybA/edit?usp=sharing"
          >
            Download my CV <FiDownload />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
