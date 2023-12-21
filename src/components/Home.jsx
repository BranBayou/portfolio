import React from 'react';
import Header from './navigation/Header';
import Headline from './Headline/Headline';

function Home() {
  return (
    <div id="home" className="h-screen">
      <Header />
      <Headline />
    </div>
  );
}

export default Home;
