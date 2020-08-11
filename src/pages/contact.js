import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { useForm } from 'react-hook-form'
import { trackGoal } from 'fathom-client'

import Layout from '../components/layout/Layout'
import Link from '../components/Link'
import BookDiscovery from '../components/sections/BookDiscovery'
import ContactForm from '../components/sections/ContactForm'
import Form from '../components/form'
import VisibilitySensor from '../components/VisibilitySensor'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Input from '../components/form/elements/Input'
import TextArea from '../components/form/elements/TextArea'

import { RichText } from '../components'

const ContactPage = ({ data }) => {
  const { seo, bookDiscovery, contactForm } = data.contentfulContactPage

  const methods = useForm()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const onSubmit = data => {
    trackGoal('2CZG537F')

    /* Submit form */
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'enquiry', ...data }),
    }).then(() => setFormSubmitted(true))
  }

  // trackPageview()

  return (
    <Layout {...seo} image={'/images/seo/contact.png'}>
      <BookDiscovery
        heading={bookDiscovery.heading}
        body={bookDiscovery.body}
        link={bookDiscovery.link}
      />

      <ContactForm
        heading={contactForm.heading}
        body={contactForm.body}
        link={contactForm.link}
      />
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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default ContactPage
