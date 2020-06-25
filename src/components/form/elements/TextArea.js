import React, { useState } from 'react'

/**
 *
 * @param {Object} props
 * @param {string} props.label - The label for the text input
 * @param {FieldElement} props.register - react-hook-form register function which creates a reference for the input
 * @param {Object} props.error - react-hook-form error object holding the error associated with this input (if any)
 */

const TextArea = ({ label, register, error }) => {
  const classList = error
    ? [...textareaClasses, ...errorClasses]
    : textareaClasses

  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState('')

  const active = value || focus

  const handleChange = e => setValue(e.target.value)

  return (
    <div className="w-full px-3 mb-6">
      <div className="relative w-full flex justify-between py-4">
        <TextAreaLabel label={label} active={active} />
        {error && <TextAreaError label={label} />}
      </div>

      <textarea
        name={label}
        className={classList.join(' ')}
        ref={register}
        rows={4}
        onChange={handleChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}

const TextAreaError = ({ label }) => {
  return (
    <p className="text-red-500 text-xs italic">
      {`Please add ${
        checkArticle(label[0]) ? 'an' : 'a'
      } ${label.toLowerCase()}`}
    </p>
  )
}

const TextAreaLabel = ({ label, active }) => {
  const classes =
    'absolute top-0 pointer-events-none block uppercase tracking-wide py-2 mr-4 transition-all duration-500 transform'

  const inactiveClasses = 'text-gray-500 translate-y-full -mt-2'
  const activeClasses = 'text-gray-300 text-sm'

  return (
    <label
      className={`${classes} ${active ? activeClasses : inactiveClasses}`}
      htmlFor={label}
    >
      {label}
    </label>
  )
}

const checkArticle = char =>
  ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1

const textareaClasses = [
  'appearance-none',
  'block',
  'w-full',
  'bg-black',
  'text-gray-100',
  'border-b-2',
  'border-gray-700',
  'py-3',
  'px-4',
  'mb-3',
  'leading-tight',
  'focus:outline-none',
  'focus:border-green-400',
  'transition-all',
  'duration-500',
  'ease-in-out',
]

const errorClasses = ['border-red-600', 'border-l-16', 'focus:border-red-500']

export default TextArea
