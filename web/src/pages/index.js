import React from 'react'
import { Link } from 'gatsby'

import {
  Layout,
  // SEO
} from '../components'

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <h1 class="text-6xl">Dan Spratling</h1>
    {/* <h2 class="text-5xl">Developer, Designer, Writer</h2> */}
    {/* TODO: this needs improvement */}
    <p>
      I'm a Software Engineer who makes Websites and Apps. I love turning
      beautiful designs into interactive websites.
    </p>
    <button>Hire me for freelance work</button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
