import React from 'react'
import { graphql } from 'gatsby'

import { Layout, ProjectList, SEO } from '../components'

const ProjectPage = ({ data }) => {
  //Get the page sections from the graphql data
  const seo = data.contentfulPage.seo
  const pageIntro = data.contentfulPage.intro
  const projectList = data.allContentfulProject.nodes

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={'/images/seo/projects.png'}
      />

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
      seo {
        title
        description
      }
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
