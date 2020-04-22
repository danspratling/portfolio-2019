import React from 'react'
import { graphql } from 'gatsby'

import { Layout, RichText, ContentList, SEO } from '../components'

const ProjectPage = ({ data }) => {
  //Get the page sections from the graphql data
  const {
    seo,
    createdAt,
    updatedAt,
    title,
    headerImage,
    body,
    categories,
    node_locale,
  } = data.contentfulProject

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />

      <section
        id="projects"
        className="min-h-screen min-w-full bg-black px-6 py-32"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl text-green-400 lg:px-8">{title}</h1>
          <div className="flex flex-row flex-wrap text-white">
            <div className="w-full md:w-2/3 lg:px-8">
              <RichText body={body} />
            </div>
            <div className="w-full md:w-1/3 lg:px-8 mt-12">
              <ContentList body={body} />
            </div>
          </div>
          <div className="py-6 lg:px-8">
            <p className="text-xs text-gray-600 uppercase font-bold">
              {updatedAt > createdAt ? 'Last updated' : 'Created on'}
            </p>
            <p className="text-xl text-white">
              {getDate(
                updatedAt > createdAt ? updatedAt : createdAt,
                node_locale
              )}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

//Gets date in locale format
const getDate = (date, locale) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulProject(slug: { eq: "dengro" }) {
      seo {
        title
        description
      }
      title
      createdAt(formatString: "")
      updatedAt(formatString: "")
      headerImage {
        fluid {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          srcSet
          src
        }
      }
      body {
        json
      }
      categories
      node_locale
    }
  }
`

export default ProjectPage
