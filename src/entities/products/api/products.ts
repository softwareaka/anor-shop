import type {
  ICategory,
  IProduct,
  TProductParams,
} from '../../../shared/types/product.ts'
import { $api } from '../../../shared/api/api.ts'

const baseURL = '/products'

export const productsApi = {
  get: (params?: TProductParams) => $api.get<IProduct[]>(baseURL, { params }),
  getById: (id: IProduct['id']) => $api.get<IProduct>(`${baseURL}/${id}`),

  create: (data: Partial<IProduct>) => $api.post<IProduct>(baseURL, data),

  update: (id: IProduct['id'], data: Partial<IProduct>) =>
    $api.put<IProduct>(`${baseURL}/${id}`, data),

  delete: (id: IProduct['id']) => $api.delete(`${baseURL}/${id}`),
}

export const categoriesApi = {
  get: () => $api.get<ICategory[]>('/categories'),
}
