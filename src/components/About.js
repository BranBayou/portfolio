import seat from '../Assets/seat.svg';
import note from '../Assets/note.svg';
import uparrow from '../Assets/uparrow.svg';
import bulb from '../Assets/bulb.svg';

function About() {
  return (
    <div className="">
      <div className="">
        <h2>About Me</h2>
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
        <img className="" src={seat} alt="seat" />
        <img className="" src={note} alt="seat" />
        <img className="" src={uparrow} alt="seat" />
        <img className="" src={bulb} alt="seat" />
      </div>
    </div>
  );
}

export default About;
