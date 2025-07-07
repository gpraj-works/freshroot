import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import type { AppContextType } from '../context/AppContextProvider'

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within AppContextProvider')
  return context
}
