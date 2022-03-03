import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import BannerImage from '../../Assets/images/banner.png';

const Hero = () => {
  return (
    <div className="wrapper text-black-l text-sm sm:text-center sm:text-base md:w-4/6 lg:text-left lg:w-11/12 lg:pb-24 lg:flex lg:justify-between lg:items-center">
      <div className='lg:basis-1/2'>
        <a href='#FIXME' className="w-fit p-1 rounded-full mx-auto mt-10 space-x-4 flex justify-start items-center bg-black-d text-sm lg:mx-0">
          <span className="px-4 py-1 rounded-full bg-blue-l">FILE FREE</span>
          <p className="sm:hidden">Free startup incorporation</p>
          <p className="hidden sm:block">100% free incorporation for startups.</p>
          <FaAngleRight className='text-xl text-black-m' />
        </a>
        <h2 className="my-4 font-extrabold text-4xl sm:text-6xl">
          A better way to <span className="text-blue-l">incorporate your startup.</span>
        </h2>
        <div className='text-sm sm:text-xl'>
          <p className="block sm:inline">Symbola is the complete legal toolkit for new startups. </p>
          <p className="block sm:inline">Form your Delaware C-Corp in 10 minutes.</p>
        </div>
        <button className="w-full py-3 mt-4 rounded-md bg-blue-l font-semibold text-base sm:w-fit sm:px-4 sm:float-left sm:mt-6">Begin
          now</button>
      </div>
      <img className="mt-6 lg:w-1/2" src={BannerImage} alt="banner" />
    </div>
  );
};

export default Hero;