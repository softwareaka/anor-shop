import axios from 'axios'
import { useAuthStore } from '../model/auth.store'

export const $api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  timeout: 15000,
})

$api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken

  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// $api.interceptors.request.use((config) => {
//   const token = useAuthStore.getState().accessToken
//   if (token) config.headers.Authorization = `Bearer ${token}`
//   return config
// })
