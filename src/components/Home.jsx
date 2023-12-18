import React from 'react';
import Header from './navigation/Header';
import Headline from './Headline/Headline';

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Headline />
    </div>
  );
}

export default Home;
