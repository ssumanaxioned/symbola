import React from 'react'

const Content = (props) => {
  const Iconsname = props.icons;
  const { title, desc } = props;
  return (
    <div className="flex justify-between items-start text-left">
      <div className="p-3 rounded-md text-black-l bg-blue-l">
        <Iconsname className="text-2xl stroke-black-l " />
      </div>
      <div className="basis-full ml-4">
        <p className="mb- font-semibold text-lg text-black-d">{title}</p>
        <p className="text-base text-black-m">{desc}
        </p>
      </div>
    </div>
  )
}

export default Content