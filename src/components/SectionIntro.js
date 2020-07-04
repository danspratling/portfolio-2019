import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import VisibilitySensor from 'react-visibility-sensor'

import { RichText } from '../components'

/**
 * Short intro paragraph with call to action
 * @param {Object} props
 * @param {Object} props.data
 * @param {string} props.data.heading - pre-heading
 * @param {string} props.data.title - descriptive heading for the page section
 * @param {Object} props.data.body - section content
 * @param {Object} props.data.link[] - optional call to action
 * @param {Object} props.animation[] - animation settings
 * @param {boolean} props.animation[].visibility - animates visibility if enabled
 * @param {string} props.animation[].direction - animates direction if enabled,
 */
const SectionIntro = ({ data, animation }) => {
  const { heading, title, body, link } = data
  const animationVisibility = animation && animation.visibility
  const animationDirection = animation && animation.direction

  return (
    //Visibility sensor allows animation to activate when the element is visible, in this case by updating classes
    <VisibilitySensor partialVisibility={true} delayedCall={true}>
      {({ isVisible }) => {
        //adaptive classes based on visibility
        const classes = [
          'text-gray-300',
          'transition-all',
          'duration-700',
          !isVisible && animationVisibility ? 'opacity-0' : null,
          !isVisible ? getAnimationDirection(animationDirection) : null,
        ]

        //Render the SectionIntro
        return (
          <div className={classes.join(' ')}>
            <SectionPreHeading>{heading}</SectionPreHeading>
            <h2 className="text-2xl md:text-3xl text-white mb-6">{title}</h2>
            <div className="text-gray-600">
              {body && <RichText body={body} />}
              <SectionLink {...link} />
            </div>
          </div>
        )
      }}
    </VisibilitySensor>
  )
}

/**
 * The pre-heading
 * @param {Object} props
 * @param {string} props.children
 */
const SectionPreHeading = ({ children }) => (
  <p className="tracking-wider text-gray-600 font-bold mb-6">
    <FontAwesomeIcon icon={faMinus} className="mr-4" />
    {children}
    <FontAwesomeIcon icon={faMinus} className="ml-4" />
  </p>
)

/**
 * A secondary link component, never expectes external links but can accept hashes (same page links)
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.link
 */
const SectionLink = ({ title, link }) => {
  if (!title || !link) {
    return null
  }

  if (typeof window === 'undefined') {
    return null
  }

  const linkStyle = { transform: link[0] === '#' && 'rotate(90deg)' }
  const getLink = link[0] === '#' ? `${window.location.pathname}${link}` : link

  const classes =
    'block mx-4 mt-8 mb-6 text-lg text-white text-center md:text-left leading-loose hover:text-green-400 transition duration-200 hover:underline'

  if (getLink.includes(window.location.hostname)) {
    return (
      <Link to={getLink} className={classes}>
        {title}
        <FontAwesomeIcon
          icon={faArrowRight}
          className="ml-6 mr-6"
          style={linkStyle}
        />
      </Link>
    )
  }

  return (
    <a href={getLink} className={classes}>
      {title}
      <FontAwesomeIcon
        icon={faArrowRight}
        className="ml-6 mr-6"
        style={linkStyle}
      />
    </a>
  )
}

/**
 * returns classes controlling animation directions
 * @param {string} direction - a directional indicator defining to/from and a direction. eg: 'to top' or 'from left'
 */
const getAnimationDirection = direction => {
  if (!direction) {
    return null
  }

  // negative margin 'pulls' the container in the specified direction, while the opposite padding fills out the missing space caused by the negative margin
  const mapAnimations = {
    'from top': '-mt-8 pb-8',
    'from bottom': '-mb-8 pt-8',
    'from left': '-ml-8 pr-8',
    'from right': '-mr-8 pl-8',
    'to bottom': '-mt-8 pb-8',
    'to top': '-mb-8 pt-8',
    'to right': '-ml-8 pr-8',
    'to left': '-mr-8 pl-8',
  }

  const margin = mapAnimations[direction.toLowerCase()]

  if (!margin) {
    return null
  }

  return margin
}

export default SectionIntro
