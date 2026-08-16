import {
  Container,
  Stack,
  Title,
  Text,
  Button,
  Group,
  Badge,
} from '@mantine/core'
import { Link } from 'react-router'
import { IconHome, IconCar, IconMapPinOff } from '@tabler/icons-react'

export function NotFoundPage() {
  return (
    <Container size={1100} py={80}>
      <Stack align="center" ta="center" gap="md">
        <Badge
          size="lg"
          variant="light"
          color="anor"
          radius="xl"
          leftSection={<IconMapPinOff size={16} />}
        >
          Error 404
        </Badge>
        <Text fw={900} fz={120} lh={1} c="#A30041">
          404
        </Text>
        <Title order={1} fw={800} fz={36}>
          Looks like you've taken a wrong turn!
        </Title>
        <Text c="dimmed" size="lg" maw={540}>
          The page you are searching for might have been moved or is
          unavailable.
        </Text>
        <Group justify="center" mt="md">
          <Button
            component={Link}
            to="/"
            size="md"
            radius="xl"
            color="#A30041"
            leftSection={<IconHome size={18} />}
          >
            Back to Home
          </Button>
          <Button
            component={Link}
            to="/vehicles"
            size="md"
            radius="xl"
            variant="outline"
            color="#A30041"
            leftSection={<IconCar size={18} />}
          >
            Browse Vehicles
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}
