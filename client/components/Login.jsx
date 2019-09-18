import React, { useState, useEffect } from 'react';
import '../assets/login.css';
import 'animate.css';

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
    return login ? 'Cole' : 'Cole'
  }
  
  function handleLogin(username, password) {
    // fetch('/login', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": /application\/json/
    //   },
    //   body: {
    //     username,
    //     password
    //   }
    // })
    // .then(res => res.json)
    // .then(res => {
    //   res
    // })
    // .catch(err => {
    //   console.log(err)
    // })
    // 
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
  <div className='header animated fadeInDown'>
    <div className='logo'>
      <p className='logo_name'>Cole</p>
    </div>
    <div className='menu'>
      <div className='menu_items'>
        <ul>
          <li>Meet the Team</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </div>
  <div className='login_wrapper'>
    <div className="login animated bounceInDown">
    {/* <div className='getLogin animated fadeInDown'>
      {getLogin()}
    </div> */}
    {/* <br></br> */}
    <input className='i1 animated fadeInLeft' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
    {/* <br></br> */}
    <input className='i2 animated fadeInRight' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
    {/* <br></br> */}
    <div className='button_wrapper'>
      <button className='btn1 animated fadeInUp' onClick={changeLogin}>Log in</button>
      <button className='btn2 animated fadeInUp' onClick={() => { login ? handleLogin(username, password) : handleSignup(username, password) }}>Sign up</button>
    </div>
    </div>
    <div className='footer'>
      <p className='footer_text'>Cole&reg; could be a registered trademark but, honestly, we're not quite there...</p>
    </div>
  </div>
  </div>
}
