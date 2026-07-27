import {
  Avatar,
  Card,
  Container,
  Flex,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconQuoteFilled } from '@tabler/icons-react'

import person1 from '../../assets/icons/customerIcon.svg'

export const AboutReview = () => {
  return (
    <Container size="1300" py={80}>
      <Title ta="center" order={2} mb={60}>
        Reviews from our customers
      </Title>

      <Flex gap={24} wrap="wrap">
        {/* Card 1 */}
        <Card radius="lg" p={0} maw={400}>
          <Stack gap="lg" p={35}>
            <IconQuoteFilled size={40} color="#5D3FD3" />

            <Text ta="center">
              Et aliquet netus at sapien pellentesque mollis nec dignissim
              maecenas. Amet erat volutpat quisque odio purus feugiat. In
              gravida neque.
            </Text>
          </Stack>

          <Stack
            bg="#A30041"
            align="center"
            gap={4}
            pt={45}
            pb={25}
            pos="relative"
          >
            <Avatar
              src={person1}
              size={70}
              radius="xl"
              pos="absolute"
              top={-35}
            />

            <Text size="sm" c="gray.3">
              Kuphal LLC
            </Text>

            <Text fw={700} c="white">
              Emanuel Boyle
            </Text>
          </Stack>
        </Card>

        {/* Card 2 */}
        <Card radius="lg" p={0} maw={400}>
          <Stack gap="lg" p={35}>
            <IconQuoteFilled size={40} color="#5D3FD3" />

            <Text ta="center">
              Purus consectetur varius quis urna phasellus enim mattis. Sem
              tincidunt tortor nunc egestas amet adipiscing ligula.
            </Text>
          </Stack>

          <Stack
            bg="#A30041"
            align="center"
            gap={4}
            pt={45}
            pb={25}
            pos="relative"
          >
            <Avatar
              src={person1}
              size={70}
              radius="xl"
              pos="absolute"
              top={-35}
            />

            <Text size="sm" c="gray.3">
              Glover - Orn
            </Text>

            <Text fw={700} c="white">
              River Graves
            </Text>
          </Stack>
        </Card>

        {/* Card 3 */}
        <Card radius="lg" p={0} maw={400}>
          <Stack gap="lg" p={35}>
            <IconQuoteFilled size={40} color="#5D3FD3" />

            <Text ta="center">
              Quam neque odio urna euismod felis. Sit egestas magna in quisque
              fames dapibus quis sapien magna. Nisl non eget sit pellentesque
              tristique et.
            </Text>
          </Stack>

          <Stack
            bg="#A30041"
            align="center"
            gap={4}
            pt={45}
            pb={25}
            pos="relative"
          >
            <Avatar
              src={person1}
              size={70}
              radius="xl"
              pos="absolute"
              top={-35}
            />

            <Text size="sm" c="gray.3">
              Haag LLC
            </Text>

            <Text fw={700} c="white">
              Ryder Malone
            </Text>
          </Stack>
        </Card>
      </Flex>
    </Container>
  )
}
