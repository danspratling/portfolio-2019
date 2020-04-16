import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import VisibilitySensor from 'react-visibility-sensor'



const SectionIntro = ({ data, animation }) => {
  const animationVisibility = animation && animation.visibility
  const animationDirection = animation && animation.direction

  return (
    <VisibilitySensor partialVisibility={true} delayedCall={true}>
      {({ isVisible }) => {
        const classes = [
          'transition-all',
          'duration-700',
          !isVisible && animationVisibility ? 'opacity-0' : null,
          !isVisible ? getAnimationDirection(animationDirection) : null,
        ]

        return (
          <div className={classes.join(' ')}>
            <p className="tracking-wider text-gray-600 font-bold mb-6">
              <FontAwesomeIcon icon={faMinus} className="mr-4" />
              {data.heading}
              <FontAwesomeIcon icon={faMinus} className="ml-4" />
            </p>
            <h2 className="text-3xl text-white mb-6">{data.title}</h2>
            <div className="text-gray-600">
              <div dangerouslySetInnerHTML={{ __html: data.body }} />
              {data.link && data.link.url && data.link.title && typeof window !== 'undefined' && (
                <Link
                  to={
                    data.link.url[0] === '#'
                      ? `${window.location.pathname}/${data.link.url}`
                      : data.link.url
                  }
                  className="block text-lg text-white mx-4 mt-8 mb-6 hover:text-green-400 transition duration-200 hover:underline"
                >
                  {data.link.title}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-6"
                    style={{
                      transform: data.link.url[0] === '#' && 'rotate(90deg)',
                    }}
                  />
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

  console.log(margin)

  return margin
}

export default SectionIntro
