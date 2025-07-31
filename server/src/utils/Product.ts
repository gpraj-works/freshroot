export type ProductProps = {
  productId: string
  name: string
  description: string
  price: number
  discountType: "PERCENTAGE" | "VALUE"
  discount: number
  thumbnail: string
  previews: string[]
  freeDelivery: boolean
  returnPolicy: boolean
  showSeller: boolean
  categoryId: string
}