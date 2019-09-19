import React from 'react'
import Topics from './Topics.jsx'
import Items from './Items.jsx'


export default (props) => {
  return <div>
    <Topics />
    <Items {...props}/>
  </div>
}