import React from 'react'
import { useForm, FormContext } from 'react-hook-form'

import Input from './Input'
import TextArea from './TextArea'

/**
 * The form wrapper component. Accepts the form contents as children. Wraps the form with context for functionality.
 * @param {React.FunctionComponent<Props>} props
 * @param {Function} props.onSubmit - the action the form takes once it's submitted
 * @param {JSX.Element} props.children - the contents of the form
 */
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

/**
 * Generic for submitted screen giving users indication their submission was successful
 * @param {Object} props
 * @param {string} props.heading
 * @param {string} props.body
 */
const FormSubmitted = ({ heading, body }) => {
  return (
    <div className="w-full max-w-xl text-center">
      <p className="text-2xl md:text-4xl text-green-500 mb-2">{heading}</p>
      <p className="text-lg text-white">{body}</p>
    </div>
  )
}

export default Form
export { FormSubmitted, Input, TextArea }
