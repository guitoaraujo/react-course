import React from 'react'

export function InputField({ placeholder, value, handleInputTwo }) {
  return (
    <div>
      <input placeholder={ placeholder } value={ value } onChange={ ({ target: { value  } }) => handleInputTwo(value) }/>
    </div>
  )
}
