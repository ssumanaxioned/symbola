import React from 'react'
import Card from '../Card'

const Founder = () => {

  const data = [
    {
      id: 1,
      free: true,
      comingSoon: false,
      title: 'Incorporate Workflow',
      desc: 'Form a Deleware C-Corp, issue your bylaws, obtain a registered agent and EIN  using our self-guided startup formation workflow.'
    },
    {
      id: 2,
      free: true,
      comingSoon: false,
      title: 'Founder Equity Workflow',
      desc: 'Issue stick to you and your co-founders by generating Common Stock Purchase Agreements that follow best practices.'
    },
    {
      id: 3,
      free: true,
      comingSoon: false,
      title: '83(b) Election',
      desc: 'Make the right choice for how to handle the taxation of your common stock, including instructions on ho wto file with the IRS.'
    },
    {
      id: 4,
      free: true,
      comingSoon: true,
      title: 'Cap Table Management',
      desc: 'Understand ownership and control in your company. Onboard instantly using your company profile. Stay ready to fundraise and pass dilligence.'
    },
    {
      id: 5,
      free: true,
      comingSoon: true,
      title: 'Employees & Contractors',
      desc: 'Hire your first employees, generate offer letters, and issue stock options.'
    },
    {
      id: 6,
      free: true,
      comingSoon: true,
      title: 'Fundraising',
      desc: 'Raise capital seamlessly by generating documments managing equity, and passing dilligence.'
    }
  ]

  return (
    <div className='py-16 bg-gray-50'>
      <div className="wrapper text-center md:w-3/5 lg:w-11/12">
        <h3 className="mb-4 font-extrabold text-3xl text-black-d">Free For Founders.</h3>
        <p className="text-xl text-black-m">Our startup package is always free. We grow with you. No credit card
          required.</p>

        <ul className="grid grid-cols-1 gap-6 mt-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {
            data.map((list) => (
              <Card key={list.id} list={list} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Founder