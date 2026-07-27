import { Facilities } from './components/Facilities'
import { Facts } from './components/Facts'
import { Hero } from './components/Hero'
import { Reason } from './components/Reason'
import { RentCar } from './components/RentCar'

export function HomePage() {
  return (
    <>
      <Hero />
      <Facilities />
      <Reason />
      <RentCar />
      <Facts />
    </>
  )
}
