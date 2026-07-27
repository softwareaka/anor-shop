import { Anchor, Box, Container, Flex, Group, Title } from '@mantine/core'

import { IconArrowRight } from '@tabler/icons-react'

import { CarCard } from '../../../components/CarCards'
import { cars } from '../../../data/Cars'
import { Link } from 'react-router'

export function RentCar() {
  return (
    <Container size="1300">
      <Group justify="space-between" mb={40}>
        <Title order={2} fz={50}>
          Choose the car that <br /> suits you
        </Title>

        <Anchor underline="never" c="dark" fw={600}>
          <Group gap={4} fw={700}>
            <Anchor
              component={Link}
              to={'/vehicles'}
              underline="never"
              c="black"
              fw={700}
            >
              View All
              <IconArrowRight size={18} />
            </Anchor>
          </Group>
        </Anchor>
      </Group>

      <Flex wrap={'wrap'} justify={'space-between'} gap={24}>
        {cars.slice(0, 6).map((car) => (
          <Box key={car.id}>
            <CarCard {...car} title={car.name} images={car.image} />
          </Box>
        ))}
      </Flex>
    </Container>
  )
}
