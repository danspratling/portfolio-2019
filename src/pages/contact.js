import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { useForm, FormContext } from 'react-hook-form'
import { trackGoal } from 'fathom-client'

import Layout from '../components/layout/Layout'
import Link from '../components/Link'
import BookDiscovery from '../components/sections/BookDiscovery'
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

      <section
        id="contact"
        className="flex justify-center items-center md:min-h-screen bg-black py-24 md:pt-20 md:pb-40"
      >
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-1/2 text-center">
              <VisibilitySensor className="text-center" direction="bottom" fade>
                <h2 className="text-2xl md:text-3xl text-white mb-6">
                  {contactForm.heading}
                </h2>

                {contactForm.body && <RichText body={contactForm.body} />}
                {contactForm.link && (
                  <Link
                    to={contactForm.link.to}
                    className="btn btn-secondary"
                    icon="default"
                  >
                    {contactForm.link.heading}
                  </Link>
                )}
              </VisibilitySensor>
            </div>
          </div>

          <div className="w-full flex justify-center">
            {!formSubmitted ? (
              <FormContext {...methods}>
                <form
                  className="w-full max-w-xl my-16"
                  onSubmit={methods.handleSubmit(onSubmit)}
                  name="enquiry"
                  method="POST"
                  data-netlify="true"
                >
                  <div className="mb-12">
                    <input type="hidden" name="form-name" value="enquiry" />
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input label="Name" required />
                      <Input label="Email" type="email" required />
                    </div>

                    <TextArea label="Message" required />
                  </div>

                  <div className="w-full flex justify-center mt-6">
                    <button type="submit" className="btn btn-base btn-icon">
                      <span>Sign Up</span>
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </form>
              </FormContext>
            ) : (
              <div className="w-full max-w-xl text-center">
                <p className="text-2xl md:text-4xl text-green-500 mb-2">
                  Thanks for enquiring!
                </p>
                <p className="text-lg text-white">I'll be in touch shortly</p>
              </div>
            )}
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
