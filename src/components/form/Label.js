import React from 'react'

/**
 * The label for form inputs and fields
 * @param {React.FunctionComponent<Props>} props
 * @param {String} props.label
 * @param {Boolean} props.active
 */
const Label = ({ label, active }) => {
  return (
    <label
      className={`${classes} ${active ? activeClasses : inactiveClasses}`}
      htmlFor={label}
    >
      {label}
    </label>
  )
}

const classes =
  'absolute top-0 pointer-events-none block uppercase tracking-wide py-2 mr-4 transition-all duration-500 transform'

const inactiveClasses = 'text-gray-500 translate-y-full -mt-2'
const activeClasses = 'text-gray-300 text-sm'

export default Label
