import React from 'react';

export default (props) => {
  return <div className="organization">
    <h3>{props.name}</h3>
    <img src={props.img} alt={props.name} />
  </div>
}