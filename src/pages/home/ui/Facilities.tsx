import { Container, Group, Stack, Text, Title } from '@mantine/core'

import locationIcon from '@/shared/assets/icons/location-icon2.svg'

export const Facilities = () => {
  return (
    <section>
      <Container size="1300" mt={60}>
        <Group justify="space-between">
          <Stack maw={357} align="center">
            <img width={64} src={locationIcon} alt="Location icon logo image" />

            <Title order={2} fz={24}>
              Availability
            </Title>

            <Text ta={'center'}>
              Diam tincidunt tincidunt erat at semper fermentum. Id ultricies
              quis
            </Text>
          </Stack>
          <Stack maw={357} align="center">
            <img width={64} src={locationIcon} alt="Location icon logo image" />

            <Title order={2} fz={24}>
              Comfort
            </Title>

            <Text ta={'center'}>
              Diam tincidunt tincidunt erat at semper fermentum. Id ultricies
              quis
            </Text>
          </Stack>

          <Stack maw={357} align="center">
            <img width={64} src={locationIcon} alt="Location icon logo image" />

            <Title order={2} fz={24}>
              Savings
            </Title>

            <Text ta={'center'}>
              Diam tincidunt tincidunt erat at semper fermentum. Id ultricies
              quis
            </Text>
          </Stack>
        </Group>
      </Container>
    </section>
  )
}
