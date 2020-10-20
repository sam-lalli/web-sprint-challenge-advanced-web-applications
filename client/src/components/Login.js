import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: '',
    passwords: ''
  })

  const changeHandler = (e) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  }

  const history = useHistory()

  const login = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res)
        window.localStorage.setItem('token', res.data.payload)
        history.push('/protected')
      })
      .catch(err => console.log(err))
  }


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <br></br>
      <form onSubmit={login}>
        <label>Username</label>
        <br></br>
        <input 
        type='text'
        name='username'
        value={credentials.username}
        onChange={changeHandler}
        />

        <label>Password</label>
        <br></br>
        <input 
        type='password'
        name='password'
        value={credentials.password}
        onChange={changeHandler}
        />
        <br></br>
        <button>Log In</button>
        
      </form>
    </>
  );
};

export default Login;
