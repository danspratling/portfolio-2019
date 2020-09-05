import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/Layout'
import BookDiscovery from '../components/sections/BookDiscovery'
import Contact from '../components/sections/Contact'

const ContactPage = ({ data }) => {
  const { seo, bookDiscovery, contactForm } = data.contentfulContactPage

  const [formSubmitted, setFormSubmitted] = useState(false)

  const onSubmit = data => {
    /* Submit form */
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'enquiry', ...data }),
    }).then(() => setFormSubmitted(true))
  }

  return (
    <Layout {...seo} image={'/images/seo/contact.png'}>
      <BookDiscovery
        heading={bookDiscovery.heading}
        body={bookDiscovery.body}
        link={bookDiscovery.link}
      />

      <Contact
        heading={contactForm.heading}
        body={contactForm.body}
        link={contactForm.link}
        submitted={formSubmitted}
        onSubmit={onSubmit}
      />
    </Layout>
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
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
      contactForm: formIntro {
        heading: title
        body {
          json
        }
        link {
          to: link
          heading: title
        }
      }
    }
  }
`

export default ContactPage
