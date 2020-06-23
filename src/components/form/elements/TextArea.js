import React from 'react'

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

  return (
    <div className="w-full px-3 mb-6">
      <div className="relative w-full flex justify-between py-4">
        <TextAreaLabel label={label} />
        {error && <TextAreaError label={label} />}
      </div>

      <textarea
        name={label}
        className={classList.join(' ')}
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
    className="absolute top-0 block uppercase tracking-wide text-gray-300 text-xs font-bold py-2 mr-4"
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
  'transition-inputs',
  'duration-500',
  'ease-in-out',
]

const errorClasses = ['border-red-600', 'border-l-16', 'focus:border-red-500']

export default TextArea
