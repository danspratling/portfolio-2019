import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInfo,
  faStar,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons'

/**
 * A generic card drawing attention to important content
 * @param {React.FunctionComponent<Props>} props
 * @param {Any} props.icon
 * @param {String} props.className
 * @param {String} props.children
 */
const Shortcode = ({ icon, className, children }) => {
  return (
    <div
      className={`relative z-0 my-6 -mx-6 py-6 rounded border-l-4 border-current ${className}`}
    >
      <FontAwesomeIcon
        icon={icon}
        className="absolute z-10 left-0 top-0 -mx-5 -my-4 p-2 bg-black rounded-full box-content"
        style={{ width: '1.25rem' }}
      />
      <div className="text-white px-6">{children}</div>
    </div>
  )
}

const Info = ({ children }) => (
  <Shortcode icon={faInfo} className="text-green-500 bg-gray-900">
    {children}
  </Shortcode>
)

const Star = ({ children }) => (
  <Shortcode icon={faStar} className="text-yellow-500 bg-gray-900">
    {children}
  </Shortcode>
)

const Warn = ({ children }) => (
  <Shortcode icon={faExclamation} className="text-red-700 bg-gray-900">
    {children}
  </Shortcode>
)

export { Info, Star, Warn }
