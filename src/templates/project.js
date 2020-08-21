import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faIndustry,
  faMapMarkerAlt,
  faLink,
  faPoll,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/layout/Layout'
import Markdown from '../components/markdown/Markdown'
import CallToAction from '../components/sections/CallToAction'
import VisibilitySensor from '../components/VisibilitySensor'

const ProjectTemplate = ({ data, pageContext }) => {
  const { seoImage } = pageContext
  const contact = data.contact
  const {
    heading,
    body,
    testimonial,
    featuredImage,
    artboardDesktop,
    artboardMobile,
    url,
    industries,
    location,
    results,
  } = data.project

  return (
    <Layout
      title={`${heading} Project - Dan Spratling's projects`}
      description={`See my impact on ${heading}, the tools and skills required for the build and the outcome`}
      imagePath={seoImage}
    >
      <section id="intro" className="pt-12 md:py-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-white -mx-6 md:mb-8 items-center">
            <VisibilitySensor
              className="w-full lg:w-2/5 my-8 px-6 md:pr-12"
              direction="right"
              fade
            >
              <h1 className="text-3xl text-bold text-green-500 mb-4">
                {heading}
              </h1>
              <p className="text-5xl lg:text-6xl leading-tight">
                {testimonial.quote}
              </p>
            </VisibilitySensor>

            <VisibilitySensor
              className="w-full lg:w-3/5 md:p-10 bg-gray-900 p-6"
              direction="left"
              fade
            >
              <Image fluid={featuredImage.fluid} className="rounded-md" />
            </VisibilitySensor>
          </div>
        </div>
      </section>

      <section id="case-study" className="mb-40">
        <div className="container mx-auto">
          <VisibilitySensor
            className="grid md:grid-cols-3 md:gap-10 lg:gap-20 items-start"
            direction="top"
            fade
          >
            <ul className="bg-gray-900 md:max-w-300 -mx-6 md:mx-0 py-3 mb-10">
              <DetailListItem
                title="Company"
                description={heading}
                icon={faBuilding}
              />
              <DetailListItem
                title="Industry"
                description={industries[0].title}
                icon={faIndustry}
              />
              <DetailListItem
                title="Location"
                description={location}
                icon={faMapMarkerAlt}
              />
              <DetailListItem
                title="Website"
                description={
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <span className="pr-2">Visit site</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                }
                icon={faLink}
              />
              <DetailListItem
                title="Results"
                description={results.childMdx.body}
                icon={faPoll}
                markdown
              />
            </ul>

            <div className="md:col-span-2" direction="top" fade>
              <div className="w-full md:w-3/4 lg:my-0">
                <Markdown className="pt-4 pb-8 text-gray-300">
                  {body.childMdx.body}
                </Markdown>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </section>

      {artboardDesktop && artboardMobile && (
        <section id="artboard" className="w-full">
          {/* <h1 className="text-4xl text-green-500">This is some test text</h1> */}
          <Image
            fluid={[
              artboardMobile.fluid,
              {
                ...artboardDesktop.fluid,
                media: `(min-width: 768px)`,
              },
            ]}
          />
        </section>
      )}

      <CallToAction
        heading={contact.heading}
        body={contact.body}
        link={contact.link}
        promoCards={contact.promoCards}
      />
    </Layout>
  )
}

const DetailListItem = ({ title, description, icon, markdown = false }) => {
  return (
    <li className="flex items-baseline -mx-2 py-6 px-6">
      <div className="flex-0 mx-2">
        <FontAwesomeIcon icon={icon} className="text-lg" />
      </div>
      <div className="flex-0 mx-2">
        <p className="font-bold leading-loose">{title}</p>
        {markdown ? (
          <Markdown className="text-sm text-gray-300">{description}</Markdown>
        ) : (
          <p className="text-sm text-gray-300">{description}</p>
        )}
      </div>
    </li>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query getProject($id: String!) {
    project: contentfulProject(contentful_id: { eq: $id }) {
      heading: title
      body {
        childMdx {
          body
        }
      }
      testimonial: quote {
        quote
      }
      featuredImage {
        fluid(maxWidth: 1140) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      artboardDesktop: previewImage {
        fluid(maxWidth: 2560, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      artboardMobile: previewImage {
        fluid(maxWidth: 600, maxHeight: 500, quality: 75) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      url
      industries {
        title
      }
      location
      results {
        childMdx {
          body
        }
      }
    }
    contact: contentfulUpsell(contentful_id: { eq: "4mHctjQb5jro7JZqzfIeax" }) {
      promoCards: cards {
        heading: title
        body
        icon
      }
      heading: title
      body {
        childMdx {
          body
        }
      }
      link {
        heading: title
        to: link
      }
    }
  }
`

export default ProjectTemplate
