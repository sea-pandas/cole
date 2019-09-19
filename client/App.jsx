import React, { Component, useState } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './assets/login.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

export default () => {
  const db = [
    {
      id: 1,
      name: 'general',
      items: [
        { id: 1, name: 'kick' },
        { id: 2, name: 'ball'}
      ]
    },
    {
      id: 2,
      name: 'maintainence',
      items: [
        { id: 3, name: 'fix toilet' },
        { id: 4, name: 'fix sink' }
      ]
    },
    {
      id: 3,
      name: 'grocery',
      items: []
    }
  ]

  const dbTopics = [
    {
      id: 1,
      org_id: 1,
      name: 'general',
      description: 'Codesmith general stuff'
    },
    {
      id: 2,
      org_id: 1,
      name: 'maintainence',
      description: 'Codesmith maintaining stuff'
    },
    {
      id: 3,
      org_id: 1,
      name: 'grocery',
      description: 'Codesmith shopping stuff'
    }
  ]

  const one = [
    {
      id: 2,
      name: 'kick ball',
      description: `it's nice outside`,
      topics_id: 1,
      username: 'username1'
    },
    {
      id: 3,
      name: 'drinks',
      description: `it's nice inside`,
      topics_id: 1,
      username: 'username2'
    }
  ]
  const [user, setUser] = useState({id: 1, username: 'username1'});
  const [organization, setOrganization] = useState({id: 1});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [topics, setTopics] = useState(dbTopics);
  const [topic, setTopic] = useState(1);
  const [items, setItems] = useState(one);

  const addItem = (name, description, topic_id, user_id) => {
    // fetch('/items', {
      // method: 'POST',
      // headers: {
        // 'Content-Type': /application\/json/
      // },
      // body: {
        // name,
        // description,
        // topic_id,
        // user_id
      // }
    // })
    // .then(res => res.json())
    // .then(res => {
      // items.push(res[0]);
      // setItems(items);
    // })
  }

  const handleTopic = (topics_id) => {
    setTopic(topics_id);

    // for fetching and updating items with new stuff

    fetch('/items', {
      method: 'GET',
      headers: {
        'Content-Type': /application\/json/
      },
      body: {
        topics_id
      }
    })
    .then(res => res.json())
    .then(res => setItems(res))
    .catch(e=>console.log(e))
  }

  

  return <div className="app">
    <Header
    user={user}
    isAuthenticated={isAuthenticated}
    />
    <Main
    user={user}
    items={items}
    topics={topics}
    topic={topic}
    handleTopic={handleTopic}
    addItem={addItem}
    />
  </div>
}