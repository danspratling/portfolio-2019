import React, { useState } from 'react'

/**
 * @param {Object} props
 * @param {string} props.label - The label for the text input
 * @param {string} props.placeholder - The placeholder for the text input
 * @param {string} props.width - The desktop width of the input
 * @param {string[]} props.items - The values of the list
 */

const Select = ({ label, width, items }) => {
  //we only want to display errors when the user has edited the field at least once
  const [edited, setEdited] = useState(false)
  const [value, setValue] = useState('')

  const handleChange = value => {
    setEdited(true)
    setValue(value)
  }

  const inputClasses = [
    'appearance-none',
    'block',
    'w-full',
    'bg-gray-800',
    'text-gray-100',
    'border',
    edited & !value ? 'border-red-500' : 'border-transparent',
    'rounded',
    'py-3',
    'px-4',
    'mb-3',
    'leading-tight',
    'focus:outline-none',
    'focus:bg-gray-700',
    'focus:border-gray-600',
  ]

  return (
    <div className={`w-full md:${width} px-3 mb-6`}>
      <label
        className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
        for={`grid-${label}`}
      >
        {label}
      </label>
      <div className="relative">
        <select
          className={inputClasses.join(' ')}
          id={`grid-${label}`}
          value={value}
          onChange={e => handleChange(e.target.value)}
        >
          {items.map(item => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {edited & !value ? (
        <p class="text-red-500 text-xs italic">Please select an option</p>
      ) : null}
    </div>
  )
}

export default Select
