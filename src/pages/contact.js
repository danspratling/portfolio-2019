import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, SectionIntro, Social } from '../components'
import { Enquiry } from '../components/form'

const ContactPage = ({ data }) => {
  const { seo, intro: pageIntro } = data.contentfulPage

  //Analytics
  window.fathom.trackGoal('21PFYGOO', 0)

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={'/images/seo/contact.png'}
      />

      <section
        id="intro"
        className="relative md:min-h-screen bg-black pt-32 p-12 md:py-64 md:px-0"
      >
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-1/2">
              <SectionIntro
                data={pageIntro}
                animation={{
                  visibility: true,
                  direction: 'from top',
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Social imagePosition="none" />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex justify-center items-center md:min-h-screen bg-black p-12 pb-24 md:pt-20 md:pb-40"
      >
        <div className="container mx-auto">
          <div className="w-full flex justify-center">
            <Enquiry />
          </div>
        </div>
      </section>
    </Layout>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulPage(slug: { eq: "contact" }) {
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

export default ContactPage
