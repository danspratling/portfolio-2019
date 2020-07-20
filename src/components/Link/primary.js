import React from './node_modules/react'
import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome'
import { faArrowRight } from './node_modules/@fortawesome/free-solid-svg-icons'
import { isBrowser } from '../../utils'

const Primary = ({ children, isHashLink }) => {
  if (!children || !isBrowser) {
    return null
  }

  return (
    <span className="text-lg transition duration-200 relative inline-block w-auto h-auto bg-green-400 hover:bg-green-600 px-8 py-3 mb-1 uppercase tracking-wider text-black">
      {children}
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`ml-6 ${isHashLink && 'transform rotate-90'}`}
      />
    </span>
  )
}

export default Primary
