import React from 'react'
import { Link } from 'gatsby'

import {
  Layout,
  // SEO
} from '../components'

const BlogPage = () => (
  <Layout>
    {/* <SEO title={seo.title} description={seo.description} /> */}

    <section className="min-h-screen bg-gray-900 pt-20 pb-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="text-2xl text-white">Recent posts</h1>
            {/* <h2 class="text-5xl">Developer, Designer, Writer</h2> */}
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
              <button>Get in touch</button>
              <Link to="/page-2/">Go to page 2</Link>
            </div>
          </div>
          <div className="col-span-1">
            {/* A column with tags and promoted links */}
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default BlogPage
