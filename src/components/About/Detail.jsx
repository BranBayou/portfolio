import React from 'react';

const Detail = () => (
  <div className="w-full md:w-1/2">
    <h2 className="text-4xl font-bold my-3 py-6">
      About
      <span className="text-aquab">Me</span>
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
      Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos.
      Curabitur tempus urna at turpis condimentum lobortis....
      {' '}
      <a href="/">Read more</a>
    </p>
  </div>
);

export default Detail;
