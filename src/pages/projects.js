import React, { useState } from 'react'
import { graphql } from 'gatsby'

import {
  Layout,
  ProjectList,
  // SEO
} from '../components'

const ProjectPage = ({ data }) => {
  //Get the page sections from the graphql data
  const pageIntro = data.contentfulPage.intro
  const projectList = data.allContentfulProject.nodes

  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      <section
        id="projects"
        className="min-h-screen min-w-full bg-black px-6 py-32"
      >
        <div className="container mx-auto">
          <ProjectList
            sectionIntro={{
              data: pageIntro,
              animation: {
                visibility: true,
                direction: 'from left',
              },
            }}
            projectList={projectList}
          />
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
          fixed(width: 600, height: 380) {
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
