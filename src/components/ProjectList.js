import React, { useState } from 'react'
import MagicGrid from 'react-magic-grid'

import {
  ProjectCard,
  // SEO
  SectionIntro,
} from '../components'

/**
 * The magic masonry grid
 */
const ProjectList = ({ sectionIntro, projectList }) => {
  //The page has an infinite list so create the length state
  const initialListLength = 7
  const [listLength, setListLength] = useState(initialListLength)

  //updating the length triggers a rerender, so get the correct number of items to display
  const projects = projectList.slice(0, listLength)

  // update the state when the button is clicked
  const handleClick = () => {
    setListLength(listLength + initialListLength)
  }

  return (
    <div className="xl:-mx-24">
      <MagicGrid items={projects.length + 2} gutter={0}>
        {/* The first item is always the intro component */}
        <div className="md:w-1/2 md:px-8 xl:px-24 pb-20 md:py-12">
          <SectionIntro {...sectionIntro} />
        </div>

        {/* show cards for all the projects */}
        {projects.map(project => (
          <div
            key={project.slug}
            className="w-full md:w-1/2 md:px-4 xl:px-24 py-4 xl:py-12"
          >
            <ProjectCard
              {...project}
              image={project.previewImage}
              url={`/projects/${project.slug}`}
            />
          </div>
        ))}

        {/* The last element is a 'load more' button unless there are no more elements */}
        <div className="md:w-1/2 px-24 flex justify-center items-center">
          {projects.length < projectList.length && (
            <button
              onClick={handleClick}
              className="w-auto h-auto bg-green-400 px-6 py-3 my-8 text-lg"
            >
              Load more
            </button>
          )}
        </div>
      </MagicGrid>
    </div>
  )
}

export default ProjectList
