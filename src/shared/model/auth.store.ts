import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ITokens } from '../types/auth'

interface IAuthState {
  accessToken: string | null
  refreshToken: string | null
  setTokens: (tokens: ITokens) => void
  logout: () => void
}

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setTokens: (tokens) =>
        set({
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token,
        }),
      logout: () => set({ accessToken: null, refreshToken: null }),
    }),
    { name: 'auth' }
  )
)
