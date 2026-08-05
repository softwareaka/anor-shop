import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from '../../../shared/model/auth.store'
import { authAPI } from '../api/auth'

export const useProfile = () => {
  const accessToken = useAuthStore((s) => s.accessToken)

  return useQuery({
    queryKey: ['profile'],
    queryFn: authAPI.getProfile,
    enabled: Boolean(accessToken),
    staleTime: 3 * 1000,
    retry: false,
  })
}
