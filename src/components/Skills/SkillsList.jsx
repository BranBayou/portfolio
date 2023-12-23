import React from 'react';
import { FaHtml5, FaReact, FaBootstrap, FaSass, FaLinux, FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiRubyonrails } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import { TbBrandCpp } from "react-icons/tb";

const SkillsList = () => {
  return (
    <div className="h-screen flex flex-col">
      <details className="flex flex-col items-center" open>
        <summary className="text-aquab text-2xl font-bold">
          Language
        </summary>
        <ul className="py-2 flex items-center justify-center gap-3 flex-wrap">
          <li className="bg-darkt"><IoLogoCss3 size={72} className="text-amber-600 p-1" /></li>
          <li className="bg-darkt"><FaHtml5 size={72} className="text-cyan-500 p-1" /></li>
          <li className="bg-darkt"><TbBrandCpp size={72} className="p-1" /></li>
          <li className="bg-darkt"><FaJava size={72} className="text-cyan-500 p-1" /></li>
          <li className="bg-darkt"><DiRuby size={72} className="text-red-600 p-1" /></li>
          <li className="bg-darkt"><IoLogoJavascript size={72} className="text-yellow-500 p-1" /></li>
          <li className="bg-darkt"><BiLogoPostgresql size={72} className="text-cyan-500 p-1" /></li>
          <li className="bg-darkt"><PiFileSql size={72} className="p-1" /></li>
        </ul>
      </details>
      <details className="flex flex-col items-center">
        <summary className="text-aquab text-2xl font-bold">
          Frameworks
        </summary>
        <ul className="py-2 flex items-center justify-center gap-3 flex-wrap">
          <li className="bg-darkt"><FaReact size={72} className="text-cyan-500 p-1" /></li>
          <li className="bg-darkt"><SiRubyonrails size={72} className="text-red-600 p-1" /></li>
          <li className="bg-darkt"><SiTailwindcss size={72} className="text-blue-500 p-1" /></li>
          <li className="bg-darkt"><FaBootstrap size={72} className="text-purple-500 p-1" /></li>
          <li className="bg-darkt"><FaSass size={72} className="text-pink-500 p-1" /></li>
        </ul>
      </details>
      <details className="flex flex-col items-center">
        <summary className="text-aquab text-2xl font-bold">
          Proficiencies
        </summary>
        <ul className="py-2 flex items-center justify-center gap-3 flex-wrap">
            <li className="bg-darkt"><FaGitAlt size={72} className="text-orange-500 p-1" /></li>
            <li className="bg-darkt"><FaGithub size={72} className="p-1" /></li>
            <li className="bg-darkt"><FaLinux size={72} className="text-yellow-500 p-1" /></li>
          </ul>
      </details>
    </div>
  );
};

export default SkillsList;