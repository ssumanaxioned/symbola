import React from 'react'
import Content from '../Content'
import { HiOutlineScale, HiOutlineLightningBolt, HiOutlineShare } from 'react-icons/hi';
import { IoTrendingUpSharp } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import infoImage from '../../Assets/images/image.webp';
import media from '../../Assets/images/media.webp';

const Info = () => {
  return (
    <div className='py-16 bg-grya-50'>
      <div className="wrapper text-center text-black-m text-base md:w-3/5 lg:w-11/12">
        <div className="space-y-4 sm:space-y-4">
          <h2 className="font-extrabold text-3xl text-black-d md:text-4xl">The best legal tools for startups</h2>
          <p className="text-xl lg:w-4/6 lg:mx-auto">Form a Delware C-Corp with our guided workflows. Issue stock to the founders
            with the push
            of
            a button. Make
            and file your Section 83(b) Election.</p>
        </div>
        <div className='lg:flex lg:justify-between lg:items-center'>
          <div className='lg:basis-1/2'>
            <div className="mt-12 space-y-4 text-left">
              <span className="block font-extrabold text-2xl text-black-d md:text-3xl">Turnkey formation</span>
              <p className="text-lg">Make informed decisions as you incorporate with our tools. follow the best practices for
                founders who plan
                to
                grow and fundraise. Registered agent and employee Identification Number included.</p>
            </div>
            <div className="my-10 space-y-10">
              <Content icons={IoTrendingUpSharp} title={'Workflows built for startups'} desc={'Symbola makes it easy to incorporate and handle legal requirements.'} />
              <Content icons={HiOutlineScale} title={'Follow the best practices of experienced founders'} desc={'Established your company the way VCs and investors prefer.'} />
              <Content icons={HiOutlineLightningBolt} title={'The fastest incorporation tools yet'} desc={'Complete the incorporation Workflow in 10 minutes.'} />
            </div>
          </div>

          <img class="w-full lg:w-1/2" src={infoImage} alt="info" />
        </div>

        <div className='lg:flex lg:justify-between lg:items-center'>
          <div className='lg:basis-1/2 order-2'>
            <div className="my-14 text-left">
              <span className="block mb-4 font-extrabold text-2xl text-black-d md:text-3xl">How Legal tools should work</span>
              <p>Our software makes it easy to handle your startup's legal requirements.</p>

              <div className="my-10 space-y-10">
                <Content icons={AiOutlineMessage} title={'Live support included'} desc={'Talk to our support team by phone, email, or chat.'} />
                <Content icons={HiOutlineShare} title={'Easy for teams'} desc={'Our seamless signature process makes it easy for co-founders to incorporate and grow together.'} />        </div>
            </div>
          </div>
          <img className='lg:w-[48%] order-1' src={media} alt="media" />
        </div>
      </div>

    </div>
  )
}

export default Info