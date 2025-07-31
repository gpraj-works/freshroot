import { Box } from '@mantine/core'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartMenu from '../components/CartMenu'
import Login from '../components/auth/Login'
import Register from '../components/auth/Registration'
import ForgotPassword from '../components/auth/ForgotPassword'
import { Outlet } from 'react-router-dom'
import useCart from '../hooks/useCart'
import useUser from '../hooks/useUser'

export default function Store() {
  const { states: cartStates } = useCart()
  const { states: userStates } = useUser()

  return (
    <Box>
      <Navbar />
      <Outlet />
      <Footer />
      {userStates.showLogin && <Login />}
      {userStates.showRegister && <Register />}
      {userStates.showForgot && <ForgotPassword />}
      {cartStates.showCart && <CartMenu />}
    </Box>
  )
}
