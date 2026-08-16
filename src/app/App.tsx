import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import '@/App.css'
import { RouterProvider } from 'react-router'

import { $router } from './router/router'
import { MantineBaseProvider } from './providers/MantineBaseProvider'
import { QueryProvider } from './providers/QueryProvider'

function App() {
  return (
    <QueryProvider>
      <MantineBaseProvider>
        <RouterProvider router={$router} />
      </MantineBaseProvider>
    </QueryProvider>
  )
}

export default App

