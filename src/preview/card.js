import React from 'react';

import { CardHeader } from './cardHeader';
import { CardBody } from './cardBody';

export function Card(props) {
  const { name, phone, email, imageUrl } = props;
  return (
      <div className="card" style={{ width: '18rem' }}>
        <CardHeader imageUrl={ imageUrl } name={ name }/>
        <CardBody phone={ phone } email={ email }/>        
      </div>
  )
}
