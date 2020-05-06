import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import '../scss/markdown.scss'

import { Info, Warn, Star } from '../components/shortcodes'
const shortcodes = { Info, Warn, Star }

const Markdown = ({ className, children }) => {
  const classes = ['markdown', className || null]
  return (
    <div className={classes.join(' ')}>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Markdown
