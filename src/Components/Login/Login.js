import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt=""
          src="https://www.pinclipart.com/picdir/big/206-2061847_amazon-black-amazon-logo-png-clipart.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please See our Privacy Notice and our Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  )
}

export default Login
