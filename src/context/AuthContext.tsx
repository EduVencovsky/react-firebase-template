import React, { useState, useEffect, useCallback, useContext, ReactNode } from 'react'
import { UserContext } from './UserContext'
import firebase from 'firebase'

interface IAuthContext {
  logout(): void,
  isAuthenticated: boolean,
  isLoading: boolean,
}

export const AuthContext = React.createContext<IAuthContext>({
  isAuthenticated: false,
  isLoading: true,
  logout: () => {}
})

interface AuthProviderProps {
  children: ReactNode,
}

export default function AuthProvider({ children } : AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { setUser } = useContext(UserContext)

  const logout = useCallback(() => {
    firebase.auth().signOut()
  }, [])

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      console.log('login', user)
      setIsLoading(false)
      setIsAuthenticated(!!user)
      setUser(user)
    })
    return () => {
      unsubscribe()
    }
  }, [setUser])

  return (
    <AuthContext.Provider value={{ logout, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
