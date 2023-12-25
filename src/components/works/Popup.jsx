/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { BsRocketFill } from 'react-icons/bs';

const Popup = ({ data, closePopup }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const popupClasses = `fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 transition-opacity duration-500 ${
    isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  return (
    <div className={popupClasses}>
      <div className="bg-black bg-opacity-50 absolute inset-0" />
      <div className="bg-white p-4 sm:p-8 rounded-3xl max-w-6xl max-h-5xl overflow-y-auto z-10 ml-5 mr-5 md:ml-12 md:mr-12 lg:ml-32 lg:mr-32">
        <div className="relative h-full">
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={closePopup}
          >
            <IoClose size={24} />
          </button>
          <div
            key={data.index}
            className="flex flex-col sm:flex-row gap-8 h-full"
          >
            <div className="w-full sm:w-1/2">
              <img
                src={data.img[0]}
                className="w-full rounded-lg h-64 sm:h-full object-cover"
                alt="img"
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col">
              <h1 className="text-2xl text-darkt">{data.title}</h1>
              <p>{data.shortDes}</p>
              <p className="text-darkt">{data.desc}</p>
              <div className="flex gap-3 my-2">
                {data.stack.map((stackItem, index) => (
                  <button
                    type="button"
                    key={index}
                    className="bg-gray-800 text-white px-3 py-1 rounded-lg"
                  >
                    {stackItem}
                  </button>
                ))}
              </div>
              <div className="flex gap-6">
                <a
                  href={data.FaGithub}
                  className="flex hover:text-black hover:cursor-pointer items-center gap-2 text-darkt"
                >
                  <FaGithub className="text-blue-500" />
                  Code
                </a>
                <a
                  href={data.liveDemo}
                  className="flex hover:text-black hover:cursor-pointer items-center gap-2 text-darkt"
                >
                  <BsRocketFill className="text-blue-500" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
