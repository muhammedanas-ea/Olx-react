import React from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useState, useContext} from 'react';
import {FirebaseContext} from '../../Store/FirebaseContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const {firebase} = useContext(FirebaseContext);
  const navigate = useNavigate()

  const loginFormControll = (e) =>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(() =>{
      navigate('/')
    }).catch((err) =>{
      alert(err.message)
    })
    
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={loginFormControll}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link  to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
