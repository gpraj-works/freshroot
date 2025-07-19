
export type Product = {
  id: string
  quantity: number
}

export type ProductProps = {
  id: string
  name: string
  category: string
  thumbnail: string
  inStock: boolean
  price: number
  offerPrice?: number
  priceType: string
  rating: number
}