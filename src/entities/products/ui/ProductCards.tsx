import {
  Button,
  Card,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Image,
} from '@mantine/core'

import {
  IconSnowflake,
  IconGasStation,
  IconManualGearbox,
} from '@tabler/icons-react'

type CarCardProps = {
  images: string
  title: string
  type: string
  price: number
  transmission: string
  fuel: string
}

export function CarCard({
  images,
  title,
  type,
  price,
  transmission,
  fuel,
}: CarCardProps) {
  return (
    <Card maw={400} radius="lg" p={24} bg={'#FAFAFA'}>
      <Card.Section>
        <Image w={368} h={240} fit="contain" src={images} />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <Stack gap={0}>
          <Text fw={700} fz={24}>
            {title}
          </Text>

          <Text c="dimmed" size="sm">
            {type}
          </Text>
        </Stack>

        <Stack gap={0} align="flex-end">
          <Text fw={700} c="#A30041" size="xl">
            ${price}
          </Text>

          <Text size="xs" c="dimmed">
            per day
          </Text>
        </Stack>
      </Group>

      <Group mt="lg" justify="space-between" gap="md">
        <Group gap={4}>
          <ThemeIcon variant="subtle" color="gray">
            <IconManualGearbox size={18} />
          </ThemeIcon>

          <Text size="xs">{transmission}</Text>
        </Group>

        <Group gap={4}>
          <ThemeIcon variant="subtle" color="gray">
            <IconGasStation size={18} />
          </ThemeIcon>

          <Text size="xs">{fuel}</Text>
        </Group>

        <Group gap={4}>
          <ThemeIcon variant="subtle" color="gray">
            <IconSnowflake size={18} />
          </ThemeIcon>

          <Text size="xs">Air Conditioner</Text>
        </Group>
      </Group>

      <Button fullWidth mt="xl" radius="md" color="#A30041">
        View Details
      </Button>
    </Card>
  )
}
