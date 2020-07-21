import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from './'
import { isBrowser } from '../../utils'

const Secondary = ({ to, children }) => {
  if (!children || !isBrowser) {
    return null
  }

  const isHashLink = to[0] === '#'

  return (
    <Link
      to={to}
      className="relative inline-block pr-20 bg-white bg-opacity-0 hover:bg-opacity-10 focus:bg-opacity-10 mb-1 overflow-hidden transition duration-200 group"
    >
      <span className="inline-block w-auto h-auto px-6 md:px-8 py-3 md:py-4 text-lg text-white">
        {children}
      </span>
      <span
        className="absolute top-0 right-0 w-12 group-hover:w-20 group-focus:w-20 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-100 group-focus:bg-opacity-100 transition-all duration-300 transform origin-right"
        style={{ height: '200%', '--transform-rotate': '20deg' }}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`absolute top-1/2 right-0 text-xl text-white opacity-90 group-hover:opacity-100 group-focus:opacity-100 z-10 mr-10 transition duration-300 transform translate-x-1/2 -translate-y-1/2 ${isHashLink &&
          ' rotate-90'}`}
      />
    </Link>
  )
}

export default Secondary
