import {
  Anchor,
  Box,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'

import rentCarLogo from '../assets/images/rentCar-logo.svg'
import locationIcon from '../assets/icons/location-icon.svg'
import messageIcon from '../assets/icons/message-icon.svg'
import phoneIcon from '../assets/icons/phone-icon_bg.svg'
import facebookIcon from '../assets/icons/facebook-icon.svg'
import appStoreLogo from '../assets/images/appstore-logo.svg'

export const Footer = () => {
  return (
    <footer>
      <Container size="1300" py={90}>
        <Group justify="space-between">
          <img src={rentCarLogo} alt="Rent Car logo image" />

          <Group>
            <img src={locationIcon} alt="location icon logo" />
            <Box>
              <Text>Address</Text>
              <Text fw={600}>Oxford Ave. Cary, NC 27511</Text>
            </Box>
          </Group>

          <Group>
            <img src={messageIcon} alt="message icon logo" />
            <Box>
              <Text>Email</Text>
              <Text fw={600}>nwiger@yahoo.com</Text>
            </Box>
          </Group>

          <Group>
            <img src={phoneIcon} alt="phone icon logo" />
            <Box>
              <Text>Phone</Text>
              <Text fw={600}>+537 547-6401</Text>
            </Box>
          </Group>
        </Group>

        <Group mt={60} justify="space-between" align="top">
          <Stack>
            <Title order={2} maw={300}>
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem
            </Title>

            <Group mt={35}>
              <img width={24} src={facebookIcon} alt="Facebook icon logo" />
              <img width={24} src={facebookIcon} alt="Facebook icon logo" />
              <img width={24} src={facebookIcon} alt="Facebook icon logo" />
              <img width={24} src={facebookIcon} alt="Facebook icon logo" />
            </Group>
          </Stack>

          <Stack>
            <Title order={2} size={20} mb={20}>
              Useful links
            </Title>

            <Anchor c={'dark'}>About us</Anchor>
            <Anchor c={'dark'}>Contact us</Anchor>
            <Anchor c={'dark'}>Gallery</Anchor>
            <Anchor c={'dark'}>Blog</Anchor>
            <Anchor c={'dark'}>F.A.Q</Anchor>
          </Stack>

          <Stack>
            <Title order={2} size={20} mb={20}>
              Vehicles
            </Title>

            <Anchor c={'dark'}>Sedan</Anchor>
            <Anchor c={'dark'}>Cabriolet</Anchor>
            <Anchor c={'dark'}>Pickup</Anchor>
            <Anchor c={'dark'}>Minivan</Anchor>
            <Anchor c={'dark'}>SUV</Anchor>
          </Stack>

          <Stack>
            <Title order={2} size={20}>
              Download App
            </Title>

            <img width={170} src={appStoreLogo} alt="App store logo image" />
            <img width={170} src={appStoreLogo} alt="App store logo image" />
          </Stack>
        </Group>
      </Container>
    </footer>
  )
}
