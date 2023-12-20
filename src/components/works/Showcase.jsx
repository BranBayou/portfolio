import React from 'react';
import Constant from './Constant';

const Showcase = () => {
  return (
    <div className="h-max w-full flex flex-col gap-16">
      {Constant.map((data, index) => (
        <div key={index} className={`h-2/5 flex gap-8 p-3 w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="imgDiv w-fif">
            <img src={data.img[0]} className="w-full rounded-3xl" alt="img" />
          </div>
          <div className="w-fof flex flex-col justify-between rounded-3xl bg-darkt p-4">
            <div>
              <h1 className="text-2xl">{data.title}</h1>
              <p>{data.shortDes}</p>
            </div>
            <div >
              <p>{data.desc}</p>
              <div className="flex gap-3 my-2">
                <button className="bg-darkt border px-3 rounded-3xl">{data.stack[0]}</button>
                <button className="bg-darkt border px-3 rounded-3xl">{data.stack[1]}</button>
                <button className="bg-darkt border px-3 rounded-3xl">{data.stack[2]}</button>
              </div>
            </div>
            <div className="flex gap-6">
              <button type="button" className="bg-aquab px-3 py-1 rounded-3xl hover:bg-darkt hover:border active:bg-darkt active:border">See Project</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
