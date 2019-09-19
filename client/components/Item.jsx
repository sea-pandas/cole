import React from 'react';

export default (props) => {
  return <li>
    item: {props.name} <br />
    description: {props.description} <br />
    user: {props.username} <br />
    votes: {props.vote} <br />
  </li>
}