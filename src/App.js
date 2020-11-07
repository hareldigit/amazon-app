import React, { useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useUser from './CustomHooks/useUser'
import Payment from './Components/Payment/Payment'

function App() {
  const [] = useUser()
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
