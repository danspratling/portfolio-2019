import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'

const errorPage = ({ data }) => {
  const { seo, hero } = data.contentfulPage

  const MegaHeading = (
    <>
      Game <br /> Over
    </>
  )

  return (
    <Layout {...seo}>
      <Hero
        megaHeading={MegaHeading}
        heading={hero.title}
        body={hero.body}
        link={hero.link}
      />
    </Layout>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulPage(slug: { eq: "404" }) {
      seo {
        title
        description
      }
      hero: intro {
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
  }
`

export default errorPage
