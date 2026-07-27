import { Box, Group } from '@mantine/core'

import toyotaLogo from '../assets/icons/toyota-logo.svg'
import fordLogo from '../assets/icons/ford.logo.svg'
import mercLogo from '../assets/icons/merc-logo.svg'
import jeepLogo from '../assets/icons/jeep-logo.svg'
import bmwLogo from '../assets/icons/bmw-logo.svg'
import audiLogo from '../assets/icons/audi-logo.svg'

export const BrandCars = () => {
  return (
    <section>
      <Box
        bg={'#FAFAFA'}
        mt={60}
        py={60}
        px={40}
        style={{ borderRadius: '40px' }}
      >
        <Group justify="space-between">
          <img width={82} src={toyotaLogo} alt="Toyota logo image" />
          <img width={82} src={fordLogo} alt="ford logo image" />
          <img width={82} src={mercLogo} alt="merc logo image" />
          <img width={82} src={jeepLogo} alt="jeep logo image" />
          <img width={82} src={bmwLogo} alt="bmw logo image" />
          <img width={82} src={audiLogo} alt="audi logo image" />
        </Group>
      </Box>
    </section>
  )
}
