import { Anchor, Box, Container, Flex, Group, Title } from '@mantine/core'

import { IconArrowRight } from '@tabler/icons-react'

import { CarCard } from '../../../entities/products/ui/ProductCards'
import { Link } from 'react-router'
import { useProducts } from '@/entities/products/model/useProducts'

export function RentCar() {
  const { data = [], isLoading } = useProducts()

  console.log(data)

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
        {data.slice(0, 6).map((car) => (
          <Box key={car.id}>
            <CarCard
              title={
                car.title.length > 20
                  ? car.title.slice(0, 20) + '...'
                  : car.title
              }
              images={car.images?.[0] || 'https://placehold.co/600x400'}
              type={car.category?.name || 'Uncategorized'}
              price={car.price}
              transmission="Automatic"
              fuel="PB 95"
            />
          </Box>
        ))}
      </Flex>
    </Container>
  )
}
