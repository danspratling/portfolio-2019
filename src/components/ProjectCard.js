import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

/**
 * @param {Object} props
 * @param {Object} props.title
 * @param {string[]} props.categories
 * @param {Object} props.image -
 * @param {Object} props.link
 */
const ProjectCard = ({ title, categories, image, link }) => {
  return (
    <div className="flex flex-col bg-gray-900">
      <header className="flex items-center justify-between text-white">
        <div className="py-8 px-6 md:px-8">
          <h3 className="text-xl">{title}</h3>
          <p className="text-sm text-gray-500">{categories.join(', ')}</p>
        </div>
        <Link
          to={link}
          name={`${title} project page`}
          className="text-xl py-8 px-12 hover:text-green-400 transition duration-200"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </header>
      <Image
        fixed={image.fixed}
        className="min-h-300 md:min-h-380 lg:min-h-480"
      />
    </div>
  )
}

export default ProjectCard
