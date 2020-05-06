import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

const Warn = ({ children }) => {
  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faExclamation}
        className="absolute z-10 left-0 top-0 -ml-10 -my-4 p-2 bg-black rounded-full text-red-700 text-1xl box-content"
        style={{ width: '1.25rem' }}
      />
      <div className="relative z-0 my-6 -mx-6 border-l-4 border-red-700 p-6 rounded bg-gray-900">
        {children}
      </div>
    </div>
  )
}

export default Warn
