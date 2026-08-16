import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuthStore } from '@/shared/model/auth.store'
import { useProfile } from '@/entities/user/model/useProfile'

import { Center, Loader } from '@mantine/core'

export const ProtectedRoute = () => {
  const accessToken = useAuthStore((s) => s.accessToken)
  const { isLoading, isError } = useProfile()

  const location = useLocation()

  if (!accessToken) {
    return <Navigate to={'/login'} state={{ from: location }} replace />
  }

  if (isLoading) {
    return (
      <Center h={'100vh'}>
        <Loader />
      </Center>
    )
  }

  if (isError) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
