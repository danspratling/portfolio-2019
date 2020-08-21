import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Link from '../Link'
import Form, { FormSubmitted, Input, TextArea } from '../form/Form'
import VisibilitySensor from '../VisibilitySensor'

import RichText from '../RichText'

/**
 * Section containing the contact form
 * @param {React.FunctionComponent<Props>} props
 * @param {String} props.heading
 * @param {Function} [props.body]
 * @param {Object} [props.link]
 * @param {String} props.link.to
 * @param {String} props.link.heading
 * @param {Boolean} props.submitted
 * @param {Function} props.onSubmit
 */
const ContactSection = ({ heading, body, link, submitted, onSubmit }) => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center bg-black py-24"
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 text-center">
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
          <ContactForm submitted={submitted} onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  )
}

const ContactForm = ({ submitted, onSubmit }) => {
  if (submitted) {
    return (
      <FormSubmitted
        heading="Thanks for enquiring!"
        body="I'll be in touch shortly."
      />
    )
  }

  return (
    <Form
      className="w-full max-w-xl my-16"
      onSubmit={onSubmit}
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
          Get in touch
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </Form>
  )
}

export default ContactSection
