import { Box } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Cart from './pages/cart'
import Contact from './pages/contact'
import Home from './pages/home'
import Products from './pages/products'
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
