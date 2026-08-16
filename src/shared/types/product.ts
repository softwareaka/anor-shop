export interface ICategory {
  id: number
  name: string
  slug: string
  image: string
}

export interface IProduct {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: ICategory
  images: string[]
}

/** Общие параметры любого списочного запроса */
export interface ICommonParams {
  page?: string
  size?: string
  search?: string
}

export type TProductParams = ICommonParams & {
  categoryId?: string
}

/** Что ОТПРАВЛЯЕМ на создание/изменение товара (не то же, что приходит) */
export interface IProductForm {
  title: string
  price: number
  description: string
  categoryId: number
  images: string[]
}
