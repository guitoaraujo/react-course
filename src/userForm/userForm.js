import React from 'react';

import { InputField } from '../inputs';

export function UserForm(props) {
  const { handleInput, name, phone, email } = props
  return (
    <div>
      <InputField placeholder="Name"  value={ name } onInputChange={ value => handleInput('name', value) } /><br/>
      <InputField placeholder="Phone" value={ phone } onInputChange={ value => handleInput('phone', value) } /><br/>
      <InputField placeholder="Email" value={ email } onInputChange={ value => handleInput('email', value) } /><br/>
      <InputField placeholder="URL"   onInputChange={ value => handleInput('imageUrl', value) } /><br/>
    </div>
  )
}
