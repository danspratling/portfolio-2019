import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import { Info, Warn, Star } from './Shortcodes'

/**
 * A wrapper for markdown content which converts it to MDX, and adds in any markdown components as shortcodes
 * @param {React.FunctionComponent<Props>} props
 * @param {String} props.className
 * @param {Function} props.children
 */
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
