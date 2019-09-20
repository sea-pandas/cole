import React from 'react';

export default (props) => {
  if(props.topic === props.id) return <li><strong> {props.name} </strong></li>
  return <li onClick={() => { props.handleTopic(props.id) }}>
    {props.name}
  </li>
}