import React from 'react'
import GatsbyLink from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { isBrowser } from '../utils'

/**
 * Context aware link. Uses both Gatsby Link (Router Link) and a default <a> tag to ensure that preloading
 * is used where possible for internal links whlle not erroring in the instances where external links are passed in.
 * @param {React.FunctionComponent<Props>} props
 * @param {String} props.to - href
 * @param {"default"|IconProp} [props.icon] - Font Awesome Icon
 * @param {Boolean} [props.className] - predefined variations of links
 * @param {JSX.Element} props.children - content
 */

const Link = ({ to, icon, className, children }) => {
  if (!children || !isBrowser) {
    return null
  }

  const isHashLink = to[0] === '#'

  if (icon === 'default') {
    icon = isHashLink ? faArrowDown : faArrowRight
  }

  if (isBrowser && to.includes(window.location.hostname)) {
    return (
      <GatsbyLink to={to} className={className}>
        {children}
        {icon && <FontAwesomeIcon icon={icon} />}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} className={className}>
      {children}
      {icon && <FontAwesomeIcon icon={icon} />}
    </a>
  )
}

export default Link
