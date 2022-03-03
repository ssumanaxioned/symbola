import React from 'react'
import frontPage from '../../Assets/images/frontpage.webp'

const Banner = () => {
  return (
    <div className="py-16">
      <div className="wrapper pl-6 pt-5 rounded-md bg-blue-m overflow-hidden md:w-11/12 lg:pl-14 lg:pt-12 lg:flex lg:justify-between lg:items-start">
        <div className="lg:basis-1/2">
          <h4 className="font-extrabold text-4xl text-black-l">Ready to incorporate?</h4>
          <span className="block font-extrabold text-3xl text-black-l">Form your startup for free, today.</span>
          <button className="px-4 py-3 mt-6 mb-7 rounded-md font-semibold text-blue-m bg-black-l lg:hover:bg-blue-l">Begin &rarr;</button>
        </div>
        <img className="rounded-tl-md lg:w-1/2" src={frontPage} alt="frontpage" />
      </div>
    </div>
  )
}

export default Banner;