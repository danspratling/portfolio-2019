import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useForm } from 'react-hook-form'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Input, Button } from './elements'
import { SectionIntro } from '..'

const Enquiry = () => {
  const intro = useStaticQuery(graphql`
    query {
      contentfulIntro(heading: { eq: "Newsletter" }) {
        heading
        title
        body {
          json
        }
      }
    }
  `)

  const [submitted, setSubmitted] = useState(false)
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = data => {
    addToMailchimp(data.email, data)
      .then(result => {
        setSubmitted(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  if (submitted && submitted.result === 'success') {
    return (
      <div className="w-full lg:max-w-xl text-center">
        <p className="text-2xl md:text-4xl text-green-400 mb-2">
          Thanks for signing up!
        </p>
        <p className="text-lg text-white">
          I only send out newsletters with important updates, so I won't spam
          your inbox.
        </p>
      </div>
    )
  }

  if (submitted && submitted.result === 'error') {
    return (
      <div className="w-full lg:max-w-xl text-center">
        <p className="text-2xl md:text-4xl text-red-600 mb-2">
          Something went wrong
        </p>
        <p className="text-lg text-white">{submitted.msg}</p>
      </div>
    )
  }

  return (
    <form
      className="w-full lg:w-3/4 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
      name="newsletter"
      method="POST"
    >
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl text-white mb-4">
          Keep up to date
        </h2>
        <p className="mb-4">
          Sign up for the newsletter to keep up with my regular blog posts, and
          get exclusive tips and tricks right in your inbox.
        </p>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center lg:-mx-6">
        <div className="w-full lg:px-6 py-8 lg:py-0">
          <div className="flex flex-row flex-wrap justify-center items-center -mx-3 mb-2">
            <Input
              formName="newsletter"
              label="First name"
              width="w-auto"
              register={register({ required: true })}
              error={errors.name}
            />
            <Input
              key="newsletter"
              label="email"
              width="w-auto"
              register={register({ required: true })}
              error={errors.email}
            />
            <div className="w-full md:w-auto flex justify-center md:pl-6">
              <Button>Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Enquiry
