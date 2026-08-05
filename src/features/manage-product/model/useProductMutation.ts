import { useMutation, useQueryClient } from '@tanstack/react-query'
import { productsApi } from '../../../entities/products/api/products'
import type { IProductForm } from '../../../types/product'
import { PRODUCTS_KEY } from '../../../entities/products/model/useProducts'

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

export const useUpdateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<IProductForm> }) =>
      productsApi.update(id, data).then((res) => res.data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS_KEY] })
    },
  })
}

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => productsApi.delete(id).then((res) => res.data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS_KEY] })
    },
  })
}
