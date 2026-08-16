import { createBrowserRouter } from 'react-router'

import { HomePage } from '@/pages/home/HomePage.tsx'
import { NotFoundPage } from '@/pages/not-found/NotFoundPage.tsx'
import { AboutPage } from '@/pages/about/AboutPage.tsx'
import { ContactPage } from '@/pages/contact/ContactPage.tsx'
import { RootLayout } from '@/layouts/RootLayout.tsx'
import { ProductsPage } from '@/pages/products/ProductsPage.tsx'
import { LoginPage } from '@/pages/sign-in/LoginPage.tsx'
import { AdminLayout } from '@/layouts/AdminLayout.tsx'
import { DashboardMainPage } from '@/pages/admin/DashboardMainPage.tsx'
import { AdminProductsPage } from '@/pages/admin/AdminProductsPage.tsx'
import { AdminCategoriesPage } from '@/pages/admin/AdminCategoriesPage.tsx'
import { ProtectedRoute } from '@/app/providers/ProtectedRoute.tsx'
import { ProductDetailsPage } from '@/pages/product-details/ProductDetailsPage.tsx'

export const $router = createBrowserRouter([
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
        element: <ProductsPage />,
      },
      {
        path: 'details',
        element: <ProductDetailsPage />,
      },
      {
        path: 'details/:id',
        element: <ProductDetailsPage />,
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
    element: <ProtectedRoute />,
    children: [
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
    ],
  },
])
