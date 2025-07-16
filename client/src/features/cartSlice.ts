import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { toastify } from '../components/shared/Toastify'
import { type Product } from '../utils/types'

export interface StateProps {
  products: { id: string, quantity: number }[],
  productCount: number
  showCart: boolean
}

const initialState: StateProps = {
  products: [],
  productCount: 0,
  showCart: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state: StateProps, action: PayloadAction<Product>) => {
      const productIndex = state.products.findIndex(p => p.id === action.payload.id)
      if (productIndex === -1) {
        state.products.push(action.payload)
      } else {
        state.products[productIndex].quantity += action.payload.quantity
      }
      state.productCount += action.payload.quantity
      toastify("Added into cart", {
        icon: {
          name: "success",
          color: "green"
        }
      })
    },

    removeProduct: (state: StateProps, action: PayloadAction<string>) => {
      const product = state.products.find(p => p.id === action.payload)
      if (product) {
        state.productCount -= product.quantity
        state.products = state.products.filter(p => p.id !== action.payload)
        toastify("Removed from cart", {
          icon: {
            name: "success",
            color: "green"
          }
        })
      }
    },

    removeQuantity: (state: StateProps, action: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(p => p.id === action.payload)
      if (productIndex !== -1) {
        const product = state.products[productIndex]
        if (product.quantity > 1) {
          product.quantity -= 1
        } else {
          state.products.splice(productIndex, 1)
        }
        state.productCount -= 1
      }
    },

    toggleCart: (state: StateProps, action: PayloadAction<boolean>) => {
      state.showCart = action.payload
    },

    clearCart: (state) => {
      state.products = []
      state.productCount = 0
    }
  },
})

export const cartReducer = cartSlice.actions

export default cartSlice.reducer
