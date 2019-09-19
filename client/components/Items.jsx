import React from 'react';
import Item from './Item.jsx'

export default (props) => {
  return <div>
    <ul>
      {props.items.map((el, idx) => <Item key={idx} name={el.name}/>)}
    </ul>
  </div>
}