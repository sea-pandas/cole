import React, { useState } from 'react';

export default () => {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function changeLogin() {
    setLogin(!login);
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
    .catch(err => console.log(err))
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


  return <div>
    {login ? <h1>Login</h1> : <h1>Sign-up</h1>}
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
    <button onClick={changeLogin}>signup</button>
    <button onClick={() => { handleLogin(username, password) }}>login</button>
  </div>
}
