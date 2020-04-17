import React from 'react'

import {
  Layout,
  // SEO
  SectionIntro,
  Social,
} from '../components'
import { Enquiry } from '../components/form'

const ContactPage = ({ data }) => {
  const pageIntro = data.contentfulPage.intro

  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      <section id="intro" className="relative min-h-screen bg-black py-64">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-1/2">
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
        className="min-h-screen bg-black flex justify-center items-center pt-20 pb-40"
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
