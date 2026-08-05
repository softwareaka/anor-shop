import { useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '../../../shared/model/auth.store'
import { useNavigate } from 'react-router'

export const useLogout = () => {
  const logout = useAuthStore((s) => s.logout)
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return () => {
    logout()
    queryClient.clear()
    navigate('/login', { replace: true })
  }
}
