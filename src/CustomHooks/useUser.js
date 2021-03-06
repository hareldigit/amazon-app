import { useState, useEffect, useCallback } from 'react'
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase'

function useUser() {
  const [{ user }, dispatch] = useStateValue()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: 'SET_USER', user: authUser })
      } else {
        dispatch({ type: 'SET_USER', user: null })
      }
    })
  }, [])

  useEffect(() => {
    setUserName(user?.userName)
  }, [user])

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return [user, userName, handleAuthentication]
}

export default useUser
