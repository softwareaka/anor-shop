import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'

import carImage from '@/shared/assets/images/bmwCar.png'
// import tirePattern from '../assets/images/tire-pattern.png'

export const AboutContact = () => {
  return (
    <Container size="1300" py={80}>
      <Box
        bg="#A30041"
        px={86}
        py={80}
        style={{
          borderRadius: 24,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <Flex justify="space-between" align="center">
          <Stack maw={430}>
            <Title order={2} c="white" size={40} fw={700}>
              Looking for a car?
            </Title>

            <Title order={3} c="white" size={44} fw={700}>
              +537 547-6401
            </Title>

            <Text c="gray.2" size="md">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in...
            </Text>

            <Button mt="md" w={150} radius="md" color="orange" size="md">
              Book now
            </Button>
          </Stack>

          <Image src={carImage} w={600} fit="contain" />
        </Flex>
      </Box>
    </Container>
  )
}
