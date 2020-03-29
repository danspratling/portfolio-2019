import React, { useState } from 'react'

/**
 * @param {Object} props
 * @param {string} props.label - The label for the text input
 * @param {string} props.placeholder - The placeholder for the text input
 * @param {string} props.width - The desktop width of the input
 */

const InputText = ({ label, placeholder, width }) => {
  //we only want to display errors when the user has edited the field at least once
  const [edited, setEdited] = useState(false)
  const [value, setValue] = useState('')

  const checkArticle = char =>
    ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1

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
      <input
        className={inputClasses.join(' ')}
        id={`grid-${label}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => handleChange(e.target.value)}
      />
      {edited & !value ? (
        <p class="text-red-500 text-xs italic">
          {`Please add ${
            checkArticle(label[0]) ? 'an' : 'a'
          } ${label.toLowerCase()}`}
        </p>
      ) : null}
    </div>
  )
}

export default InputText
