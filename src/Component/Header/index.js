import React from 'react';
import Hero from '../Hero';
import Navbar from '../Navbar';

const Header = () => {

  return (
    <div className="h-screen relative bg-blue-d overflow-hidden lg:h-max">
      <Navbar />
      <Hero />
    </div>
  )
};

export default Header;