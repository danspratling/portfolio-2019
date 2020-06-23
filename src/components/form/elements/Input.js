import React from 'react'

/**
 * The form input, designed to be able to stretch to your needs. Note that the label and error may collide
 * on smaller widths (suggested smaller sizes are reserved for non-required fields)
 * @param {Object} props
 * @param {string} [props.formName] - Unique ID to differentiate between forms
 * @param {string} props.label - The label for the input
 * @param {string} props.placeholder - The placeholder for the input
 * @param {string} props.type - The input type
 * @param {string} props.width - The desktop width of the input
 * @param {Function} [props.onChange] - Function handling onchange event
 * @param {FieldElement} props.register - react-hook-form register function which creates a reference for the input
 * @param {Object} props.error - react-hook-form error object holding the error associated with this input (if any)
 */

const Input = ({
  formName,
  label,
  type = 'text',
  width,
  onChange,
  register,
  error,
}) => {
  const classList = error ? [...inputClasses, ...errorClasses] : inputClasses

  return (
    <div className={`flex-1 w-full md:${width} px-3 mb-6`}>
      <div className="relative w-full flex justify-between py-4">
        <InputLabel label={label} />
        {error && <InputError label={label} />}
      </div>

      <input
        name={formName ? `${formName}-${label}` : label}
        className={classList.join(' ')}
        type={type}
        ref={register}
        onChange={onChange}
      />
    </div>
  )
}

const InputError = ({ label }) => {
  return (
    <p className="text-red-500 text-xs italic">
      {`Please add ${
        checkArticle(label[0]) ? 'an' : 'a'
      } ${label.toLowerCase()}`}
    </p>
  )
}

const InputLabel = ({ label }) => (
  <label
    className="absolute top-0 block uppercase tracking-wide text-gray-300 text-xs font-bold py-2 mr-4"
    htmlFor={label}
  >
    {label}
  </label>
)

const checkArticle = char =>
  ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1

const inputClasses = [
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

const errorClasses = [
  'border-red-600',
  'bg-red-300',
  'border-l-16',
  'focus:border-red-500',
]

export default Input
