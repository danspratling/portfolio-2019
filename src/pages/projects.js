import React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO } from '../components'
import ProjectFeed from '../components/sections/ProjectFeed'

const ProjectPage = ({ data }) => {
  //Get the page sections from the graphql data
  const { seo, projectFeed } = data.contentfulPage
  const { projects } = data.allContentfulProject

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={'/images/seo/projects.png'}
      />

      <ProjectFeed
        heading={projectFeed.title}
        body={projectFeed.body}
        link={projectFeed.link}
        projects={projects}
      />
    </Layout>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulPage(slug: { eq: "projects" }) {
      seo {
        title
        description
      }
      projectFeed: intro {
        heading
        title
        body {
          json
        }
        link {
          to: link
          title
        }
      }
    }
    allContentfulProject {
      projects: nodes {
        title
        slug
        categories: industries {
          title
        }
        previewImage {
          fixed(width: 600, height: 380, quality: 80) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  }
`

export default ProjectPage
