import React from 'react'
import { Link, graphql } from 'gatsby'

import { Layout, SectionIntro, SEO } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ProjectPage = ({ data }) => {
  //Get the page sections from the graphql data
  const seo = data.contentfulPage.seo
  const pageIntro = data.contentfulPage.intro
  const posts = data.allContentfulPost.nodes

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={'/images/seo/projects.png'}
      />

      <section
        id="projects"
        className="min-h-screen min-w-full bg-black px-6 py-32"
      >
        <div className="container mx-auto">
          <div className="pb-6">
            <SectionIntro
              data={pageIntro}
              animation={{ visibility: true, direction: 'from top' }}
            />
          </div>

          <div className="flex flex-row flex-wrap lg:-mx-6">
            {posts.map(post => (
              <div className="lg:w-1/2 lg:px-3 pb-6">
                <Link
                  to={`/blog/${post.slug}`}
                  className="block min-h-full py-6 px-6 bg-gray-900 rounded-lg text-white hover:text-green-400 transition-colors duration-200"
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
        heading
        title
        body {
          json
        }
        link {
          link
          title
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
