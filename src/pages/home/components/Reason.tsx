import { Container, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core'

import carImage from '../../../assets/images/reasonCar-image.png' // Replace with your image

const features = [
  {
    id: 1,
    title: 'Erat at semper',
    description:
      'Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...',
  },
  {
    id: 2,
    title: 'Urna nec vivamus risus duis arcu',
    description:
      'Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper.',
  },
  {
    id: 3,
    title: 'Lobortis euismod imperdiet tempus',
    description:
      'Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi.',
  },
  {
    id: 4,
    title: 'Cras nulla aliquet nam eleifend amet et',
    description:
      'Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero.',
  },
]

export function Reason() {
  return (
    <Container size="1300" py={100}>
      <Group align="center" justify="space-between">
        <img width={550} src={carImage} alt="Luxury car" />

        <Group maw={570}>
          <Stack gap={28}>
            {features.map((feature) => (
              <Stack key={feature.id}>
                <Group>
                  <ThemeIcon radius="xl" size={32} color="#A30041">
                    {feature.id}
                  </ThemeIcon>

                  <Title order={3} fz={20}>
                    {feature.title}
                  </Title>
                </Group>

                <Text c="dimmed" fz={16} lh={1.6}>
                  {feature.description}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Group>
      </Group>
    </Container>
  )
}
