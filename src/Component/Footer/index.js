import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import altLogo from '../../Assets/images/alt_logo.webp';

const Footer = () => {
  return (
    <div class="py-16 bg-gray-50">
      <div class="wrapper space-y-6">
        <img class="w-11" src={altLogo} alt="alt_logo" />
        <h5 class="text-base text-black-m">The way legal tools should work.</h5>
        <FaTwitter className='text-2xl text-gray-400' />

        <ul class="w-full flex justify-start items-start flex-wrap gap-y-8 text-base">
          <li class="space-y-4 basis-2/4">
            <span class="block capitalize font-semibold text-gray-400">Solutions</span>
            <a class="block text-black-m" href="#FIXME" title="Incorporation">Incorporation</a>
            <a class="block text-black-m" href="#FIXME" title="Issue Equity">Issue Equity</a>
            <a class="block text-black-m" href="#FIXME" title="83(b) Elections">83(b) Elections</a>
          </li>
          <li class="space-y-4 basis-2/4">
            <span class="block capitalize font-semibold text-gray-400">Company</span>
            <a class="block text-black-m" href="#FIXME" title="About">About</a>
            <a class="block text-black-m" href="#FIXME" title="Press">Press</a>
            <a class="block text-black-m" href="#FIXME" title="Partners">Partners</a>
          </li>
          <li class="space-y-4 basis-2/4">
            <span class="block capitalize font-semibold text-gray-400">Support</span>
            <a class="block text-black-m" href="#FIXME" title="Contact">Contact</a>
            <a class="block text-black-m" href="#FIXME" title="Pricing">Pricing</a>
            <a class="block text-black-m" href="#FIXME" title="Documentation">Documentation</a>
          </li>
          <li class="space-y-4 basis-2/4">
            <span class="block capitalize font-semibold text-gray-400">Legal</span>
            <a class="block text-black-m" href="#FIXME" title="Privacy">Privacy</a>
            <a class="block text-black-m" href="#FIXME" title="Terms">Terms</a>
          </li>
        </ul>

        <p class="pt-6 border-t-[1px] text-black-m text-sm">
          Symbola provides self-help document generation services, software, and other materials, but we are not a law
          firm and cannot provide legal advice. Symbola is not a substitute for the advice of an attorney. If you need
          legal advice specific to your startup, please consult an attorney. Symbola's services are being provided by
          Vested, Inc., and neither Symbola, Vested Inc., nor any of Vested Inc.'s employees or support staff are your
          attorney.
        </p>

        <p class="mt-4 text-base text-black-m">© 2021 Symbola. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer