import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../../store/Context'

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const history = useHistory()
  const {firebase} =useContext(FirebaseContext)

  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
      
    }).catch((err)=>{
      alert(err)
    })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'
          />
          <br />
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password'
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>history.push('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
