import React from 'react'
import logo from '../../Assets/images/logo.png';
import { IoCloseSharp } from 'react-icons/io5';
import { HiOutlineOfficeBuilding, HiOutlineChartPie } from 'react-icons/hi';
import { MdOutlinePeopleAlt } from 'react-icons/md';

const DropContent = ({ close }) => {

  return (
    <div className='w-[95%] py-6 rounded-md absolute top-2 left-1/2 -translate-x-1/2 font-semibold text-base bg-white'>
      <div className='wrapper'>
        <div className='flex justify-between items-center'>
          <img className='w-10' src={logo} alt="logo" />
          <IoCloseSharp className='text-2xl fill-black-m' onClick={close} />
        </div>
        <ul className='py-8 space-y-10'>
          <li className='flex justify-start items-center space-x-4'>
            <HiOutlineOfficeBuilding className='text-2xl stroke-blue-m' />
            <span>Incorporation</span>
          </li>
          <li className='flex justify-start items-center space-x-4'>
            <MdOutlinePeopleAlt className='text-2xl fill-blue-m' />
            <span>Founder Shares</span>
          </li>
          <li className='flex justify-start items-center space-x-4'>
            <HiOutlineChartPie className='text-2xl stroke-blue-m' />
            <span>Equity Management</span>
          </li>
        </ul>
      </div>
      <div className='py-4 border-t-[1px] border-slate-100'>
        <div className="wrapper space-y-6">
          <div className='flex justify-start items-center'>
            <a className='basis-1/2' href='#FIXME' target='_self' title='Pricing'>Pricing</a>
            <a className='basis-1/2' href='#FIXME' target='_self' title='Support'>Support</a>
          </div>
          <button className='block w-full py-3 rounded-md text-black-l bg-blue-m'>Signup</button>
          <p className='text-center text-black-m'>Already Registered? <span className='text-blue-m'>Sign in</span> </p>
        </div>
      </div>
    </div>
  )
}

export default DropContent