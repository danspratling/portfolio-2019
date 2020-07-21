import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="relative group px-12 hover:pl-4 hover:pr-20 bg-gray-700 hover:bg-gray-100 mb-1 overflow-hidden transition-all duration-200"
    >
      <span className="inline-block w-auto h-auto px-6 md:px-8 py-3 md:py-4 uppercase text-lg tracking-wider text-white group-hover:text-gray-800 group-hover:bg-opacity-75 transition duration-200">
        {children}
      </span>
      <span
        className="absolute top-0 right-0 w-12 group-hover:w-20 bg-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-right"
        style={{ height: '200%', '--transform-rotate': '20deg' }}
      />
      <FontAwesomeIcon
        icon={faPaperPlane}
        className="absolute top-1/2 right-0 text-xl text-white opacity-0 group-hover:opacity-100 z-10 mr-10 transition duration-300 transform translate-x-1/2 -translate-y-1/2"
      />
    </button>
  )
}

export default Button
