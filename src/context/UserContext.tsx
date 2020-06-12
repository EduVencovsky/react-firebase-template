import React, { useState, ReactNode } from 'react'
import { User } from 'firebase'

interface IUserContext {
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>; 
}

export const UserContext = React.createContext<IUserContext>({user: null, setUser: () => {}})

interface UserProvider {
  children: ReactNode
}

export function UserProvider({ children } : UserProvider) {

  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext