import React from 'react'
import { graphql } from 'gatsby'

import { Layout, ProjectList, SEO, ContactSection } from '../components'

import Hero from '../components/sections/Hero/Hero'

const IndexPage = ({ data }) => {
  //descructure our pagedata as js objects so we can use them
  const {
    seo,
    pageIntro,
    projectIntro,
    projectList,
    contactSection,
  } = data.contentfulHomepage

  //Render the page
  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={'/images/seo/home.png'}
      />

      <Hero
        megaHeading="Dan Spratling"
        heading={pageIntro.heading}
        body={pageIntro.body}
        link={{ title: pageIntro.link.title, to: pageIntro.link.link }}
      />

      {/* page section - Projects */}
      <section
        id="projects"
        className="min-h-screen min-w-full bg-black py-12 lg:py-32"
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
      <section id="contact" className="min-h-screen bg-black py-32">
        <div className="container mx-auto">
          <ContactSection {...contactSection} />
        </div>
      </section>
    </Layout>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulHomepage {
      seo {
        title
        description
      }
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
        categories: industries {
          title
        }
        previewImage {
          fixed(width: 600, height: 380, quality: 100) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
      contactSection {
        cards {
          title
          body
          icon
        }
        title
        body {
          childMdx {
            body
          }
        }
        link {
          link
          title
        }
      }
    }
  }
`

export default IndexPage
