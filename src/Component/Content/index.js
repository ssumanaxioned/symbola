import React from 'react'

const Content = (props) => {
  const Iconsname = props.icons;
  const { title, desc } = props;
  return (
    <div className="flex justify-between items-start text-left">
      <div className="w-12 h-12 rounded-md relative bg-blue-l">
        <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-black-l">
          <Iconsname className="text-2xl absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-black-l" />
        </div>
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