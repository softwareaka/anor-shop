import {
  Button,
  Card,
  Group,
  Stack,
  Text,
  Image,
} from '@mantine/core'

import { Link } from 'react-router'

type CarCardProps = {
  id?: number
  images: string
  title: string
  type: string
  price: number
  transmission?: string
  fuel?: string
}

export function CarCard({ id, images, title, type, price }: CarCardProps) {
  return (
    <Card maw={400} radius="lg" p={24} bg={'#FAFAFA'}>
      <Card.Section>
        <Image w={368} h={240} fit="contain" src={images} />
      </Card.Section>

      <Stack mt="md">
        <Group justify="space-between" gap={0}>
          <Text fw={700} fz={24}>
            {title}
          </Text>

          <Text fw={700} c="#A30041" size="xl">
            ${price}
          </Text>
        </Group>
        <Text c="dimmed" size="sm">
          {type}
        </Text>
      </Stack>

      <Button
        component={Link}
        to={id ? `/details/${id}` : '/details'}
        fullWidth
        mt="xl"
        radius="md"
        color="#A30041"
      >
        View Details
      </Button>
    </Card>
  )
}
