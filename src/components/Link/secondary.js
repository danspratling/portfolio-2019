import React from './node_modules/react'
import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome'
import { faArrowRight } from './node_modules/@fortawesome/free-solid-svg-icons'
import { isBrowser } from '../../utils'

const Secondary = ({ children, isHashLink }) => {
  if (!children || !isBrowser) {
    return null
  }

  return (
    <span className="text-lg text-white text-center md:text-left leading-loose mt-8 mb-6 mx-4 hover:text-green-400 transition duration-200 hover:underline">
      {children}
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`ml-6 ${isHashLink && 'transform rotate-90'}`}
      />
    </span>
  )
}

export default Secondary
