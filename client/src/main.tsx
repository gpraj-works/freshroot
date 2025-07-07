import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AppContextProvider } from './context/AppContextProvider.tsx'
import './index.css'
import theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} classNamesPrefix="Fresh">
      <BrowserRouter>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
)
