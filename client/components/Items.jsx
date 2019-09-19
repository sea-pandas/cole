import React from 'react';
import Item from './Item.jsx'

export default (props) => {
  console.log(props)
  return <div>
    <ul>
      {props.general.map((el, idx) => <Item key={idx} title={el.title}/>)}
    </ul>
  </div>
}