import React from 'react';

import { Card } from './card';

export function Preview(props) {
  return (
    <div>
      <Card  { ...props }/>
    </div>
  )
}
