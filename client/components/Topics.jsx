import React from 'react';
import Topic from './Topic.jsx'

export default (props) => {
  return <div>
    <ul>
      {props.topics.map((el, idx)=><Topic key={idx} name={el.name} id={el.id} topic={props.topic} handleTopic={props.handleTopic} />)}
    </ul>
    </div>
}