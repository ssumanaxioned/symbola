import React from 'react'

const Card = (props) => {
  const { free, comingSoon, title, desc } = props.list;

  return (
    <li className="px-6 py-4 rounded-md space-y-2 shadow-md bg-white md:basis-[45%]">
      {free && <span className="inline-block px-2 py-0.5 rounded-full bg-green-l text-green-d text-xs">Free</span>}
      {comingSoon && <span class="inline-block px-2 py-0.5 rounded-full ml-2 bg-blue-vl text-blue-m text-xs">Coming Soon</span>}
      <span className="block font-semibold text-base">{title} &rarr;</span>
      <p className="text-base text-black-m">{desc}</p>
    </li>
  )
}

export default Card