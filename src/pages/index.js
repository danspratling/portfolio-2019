import React from 'react'
import { graphql } from 'gatsby'

import {
  Layout,
  MegaHeading,
  ProjectList,
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
        className="relative min-h-screen lg:min-h-1024 bg-black py-12 lg:py-40 px-6"
      >
        <div className="container mx-auto">
          <div className="my-10 md:my-0">
            <MegaHeading>Dan Spratling.</MegaHeading>
          </div>
          <div className="flex flex-row flex-wrap lg:flex-no-wrap -mx-5">
            <div className="w-full md:w-2/5 lg:w-3/5 mx-5 order-last lg:order-first ml-auto lg:ml-0">
              <div className="md:flex">
                <Social />
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-2/5 mx-5 md:mx-auto lg:mx-5 z-10">
              <SectionIntro data={pageIntro} />
            </div>
          </div>
        </div>
      </section>

      {/* page section - Projects */}
      <section
        id="projects"
        className="min-h-screen min-w-full bg-black px-6 py-12 lg:pt-64 lg:pb-32"
      >
        <div className="container mx-auto">
          <ProjectList
            sectionIntro={{
              data: projectIntro,
              animation: {
                visibility: true,
                direction: 'from top',
              },
            }}
            projectList={projectList}
          />
        </div>
      </section>

      {/* page section - Blog */}
      {/* <section
        id="blog"
        className="min-h-screen bg-black pt-40 pb-40"
      ></section> */}

      {/* page section - Contact */}
      <section id="contact" className="min-h-screen bg-black pt-32 pb-32 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-24">
            <div className="md:col-span-3">
              <Upsell {...contactSection} />
            </div>
            <div className="md:col-span-2">
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
