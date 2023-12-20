import React from 'react';
import seat from '../../Assets/seat.svg';
import note from '../../Assets/note.svg';
import bulb from '../../Assets/bulb.svg';

const Image = () => {
  return (
    <div>
      <img className="" src={seat} alt="seat" />
      <img className="absolute right-36 top-0" src={note} alt="note" />
      <img className="absolute left-0 top-0" src={bulb} alt="seat" />
    </div>
  );
};

export default Image;