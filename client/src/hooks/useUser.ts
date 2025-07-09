import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import { type StateProps, type User, userReducer } from "../features/userSlice"
import { type RootState } from "../store"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const useUser = () => {
  const dispatch = useDispatch()
  const states: StateProps = useTypedSelector((state: RootState) => state.user)

  const loginUser = (user: User) => dispatch(userReducer.loginUser(user))
  const logoutUser = () => dispatch(userReducer.logoutUser())
  const showLogin = (isShow: boolean) => dispatch(userReducer.showLogin(isShow))

  return { states, handlers: { loginUser, logoutUser, showLogin } }
}

export default useUser