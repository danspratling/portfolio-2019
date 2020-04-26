import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPaperPlane,
  faCode,
  faVial,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons'

const ProgressStep = ({ type, title, duration, description }) => {
  const getDurationAsMonths = () => {
    const weeksInMonthAvg = 52 / 12
    const durationAsMonths = duration / weeksInMonthAvg

    if (duration < weeksInMonthAvg) {
      return `${duration} ${duration !== 1 ? 'weeks' : 'week'}`
    }

    const roundedDurationAsMonths = Math.round(durationAsMonths)
    return `${roundedDurationAsMonths} ${
      roundedDurationAsMonths !== 1 ? 'months' : 'month'
    }`
  }

  return (
    <div className="p-8 text-center">
      <FontAwesomeIcon
        icon={iconDictionary[type.toLowerCase()]}
        className="text-2xl"
      />
      <p className="text-lg py-4">{title}</p>
      <p className="inline-block text-xs uppercase px-3 py-2 mb-4 bg-gray-900 text-gray-500 rounded-sm">
        Duration: {getDurationAsMonths()}
      </p>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

const iconDictionary = {
  plan: faPaperPlane,
  build: faCode,
  test: faVial,
  future: faAngleDoubleRight,
}

export default ProgressStep
