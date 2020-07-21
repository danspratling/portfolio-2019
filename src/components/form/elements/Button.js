import React from 'react'

const Button = ({ children }) => {
  return (
    <button type="submit" className={buttonClasses.join(' ')}>
      {children}
    </button>
  )
}

export default Button

const buttonClasses = [
  'relative',
  'inline-block',
  'w-auto',
  'h-auto',
  'bg-green-500',
  'px-8',
  'py-3',
  'hover:mt-1',
  'focus:mt-1',
  'mb-1',
  'hover:mb-0',
  'focus:mb-0',
  'text-lg',
  'uppercase',
  'tracking-wider',
  'text-black',
  'rounded-sm',
  'shadow-button',
  'hover:shadow-none',
  'focus:shadow-none',
  'transition-margin',
  'duration-200',
]
