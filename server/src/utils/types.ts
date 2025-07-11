export type UserProps = {
  name: string
  email: string
  password: string
  avatar?: string
  cartItems?: { productId: string, quantity: number }[]
}