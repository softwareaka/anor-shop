import {
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

export const AboutMemories = () => {
  return (
    <Container size="1300" py={80}>
      <Grid align="center" gap={85}>
        {/* Left Side */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg">
            <Title order={2} size={50} maw={520}>
              Unlock unforgettable memories on the road
            </Title>

            <Text c="dimmed" maw={520}>
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper.
            </Text>

            {/* Features */}
            <Grid>
              <Grid.Col span={6}>
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon radius="xl" color="#A30041">
                    <IconCheck size={16} />
                  </ThemeIcon>

                  <Text c="dimmed" size="sm">
                    Velit semper morbi. Purus non eu cursus porttitor tristique
                    et gravida...
                  </Text>
                </Group>
              </Grid.Col>

              <Grid.Col span={6}>
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon radius="xl" color="#A30041">
                    <IconCheck size={16} />
                  </ThemeIcon>

                  <Text c="dimmed" size="sm">
                    Purus non eu cursus porttitor tristique et gravida. Quis
                    nunc interdum
                  </Text>
                </Group>
              </Grid.Col>

              <Grid.Col span={6}>
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon radius="xl" color="#A30041">
                    <IconCheck size={16} />
                  </ThemeIcon>

                  <Text c="dimmed" size="sm">
                    Aliquam adipiscing velit semper morbi. Purus non eu cursus
                    porttitor
                  </Text>
                </Group>
              </Grid.Col>

              <Grid.Col span={6}>
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon radius="xl" color="#A30041">
                    <IconCheck size={16} />
                  </ThemeIcon>

                  <Text c="dimmed" size="sm">
                    Quis nunc interdum gravida ullamcorper
                  </Text>
                </Group>
              </Grid.Col>
            </Grid>
          </Stack>
        </Grid.Col>

        {/* Right Side */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            radius="lg"
            h={500}
            fit="cover"
          />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
