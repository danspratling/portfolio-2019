import React from 'react'

import {
  Layout,
  // SEO
} from '../components'
import { Enquiry } from '../components/form'

const ContactPage = () => {
  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      <section className="min-h-screen bg-black flex justify-center items-center pt-20 pb-40">
        <div className="container mx-auto">
          <div className="w-full flex justify-center">
            <Enquiry />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
