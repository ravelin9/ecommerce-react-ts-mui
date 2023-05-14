export type ProductInfo = {
  id: string,
  seen: boolean,
  price: number,
  title: string,
  address: string,
  about: string,
  createdAt: string
}
export type ProductsPage = {
  items: [],
  total: number,
  page: number,
  size: number,
  pages: number
}
export type ProductsContextTypes = {
  products: ProductInfo[]
}