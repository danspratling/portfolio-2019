import React from 'react'
import { graphql } from 'gatsby'

import {
  Layout,
  MegaHeading,
  ProjectCard,
  // SEO
  SectionIntro,
  Social,
  Upsell,
} from '../components'

const IndexPage = ({ data }) => {
  //descructure our pagedata as js objects so we can use them
  const {
    pageIntro,
    projectIntro,
    projectList,
    contactIntro,
    contactSection,
  } = data.contentfulHomepage

  //Render the page
  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      {/* page section - Introduction */}
      <section
        id="intro"
        className="relative h-screen min-h-1024 bg-black pt-40 pb-40"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-3">
              <MegaHeading>Dan Spratling.</MegaHeading>
              <Social />
            </div>
            <div className="col-span-2 z-10">
              <SectionIntro data={pageIntro} />
            </div>
          </div>
        </div>
      </section>

      {/* page section - Projects */}
      <section id="projects" className="min-h-screen bg-black pt-64 pb-32">
        <div className="container mx-auto">
          <div
            className="flex flex-col flex-wrap -mx-24"
            style={{ maxHeight: 1200 }}
          >
            <div className="w-1/2 px-24 my-12">
              <SectionIntro
                data={projectIntro}
                animation={{
                  visibility: true,
                  direction: 'from top',
                }}
              />
            </div>

            {projectList.map(project => (
              <div key={project.slug} className="w-1/2 px-24 my-12">
                <ProjectCard {...project} image={project.previewImage} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* page section - Blog */}
      {/* <section
        id="blog"
        className="min-h-screen bg-black pt-40 pb-40"
      ></section> */}

      {/* page section - Contact */}
      <section id="contact" className="min-h-screen bg-black pt-32 pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-24">
            <div className="col-span-3">
              <Upsell {...contactSection} />
            </div>
            <div className="col-span-2">
              <SectionIntro
                data={contactIntro}
                animation={{
                  visibility: true,
                  direction: 'from right',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulHomepage {
      pageIntro {
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
      projectIntro {
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
      projectList {
        title
        slug
        categories
        previewImage {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            srcSet
            src
          }
        }
      }
      contactIntro {
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
      contactSection {
        title
        body {
          json
        }
        link {
          link
          title
        }
        cards {
          title
          body
          icon
        }
      }
    }
  }
`

export default IndexPage
