import React from 'react'
import { Link } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
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
            <p className="tracking-wider text-gray-600 font-bold mb-6">
              {heading}
            </p>
            <h2 className="text-2xl md:text-3xl text-white mb-6">{title}</h2>
            <div className="text-gray-600">
              {body && <RichText body={body} />}
              {link && (
                <Link to={link.link} variant="secondary">
                  {link.title}
                </Link>
              )}
            </div>
          </div>
        )
      }}
    </VisibilitySensor>
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
