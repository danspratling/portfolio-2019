import React from 'react'
import { graphql } from 'gatsby'
import analytics from '../components/analytics'
import { Layout, SEO, SectionIntro } from '../components'
import { SignUp } from '../components/form'

const newsletterPage = ({ data }) => {
  const { seo, intro: pageIntro } = data.contentfulPage

  analytics({ id: 'G5AALGJX' })

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={'/images/seo/newsletter.png'}
      />

      <section id="intro" className="relative bg-black py-12 lg:py-40 px-6">
        <div className="container mx-auto mb-24">
          <div className="flex flex-row flex-wrap lg:flex-no-wrap -mx-5">
            <div className="w-full md:w-3/5 lg:w-2/5 mx-5 md:mx-auto mb-40 z-10">
              <SectionIntro data={pageIntro} />
            </div>
          </div>
          <div className="w-full flex justify-center mb-24">
            <SignUp />
          </div>
        </div>
      </section>
    </Layout>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulPage(slug: { eq: "newsletter" }) {
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
    }
  }
`

export default newsletterPage
