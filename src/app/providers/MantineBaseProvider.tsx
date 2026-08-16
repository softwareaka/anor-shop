import type { ReactNode } from 'react'
import { createTheme, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

const theme = createTheme({
  colors: {
    anor: [
      '#fff0f5',
      '#ffe0eb',
      '#f7b0cc',
      '#f07da9',
      '#ea538c',
      '#e73879',
      '#e62a70',
      '#ce1d5e',
      '#b81253',
      '#A30041',
    ],
  },
  primaryColor: 'anor',
  primaryShade: 9,
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
})

interface MantineBaseProviderProps {
  children: ReactNode
}

export const MantineBaseProvider = ({ children }: MantineBaseProviderProps) => {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  )
}
