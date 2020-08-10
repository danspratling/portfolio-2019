import React, { useState } from 'react'
import { useForm, FormContext } from 'react-hook-form'
import { trackGoal } from 'fathom-client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Input from './elements/Input'
import TextArea from './elements/TextArea'

const Enquiry = () => {
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

  if (formSubmitted) {
    return (
      <div className="w-full max-w-xl text-center">
        <p className="text-2xl md:text-4xl text-green-500 mb-2">
          Thanks for enquiring!
        </p>
        <p className="text-lg text-white">I'll be in touch shortly</p>
      </div>
    )
  }

  return (
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
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default Enquiry
