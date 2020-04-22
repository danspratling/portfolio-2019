import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Layout, SEO, SyntaxHighlighter } from '../components'

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
          <div className="mb-6">
            <h1 className="text-4xl text-green-400">{title}</h1>
          </div>
          <div className="flex flex-row flex-wrap text-white">
            <div className="w-full md:w-2/3">
              {documentToReactComponents(body.json, documentRichTextOptions)}
            </div>
            <div className="w-full md:w-1/3">Sidebar</div>
          </div>
          <div className="py-6">
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

//Options adjusting rich text elements
const documentRichTextOptions = {
  renderMark: {
    [MARKS.CODE]: text => {
      return <SyntaxHighlighter>{text}</SyntaxHighlighter>
    },
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl mt-12 mb-6">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl mt-12 mb-6">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-4">{children}</p>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="bg-gray-900 px-6 py-3 border-l-4 border-green-400">
        {children}
      </blockquote>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
    [BLOCKS.LI_LIST]: (node, children) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li>{node.content[0].content[0].value}</li>
    ),
  },
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
