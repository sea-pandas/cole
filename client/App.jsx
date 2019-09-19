import React, { Component, useState } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './assets/login.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

export default () => {
  const [user, setUser] = useState(undefined);
  const [organization, setOrganization] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [general, setGeneral] = useState([{title: 'nice'}]);
  const [maintainence, setMaintainence] = useState([]);
  const [grocery, setGrocery] = useState([]);
  // const [activeTab, setActiveTab] = uesState();

  // const addToGeneral = (title, description, username) => {
  //   // item will be a string
  //   const newState = [...grocery, {title}];
  //   setGeneral(newState);
  // }

  const addToTopic = (topic, setTopic, title, description, username) => {
    // item will be a string
    const newState = [...topic, {title}];
    setTopic(newState);
  }

  return <div className="app">
    <Header />
    <Main 
    general={general}
    setGeneral={setGeneral}
    addToTopic={addToTopic}
    />
  </div>
}