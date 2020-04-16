import React from 'react'

import {
  Layout,
  // SEO
  SectionIntro,
  Social,
} from '../components'
import { Enquiry } from '../components/form'

const ContactPage = () => {
  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      <section id="intro" className="relative min-h-screen bg-black py-64">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-1/2">
              <SectionIntro
                data={{
                  heading: `Contact`,
                  title: `Get a website which stands out`,
                  body: `<p className="pb-4">
                          Many brands have websites which aren't fit for purpose. Others don't have an online presence at all.
                          Don't miss out on the opportunities of the web. Expand your reach. Get more customers.
                        </p><br />
                        <p>
                          Stand out by taking pride in your website. Make it beautiful. Make people remember you.
                        </p>`,
                  link: {
                    url: '#contact',
                    title: 'Enquire now',
                  },
                }}
                animation={{
                  visibility: true,
                  direction: 'from top',
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Social imagePosition="none" />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="min-h-screen bg-black flex justify-center items-center pt-20 pb-40"
      >
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
