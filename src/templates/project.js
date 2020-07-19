import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { trackPageview } from 'fathom-client'
import {
  Layout,
  SEO,
  Link,
  ProgressStep,
  // Quote,
  Lightbox,
} from '../components'

const ProjectTemplate = ({ data, pageContext }) => {
  //Get the page sections from the graphql data
  const {
    title,
    body,
    url,
    gallery,
    industries,
    skills,
    tools,
    process,
  } = data.contentfulProject
  const { seoImage } = pageContext

  const [lightboxState, setLightboxState] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = index => {
    setLightboxIndex(index)
    setLightboxState(true)
  }

  trackPageview()

  return (
    <Layout>
      <SEO
        title={`${title} Project - Dan Spratling's projects`}
        description={`See my impact on ${title}, the tools and skills required for the build and the outcome`}
        image={seoImage}
      />

      <section
        id="projects"
        className="min-h-screen min-w-full bg-black px-6 py-32"
      >
        <div className="container mx-auto">
          <div className="lg:w-5/6 mx-auto grid lg:grid-cols-2 lg:gap-20 items-center text-white mx-auto mb-32">
            <div className="w-full mb-40 lg:my-0">
              <h1 className="text-5xl text-bold text-green-400">{title}</h1>

              <div className="pt-4 pb-8 text-lg text-gray-300">
                <p>{body.body}</p>
              </div>

              {url && <Link to={url}>See the project</Link>}
            </div>
            <MasonryGallery images={gallery} openLightbox={openLightbox} />
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

          {process && (
            <div className="grid md:grid-cols-3 gap-1 items-center text-white my-20">
              {process.map((stage, index) => (
                <ProgressStep key={index} {...stage} />
              ))}
            </div>
          )}

          {/* <div className="md:w-2/3 m-auto">
            <Quote />
          </div> */}
        </div>
      </section>
      <Lightbox
        lightboxState={lightboxState}
        setLightboxState={setLightboxState}
        images={gallery}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </Layout>
  )
}

const MasonryImage = ({ image, index, openLightbox }) => {
  return (
    <button
      onClick={() => openLightbox(index)}
      onKeyDown={e => (e.keyCode === 13 ? openLightbox(index) : null)}
      className="hover:-mt-2 hover:mb-2 transition-all duration-200 cursor-pointer"
    >
      <Image
        fluid={image.fluid}
        className="mb-4 max-h-240 md:max-h-380 lg:max-h-240"
      />
    </button>
  )
}

const MasonryGallery = ({ images, openLightbox }) => {
  const firstCol = images.slice(0, 2)
  const secondCol = images.slice(2, 4)
  return (
    <div className="w-full flex flex-row justify-center lg:-mx-2">
      <div className="flex flex-col w-1/2 lg:min-w-180 mx-2">
        {firstCol.map((img, index) => (
          <MasonryImage
            key={index}
            image={img}
            index={index}
            openLightbox={openLightbox}
          />
        ))}
      </div>
      <div className="flex flex-col w-1/2 lg:min-w-180 mx-2 mt-16">
        {secondCol.map((img, index) => (
          <MasonryImage
            key={index}
            image={img}
            index={index}
            openLightbox={openLightbox}
          />
        ))}
      </div>
    </div>
  )
}

//Gets date in locale format
// const getDate = (date, locale) => {
//   return new Intl.DateTimeFormat(locale, {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   }).format(new Date(date))
// }

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query getThing($id: String!) {
    contentfulProject(contentful_id: { eq: $id }) {
      title
      body {
        body
      }
      url
      gallery {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
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
