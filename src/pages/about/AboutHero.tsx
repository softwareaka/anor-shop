import {
  Center,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { IconPlayerPlayFilled } from '@tabler/icons-react'

export const AboutHero = () => {
  return (
    <Container size="1300" py={80}>
      {/* Heading */}
      <Stack align="center" gap={5} mb={70}>
        <Title order={1}>About Us</Title>

        <Text c="dimmed">
          Home{' '}
          <Text span c="black">
            / About Us
          </Text>
        </Text>
      </Stack>

      {/* Top Content */}
      <Grid>
        {/* Left Side */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Title order={2} size={52}>
            Where every
            <br />
            drive feels
            <br />
            extraordinary
          </Title>
        </Grid.Col>

        {/* Right Side */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Grid gap={58}>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Stack gap="xs">
                <Title order={3}>Variety Brands</Title>

                <Text c="dimmed" size="sm">
                  Platea non auctor fermentum sollicitudin. Eget adipiscing
                  augue sit quam natoque ornare cursus viverra odio.
                </Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Stack gap="xs">
                <Title order={3}>Awesome Support</Title>

                <Text c="dimmed" size="sm">
                  Eget adipiscing augue sit quam natoque ornare cursus viverra
                  odio. Diam quam gravida ultricies velit.
                </Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Stack gap="xs">
                <Title order={3}>Maximum Freedom</Title>

                <Text c="dimmed" size="sm">
                  Diam quam gravida ultricies velit duis consequat integer. Est
                  aliquam posuere vel rhoncus massa volutpat in.
                </Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Stack gap="xs">
                <Title order={3}>Flexibility On The Go</Title>

                <Text c="dimmed" size="sm">
                  Vitae pretium nulla sed quam id nisl semper. Vel non in proin
                  egestas dis faucibus rhoncus lacus dignissim aenean
                  pellentesque nisl.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* Video/Image */}
      <Paper
        mt={80}
        radius="lg"
        h={420}
        pos="relative"
        style={{ overflow: 'hidden' }}
      >
        <Image
          h="100%"
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        />

        <Overlay opacity={0.2} />

        <Center pos="absolute" inset={0}>
          <ThemeIcon size={70} radius="xl" color="pink">
            <IconPlayerPlayFilled size={30} />
          </ThemeIcon>
        </Center>
      </Paper>

      {/* Statistics */}
      <Group justify="space-between" mt={60}>
        <Stack gap={0} align="center">
          <Title order={3} c="#A30041" size={80}>
            20k+
          </Title>

          <Text fw={800}>Happy customers</Text>
        </Stack>

        <Stack gap={0} align="center">
          <Title order={3} c="#A30041" size={80}>
            540+
          </Title>

          <Text fw={800}>Count of cars</Text>
        </Stack>

        <Stack gap={0} align="center">
          <Title order={3} c="#A30041" size={80}>
            25+
          </Title>

          <Text fw={800}>Years of experience</Text>
        </Stack>
      </Group>
    </Container>
  )
}
