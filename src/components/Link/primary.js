import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { isBrowser } from '../../utils'

const Primary = ({ children, isHashLink }) => {
  if (!children || !isBrowser) {
    return null
  }

  return (
    <div className="relative inline-block pr-24 bg-green-400 bg-opacity-90 hover:bg-opacity-100 mb-1 overflow-hidden transition duration-200 group">
      <span className="inline-block w-auto h-auto px-6 md:px-8 py-3 md:py-4 uppercase text-lg tracking-wider text-black">
        {children}
      </span>
      <span
        className="absolute top-0 right-0 w-20 group-hover:w-24 bg-gray-800 transition-all duration-300 transform origin-right"
        style={{ height: '200%', '--transform-rotate': '20deg' }}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`absolute top-1/2 right-0 text-xl text-white opacity-90 group-hover:opacity-100 z-10 mr-10 transition duration-300 transform translate-x-1/2 -translate-y-1/2 ${isHashLink &&
          ' rotate-90'}`}
      />
    </div>
  )
}

export default Primary
