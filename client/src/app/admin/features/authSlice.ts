import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Auth {
  id: string
  loginId: string
  token: string
}

export interface StateProps {
  admin: Auth | null
  isLoggedIn: boolean
}

const initialState: StateProps = {
  admin: null,
  isLoggedIn: false,
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginUser: (state: StateProps, action: PayloadAction<Auth>) => {
      state.admin = action.payload
      state.isLoggedIn = true
    },
    logoutUser: (state: StateProps) => {
      state.admin = null
      state.isLoggedIn = false
    },
  },
})

export const adminReducer = adminSlice.actions

export default adminSlice.reducer
