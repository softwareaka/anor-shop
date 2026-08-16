export interface ILoginPayload {
  email: string
  password: string
}

export interface ITokens {
  access_token: string
  refresh_token: string
}

export interface IUser {
  id: number
  email: string
  name: string
  role: 'customer' | 'admin'
  avatar: string
}
