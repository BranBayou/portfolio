import React from 'react';
import Constant from './Constant';

const Showcase = () => {
  return (
    <div>
      {Constant.map((data, index) => (
        <div key={index}>
          <div className="div">
          </div>
          <div className="div">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
