import React from 'react'
import { graphql } from 'gatsby'
// import { trackPageview } from 'fathom-client'
import { Layout, SEO, SectionIntro, Social } from '../components'
import { Enquiry } from '../components/form'

const ContactPage = ({ data }) => {
  const { seo, intro: pageIntro, formIntro } = data.contentfulContactPage

  // trackPageview()

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={'/images/seo/contact.png'}
      />

      <section
        id="intro"
        className="relative md:min-h-screen bg-black pt-32 p-6 md:px-0"
      >
        <div className="container mx-auto">
          <div className="md:w-3/4 mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="px-6">
              <SectionIntro
                data={pageIntro}
                animation={{
                  visibility: true,
                  direction: 'from left',
                }}
              />
            </div>

            <div
              className="w-full calendly-inline-widget h-full min-h-640"
              data-url="https://calendly.com/dan_spratling/discovery"
            ></div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex justify-center items-center md:min-h-screen bg-black p-12 pb-24 md:pt-20 md:pb-40"
      >
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-1/2 text-center">
              <SectionIntro
                data={formIntro}
                animation={{
                  visibility: true,
                  direction: 'from top',
                }}
              />
            </div>
          </div>

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
    contentfulContactPage {
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
      formIntro {
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
