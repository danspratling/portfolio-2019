import React from 'react'
import { Link } from 'gatsby'

const ProjectCard = ({ data }) => {
  const { title, categories, image } = data

  return (
    <div className="bg-gray-900">
      <header className="flex items-baseline justify-between text-white p-8">
        <h3 className="text-xl">{title}</h3>
        <p>{categories.join(', ')}</p>
      </header>
      <img
        src={image}
        height="500"
        className="object-cover"
        style={{ height: 400 }}
      />
    </div>
  )
}

export default ProjectCard
