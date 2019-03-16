import React from 'react'

export function InputField({ placeholder, value, onInputChange }) {
  return (
    <div>
      <input placeholder={ placeholder } value={ value } onChange={ ({ target: { value  } }) => onInputChange(value) }/>
    </div>
  )
}
