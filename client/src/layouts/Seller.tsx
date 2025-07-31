import { Route, Routes } from 'react-router-dom'
import { Dashboard, Login, Register, ForgotPassword, Layout, AddProduct } from '../app/seller'

export default function Seller() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-product" element={<AddProduct />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  )
}
