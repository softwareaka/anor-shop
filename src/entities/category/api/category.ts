import { $api } from '@/shared/api/api'
import type { ICategory } from '@/shared/types/product'

export const categoriesApi = {
  get: () => $api.get<ICategory[]>('/categories'),
}
