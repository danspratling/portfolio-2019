import React from 'react'
import FieldElement from 'react-hook-form'

/**
 *
 * @param {Object} props
 * @param {string} props.label - The label for the text input
 * @param {string} props.placeholder - The placeholder for the text input
 * @param {FieldElement} props.register - react-hook-form register function which creates a reference for the input
 * @param {Object} props.error - react-hook-form error object holding the error associated with this input (if any)
 */

const TextArea = ({ label, placeholder, register, error }) => {
  const classList = error
    ? [...textareaClasses, ...errorClasses]
    : textareaClasses

  return (
    <div className="w-full px-3 mb-6">
      <div className="w-full flex justify-between">
        <TextAreaLabel label={label} />
        {error && <TextAreaError label={label} />}
      </div>

      <textarea
        name={label}
        className={classList.join(' ')}
        placeholder={placeholder}
        ref={register}
        rows="4"
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

const TextAreaLabel = ({ label }) => (
  <label
    className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2 mr-4"
    htmlFor={label}
  >
    {label}
  </label>
)

const checkArticle = char =>
  ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1

const textareaClasses = [
  'appearance-none',
  'block',
  'w-full',
  'bg-gray-800',
  'text-gray-100',
  'border',
  'border-transparent',
  'rounded',
  'py-3',
  'px-4',
  'mb-3',
  'leading-tight',
  'focus:outline-none',
  'focus:bg-gray-700',
  'focus:border-gray-600',
  'transition-all',
  'duration-500',
  'ease-in-out',
]

const errorClasses = ['border-red-600', 'border-l-16', 'focus:border-red-500']

export default TextArea
