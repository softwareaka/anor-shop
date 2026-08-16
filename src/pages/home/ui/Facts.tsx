import {
  Box,
  Card,
  Container,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'

import {
  IconCar,
  IconUsers,
  IconCalendarStats,
  IconGauge,
} from '@tabler/icons-react'

const stats = [
  {
    id: 1,
    icon: <IconCar size={30} />,
    value: '540+',
    label: 'Cars',
  },
  {
    id: 2,
    icon: <IconUsers size={30} />,
    value: '20k+',
    label: 'Customers',
  },
  {
    id: 3,
    icon: <IconCalendarStats size={30} />,
    value: '25+',
    label: 'Years',
  },
  {
    id: 4,
    icon: <IconGauge size={30} />,
    value: '20m+',
    label: 'Miles',
  },
]

export const Facts = () => {
  return (
    <section>
      <Container size="1300" py={100}>
        <Box
          bg="#A30041"
          py={120}
          px={72}
          style={{
            borderRadius: 20,
            position: 'relative',
          }}
        >
          <Stack align="center" gap="md">
            <Title order={2} c="white" fz={52}>
              Facts In Numbers
            </Title>

            <Text c="white" ta="center" maw={700} opacity={0.9}>
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
              fermentum.
            </Text>
          </Stack>

          <Group justify="space-between" mt={60} gap="xl">
            {stats.map((item) => (
              <Card key={item.id} radius={20} shadow="md" p="lg" w={230}>
                <Group wrap="nowrap">
                  <ThemeIcon size={60} radius={12} color="orange">
                    {item.icon}
                  </ThemeIcon>

                  <Stack gap={0}>
                    <Title order={3}>{item.value}</Title>

                    <Text c="dimmed" fw={600}>
                      {item.label}
                    </Text>
                  </Stack>
                </Group>
              </Card>
            ))}
          </Group>
        </Box>
      </Container>
    </section>
  )
}
