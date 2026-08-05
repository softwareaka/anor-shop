import { useState } from 'react'
import {
  Flex,
  Box,
  Container,
  Title,
  Skeleton,
  SimpleGrid,
  Pagination,
  Group,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'

import { BrandCars } from '../widgets/brand-cars/BrandCars'
import { CarCard } from '../entities/products/ui/ProductCards'
import { VehicleFilter } from '../features/filter-by-category/ui/VehicleFilter'

import {
  useCategories,
  useProducts,
} from '../entities/products/model/useProducts'

export const VehiclesPage = () => {
  const ITEMS_PER_PAGE = 6

  const [activePage, setActivePage] = useState(1)
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  )

  const { data: categories = [], isLoading: isCategoriesLoading } =
    useCategories()
  const { data = [], isLoading, isError } = useProducts(selectedCategoryId)

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)
  const startIndex = (activePage - 1) * ITEMS_PER_PAGE
  const paginateData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  if (isLoading || isCategoriesLoading) {
    return (
      <Container size={1300} mt={60}>
        <SimpleGrid cols={3} spacing="lg">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} height={320} radius="lg" animate />
            ))}
        </SimpleGrid>
      </Container>
    )
  }

  if (isError) {
    notifications.show({
      title: 'Error Occurred',
      message: 'Failed to load vehicles. Please try again later.',
      color: 'red',
    })
    return null
  }

  return (
    <section>
      <Container size={1300} mt={60}>
        <Title ta={'center'} fz={50}>
          Select a vehicle group
        </Title>

        <VehicleFilter
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          onSelect={setSelectedCategoryId}
        />

        <Flex wrap={'wrap'} mt={40} justify={'space-between'} gap={24}>
          {paginateData.map((car) => (
            <Box key={car.id}>
              <CarCard
                title={
                  car.title.length > 10
                    ? car.title.slice(0, 20) + '...'
                    : car.title
                }
                images={car.images[0]}
                type={car.category.name}
                price={car.price}
                transmission="Automatic"
                fuel="PB 95"
              />
            </Box>
          ))}
        </Flex>

        {totalPages > 1 && (
          <Group justify="center" mt={40}>
            <Pagination
              value={activePage}
              total={totalPages}
              onChange={setActivePage}
              color="#A30041"
              radius={'md'}
            />
          </Group>
        )}

        <BrandCars />
      </Container>
    </section>
  )
}
