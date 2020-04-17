import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PromoCard = ({ title, body, icon }) => {
  return (
    <div className="bg-gray-900 text-white p-6">
      <FontAwesomeIcon
        icon={icon}
        className="text-2xl text-green-400 mt-8 mb-6"
      />
      <p className="text-xl font-semibold mb-2">{title}</p>
      <p className="text-sm text-gray-500">{body}</p>
    </div>
  )
}

export default PromoCard
