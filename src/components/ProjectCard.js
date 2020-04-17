import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const ProjectCard = ({ title, categories, image }) => {
  return (
    <div className="bg-gray-900">
      <header className="flex items-baseline justify-between text-white p-8">
        <h3 className="text-xl">{title}</h3>
        <p>{categories.join(', ')}</p>
      </header>
      <Image
        fluid={image.fluid}
        height="500"
        className="object-cover"
        style={{ height: 400 }}
      />
    </div>
  )
}

export default ProjectCard
