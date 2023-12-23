import React from 'react';
import seat from '../../Assets/seat.svg';
import note from '../../Assets/note.svg';
import bulb from '../../Assets/bulb.svg';

const Image = () => {
  return (
    <div>
      <img className="" src={seat} alt="seat" />
      <img className="absolute top-60 right-36 md:right-36 md:top-36" src={note} alt="note" />
      <img className="absolute top-0  md:left-0 md:top-28" src={bulb} alt="seat" />
    </div>
  );
};

export default Image;