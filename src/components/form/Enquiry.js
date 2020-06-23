import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, TextArea, Select, Button } from './elements'

const Enquiry = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { register, errors, handleSubmit } = useForm()
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
    <form
      className="w-full max-w-xl"
      onSubmit={handleSubmit(onSubmit)}
      name="enquiry"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="enquiry" />
      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          label="name"
          width="w-1/2"
          register={register({ required: true })}
          error={errors.name}
        />
        <Input
          label="email"
          width="w-1/2"
          register={register({ required: true })}
          error={errors.email}
        />
        {/* <Input
          label="current website"
          placeholder="www.company.com"
          width="w-1/2"
          register={register}
          error={errors.currentWebsite}
        />
        <Select
          label="budget"
          placeholder="Select a budget"
          width="w-1/2"
          items={['£1500', '£2500', '£3500', '£4500+']}
          register={register}
          error={errors.budget}
        /> */}
        <TextArea
          label="What are you looking for?"
          register={register({ required: true })}
          error={errors.message}
        />
      </div>

      <div className="w-full flex justify-center">
        <Button>Submit</Button>
      </div>
    </form>
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default Enquiry
