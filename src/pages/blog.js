import React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout/Layout'
import Link from '../components/Link'
import VisibilitySensor from '../components/VisibilitySensor'
import RichText from '../components/RichText'

const ProjectPage = ({ data }) => {
  //Get the page sections from the graphql data
  const seo = data.contentfulPage.seo
  const { heading, body, link } = data.contentfulPage.intro
  const posts = data.allContentfulPost.nodes

  return (
    <Layout {...seo} image={'/images/seo/projects.png'}>
      <section id="projects" className="min-h-screen min-w-full bg-black py-32">
        <div className="container mx-auto">
          <VisibilitySensor className="pb-6" direction="bottom" fade>
            <h2 className="text-2xl md:text-3xl text-white mb-6">{heading}</h2>

            {body && <RichText body={body} />}
            {link && (
              <Link to={link.to} className="btn btn-secondary" icon="default">
                {link.heading}
              </Link>
            )}
          </VisibilitySensor>

          <div className="flex flex-row flex-wrap w-full md:w-2/3 lg:w-full lg:-mx-6">
            {posts.map(post => (
              <div className="lg:w-1/2 lg:px-3 pb-6">
                <Link
                  to={`/blog/${post.slug}`}
                  className="block min-h-full py-6 px-6 bg-gray-900 rounded-lg text-white hover:text-green-500 transition-colors duration-200"
                >
                  <h3 className="text-xl text-white mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-500 mb-4 text-sm">
                    {post.description}
                  </p>
                  <p className="text-sm text-white">
                    {post.body.childMdx.excerpt}
                  </p>
                  <p className="pt-4 pb-2">
                    Read more{' '}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-xs ml-2"
                    />
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulPage(slug: { eq: "blog" }) {
      seo {
        title
        description
      }
      intro {
        heading: title
        body {
          json
        }
        link {
          to: link
          heading: title
        }
      }
    }
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        description
        slug
        tags
        body {
          childMdx {
            body
            excerpt(pruneLength: 240)
          }
        }
      }
    }
  }
`

export default ProjectPage
