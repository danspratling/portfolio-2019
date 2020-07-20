import React from './node_modules/react'
import GatsbyLink from './node_modules/gatsby-link'
import { isBrowser } from '../../utils'

import Primary from './primary'
import Secondary from './secondary'

const linkVariants = {
  primary: Primary,
  secondary: Secondary,
}

/**
 * @param {Object} props
 * @param {string} props.variant - variant link style if any exist
 */
const Variant = ({ variant, ...rest }) => {
  if (!variant) {
    return <span {...rest} />
  }

  const Wrapper = linkVariants[variant]
  return <Wrapper {...rest} />
}

/**
 * @param {Object} props
 * @param {string} props.to - href
 * @param {boolean} [props.variant] - predefined variations of links
 * @param {string} [props.className] - custom classes
 * @param {JSX.Element|String} props.children - content
 */

const Link = ({ to, variant, className, children }) => {
  const classes = `block ${className}`.trim()
  const isHashLink = to[0] === '#'
  console.log(isHashLink)

  if (isBrowser && to.includes(window.location.hostname)) {
    return (
      <GatsbyLink to={to} className={classes}>
        <Variant variant={variant} isHashLink={isHashLink}>
          {children}
        </Variant>
      </GatsbyLink>
    )
  }

  return (
    <a href={to} className={classes}>
      <Variant variant={variant} isHashLink={isHashLink}>
        {children}
      </Variant>
    </a>
  )
}

export default Link
