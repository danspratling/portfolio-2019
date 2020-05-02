import React from 'react'
import image from '../images/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const Quote = () => {
  return (
    <div className="flex flex-wrap md:flex-no-wrap items-center text-white bg-gray-900">
      <div className="flex-0 text-center p-8">
        <img src={image} alt="" className="max-w-full md:max-w-300" />
      </div>
      <div className="flex-auto text-center p-8">
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="text-4xl text-gray-400"
        />
        <p className="text-gray-300 text-lg italic py-8">
          This is the quote. It can be some really long text. Aiming for about 3
          lines of copy here.
        </p>
        <p className="text-gray-300 mb-2">Author Name</p>
        <p className="text-gray-300 text-xs">Position, Company</p>
      </div>
    </div>
  )
}

export default Quote
