import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { trackGoal } from 'fathom-client'

import Link from '../Link'
import Form from '../form'
import VisibilitySensor from '../VisibilitySensor'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Input from '../form/elements/Input'
import TextArea from '../form/elements/TextArea'

import { RichText } from '..'

const ContactForm = ({ heading, body, link }) => {
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

  return (
    <section
      id="contact"
      className="flex justify-center items-center md:min-h-screen bg-black py-24 md:pt-20 md:pb-40"
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-1/2 text-center">
            <VisibilitySensor className="text-center" direction="bottom" fade>
              <h2 className="text-2xl md:text-3xl text-white mb-6">
                {heading}
              </h2>

              {body && <RichText body={body} />}
              {link && (
                <Link to={link.to} className="btn btn-secondary" icon="default">
                  {link.heading}
                </Link>
              )}
            </VisibilitySensor>
          </div>
        </div>

        <div className="w-full flex justify-center">
          {!formSubmitted ? (
            <Form
              methods={methods}
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
            </Form>
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
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default ContactForm
