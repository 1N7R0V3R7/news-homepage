import React from 'react'

function NewItems({heading, description}) {
  return (
    <div className='py-8'>
      <h2 className="font-bold tracking-wider text-xl text-neutral-white transition-colors duration-200 hover:text-primary-orange">
        {heading}
      </h2>
      <p className="text-neutral-darkish-blue mt-2">
        {description}
      </p>
    </div>
  )
}

export default NewItems