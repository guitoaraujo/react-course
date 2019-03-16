import React from 'react';

export function CardHeader(props){
  const { imageUrl, name } = props;
  return(
    <div>
      <img src={ imageUrl } className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{ name ? name : 'Nome'}</h5>
      </div>
    </div>
  )
}
