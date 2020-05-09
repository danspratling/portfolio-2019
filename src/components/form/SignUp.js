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
      <div className="w-full flex flex-row flex-wrap justify-center lg:-mx-6">
        <div className="w-full lg:w-7/12 lg:px-6 lg:mt-4">
          <SectionIntro
            data={intro.contentfulIntro}
            animation={{ visibility: true, direction: 'from left' }}
          />
        </div>

        <div className="w-full lg:w-5/12 max-w-lg lg:px-6 py-8 lg:py-0 mr-auto">
          <div className="flex flex-row flex-wrap justifyitems-center -mx-3 mb-2">
            <Input
              key="newsletter"
              label="name"
              placeholder="Jane Doe"
              width="w-full"
              register={register({ required: true })}
              error={errors.name}
            />
            <Input
              key="newsletter"
              label="email"
              placeholder="janedoe@webmail.com"
              width="w-full"
              register={register({ required: true })}
              error={errors.email}
            />
          </div>

          <div className="w-full flex">
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Enquiry
