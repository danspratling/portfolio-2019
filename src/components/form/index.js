import React from 'react'
import { FormContext } from 'react-hook-form'

import Enquiry from './Enquiry'
import SignUp from './SignUp'

const Form = ({ children, methods, ...props }) => {
  return (
    <FormContext {...methods}>
      <form {...props}>{children}</form>
    </FormContext>
  )
}

export default Form
export { Enquiry, SignUp }
