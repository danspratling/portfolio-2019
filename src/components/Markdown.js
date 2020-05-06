import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import '../scss/markdown.scss'

import { Info, Warn, Star } from '../components/shortcodes'
const shortcodes = { Info, Warn, Star }

const Markdown = ({ children }) => {
  return (
    <div className="markdown">
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Markdown
