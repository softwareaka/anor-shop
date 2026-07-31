import {
  Box,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core'

import { IconMapPin, IconMail, IconPhone, IconClock } from '@tabler/icons-react'

export default function ContactAddress() {
  return (
    <Container size={1300} py={70}>
      <Flex justify="space-between" align="center" wrap="wrap" gap="xl">
        {/* Address */}
        <Group align="center" gap="md">
          <ThemeIcon size={58} radius="xl" color="#FF9E0C" variant="filled">
            <IconMapPin size={26} stroke={1.8} />
          </ThemeIcon>

          <Stack gap={2}>
            <Text size="xl" fw={500}>
              Address
            </Text>

            <Text fw={700} size="lg">
              Oxford Ave. Cary, NC 27511
            </Text>
          </Stack>
        </Group>

        {/* Email */}
        <Group align="center" gap="md">
          <ThemeIcon size={58} radius="xl" color="#FF9E0C" variant="filled">
            <IconMail size={26} stroke={1.8} />
          </ThemeIcon>

          <Stack gap={2}>
            <Text size="xl" fw={500}>
              Email
            </Text>

            <Text fw={700} size="lg">
              nwiger@yahoo.com
            </Text>
          </Stack>
        </Group>

        {/* Phone */}
        <Group align="center" gap="md">
          <ThemeIcon size={58} radius="xl" color="#FF9E0C" variant="filled">
            <IconPhone size={26} stroke={1.8} />
          </ThemeIcon>

          <Stack gap={2}>
            <Text size="xl" fw={500}>
              Phone
            </Text>

            <Text fw={700} size="lg">
              +537 547-6401
            </Text>
          </Stack>
        </Group>

        {/* Opening Hours */}
        <Group align="center" gap="md">
          <ThemeIcon size={58} radius="xl" color="#FF9E0C" variant="filled">
            <IconClock size={26} stroke={1.8} />
          </ThemeIcon>

          <Stack gap={2}>
            <Text size="xl" fw={500}>
              Opening hours
            </Text>

            <Text fw={700} size="lg">
              Sun–Mon: 10am – 10pm
            </Text>
          </Stack>
        </Group>
      </Flex>
    </Container>
  )
}
