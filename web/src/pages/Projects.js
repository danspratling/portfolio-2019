import React, { useState } from 'react'
import MagicGrid from 'react-magic-grid'
import { Link } from 'gatsby'

import dengro from '../images/dengro-preview-slice.png'

import {
  Layout,
  ProjectCard,
  // SEO
  SectionIntro,
} from '../components'

const ProjectPage = () => {
  const initialProjectList = [...Array(20).keys()]
  const initialListLength = 7
  const [listLength, setListLength] = useState(initialListLength)

  const handleClick = () => {
    setListLength(listLength + initialListLength)
  }

  const projects = initialProjectList.slice(0, listLength)

  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      <section id="projects" className="min-h-screen bg-black py-32">
        <div className="container mx-auto">
          <div className="-mx-24">
            <MagicGrid items={projects.length + 2} gutter={0}>
              <div className="w-1/2 px-24 py-12">
                <SectionIntro
                  data={{
                    heading: `Projects`,
                    title: `Explore my work. Find something you love.`,
                    body: `<p>
                            With a portfolio of work ranging from brochure sites to 
                            online stores, I'm a flexible developer able to help with
                            any project you might need.`,
                    link: {
                      url: '/',
                      title: 'Get in touch',
                    },
                  }}
                  animation={{
                    visibility: true,
                    direction: 'from left',
                  }}
                />
              </div>

              {projects.map(project => (
                <div className="w-1/2 px-24 py-12">
                  <ProjectCard
                    data={{
                      title: `Project ${project}.`,
                      categories: ['Development', 'UX'],
                      image: dengro,
                    }}
                  />
                </div>
              ))}

              <div className="w-1/2 px-24 py-12 flex justify-center items-center">
                {projects.length < initialProjectList.length && (
                  <button
                    onClick={handleClick}
                    className="w-auto h-auto bg-green-400 px-6 py-3 text-lg"
                  >
                    Load more
                  </button>
                )}
              </div>
            </MagicGrid>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectPage
