import React from 'react'
import { Link } from 'gatsby'

import {
  Layout,
  // SEO
} from '../components'
import { InputText, TextArea, Select } from '../components/form'

const ContactPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}

    <section className="min-h-screen bg-black flex justify-center items-center pt-20 pb-40">
      <div className="container mx-auto">
        <div className="w-full flex justify-center">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <InputText label="Name" placeholder="Jane Doe" width="w-full" />
              <InputText
                label="Email"
                placeholder="janedoe@mail.com"
                width="w-full"
              />
              <InputText
                label="Current website"
                placeholder="www.company.com"
                width="w-1/2"
              />
              <Select
                label="Budget"
                placeholder="Select a budget"
                width="w-1/2"
                items={['£1500', '£2500', '£3500', '£4500+']}
              />
              <TextArea
                label="Message"
                placeholder="Tell me what you're looking for"
              />
              <div className="w-full flex justify-center">
                <button className="w-auto h-auto bg-green-400 px-6 py-3 text-lg">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
