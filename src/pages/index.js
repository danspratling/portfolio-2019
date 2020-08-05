import React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO, ContactSection } from '../components'

import Hero from '../components/sections/Hero'
import ProjectFeed from '../components/sections/ProjectFeed'

const HomePage = ({ data }) => {
  //descructure our pagedata as js objects so we can use them
  const {
    seo,
    hero,
    projectFeed,
    projects,
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
        heading={hero.title}
        body={hero.body}
        link={hero.link}
      />

      <ProjectFeed
        heading={projectFeed.title}
        body={projectFeed.body}
        link={projectFeed.link}
        projects={projects}
      />

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
      hero: pageIntro {
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
      projectFeed: projectIntro {
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
      projects: projectList {
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

export default HomePage
