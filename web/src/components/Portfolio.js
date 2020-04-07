import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import bloom from '../images/bloom.jpg'
import sunset from '../images/sunset.jpg'
import tree from '../images/tree.jpg'

const PortfolioItem = ({ image }) => {
  return (
    <div
      className="relative flex-1 hover:flex-full mx-6 -my-6 md:my-0 bg-center rounded-xl min-w-50 transition-flex duration-500 ease-in-out"
      style={{ height: '65vh', backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 flex items-end opacity-0 hover:opacity-100 transition duration-200">
        <div className="px-8 py-4 w-full bg-white rounded-b-xl">
          <Link
            to=""
            className="flex justify-between items-center text-black text-2xl"
          >
            <h3>Portfolio title</h3>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  )
}

const PortfolioList = () => {
  return (
    <div className="flex -mx-6">
      <PortfolioItem image={bloom} />
      <PortfolioItem image={sunset} />
      <PortfolioItem image={tree} />
      <PortfolioItem image={bloom} />
    </div>
  )
}

export default PortfolioList
