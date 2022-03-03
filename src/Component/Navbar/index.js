import React, { useState } from 'react'
import DropContent from '../DropContent';
import logo from '../../Assets/images/logo.png';
import { FiMenu } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';

const Navbar = () => {

  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(true);
  }

  const handleClose = () => {
    setActive(false);
  }

  return (
    <>
      {active ? <DropContent close={handleClose} /> : null}
      <div className='w-11/12 max-w-screen-xl mx-auto py-4 flex justify-between items-center md:justify-start lg:justify-between'>
        <img className='w-14' src={logo} alt="logo" />
        <FiMenu className='text-2xl text-black-m md:hidden' onClick={handleMenu} />
        <nav className='hidden basis-full font-semibold text-base text-black-l md:ml-6 md:flex md:justify-between md:items-center lg:basis-4/6'>
          <ul className='basis-1/2 flex justify-start items-center space-x-8 lg:space-x-10'>
            <li>
              <a onClick={handleMenu} href="#FIXME" target='_self' title='Legal Tools'>Legal Tools <FaAngleDown className='my-auto text-base inline-block' /></a>
            </li>
            <li>
              <a href="#FIXME" target='_self' title='Pricing'>Pricing</a>
            </li>
            <li>
              <a href="#FIXME" target='_self' title='Support'>Support</a>
            </li>
          </ul>
          <ul className='basis-2/5 flex justify-end items-center space-x-8 lg:space-x-10'>
            <li>
              <a href="#FIXME" title='Login'>Log in</a>
            </li>
            <li>
              <a className='px-4 py-2 rounded bg-black-m' href="#FIXME" title='Signup'>Sign up</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar