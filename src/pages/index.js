import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import ProjectFeed from '../components/sections/ProjectFeed'
import CallToAction from '../components/sections/CallToAction'

const HomePage = ({ data }) => {
  const { seo, hero, projectFeed, projects, contact } = data.contentfulHomepage

  return (
    <Layout {...seo} image={'/images/seo/home.png'}>
      <Hero
        megaHeading="Dan Spratling"
        heading={hero.heading}
        body={hero.body}
        link={hero.link}
      />

      <ProjectFeed
        heading={projectFeed.heading}
        body={projectFeed.body}
        link={projectFeed.link}
        projects={projects}
      />

      <CallToAction
        heading={contact.heading}
        body={contact.body}
        link={contact.link}
        promoCards={contact.promoCards}
      />
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
        heading: title
        body {
          json
        }
        link {
          to: link
          heading: title
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
          heading: title
        }
      }
      projects: projectList {
        heading: title
        slug
        categories: industries {
          heading: title
        }
        previewImage {
          fixed(width: 600, height: 380, quality: 100) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
      contact: contactSection {
        promoCards: cards {
          heading: title
          body
          icon
        }
        heading: title
        body {
          childMdx {
            body
          }
        }
        link {
          to: link
          heading: title
        }
      }
    }
  }
`

export default HomePage
