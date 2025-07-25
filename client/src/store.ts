import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import cartReducer from './features/cartSlice'

const savedCart = localStorage.getItem('cart')
const preloadedState = {
  cart: savedCart ? JSON.parse(savedCart) : undefined
}

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState
})

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('cart', JSON.stringify(state.cart))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store