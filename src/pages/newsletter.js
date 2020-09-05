import React, { useState } from 'react'
import { graphql } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Layout from '../components/layout/Layout'
import Newsletter from '../components/sections/Newsletter'

const NewsletterPage = ({ data }) => {
  const { title, description, body } = data.contentfulNewsletterPage

  const [formSubmitted, setFormSubmitted] = useState(false)

  const onSubmit = data => {
    /* Newsletter */
    addToMailchimp(data.email, {
      FNAME: data['first-name'],
    })
      .then(result => {
        setFormSubmitted(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Layout
      title={title}
      description={description}
      image={'/images/seo/newsletter.png'}
    >
      <Newsletter
        heading={title}
        body={body}
        submitted={formSubmitted}
        onSubmit={onSubmit}
      />
    </Layout>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    contentfulNewsletterPage {
      title
      description
      body {
        childMdx {
          body
        }
      }
    }
  }
`

export default NewsletterPage
