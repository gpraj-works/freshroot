import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import { type StateProps, cartReducer } from "../features/cartSlice"
import { type RootState } from "../store"
import { type Product } from "../utils/types"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const useCart = () => {
  const dispatch = useDispatch()
  const states: StateProps = useTypedSelector((state: RootState) => state.cart)

  const addProduct = (product: Product) => dispatch(cartReducer.addProduct(product))
  const removeProduct = (id: string) => dispatch(cartReducer.removeProduct(id))
  const removeQuantity = (id: string) => dispatch(cartReducer.removeQuantity(id))

  return { states, handlers: { addProduct, removeProduct, removeQuantity } }
}

export default useCart