import { useQuery } from '@tanstack/react-query'
import { productsApi } from '../api/products'

export { useCategories, CATEGORIES_KEY } from '@/entities/category/model/useCategories'

export const PRODUCTS_KEY = 'products'

export const useProducts = (categoryId?: number | null) => {
  return useQuery({
    queryKey: [PRODUCTS_KEY, categoryId ?? 'all'],
    queryFn: () =>
      productsApi
        .get(categoryId ? { categoryId: String(categoryId) } : undefined)
        .then((resp) => resp.data),
  })
}

export const useProductById = (id?: number | string | null) => {
  return useQuery({
    queryKey: [PRODUCTS_KEY, 'detail', id],
    queryFn: () => productsApi.getById(Number(id)).then((resp) => resp.data),
    enabled: Boolean(id),
  })
}



