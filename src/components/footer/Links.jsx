import React from 'react';
import { LuHome } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Links() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-12">
      <div className="hover:cursor-pointer flex items-center gap-2"><LuHome /><p className="hover:text-aquab ">Home</p></div>
      <div className="hover:cursor-pointer flex items-center gap-2"><FaRegUser /><p className="hover:text-aquab ">About me</p></div>
      <div className="hover:cursor-pointer flex items-center gap-2"><FiPhone /><p className="hover:text-aquab">Contact</p></div>
    </div>
  );
}

export default Links;
