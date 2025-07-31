import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "./authSlice"

const adminReducer = combineReducers({
  auth: authReducer,
})

export default adminReducer