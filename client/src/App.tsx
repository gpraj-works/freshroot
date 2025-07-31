import { Box } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Seller from './layouts/Seller'
import Store from './layouts/Store'
import Admin from './layouts/Admin'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import DeliveryAddress from './pages/DeliveryAddress'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Products from './pages/Products'

function App() {
  return (
    <Box>
      <Routes>
        <Route element={<Store />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products/:category/:id" element={<Product />} />
          <Route path="/delivery-address" element={<DeliveryAddress />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="/seller/*" element={<Seller />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  )
}

export default App
