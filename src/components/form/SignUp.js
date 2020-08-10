import React, { useState } from 'react'
import { useForm, FormContext } from 'react-hook-form'
import { trackGoal } from 'fathom-client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Input from './elements/Input'

const Enquiry = () => {
  const methods = useForm()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const onSubmit = data => {
    trackGoal('ZZ6KQHVV')

    /* Newsletter */
    addToMailchimp(data.email, {
      FNAME: data['first-name'],
    })
      .then(result => {
        setFormSubmitted(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  if (formSubmitted) {
    return (
      <div className="w-full lg:max-w-xl text-center">
        <p className="text-2xl md:text-4xl text-green-500 mb-2">
          Thanks for signing up!
        </p>
        <p className="text-lg text-white">
          I only send out newsletters with important updates, so I won't spam
          your inbox.
        </p>
      </div>
    )
  }

  return (
    <FormContext {...methods}>
      <form
        className="w-full lg:w-3/4 mx-auto"
        onSubmit={methods.handleSubmit(onSubmit)}
        name="newsletter"
        method="POST"
      >
        <div className="w-full flex flex-row flex-wrap justify-center lg:-mx-6">
          <div className="w-full lg:px-6 py-8 lg:py-0">
            <div className="flex flex-wrap items-end -mx-4 mb-2">
              <div className="flex-1 px-4">
                <Input label="First name" required />
              </div>
              <div className="flex-1 px-4">
                <Input label="Email" required />
              </div>
              <div className="flex-0 px-4">
                <div className="mt-6 mb-3">
                  <button type="submit" className="btn btn-base btn-icon">
                    <span>Sign Up</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormContext>
  )
}

export default Enquiry
