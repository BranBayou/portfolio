import React from 'react';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbKeyframesFilled } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";


const Stack = () => {
  return (
    <div className="h-1/2 w-4/5 mx-auto flex items-center justify-between border-t mt-5">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <RiCodeSSlashFill />
          <p className="text-aquab text-2xl font-bold">Language</p>
        </div>
        <ul className="py-2">
          <li className="py-1 hover:border-b">Css3</li>
          <li className="py-1 hover:border-b">Heml5</li>
          <li className="py-1 hover:border-b">C++</li>
          <li className="py-1 hover:border-b">Java</li>
          <li className="py-1 hover:border-b">Ruby</li>
          <li className="py-1 hover:border-b">JavaScript</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <TbKeyframesFilled />
          <p className="text-aquab text-2xl font-bold">Frameworks</p>
        </div>
        <ul className="py-2">
          <li className="py-1 hover:border-b">React</li>
          <li className="py-1 hover:border-b">Ruby on rails</li>
          <li className="py-1 hover:border-b">Tailwind</li>
          <li className="py-1 hover:border-b">Bootstrap</li>
          <li className="py-1 hover:border-b">Capybara</li>
          <li className="py-1 hover:border-b">Selenium</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <GiSkills />
          <p className="text-aquab text-2xl font-bold">Proficiencies</p>
        </div>
        <ul className="py-2">
            <li className="py-1 hover:border-b">Git</li>
            <li className="py-1 hover:border-b">GitHub</li>
            <li className="py-1 hover:border-b">API</li>
            <li className="py-1 hover:border-b">Web Development</li>
            <li className="py-1 hover:border-b">Linux</li>
            <li className="py-1 hover:border-b">CLI</li>
          </ul>
      </div>
    </div>
  );
};

export default Stack;