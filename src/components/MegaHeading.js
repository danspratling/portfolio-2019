import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const MegaHeading = ({ children }) => {
  return (
    <VisibilitySensor partialVisibility={true} delayedCall={true}>
      {({ isVisible }) => {
        const classes = isVisible
          ? defaultClasses
          : [...defaultClasses, ...invisibleClasses]
        return <h1 className={classes.join(' ')}>{children}</h1>
      }}
    </VisibilitySensor>
  )
}

const defaultClasses = [
  'md:absolute',
  'left-0',
  'bottom-0',
  'pb-10',
  'md:pb-20',
  'text-6xl',
  'md:text-7xl',
  'lg:text-8xl',
  'xl:text-9xl',
  'leading-squish',
  'text-green-400',
  'font-medium',
  'max-w-full',
  'overflow-visible',
  'transition-fade',
  'duration-1000',
]

const invisibleClasses = ['opacity-0', '-ml-32']

export default MegaHeading
