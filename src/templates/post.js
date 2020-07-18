import React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO, Markdown } from '../components'
import { SignUp } from '../components/form'

const Post = ({ data, pageContext }) => {
  //Get the page sections from the graphql data
  const { title, description, tags, body } = data.contentfulPost
  const { seoImage } = pageContext

  //Analytics
  window.fathom.trackGoal('IN9ZFF9A', 0)

  return (
    <Layout>
      <SEO title={title} description={description} image={seoImage} />

      <section
        id="projects"
        className="min-h-screen min-w-full bg-black px-6 py-32"
      >
        <div className="container mx-auto">
          <div className="flex flex-col flex-wrap text-white">
            <div className="w-full lg:w-1/2 mx-auto">
              <h1 className="text-3xl text-green-400 mb-6">{title}</h1>
              <h2 className="text-lg mb-6">{description}</h2>
              <Markdown>{body.childMdx.body}</Markdown>
            </div>
          </div>
        </div>
      </section>

      {/* page section - Newsletter */}
      <section
        id="newsletter"
        className="md:min-h-320 bg-black px-6 py-12 lg:py-32"
      >
        <div className="container mx-auto">
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-3/4 mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl text-white mb-4">
                Keep up to date
              </h2>
              <p className="mb-4">
                Sign up for the newsletter to keep up with my regular blog
                posts, and get exclusive tips and tricks right in your inbox.
              </p>
            </div>
            <SignUp />
          </div>
        </div>
      </section>
    </Layout>
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
  query getPost($id: String!) {
    contentfulPost(contentful_id: { eq: $id }) {
      title
      description
      tags
      body {
        childMdx {
          body
        }
      }
    }
  }
`

export default Post
