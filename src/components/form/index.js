import React from 'react'
import { useForm, FormContext } from 'react-hook-form'

import Enquiry from './Enquiry'
import SignUp from './SignUp'

const Form = ({ onSubmit, children, ...props }) => {
  const methods = useForm()
  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormContext>
  )
}

const FormSubmitted = ({ heading, body }) => {
  return (
    <div className="w-full max-w-xl text-center">
      <p className="text-2xl md:text-4xl text-green-500 mb-2">{heading}</p>
      <p className="text-lg text-white">{body}</p>
    </div>
  )
}

export default Form
export { FormSubmitted, Enquiry, SignUp }
