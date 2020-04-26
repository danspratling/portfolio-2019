import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import {
  Layout,
  SEO,
  Link,
  ProgressStep,
  // Quote,
} from '../components'

const ProjectTemplate = ({ data }) => {
  //Get the page sections from the graphql data
  const {
    title,
    body,
    link,
    industries,
    skills,
    tools,
    process,
  } = data.contentfulProject

  return (
    <Layout>
      <SEO
        title={`${title} Project - Dan Spratling's projects`}
        description={`See my impact on ${title}, the tools and skills required for the build and the outcome`}
      />

      <section
        id="projects"
        className="min-h-screen min-w-full bg-black px-6 py-32"
      >
        {/* <div className="-mx-12 pt-20 mb-20 bg-gray-900 border-b-2 border-green-400">
          <Image
            fluid={[
              mobileImage.fluid,
              { ...desktopImage.fluid, media: `(min-width: 768px)` },
            ]}
            className="w-full min-w-768"
          />
        </div> */}

        <div className="container mx-auto">
          <div className="w-full md:w-4/5 flex flex-row flex-wrap items-center text-white mx-auto mb-32">
            <div className="w-full md:w-1/2 lg:px-6">
              <h1 className="text-5xl text-bold text-green-400">{title}</h1>

              <div className="pt-4 pb-8 text-lg text-gray-300">
                <p>{body.body}</p>
              </div>

              <Link to={link.link}>{link.title}</Link>
            </div>
            <div className="w-full md:w-1/2 lg:px-6">IMAGE GALLERY</div>
          </div>

          <div className="grid md:grid-cols-3 gap-1 items-stretch text-white my-20">
            <div className="px-8 py-12 text-center bg-gray-900">
              <p className="text-xl pb-2">Industries</p>
              <p className="text-gray-500">
                {industries.map(industry => industry.title).join(', ')}
              </p>
            </div>
            <div className="px-8 py-12 text-center bg-gray-900">
              <p className="text-xl pb-2">Skills</p>
              <p className="text-gray-500">
                {skills.map(skill => skill.title).join(', ')}
              </p>
            </div>
            <div className="px-8 py-12 text-center bg-gray-900">
              <p className="text-xl pb-2">Tools</p>
              <p className="text-gray-500">
                {tools.map(tool => tool.title).join(', ')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-1 items-center text-white my-20">
            {process.map(stage => (
              <ProgressStep {...stage} />
            ))}
          </div>

          {/* <div className="md:w-2/3 m-auto">
            <Quote />
          </div> */}
        </div>
      </section>
    </Layout>
  )
}

//Gets date in locale format
const getDate = (date, locale) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query getProject($id: String!) {
    contentfulProject(contentful_id: { eq: $id }) {
      title
      body {
        body
      }
      link {
        title
        link
      }
      industries {
        title
      }
      skills {
        title
      }
      tools {
        title
      }
      process {
        title
        description
        duration
        type
      }
    }
  }
`

export default ProjectTemplate
