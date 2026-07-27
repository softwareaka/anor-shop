import { useMutation, useQueryClient } from '@tanstack/react-query'
import { productsApi } from '../api/products'
import type { IProductForm } from '../types/product'
import { PRODUCTS_KEY } from './useProducts'

export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: IProductForm) =>
      productsApi.create(data).then((res) => res.data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS_KEY] })
    },
  })
}
