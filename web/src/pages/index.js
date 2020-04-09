import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import dengro from '../images/dengro-preview-slice.png'

import {
  Layout,
  MegaHeading,
  ProjectCard,
  // SEO
  SectionHeading,
  Social,
} from '../components'

const IndexPage = () => {
  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      <section
        id="intro"
        className="relative h-screen min-h-1024 bg-black pt-40 pb-40"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-3">
              <MegaHeading>Dan Spratling.</MegaHeading>
              <Social />
            </div>
            <div className="col-span-2 z-10">
              <SectionHeading>Introduction</SectionHeading>
              <h2 className="text-3xl text-white mb-6">
                Website developer and designer, based in the UK
              </h2>
              <div className="text-gray-600">
                <p className="pb-4">
                  I'm a Software Engineer with 5 years experience in web
                  development. I love turning beautiful designs into interactive
                  websites, with a special focus on user experience ensuring
                  websites deliver as much value as possible.
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
        <div className="py-32" />
      </section>
      <section id="projects" className="min-h-screen bg-black pt-64 pb-40">
        <div className="container mx-auto">
          <div
            className="flex flex-col flex-wrap -mx-24"
            style={{ maxHeight: 1200 }}
          >
            <div className="w-1/2 px-24 my-12">
              <header>
                <SectionHeading>Projects</SectionHeading>
                <h2 className="text-3xl text-white mb-4">
                  A selection of projects I've worked on.
                </h2>
              </header>
              <p className="mb-4 text-gray-600">
                With 5 years in agency I've worked on many large and small
                websites. Here's a few of my favourites.
              </p>
              <Link
                to="#projects"
                className="block text-lg text-white mx-4 my-8 hover:text-green-400 transition duration-200 hover:underline"
              >
                Explore more
                <FontAwesomeIcon icon={faArrowRight} className="ml-6" />
              </Link>
            </div>

            <div className="w-1/2 px-24 my-12">
              <ProjectCard
                data={{
                  title: 'Project A.',
                  categories: ['Development', 'UX'],
                  image: dengro,
                }}
              />
            </div>

            <div className="w-1/2 px-24 my-12">
              <ProjectCard
                data={{
                  title: 'Project B.',
                  categories: ['Development', 'UX'],
                  image: dengro,
                }}
              />
            </div>

            <div className="w-1/2 px-24 my-12">
              <ProjectCard
                data={{
                  title: 'Project C.',
                  categories: ['Development', 'UX'],
                  image: dengro,
                }}
              />
            </div>
          </div>

          {/* <Portfolio /> */}

          <div className="flex justify-center my-8"></div>
        </div>
      </section>
      <section
        id="blog"
        className="min-h-screen bg-black pt-40 pb-40"
      ></section>
      <section
        id="contact"
        className="min-h-screen bg-black pt-40 pb-40"
      ></section>
    </Layout>
  )
}

export default IndexPage
