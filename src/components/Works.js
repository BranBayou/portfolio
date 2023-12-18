import Card from './recentWorks/Card';

function Works() {
  return (
    <div className="">
      <div className="">
        <h2>My recent works</h2>
        <div className="">
          <div className="">
            <button className="">All</button>
          </div>
          <div className="">
            <button className="">UI</button>
          </div>
          <div className="">
            <button className="">UX</button>
          </div>
          <div className="">
            <button className="">Web Design</button>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default Works;
