import { BrandCars } from '../../components/BrandCars'
import ContactAddress from './components/ContactAddress'
import ContactBlog from './components/ContactBlog'
import ContactBooking from './components/ContactBooking'

import { Title } from '@mantine/core'

export const ContactPage = () => {
  return (
    <>
      <Title mt={60} ta={'center'} order={1}>
        Contact Us
      </Title>
      <ContactBooking />
      <ContactAddress />
      <BrandCars />
      <ContactBlog />
    </>
  )
}
