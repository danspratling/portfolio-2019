import React from 'react'

import {
  Layout,
  MegaHeading,
  // SEO
  SectionIntro,
  Social,
} from '../components'

const errorPage = ({ data }) => {
  const pageIntro = data.contentfulPage.intro

  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      <section
        id="intro"
        className="relative min-h-screen lg:min-h-1024 bg-black py-12 lg:py-40 px-6"
      >
        <div className="container mx-auto">
          <div className="my-10 md:my-0">
            <MegaHeading>
              404
              <br />
              Game Over.
            </MegaHeading>
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
    </Layout>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulPage(slug: { eq: "404" }) {
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
  }
`

export default errorPage
