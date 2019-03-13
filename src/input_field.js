import React from 'react'

export function InputField({ placeholder, onChange }) {
  return (
    <div>
      <input placeholder={ placeholder } onChange={ ({ target: { value  } }) => onChange(value) }/>
    </div>
  )
}
