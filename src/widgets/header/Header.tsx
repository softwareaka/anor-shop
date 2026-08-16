import { Container, Group, Text, Anchor, ActionIcon } from '@mantine/core'
import { Link } from 'react-router'

import { Logo } from '@/shared/ui/Logo'
import phoneIconImage from '@/shared/assets/icons/phone-icon.svg'

export const Header = () => {
  return (
    <header>
      <Container size="1300" h={70}>
        <Group h="100%" justify="space-between">
          <Anchor component={Link} to={'/'} underline="never">
            <Logo size={36} />
          </Anchor>
          <Group gap={40}>
            <Anchor component={Link} to={'/'} c="dark" underline="never">
              Home
            </Anchor>

            <Anchor
              component={Link}
              to={'/vehicles'}
              c="dark"
              underline="never"
            >
              Products
            </Anchor>

            <Anchor component={Link} to={'/details'} c="dark" underline="never">
              Details
            </Anchor>

            <Anchor component={Link} to={'/about'} c="dark" underline="never">
              About Us
            </Anchor>

            <Anchor component={Link} to={'/contact'} c="dark" underline="never">
              Contact Us
            </Anchor>

            <Anchor component={Link} to={'/login'} c={'dark'} underline="never">
              Login
            </Anchor>
          </Group>

          <Group gap="md">
            <Group gap="sm">
              <ActionIcon radius="xl" size={42} color="pink" variant="filled">
                <img src={phoneIconImage} alt="Phone icon image" />
              </ActionIcon>

              <div>
                <Text size="sm" c="dimmed">
                  Need help?
                </Text>

                <Text fw={700}>+996 247-1680</Text>
              </div>
            </Group>
          </Group>
        </Group>
      </Container>
    </header>
  )
}
