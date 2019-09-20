import React, { useState } from 'react';

export default (props) => {
  const [value, setValue] = useState('')
  return <div className="AddItem">
    <input type="text" onChange={(e)=>{setValue(e.target.value)}} value={value} placeholder="whatchu waaant" />
    <button className="btn1" onClick={()=>{props.addItem(value, '', props.topic, props.user.id); setValue('')} } >I forgot to add text in here</button>
    </div>
}