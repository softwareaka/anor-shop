import { useQuery } from '@tanstack/react-query'
import { categoriesApi, productsApi } from '../api/products'

export const PRODUCTS_KEY = 'products'
export const CATEGORIES_KEY = 'categories'

export const useProducts = (categoryId?: number | null) => {
  return useQuery({
    queryKey: [PRODUCTS_KEY, categoryId ?? 'all'],
    queryFn: () =>
      productsApi
        .get(categoryId ? { categoryId: String(categoryId) } : undefined)
        .then((resp) => resp.data),
  })
}

export const useCategories = () => {
  return useQuery({
    queryKey: [CATEGORIES_KEY],
    queryFn: () => categoriesApi.get().then((resp) => resp.data),
  })
}
