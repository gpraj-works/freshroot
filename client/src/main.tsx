import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import theme from './theme.ts'
import { Provider } from 'react-redux'
import store from './store.ts'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} classNamesPrefix="Fresh">
      <BrowserRouter>
        <Provider store={store}>
          <App />
          <Toaster />
        </Provider>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
)
