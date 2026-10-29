export type ItemCard = {
  images: string[]
  name: string
  price: number
  seller: {
    name: string
    is_verified: boolean
  }
  condition: string
}
