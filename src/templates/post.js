import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Markdown from '../components/markdown/Markdown'
import Newsletter from '../components/sections/Newsletter'

import Layout from '../components/layout/Layout'

/**
 * Blog post for article content
 * @param {Object} param
 * @param {Object} param.contentfulPost
 * @param {String} param.contentfulPost.title
 * @param {String} param.contentfulPost.description
 * @param {Function} param.contentfulPost.body
 * @param {Object} param.pageContext
 * @param {String} param.pageContext.seoImage
 */
const Post = ({ data, pageContext }) => {
  //Get the page sections from the graphql data
  const { title, description, body } = data.contentfulPost
  const { newsletterTitle, newsletterBody } = data.contentfulBlogFeed
  const { seoImage } = pageContext

  return (
    <Layout title={title} description={description} image={seoImage} article>
      <BlogHero
        title={title}
        description={description}
        author={{ name: 'Dan Spratling', image: data.avatar.childImageSharp }}
        timeToRead={body.childMdx.timeToRead}
      />

      <BlogArticle markdown={body.childMdx.body} />

      <Newsletter heading={newsletterTitle} body={newsletterBody} />
    </Layout>
  )
}

/**
 * Hero section for article
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.description
 * @param {Object} props.author
 * @param {String} props.author.name
 * @param {String} props.author.image
 * @param {Number} props.timeToRead
 */
const BlogHero = ({ title, description, author, timeToRead }) => {
  return (
    <section className="pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col flex-wrap">
          <div className="w-full lg:w-2/3 mx-auto text-center">
            <h1 className="text-4xl text-center mb-4 text-white">{title}</h1>
            <h2 className="mb-10">{description}</h2>
            <div className="flex items-center justify-center text-left">
              <Image fixed={author.image.fixed} className="rounded-full mr-4" />
              <p className>
                by {author.name}
                <br />
                {timeToRead} min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Main content of the article
 * @param {Object} props
 * @param {String} props.markdown
 */
const BlogArticle = ({ markdown }) => {
  return (
    <section className="min-h-screen py-32">
      <div className="container mx-auto">
        <div className="flex flex-col flex-wrap text-white">
          <article className="w-full lg:w-1/2 mx-auto">
            <Markdown>{markdown}</Markdown>
          </article>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query getPost($id: String!) {
    contentfulBlogFeed {
      newsletterTitle
      newsletterBody {
        childMdx {
          body
        }
      }
    }
    contentfulPost(contentful_id: { eq: $id }) {
      title
      description
      tags
      body {
        childMdx {
          body
          timeToRead
        }
      }
    }
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Post
