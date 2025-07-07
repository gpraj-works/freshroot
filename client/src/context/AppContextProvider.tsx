import { useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'

export type AppContextType = {
  user: object | null
  setUser: (user: object | null) => void
  isSeller: boolean
  setIsSeller: (isSeller: boolean) => void
  showUserLogin: boolean
  setShowUserLogin: (showLogin: boolean) => void
  navigate: ReturnType<typeof useNavigate>
}

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<object | null>(null)
  const [isSeller, setIsSeller] = useState<boolean>(false)
  const [showUserLogin, setShowUserLogin] = useState<boolean>(false)

  return (
    <AppContext.Provider
      value={{ user, setUser, isSeller, setIsSeller, navigate, showUserLogin, setShowUserLogin }}
    >
      {children}
    </AppContext.Provider>
  )
}
