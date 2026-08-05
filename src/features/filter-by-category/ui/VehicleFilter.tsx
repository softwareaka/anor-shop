import { Container, Group, Button } from '@mantine/core'

import type { ICategory } from '../../../types/product'

type VehicleFilterProps = {
  categories: ICategory[]
  selectedCategoryId: number | null
  onSelect: (categoryId: number | null) => void
}

export function VehicleFilter({
  categories,
  selectedCategoryId,
  onSelect,
}: VehicleFilterProps) {
  const filterOptions = [
    { id: null, name: 'All products', image: undefined },
    ...categories.map((category) => ({
      id: category.id,
      name: category.name,
      image: category.image,
    })),
  ]

  return (
    <Container size="1300" py={80}>
      <Group justify="center" gap="md">
        {filterOptions.slice(0, 6).map((category) => {
          const isActive = selectedCategoryId === category.id

          return (
            <Button
              size="lg"
              fz={16}
              key={category.id ?? 'all'}
              radius="xl"
              bg={isActive ? '#A30041' : '#F9F9F9'}
              c={isActive ? 'white' : 'black'}
              onClick={() => onSelect(category.id)}
              leftSection={
                category.image ? (
                  <img
                    src={category.image}
                    alt={category.name}
                    width={18}
                    height={18}
                  />
                ) : undefined
              }
            >
              {category.name}
            </Button>
          )
        })}
      </Group>
    </Container>
  )
}
