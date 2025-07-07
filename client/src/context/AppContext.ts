import { createContext } from 'react'
import type { AppContextType } from './AppContextProvider'

export const AppContext = createContext<AppContextType | null>(null)
