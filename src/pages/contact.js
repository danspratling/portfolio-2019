import React from 'react'
import { graphql } from 'gatsby'
// import { trackPageview } from 'fathom-client'
import { SectionIntro } from '../components'
import { Enquiry } from '../components/form'

import Layout from '../components/layout/Layout'
import BookDiscovery from '../components/sections/BookDiscovery'

const ContactPage = ({ data }) => {
  const { seo, bookDiscovery, formIntro } = data.contentfulContactPage

  // trackPageview()

  return (
    <Layout {...seo} image={'/images/seo/contact.png'}>
      <BookDiscovery
        heading={bookDiscovery.heading}
        body={bookDiscovery.body}
        link={bookDiscovery.link}
      />

      <section
        id="contact"
        className="flex justify-center items-center md:min-h-screen bg-black py-24 md:pt-20 md:pb-40"
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
      bookDiscovery: intro {
        heading: title
        body {
          json
        }
        link {
          to: link
          heading: title
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
