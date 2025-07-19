import { Route, Routes } from 'react-router-dom'
import { Dashboard, Login, Register, ForgotPassword } from '../app'

export default function Store() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  )
}
