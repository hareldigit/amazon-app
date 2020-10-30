import React, { useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
function App() {
  const [{ user }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>>', authUser)
      if (authUser) {
        dispatch({ type: 'SET_USER', user: authUser })
      } else {
        dispatch({ type: 'SET_USER', user: null })
      }
    })
  }, [])

  const signOut = (e) => {
    auth.signOut().catch((error) => alert(error.message))
  }
  return (
    <div className="app">
      <Router>
        <Header user={user?.email} signOut={signOut} />
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
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
