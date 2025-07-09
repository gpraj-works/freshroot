import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface User {
  id: string
  name: string
  email: string
  token: string
}

export interface StateProps {
  user: User | null
  isLoggedIn: boolean
  showLogin: boolean
}

const initialState: StateProps = {
  user: null,
  isLoggedIn: false,
  showLogin: false
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
    showLogin: (state: StateProps, action: PayloadAction<boolean>) => {
      state.showLogin = action.payload
    }
  },
})

export const userReducer = userSlice.actions

export default userSlice.reducer
