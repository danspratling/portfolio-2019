import React, { useState } from 'react'
import { useFormContext, ErrorMessage } from 'react-hook-form'
import Label from './Label'

/**
 * The form textarea, designed to be able to stretch to your needs. Note that the label and error may collide
 * on smaller widths (suggested smaller sizes are reserved for non-required fields)
 * @param {React.FunctionComponent<Props>} props
 * @param {String} props.name
 * @param {Boolean} [props.required]
 */

const TextArea = ({ label, required = false }) => {
  const { register, errors } = useFormContext()

  const error = errors[hyphenate(label)]
  const [empty, setEmpty] = useState(true)
  const [focus, setFocus] = useState(false)

  const classList = error ? [...classes, ...errorClasses] : classes

  const active = !empty || error || focus

  return (
    <div className={`flex-1 w-full`}>
      <div className="relative w-full flex justify-between py-4">
        <Label label={label} active={active} />
      </div>

      <textarea
        name={hyphenate(label)}
        className={classList.join(' ')}
        rows="4"
        ref={register({ required: required })}
        onChange={e => setEmpty(!e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />

      <p className="text-red-500 text-xs italic mb-0">
        <ErrorMessage
          name={hyphenate(label)}
          message={`${label} is required`}
        />
      </p>
    </div>
  )
}

const hyphenate = string => string.toLowerCase().replace(' ', '-')

const classes = [
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
  'focus:border-white',
  'transition-all',
  'duration-500',
  'ease-in-out',
]

const errorClasses = ['border-red-600']

export default TextArea
