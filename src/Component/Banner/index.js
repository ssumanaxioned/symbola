import React from 'react'
import frontPage from '../../Assets/images/frontpage.webp'

const Banner = () => {
  return (
    <div className="py-16">
      <div className="wrapper pl-6 pt-5 rounded-md bg-blue-m overflow-hidden">
        <h4 className="font-extrabold text-3xl text-black-l">Ready to incorporate?</h4>
        <span className="block font-extrabold text-3xl text-black-l">Form your startup for free, today.</span>
        <button className="px-4 py-3 mt-6 mb-7 rounded-md text-blue-m bg-black-l">Begin &rarr;</button>
        <img className="rounded-tl-md" src={frontPage} alt="frontpage" />
      </div>
    </div>
  )
}

export default Banner;