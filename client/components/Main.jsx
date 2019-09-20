import React from 'react'
import Topics from './Topics.jsx'
import Items from './Items.jsx'
import AddItem from './AddItem.jsx'


export default (props) => {
  return <div>
    <Topics {...props} />
    <AddItem {...props} />
    <Items {...props} />
  </div>
}