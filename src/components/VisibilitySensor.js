import React, { useState, useEffect } from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'

/**
 * Visibility sensor - Wrapper component adding animations when elements become visible.
 * Extends React Visibility Sensor - https://github.com/joshwnj/react-visibility-sensor
 * @param {React.FunctionComponent<Props>} props
 * @param {Boolean} [props.fade] - Animated fade in. Defaults to false (always visible).
 * @param {"top"|"right"|"bottom"|"left"} [props.direction] - Animation will occur towards the specified direction. e.g. "Fade in TO TOP"
 * @param {String} [props.className] - Custom classes for the animation wrapper
 * @param {JSX.Element|String} props.children - Contents of the animation wrapper
 */
const VisibilitySensor = ({
  fade,
  direction,
  className,
  children,
  ...props
}) => {
  /* Initialise default props, unless overwritten from component props */
  const defaultProps = {
    partialVisibility: true,
    delayedCall: true,
  }
  props = { ...defaultProps, ...props }

  const [pageReady, setPageReady] = useState(false)

  useEffect(() => {
    setPageReady(true)
  }, [])

  return (
    <ReactVisibilitySensor {...props}>
      {({ isVisible }) => {
        const classes = [
          pageReady ? 'transition-all duration-1000 overflow-visible' : null,
          !isVisible && fade ? 'opacity-0' : null,
          !isVisible ? getAnimationDirection(direction) : null,
          className || null,
        ]

        return <div className={classes.join(' ')}>{children}</div>
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
    bottom: '-mt-12 pb-12',
    top: '-mb-12 mt-12',
    right: '-ml-12 mr-12',
    left: '-mr-12 ml-12',
  }

  const margin = mapAnimations[direction.toLowerCase()]

  if (!margin) {
    return null
  }

  return margin
}

export default VisibilitySensor
