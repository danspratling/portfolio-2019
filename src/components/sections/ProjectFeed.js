import React, { useState } from 'react'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import MagicGrid from 'react-magic-grid'

import Link from '../Link'
// import Markdown from '../../Markdown'
import RichText from '../RichText'
import VisibilitySensor from '../VisibilitySensor'

/**
 * Project Feed - Wrapper component listing project cards
 * @param {React.FunctionComponent<Props>} props
 * @param {String} props.heading - Descriptive Prokect feed heading
 * @param {String} props.body - Descriptive Project feed detail
 * @param {Object} [props.link] - Optional Project feed link button
 * @param {String} props.link.to - Link URL
 * @param {String} props.link.heading - Link Heading
 * @param {Array} props.projects - List of projects to be displayed
 */
const ProjectFeed = ({ heading, body, link, projects }) => {
  //The page has an infinite list so create the length state
  const initialListLength = 7
  const [listLength, setListLength] = useState(initialListLength)

  //updating the length triggers a rerender, so get the correct number of items to display
  const projectList = projects.slice(0, listLength)

  // update the state when the button is clicked
  const handleClick = () => {
    setListLength(listLength + initialListLength)
  }

  return (
    <section
      id="projects"
      className="min-h-screen min-w-full bg-black py-12 lg:py-32"
    >
      <div className="container mx-auto">
        <div className="xl:-mx-24">
          <MagicGrid items={projectList.length + 2} gutter={0}>
            {/* The first item is always a copy component */}
            <VisibilitySensor
              direction="right"
              fade
              className="md:w-1/2 md:px-8 xl:px-24 pb-20 md:py-12"
            >
              <h2 className="text-2xl md:text-3xl text-white mb-6">
                {heading}
              </h2>
              {body && <RichText body={body} />}
              {link && (
                <Link to={link.to} icon="default" className="btn btn-secondary">
                  {link.heading}
                </Link>
              )}
            </VisibilitySensor>

            {/* show cards for all the projects */}
            {projectList.map(project => (
              <VisibilitySensor
                key={project.slug}
                className="w-full md:w-1/2 md:px-4 xl:px-24 py-4 xl:py-12"
                direction="top"
                fade
                minTopValue={200}
              >
                <ProjectCard
                  heading={project.heading}
                  categories={project.categories}
                  image={project.previewImage}
                  url={`/projects/${project.slug}`}
                />
              </VisibilitySensor>
            ))}

            {/* The last element is a 'load more' button unless there are no more elements */}
            <div className="md:w-1/2 px-24 flex justify-center items-center">
              {projectList.length < projects.length && (
                <button
                  onClick={handleClick}
                  className="w-auto h-auto bg-green-500 px-6 py-3 my-8 text-lg"
                >
                  Load more
                </button>
              )}
            </div>
          </MagicGrid>
        </div>
      </div>
    </section>
  )
}

/**
 * Project Card - Single project display component
 * @param {Object} props
 * @param {String} props.heading
 * @param {String[]} props.categories
 * @param {String} props.image -
 * @param {Object} props.link
 * @param {String} props.link.to
 * @param {String} props.link.title
 */
const ProjectCard = ({ heading, categories, image, url }) => {
  return (
    <div className="flex flex-col bg-gray-900">
      <header className="flex items-center justify-between text-white">
        <div className="py-8 px-6 md:px-8">
          <h3 className="text-xl">{heading}</h3>
          <p className="text-sm text-gray-500">
            {categories.map(category => category.heading).join(', ')}
          </p>
        </div>
        <Link
          to={url}
          title={`${heading} project page`}
          className="text-xl py-8 px-12 hover:text-green-500 transition duration-200"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </header>
      {image && (
        <Image
          fixed={image.fixed}
          className="max-w-full min-h-300 md:min-h-380 lg:min-h-480"
        />
      )}
    </div>
  )
}

export default ProjectFeed
