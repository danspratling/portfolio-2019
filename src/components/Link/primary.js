import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from './'
import { isBrowser } from '../../utils'

const Primary = ({ to, children }) => {
  if (!children || !isBrowser) {
    return null
  }

  const isHashLink = to[0] === '#'

  return (
    <Link
      to={to}
      className="relative group inline-block pr-24 bg-primary bg-opacity-10 hover:bg-gray-100 focus:bg-gray-100 mb-1 overflow-hidden transition duration-200"
    >
      <span className="inline-block w-auto h-auto px-6 md:px-8 py-3 md:py-4 uppercase text-lg tracking-wider text-white group-hover:text-gray-800 group-focus:text-gray-800 group-hover:bg-opacity-75 group-focus:bg-opacity-75 transition duration-200">
        {children}
      </span>
      <span
        className="absolute top-0 right-0 w-20 group-hover:w-24 group-focus:w-24 bg-green-500 transition-all duration-300 transform origin-right"
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

export default Primary
