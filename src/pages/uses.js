import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, SectionIntro, Markdown } from '../components'

const UsesPage = ({ data }) => {
  const { seo, intro: pageIntro, body } = data.contentfulList

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={'/images/seo/contact.png'}
      />

      <section
        id="intro"
        className="relative md:min-h-640 bg-black pt-32 p-12 md:pt-64 md:px-0"
      >
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-1/2">
              <SectionIntro
                data={pageIntro}
                animation={{
                  visibility: true,
                  direction: 'from left',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="content"
        className="relative md:min-h-screen bg-black pt-32 p-12 md:px-0"
      >
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-gray-300">
              <Markdown>{body.childMdx.body}</Markdown>
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
    contentfulList(slug: { eq: "uses" }) {
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
      body {
        childMdx {
          body
        }
      }
    }
  }
`

export default UsesPage
