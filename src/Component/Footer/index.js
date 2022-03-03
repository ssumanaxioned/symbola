import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import altLogo from '../../Assets/images/alt_logo.webp';

const Footer = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="wrapper md:w-11/12">
        <div className='space-y-6 xl:flex xl:justify-between xl:items-center'>
          <div className='space-y-6 basis-2/5'>
            <img className="w-11" src={altLogo} alt="alt_logo" />
            <h5 className="text-base text-black-m">The way legal tools should work.</h5>
            <FaTwitter className='text-2xl text-gray-400 lg:hover:text-black-d' />
          </div>

          <ul className="w-full pb-8 flex justify-start items-start flex-wrap gap-y-8 text-base xl:basis-3/5">
            <li className="space-y-4 basis-2/4 md:basis-1/4">
              <span className="block uppercase font-semibold text-gray-400">Solutions</span>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="Incorporation">Incorporation</a>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="Issue Equity">Issue Equity</a>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="83(b) Elections">83(b) Elections</a>
            </li>
            <li className="space-y-4 basis-2/4 md:basis-1/4">
              <span className="block uppercase font-semibold text-gray-400">Company</span>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="About">About</a>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="Press">Press</a>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="Partners">Partners</a>
            </li>
            <li className="space-y-4 basis-2/4 md:basis-1/4">
              <span className="block uppercase font-semibold text-gray-400">Support</span>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="Contact">Contact</a>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="Pricing">Pricing</a>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="Documentation">Documentation</a>
            </li>
            <li className="space-y-4 basis-2/4 md:basis-1/4">
              <span className="block uppercase font-semibold text-gray-400">Legal</span>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="Privacy">Privacy</a>
              <a className="block text-black-m lg:hover:text-black-d" href="#FIXME" title="Terms">Terms</a>
            </li>
          </ul>
        </div>

        <p className="pt-6 border-t-[1px] text-black-m text-sm">
          Symbola provides self-help document generation services, software, and other materials, but we are not a law
          firm and cannot provide legal advice. Symbola is not a substitute for the advice of an attorney. If you need
          legal advice specific to your startup, please consult an attorney. Symbola's services are being provided by
          Vested, Inc., and neither Symbola, Vested Inc., nor any of Vested Inc.'s employees or support staff are your
          attorney.
        </p>

        <p className="mt-4 text-base text-black-m">© 2021 Symbola. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer