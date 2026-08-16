import { useQuery } from '@tanstack/react-query'
import { categoriesApi } from '@/entities/category/api/category'

export const CATEGORIES_KEY = 'categories'

export const useCategories = () => {
  return useQuery({
    queryKey: [CATEGORIES_KEY],
    queryFn: () => categoriesApi.get().then((resp) => resp.data),
  })
}

