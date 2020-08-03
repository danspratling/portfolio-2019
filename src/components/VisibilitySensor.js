import React from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'

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

export default VisibilitySensor
