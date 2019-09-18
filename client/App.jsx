import React, { Component, useState } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Login from './components/Login.jsx';
import NotFound from './components/NotFound.jsx'
import Main from './components/Main.jsx';

export default () => {
  const [user, setUser] = useState(undefined);
  const [organization, setOrganization] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleRedirects () {
    props.history.push()
    return <Redirect to='/login' />
  }

  return <div className="app">
    {isAuthenticated ? <Main /> : <Login /> }
  </div>
}