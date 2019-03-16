import React from 'react';

export function CardBody(props){
  const { phone, email } = props;
  return(
    <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{ phone ? phone : 'Phone' }</li>
        <li className="list-group-item">{ email ? email : 'Email' }</li>
      </ul>
    </div>
  )
}
