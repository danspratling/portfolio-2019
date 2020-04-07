import React from 'react'
import { Link } from 'gatsby'

import {
  Layout,
  Portfolio,
  // SEO
} from '../components'

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}

    <section className="min-h-screen bg-black flex items-center pt-20 pb-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <h1 className="text-6xl text-white">Dan Spratling</h1>
            {/* <h2 class="text-5xl">Developer, Designer, Writer</h2> */}
            <div className="text-gray-600">
              <p>
                I'm a Software Engineer who makes Websites and Apps. I love
                turning beautiful designs into interactive websites.
              </p>
              <p>
                I try to help out the developer community where I can, through
                blog posts or on twitter. I'll often share my experiences during
                the creative process.
              </p>
              <p>
                I'm available for freelance work, and always looking for
                interesting challenges to take on.
              </p>
              <button>Get in touch</button>
              <Link to="/page-2/">Go to page 2</Link>
            </div>
          </div>
          <div className="col-span-2">The other column</div>
        </div>
      </div>
    </section>
    <section className="min-h-screen bg-black py-30">
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <header className="mb-10">
              <h2 className="text-4xl text-white">Portfolio</h2>
              <span className="block bg-green-400 rounded-lg h-1 w-16 my-4"></span>
            </header>
          </div>

          <div className="col-span-1 flex justify-end items-center">
            <button className="w-auto h-auto bg-green-400 px-8 py-4 text-xl">
              See my portfolio
            </button>
          </div>
        </div>

        <Portfolio />

        <div className="flex justify-center my-8"></div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
