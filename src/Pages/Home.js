import React from 'react';
import Founder from '../Component/Founder';
import Header from '../Component/Header';
import Info from '../Component/Info';
import Banner from '../Component/Banner';
import Footer from '../Component/Footer';

const Home = () => {
  return (
    <div className='bg-primary-d'>
      <Header />
      <Info />
      <Founder />
      <Banner />
      <Footer />
    </div>
  )
};

export default Home;