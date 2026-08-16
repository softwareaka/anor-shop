import { Facilities } from './ui/Facilities'
import { Facts } from './ui/Facts'
import { Hero } from './ui/Hero'
import { Reason } from './ui/Reason'
import { RentCar } from './ui/RentCar'

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
