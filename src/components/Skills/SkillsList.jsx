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
    <div className="h-screen w-4/5 mx-auto flex flex-col">
      <details className="flex flex-col items-center">
        <summary className="text-aquab text-2xl font-bold">
          Language
        </summary>
        <ul className="py-2">
          <li className="py-1 hover:border-b"><IoLogoCss3 /></li>
          <li className="py-1 hover:border-b"><FaHtml5 /></li>
          <li className="py-1 hover:border-b"><TbBrandCpp /></li>
          <li className="py-1 hover:border-b"><FaJava /></li>
          <li className="py-1 hover:border-b"><DiRuby /></li>
          <li className="py-1 hover:border-b"><IoLogoJavascript /></li>
          <li className="py-1 hover:border-b"><BiLogoPostgresql /></li>
          <li className="py-1 hover:border-b"><PiFileSql /></li>
        </ul>
      </details>
      <details className="flex flex-col items-center">
        <summary className="text-aquab text-2xl font-bold">
          Frameworks
        </summary>
        <ul className="py-2">
          <li className="py-1 hover:border-b"><FaReact /></li>
          <li className="py-1 hover:border-b"><SiRubyonrails /></li>
          <li className="py-1 hover:border-b"><SiTailwindcss /></li>
          <li className="py-1 hover:border-b"><FaBootstrap /></li>
          <li className="py-1 hover:border-b"><FaSass /></li>
        </ul>
      </details>
      <details className="flex flex-col items-center">
        <summary className="text-aquab text-2xl font-bold">
          Proficiencies
        </summary>
        <ul className="py-2">
            <li className="py-1 hover:border-b"><FaGitAlt /></li>
            <li className="py-1 hover:border-b"><FaGithub /></li>
            <li className="py-1 hover:border-b">API</li>
            <li className="py-1 hover:border-b">Web Development</li>
            <li className="py-1 hover:border-b"><FaLinux /></li>
            <li className="py-1 hover:border-b">CLI</li>
          </ul>
      </details>
    </div>
  );
};

export default SkillsList;