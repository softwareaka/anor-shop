import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import './App.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router'

import { HomePage } from './pages/home/HomePage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { AboutPage } from './pages/about/AboutPage.tsx'
import { ContactPage } from './pages/ContactPage.tsx'
import { RootLayout } from './layouts/RootLayout.tsx'
import { VehiclesPage } from './pages/VehiclesPage.tsx'
import { TestQuery } from './components/TestQuery.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { AdminLayout } from './layouts/AdminLayout.tsx'
import { DashboardMainPage } from './pages/admin/DashboardMainPage.tsx'
import { AdminProductsPage } from './pages/admin/AdminProductsPage.tsx'
import { AdminCategoriesPage } from './pages/admin/AdminCategoriesPage.tsx'

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

const client = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'vehicles',
        element: <VehiclesPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'testQuery',
        element: <TestQuery />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardMainPage />,
      },
      {
        path: 'products',
        element: <AdminProductsPage />,
      },
      {
        path: 'categories',
        element: <AdminCategoriesPage />,
      },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider theme={theme}>
        <Notifications position="top-right" />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
