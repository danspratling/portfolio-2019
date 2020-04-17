import React, { useState } from 'react'
import MagicGrid from 'react-magic-grid'
import { graphql } from 'gatsby'

import {
  Layout,
  ProjectCard,
  // SEO
  SectionIntro,
} from '../components'

const ProjectPage = ({ data }) => {
  //Get the page sections from the graphql data
  const pageIntro = data.contentfulPage.intro
  const projectList = data.allContentfulProject.nodes

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
    <Layout>
      {/* <SEO title="Home" /> */}

      <section id="projects" className="min-h-screen bg-black py-32">
        <div className="container mx-auto">
          <div className="-mx-24">
            {/* This is the magic which lets the masonry grid work */}
            <MagicGrid items={projects.length + 2} gutter={0}>
              {/* The first item is always the intro component */}
              <div className="w-1/2 px-24 py-12">
                <SectionIntro
                  data={pageIntro}
                  animation={{
                    visibility: true,
                    direction: 'from left',
                  }}
                />
              </div>

              {/* show cards for all the projects */}
              {projects.map(project => (
                <div key={project.slug} className="w-1/2 px-24 py-12">
                  <ProjectCard {...project} image={project.previewImage} />
                </div>
              ))}

              {/* The last element is a 'load more' button unless there are no more elements */}
              <div className="w-1/2 px-24 py-12 flex justify-center items-center">
                {projects.length < projectList.length && (
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

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulPage(slug: { eq: "projects" }) {
      intro {
        heading
        title
        body {
          json
        }
        link {
          link
          title
        }
      }
    }
    allContentfulProject {
      nodes {
        title
        slug
        categories
        previewImage {
          fixed(width: 600) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            srcSet
            src
          }
        }
      }
    }
  }
`

export default ProjectPage
