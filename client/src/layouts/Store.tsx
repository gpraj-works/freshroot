import { Route, Routes } from 'react-router-dom'
import { Dashboard, Login, Register, ForgotPassword, Layout, AddProduct } from '../app'

export default function Store() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="add-product" element={<AddProduct />} />
      </Route>
    </Routes>
  )
}
