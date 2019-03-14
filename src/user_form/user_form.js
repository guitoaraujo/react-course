import React from 'react'

import { InputField } from '../inputs';

export function UserForm(props) {
  const { handleInput, name, phone, email, image_url } = props
  return (
    <div>
      <InputField placeholder="Name"  value={ name } handleInputTwo={ value => handleInput('name', value) } /><br/>
      <InputField placeholder="Phone" value={ phone } handleInputTwo={ value => handleInput('phone', value) } /><br/>
      <InputField placeholder="Email" value={ email } handleInputTwo={ value => handleInput('email', value) } /><br/>
      <InputField placeholder="URL"   value={ image_url } handleInputTwo={ value => handleInput('image_url', value) } /><br/>
    </div>
  )
}
