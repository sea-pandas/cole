import React, { useState, useEffect } from 'react';

export default () => {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function changeLogin() {
    setLogin(!login);
  }

  useEffect(() => {
    getLogin()
  }, [login])

  function getLogin(login) {
    return login ? 'Login' : 'Signup'
  }
  
  function handleLogin(username, password) {
    fetch('/login', {
      method: 'POST',
      headers: {
        "Content-Type": /application\/json/
      },
      body: {
        username,
        password
      }
    })
    .then(res => res.json)
    .then(res => {
      res
    })
    .catch(err => {
      console.log(err)
    })
  }

  function handleSignup (username, password) {
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        "Content-Type": /application\/json/
      },
      body: {
        username,
        password
      }
    })
    .then(res => res.json)
    .catch(err => console.log(err))
  }


  return <div className="login">
    {getLogin()}
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
    <button onClick={changeLogin}>signup</button>
    <button onClick={() => { login ? handleLogin(username, password) : handleSignup(username, password) }}>{getLogin()}</button>
  </div>
}
