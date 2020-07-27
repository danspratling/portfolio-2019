import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import { Info, Warn, Star } from '../components/shortcodes'
const shortcodes = { Info, Warn, Star }

const Markdown = ({ className, children }) => {
  return (
    <div className={`markdown ${className}`}>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Markdown
