import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

function UserProvider({ children }) {
  const localStorageUser = JSON.parse(localStorage.getItem('user-id'))
  const [user, setUser] = useState(false)

  useEffect(() => {
    if (localStorageUser) {
      getUserById(localStorageUser).then((user) => setUser(user))
    } else {
      setUser(null)
    }
  }, [localStorageUser])

  const getUserById = (id) => {
    const options = { method: 'GET' }

    return fetch(`http://localhost:3001/users/${id}`, options).then((response) => response.json())
  }

  const getUsers = () => {
    const options = { method: 'GET' }

    return fetch('http://localhost:3001/users', options).then((response) => response.json())
  }

  const signUp = (user) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }

    return fetch('http://localhost:3001/auth/register', options).then((response) => response.json())
  }

  const signIn = (user) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }

    return fetch('http://localhost:3001/auth/login', options).then((response) => response.json())
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('user-id')
  }

  const setLocalStorageUser = (id) => {
    localStorage.setItem('user-id', JSON.stringify(id))
  }

  const values = { user, setUser, signUp, signIn, getUsers, signOut, setLocalStorageUser }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserProvider
