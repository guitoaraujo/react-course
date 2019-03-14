import React from 'react';

export function Card(props) {
  const { name, phone, email, image_url } = props;
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={ image_url } className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{ phone }</li>
          <li className="list-group-item">{ email }</li>
        </ul>
      </div>
    </div>
  )
}
