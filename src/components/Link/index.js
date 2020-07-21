import React from 'react'
import GatsbyLink from 'gatsby-link'
import { isBrowser } from '../../utils'

import Primary from './primary'
import Secondary from './secondary'

const styledLinks = {
  primary: Primary,
  secondary: Secondary,
}

/**
 * Default link component. Returns GatsbyLink or a based on internal/external
 * @param {Object} props
 * @param {string} props.to - href
 * @param {boolean} [props.variant] - predefined variations of links
 * @param {JSX.Element|String} props.children - content
 */

const Link = ({ to, className, children }) => {
  if (isBrowser && to.includes(window.location.hostname)) {
    return (
      <GatsbyLink to={to} className={className}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} className={className}>
      {children}
    </a>
  )
}

/**
 * Adds preset custom styling to links if variant is defined
 * @param {Object} props
 * @param {string} props.variant - variant link style if any exist
 */
const StyledLink = ({ variant, ...rest }) => {
  if (!variant) {
    return <Link {...rest} />
  }

  const LinkVariant = styledLinks[variant]
  return <LinkVariant {...rest} />
}

export default StyledLink
