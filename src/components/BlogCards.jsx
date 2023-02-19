import React from 'react'

export const BlogCards = ({index, title, desc, imgSrc}) => {
  return (
    <div className="grid grid-cols-3 items-center gap-6">
      <img src={imgSrc} alt="" className="" />
      
      <div className="col-span-2">
        <h2 className="text-neutral-grayish-blue text-4xl font-bold">
          0{index}
        </h2>
        <h3 className="font-extrabold transition-colors duration-200 hover:text-primary-orange text-neutral-very-dark-blue text-xl my-2">
          {title}
        </h3>
        <p className="text-neutral-darkish-blue">
          {desc}
        </p>
      </div>
    </div>
  )
}