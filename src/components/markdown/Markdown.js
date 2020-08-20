import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import { Info, Warn, Star } from './Shortcodes'

const Markdown = ({ className, children }) => {
  return (
    <div className={`markdown ${className}`}>
      <MDXProvider components={{ Info, Warn, Star }}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Markdown
