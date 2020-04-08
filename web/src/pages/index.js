import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faMinus } from '@fortawesome/free-solid-svg-icons'

import {
  Layout,
  Portfolio,
  // SEO
  SectionTitle,
  Social,
} from '../components'

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}

    <section
      id="intro"
      className="min-h-screen bg-black flex items-center pt-20 pb-40"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-3">
            <h1 className="text-6xl leading-tight text-white font-semibold">
              Dan
              <br />
              Spratling.
            </h1>
            <span className="block mt-8 mb-24 w-20 h-2 bg-green-400" />
            <Social />
          </div>
          <div className="col-span-2">
            <SectionTitle>Introduction</SectionTitle>
            <h2 class="text-3xl text-white mb-6">
              Website developer and designer, based in the UK
            </h2>
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
              <Link
                to="#projects"
                className="block text-lg text-white mx-4 my-8 hover:text-green-400 transition duration-200 hover:underline"
              >
                See my work
                <FontAwesomeIcon icon={faArrowDown} className="ml-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" className="min-h-screen bg-black py-30">
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
