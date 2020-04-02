import React from 'react'
import FieldElement from 'react-hook-form'

/**
 * @param {Object} props
 * @param {string} props.label - The label for the text input
 * @param {string} props.width - The desktop width of the input
 * @param {string[]} props.items - The values of the list
 * @param {FieldElement} props.register - react-hook-form register function which creates a reference for the input
 * @param {Object} props.error - react-hook-form error object holding the error associated with this input (if any)
 */

const Select = ({ label, width, items, register, error }) => {
  const classList = error ? [...selectClasses, ...errorClasses] : selectClasses

  return (
    <div className={`w-full md:${width} px-3 mb-6`}>
      <div className="w-full flex justify-between">
        <SelectLabel label={label} />
        {error && <SelectError label={label} />}
      </div>

      <div className="relative">
        <select name={label} className={classList.join(' ')} ref={register}>
          {items.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <ChevronDown />
      </div>
    </div>
  )
}

const SelectLabel = ({ label }) => (
  <label
    className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
    htmlFor={label}
  >
    {label}
  </label>
)

const SelectError = ({ label }) => (
  <p className="text-red-500 text-xs italic">
    {`Select ${checkArticle(label[0]) ? 'an' : 'a'} ${label.toLowerCase()}`}
  </p>
)

const ChevronDown = () => (
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
    <svg
      className="fill-current h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  </div>
)

const checkArticle = char =>
  ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1

const selectClasses = [
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

export default Select
