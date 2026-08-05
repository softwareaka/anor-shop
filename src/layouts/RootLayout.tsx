import { Header } from '../widgets/header/Header'
import { Footer } from '../widgets/footer/Footer'
import { Outlet } from 'react-router'

export const RootLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
