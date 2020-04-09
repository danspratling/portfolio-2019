import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const SectionHeading = ({ children }) => (
  <p className="tracking-wider text-gray-600 font-bold mb-6">
    <FontAwesomeIcon icon={faMinus} className="mr-4" />
    {children}
    <FontAwesomeIcon icon={faMinus} className="ml-4" />
  </p>
)

export default SectionHeading
