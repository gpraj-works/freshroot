import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface User {
  id: string
  name: string
  email: string
  token: string
}

export type AuthType = "login" | "register" | "forgot"

export interface StateProps {
  user: User | null
  isLoggedIn: boolean
  showLogin: boolean
  showRegister: boolean
  showForgot: boolean
}

const initialState: StateProps = {
  user: null,
  isLoggedIn: false,
  showLogin: false,
  showRegister: false,
  showForgot: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state: StateProps, action: PayloadAction<User>) => {
      state.user = action.payload
      state.showLogin = false
    },
    logoutUser: (state: StateProps) => {
      state.user = null
    },
    toggleAuth: (state: StateProps, action: PayloadAction<{ authType: AuthType, isShow: boolean }>) => {
      const { authType, isShow } = action.payload
      state.showLogin = authType === "login" && isShow
      state.showRegister = authType === "register" && isShow
      state.showForgot = authType === "forgot" && isShow
    }
  },
})

export const userReducer = userSlice.actions

export default userSlice.reducer
