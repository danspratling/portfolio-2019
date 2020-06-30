import React, { useState } from 'react'
import { useForm, FormContext } from 'react-hook-form'

import Button from './elements/Button'
import Input from './elements/Input'
import TextArea from './elements/TextArea'

const Enquiry = () => {
  const methods = useForm()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const onSubmit = data => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'enquiry', ...data }),
    }).then(() => setFormSubmitted(true))
  }

  if (formSubmitted) {
    return (
      <div className="w-full max-w-xl text-center">
        <p className="text-2xl md:text-4xl text-green-400 mb-2">
          Thanks for enquiring!
        </p>
        <p className="text-lg text-white">I'll be in touch shortly</p>
      </div>
    )
  }

  return (
    <FormContext {...methods}>
      <form
        className="w-full max-w-xl"
        onSubmit={methods.handleSubmit(onSubmit)}
        name="enquiry"
        method="POST"
        data-netlify="true"
      >
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-white mb-4">Get in touch</h2>
          <p className="mb-4">
            Whether you're looking for a new website, or just asking a question,
            let me know using the form below.
          </p>

          <input type="hidden" name="form-name" value="enquiry" />
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Name" required />
            <Input label="Email" type="email" required />
          </div>

          <TextArea label="Message" required />
        </div>

        <div className="w-full flex justify-center mt-6">
          <Button>Submit</Button>
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
