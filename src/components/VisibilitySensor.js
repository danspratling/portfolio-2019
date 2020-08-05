import React from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'

/**
 * Project Feed - Wrapper component listing project cards
 * @param {Object} props
 * @param {Boolean} [props.visibility] - Animated fade in. Defaults to true.
 * @param {"top"|"right"|"bottom"|"left"} [props.direction] - Animation will occur towards the specified direction. e.g. "Fade in TO TOP"
 * @param {String} [props.className] - Custom classes for the animation wrapper
 * @param {JSX.Element|String} props.children - Contents of the animation wrapper
 */
const VisibilitySensor = ({
  visibility = true,
  direction,
  className,
  children,
}) => {
  return (
    <ReactVisibilitySensor partialVisibility={true} delayedCall={true}>
      {({ isVisible }) => {
        const classes = [
          'transition-all',
          'duration-1000',
          'overflow-visible',
          className,
          !isVisible && visibility ? 'opacity-0' : null,
          !isVisible ? getAnimationDirection(direction) : null,
        ]

        return (
          <div className={classes.join(' ') + ' ' + isVisible}>{children}</div>
        )
      }}
    </ReactVisibilitySensor>
  )
}

const getAnimationDirection = direction => {
  if (!direction) {
    return null
  }

  // negative margin 'pulls' the container in the specified direction, while the opposite padding fills out the missing space caused by the negative margin
  const mapAnimations = {
    bottom: '-mt-8 pb-8',
    top: '-mb-8 pt-8',
    right: '-ml-8 pr-8',
    left: '-mr-8 pl-8',
  }

  const margin = mapAnimations[direction.toLowerCase()]

  if (!margin) {
    return null
  }

  return margin
}

export default VisibilitySensor
