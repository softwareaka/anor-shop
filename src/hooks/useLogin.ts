import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '../store/auth.store'
import { useNavigate } from 'react-router'
import { authAPI } from '../api/auth'
import { notifications } from '@mantine/notifications'

export const useLogin = () => {
  const setTokens = useAuthStore((s) => s.setTokens)
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: authAPI.login,

    onSuccess: (tokens) => {
      setTokens(tokens)
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      navigate('/dashboard', { replace: true })
    },

    onError: () =>
      notifications.show({
        color: 'red',
        message: 'Неверный email или пароль',
      }),
  })
}
