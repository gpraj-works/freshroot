import { Box } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Store from './layouts/Store'
import StoreFront from './layouts/Storefront'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import DeliveryAddress from './pages/DeliveryAddress'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Product from './pages/Product'

function App() {
  return (
    <Box>
      <Routes>
        <Route element={<StoreFront />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products/:category/:id" element={<Product />} />
          <Route path="/delivery-address" element={<DeliveryAddress />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/seller/*" element={<Store />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  )
}

export default App
